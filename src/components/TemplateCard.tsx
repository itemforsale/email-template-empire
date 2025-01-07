import { useState, useEffect } from "react";
import { Template } from "@/data/templates/types";
import { useToast } from "@/hooks/use-toast";
import { generateWordDocument } from "./WordTemplate";
import { Packer } from "docx";
import { TemplateHeader } from "./template/TemplateHeader";
import { TemplateActions } from "./template/TemplateActions";
import { TemplateStats } from "./template/TemplateStats";
import { TemplateEditDialog } from "./template/TemplateEditDialog";
import { Smile } from "lucide-react";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(template.content);
  const [showFlash, setShowFlash] = useState(false);
  const { toast } = useToast();

  // Initialize counts from localStorage or default to 0
  const [copyCount, setCopyCount] = useState(() => {
    const saved = localStorage.getItem(`template-${template.id}-copyCount`);
    return saved ? parseInt(saved, 10) : 0;
  });

  const [editCount, setEditCount] = useState(() => {
    const saved = localStorage.getItem(`template-${template.id}-editCount`);
    return saved ? parseInt(saved, 10) : 0;
  });

  const [downloadCount, setDownloadCount] = useState(() => {
    const saved = localStorage.getItem(`template-${template.id}-downloadCount`);
    return saved ? parseInt(saved, 10) : 0;
  });

  // Update localStorage whenever counts change
  useEffect(() => {
    localStorage.setItem(`template-${template.id}-copyCount`, copyCount.toString());
  }, [copyCount, template.id]);

  useEffect(() => {
    localStorage.setItem(`template-${template.id}-editCount`, editCount.toString());
  }, [editCount, template.id]);

  useEffect(() => {
    localStorage.setItem(`template-${template.id}-downloadCount`, downloadCount.toString());
  }, [downloadCount, template.id]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(editedContent);
      setCopyCount((prev) => prev + 1);
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

  const handleSave = () => {
    setIsEditing(false);
    setEditCount((prev) => prev + 1);
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
      setDownloadCount((prev) => prev + 1);
      
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
      <div 
        className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setShowFlash(true)}
        onMouseLeave={() => setShowFlash(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {showFlash && (
          <div className="absolute top-0 left-0 right-0 bg-green-500/90 text-white text-xs py-1 text-center animate-fade-down animate-duration-300">
            You can edit, copy, and download this template as a Word document
          </div>
        )}
        
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