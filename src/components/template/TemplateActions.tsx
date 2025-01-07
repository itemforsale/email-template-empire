import { Button } from "@/components/ui/button";
import { Edit2, Copy, FileDown, Share2 } from "lucide-react";

interface TemplateActionsProps {
  onEdit: () => void;
  onCopy: () => void;
  onDownload: () => void;
  templateId: string;
  title: string;
}

export function TemplateActions({ onEdit, onCopy, onDownload, title }: TemplateActionsProps) {
  const handleShare = () => {
    const shareText = `Check out this amazing domain outreach template: ${title} on DNOutreach.com! 🚀 #Domains #Sales`;
    const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div className="absolute right-4 top-4 flex gap-2">
      <Button
        onClick={handleShare}
        size="icon"
        variant="ghost"
        className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-foreground"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
          />
        </svg>
      </Button>
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