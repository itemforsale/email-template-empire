import { useState } from "react";
import { Template } from "@/data/templates/types";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Copy, Edit2, Save, Star, FileDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFTemplate } from "./PDFTemplate";
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
  const { toast } = useToast();

  const getPlatformDisplay = (platform: string) => {
    return platform === "twitter" ? "X" : platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editedContent);
    toast({
      title: "Copied to clipboard",
      description: "Template has been copied to your clipboard",
    });
  };

  const handleSave = () => {
    setIsEditing(false);
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
          <PDFDownloadLink
            document={
              <PDFTemplate
                template={{
                  ...template,
                  content: editedContent,
                }}
              />
            }
            fileName={`${template.title.toLowerCase().replace(/\s+/g, "-")}.pdf`}
          >
            {({ loading }) => (
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
                disabled={loading}
              >
                <FileDown className="h-5 w-5 text-foreground" />
              </Button>
            )}
          </PDFDownloadLink>
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