import { Button } from "@/components/ui/button";
import { Edit2, Copy, FileDown } from "lucide-react";

interface TemplateActionsProps {
  onEdit: () => void;
  onCopy: () => void;
  onDownload: () => void;
}

export function TemplateActions({ onEdit, onCopy, onDownload }: TemplateActionsProps) {
  return (
    <div className="absolute right-4 top-4 flex gap-2">
      <Button
        onClick={onEdit}
        size="icon"
        variant="ghost"
        className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
      >
        <Edit2 className="h-5 w-5 text-foreground" />
      </Button>
      <Button
        onClick={onCopy}
        size="icon"
        variant="ghost"
        className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
      >
        <Copy className="h-5 w-5 text-foreground" />
      </Button>
      <Button
        onClick={onDownload}
        size="icon"
        variant="ghost"
        className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
      >
        <FileDown className="h-5 w-5 text-foreground" />
      </Button>
    </div>
  );
}