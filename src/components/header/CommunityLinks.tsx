import { Mail, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CommunityLinks() {
  // Function to decode the email for the mailto link
  const decodeEmail = () => {
    const encoded = "&#115;&#97;&#109;&#64;&#119;&#105;&#122;&#97;&#114;&#100;&#46;&#117;&#107;";
    const textarea = document.createElement('textarea');
    textarea.innerHTML = encoded;
    return textarea.value;
  };

  return (
    <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
      <a
        href="https://twitter.com/samuelkraft"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
      >
        <X className="h-6 w-6" />
        <span className="hidden sm:inline">Join our X Community</span>
      </a>

      <Dialog>
        <DialogTrigger className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
          <span>SubmitYourDomain</span>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Your Domain</DialogTitle>
            <DialogDescription>
              Submityourdomain.com is your trusted platform for buying and selling premium domains at trade prices. Whether you're building your next big idea or growing your portfolio, we connect you with unbeatable deals across x.com and beyond. Start trading smarter today!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <a
              href="https://submityourdomain.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Visit SubmitYourDomain.com
            </a>
          </div>
        </DialogContent>
      </Dialog>

      <div className="h-4 w-px bg-border hidden sm:block" />
      
      <a
        href={`mailto:${decodeEmail()}`}
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `mailto:${decodeEmail()}`;
        }}
        className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
      >
        <Mail className="h-6 w-6" />
        <span className="inline">Contact Support</span>
      </a>
    </div>
  );
}