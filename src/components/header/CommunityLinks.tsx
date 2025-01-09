import { Mail, X, Heart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="default"
            className="bg-background shadow-md hover:bg-primary hover:text-primary-foreground"
          >
            <Globe className="w-4 h-4 mr-2" />
            SubmitYourDomain
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Submit Your Domain</DialogTitle>
            <DialogDescription>
              Submityourdomain.com is your trusted platform for buying and selling premium domains at trade prices. Whether you're building your next big idea or growing your portfolio, we connect you with unbeatable deals across x.com and beyond. Start trading smarter today!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <Button 
              onClick={() => window.open('https://submityourdomain.com/', '_blank')}
              className="w-full"
            >
              Visit SubmitYourDomain.com
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="h-4 w-px bg-border" />
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="default"
            className="bg-background shadow-md hover:bg-primary hover:text-primary-foreground"
          >
            <Heart className="w-4 h-4 mr-2" />
            Support Us
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Support Our Project</DialogTitle>
            <DialogDescription>
              Your support helps us maintain and improve our free templates. Thank you for considering a donation!
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              By supporting us, you help maintain this free resource and enable us to create more valuable content for the community.
            </p>
            <Button 
              onClick={() => window.open('https://buy.stripe.com/eVa5kJ8MlaMadGM5kv', '_blank')}
              className="w-full"
            >
              <Heart className="w-4 h-4 mr-2" />
              Proceed to Donation
            </Button>
          </div>
        </DialogContent>
      </Dialog>
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