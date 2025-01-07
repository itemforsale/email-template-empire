import { Mail, X } from "lucide-react";

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