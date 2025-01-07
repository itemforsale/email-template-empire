import { Button } from "@/components/ui/button";
import { Edit2, Copy, FileDown, Heart, Share2 } from "lucide-react";
import { useState, useEffect } from "react";

interface TemplateActionsProps {
  onEdit: () => void;
  onCopy: () => void;
  onDownload: () => void;
  templateId: string;
  title: string;
}

export function TemplateActions({ onEdit, onCopy, onDownload, templateId, title }: TemplateActionsProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteTemplates') || '[]');
    setIsFavorited(favorites.includes(templateId));
  }, [templateId]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteTemplates') || '[]');
    let newFavorites;
    
    if (isFavorited) {
      newFavorites = favorites.filter((id: string) => id !== templateId);
    } else {
      newFavorites = [...favorites, templateId];
    }
    
    localStorage.setItem('favoriteTemplates', JSON.stringify(newFavorites));
    setIsFavorited(!isFavorited);
  };

  const handleShare = () => {
    const shareText = `Check out this amazing domain outreach template: ${title} on DNOutreach.com! 🚀 #Domains #Sales`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;
    window.open(shareUrl, '_blank');
  };

  return (
    <div className="absolute right-4 top-4 flex gap-2">
      <Button
        onClick={handleFavorite}
        size="icon"
        variant="ghost"
        className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
      >
        <Heart 
          className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-foreground'}`} 
        />
      </Button>
      <Button
        onClick={handleShare}
        size="icon"
        variant="ghost"
        className="rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
      >
        <Share2 className="h-5 w-5 text-foreground" />
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