import { useState, useEffect } from "react";
import { Template } from "@/data/templates/types";
import { useToast } from "@/hooks/use-toast";
import { generateWordDocument } from "./WordTemplate";
import { Packer } from "docx";
import { TemplateHeader } from "./template/TemplateHeader";
import { TemplateActions } from "./template/TemplateActions";
import { TemplateStats } from "./template/TemplateStats";
import { TemplateEditDialog } from "./template/TemplateEditDialog";
import { database } from "@/lib/firebase";
import { ref, onValue, set, increment } from "firebase/database";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(template.content);
  const { toast } = useToast();

  const [copyCount, setCopyCount] = useState(0);
  const [editCount, setEditCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);

  useEffect(() => {
    const statsRef = ref(database, `templateStats/${template.id}`);
    
    // Initialize if not exists
    set(statsRef, {
      copyCount: 0,
      editCount: 0,
      downloadCount: 0
    }).catch(console.error);

    // Listen for changes
    const unsubscribe = onValue(statsRef, (snapshot) => {
      const data = snapshot.val() || { copyCount: 0, editCount: 0, downloadCount: 0 };
      setCopyCount(data.copyCount);
      setEditCount(data.editCount);
      setDownloadCount(data.downloadCount);
    });

    return () => unsubscribe();
  }, [template.id]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editedContent);
      const statsRef = ref(database, `templateStats/${template.id}/copyCount`);
      await set(statsRef, increment(1));
      
      toast({
        title: "Copied to clipboard",
        description: "Template has been copied to your clipboard",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy template to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    const statsRef = ref(database, `templateStats/${template.id}/editCount`);
    await set(statsRef, increment(1));
    
    toast({
      title: "Changes saved",
      description: "Your template changes have been saved",
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedContent(e.target.value);
  };

  const handleDownload = async () => {
    try {
      const doc = generateWordDocument({
        ...template,
        content: editedContent,
      });

      const blob = await Packer.toBlob(doc);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${template.title.toLowerCase().replace(/\s+/g, "-")}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      
      const statsRef = ref(database, `templateStats/${template.id}/downloadCount`);
      await set(statsRef, increment(1));

      toast({
        title: "Download started",
        description: "Your template is being downloaded",
      });
    } catch (err) {
      toast({
        title: "Download failed",
        description: "Could not download the template",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="mb-4">
          <TemplateActions
            onEdit={handleEdit}
            onCopy={handleCopy}
            onDownload={handleDownload}
          />
        </div>
        
        <TemplateHeader
          platform={template.platform}
          category={template.category}
          title={template.title}
        />
        <div className="rounded-lg bg-muted/50 p-4">
          <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground">
            {editedContent}
          </pre>
        </div>
        <TemplateStats
          copyCount={copyCount}
          editCount={editCount}
          downloadCount={downloadCount}
        />
      </div>

      <TemplateEditDialog
        isOpen={isEditing}
        onOpenChange={setIsEditing}
        content={editedContent}
        onChange={handleTextChange}
        onSave={handleSave}
      />
    </>
  );
}