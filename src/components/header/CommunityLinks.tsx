import { Mail, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CommunityLinks() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://x.com/i/communities/1679163145921626113"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
      >
        <X className="h-6 w-6 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
        <span className="text-sm font-medium">Join our X Community</span>
      </a>
      <div className="h-4 w-px bg-border" />
      <Button
        variant="outline"
        size="default"
        className="bg-background shadow-md hover:bg-primary hover:text-primary-foreground"
        onClick={() => window.open('https://buy.stripe.com/eVa5kJ8MlaMadGM5kv', '_blank')}
      >
        <Heart className="w-4 h-4 mr-2" />
        Support Us
      </Button>
      <div className="h-4 w-px bg-border" />
      <a
        href="mailto:sam@wizard.uk"
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
      >
        <Mail className="h-6 w-6" />
        <span className="text-sm font-medium">Contact</span>
      </a>
    </div>
  );
}