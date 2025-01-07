import { useState } from "react";
import { Template } from "@/data/templates/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Edit2, Save, Star, FileDown, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateWordDocument } from "./WordTemplate";
import { Packer } from "docx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface TemplateCardProps {
  template: Template;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(template.content);
  const [copyCount, setCopyCount] = useState(0);
  const [editCount, setEditCount] = useState(0);
  const [downloadCount, setDownloadCount] = useState(0);
  const { toast } = useToast();

  const getPlatformDisplay = (platform: string) => {
    return platform === "twitter" ? "X" : platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editedContent);
    setCopyCount(prev => prev + 1);
    toast({
      title: "Copied to clipboard",
      description: "Template has been copied to your clipboard",
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    setEditCount(prev => prev + 1);
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
    setDownloadCount(prev => prev + 1);
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 top-4 flex gap-2">
          <Button
            onClick={handleEdit}
            size="icon"
            variant="ghost"
            className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
          >
            <Edit2 className="h-5 w-5 text-foreground" />
          </Button>
          <Button
            onClick={handleCopy}
            size="icon"
            variant="ghost"
            className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
          >
            <Copy className="h-5 w-5 text-foreground" />
          </Button>
          <Button
            onClick={handleDownload}
            size="icon"
            variant="ghost"
            className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
          >
            <FileDown className="h-5 w-5 text-foreground" />
          </Button>
        </div>
        <div className="mb-3 flex items-center gap-2">
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Star className="h-3 w-3" />
            {getPlatformDisplay(template.platform)}
          </span>
          <span className="text-xs text-muted-foreground">{template.category}</span>
        </div>
        <h3 className="mb-3 text-lg font-semibold text-card-foreground">
          {template.title}
        </h3>
        <div className="rounded-lg bg-muted/50 p-4">
          <pre className="whitespace-pre-wrap font-sans text-sm text-muted-foreground">
            {editedContent}
          </pre>
        </div>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Copy className="h-3 w-3" /> {copyCount} copies
          </span>
          <span className="flex items-center gap-1">
            <Edit2 className="h-3 w-3" /> {editCount} edits
          </span>
          <span className="flex items-center gap-1">
            <FileDown className="h-3 w-3" /> {downloadCount} downloads
          </span>
        </div>
      </div>

      <Dialog open={isEditing} onOpenChange={setIsEditing}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Edit Template</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Textarea
              value={editedContent}
              onChange={handleTextChange}
              className="min-h-[300px] w-full resize-none"
              spellCheck={false}
              autoFocus
            />
          </div>
          <DialogFooter className="mt-6">
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}