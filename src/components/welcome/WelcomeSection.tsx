import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function WelcomeSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-12 max-w-4xl mx-auto text-left bg-card/50 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4 text-primary">Welcome to DNOutreach.com</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          Welcome to DNOutreach.com, the ultimate resource for professionals and enthusiasts looking to excel in the domain name marketplace! Our mission is to simplify the process of reaching out to potential buyers, ensuring your domain sales efforts are efficient, professional, and successful.
        </p>

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="mt-4 bg-green-50 dark:bg-green-900/20 rounded-lg p-4"
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full">
            <span className="font-semibold text-green-700 dark:text-green-300">
              How to Use
            </span>
            <ChevronDown className={`h-4 w-4 text-green-700 dark:text-green-300 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2 text-green-700 dark:text-green-300">
            <ol className="list-decimal list-inside space-y-2">
              <li>Choose a template that fits your target audience.</li>
              <li>Customize it with your domain name and buyer details.</li>
              <li>Send and watch your outreach efforts soar!</li>
            </ol>
          </CollapsibleContent>
        </Collapsible>

        <p>
          Whether you're a seasoned domainer or just starting out, we provide ready-to-use, effective outbound templates tailored for various industries and target audiences. These templates are designed to help you save time, streamline communication, and maximize your sales potential.
        </p>
        <p>
          If our templates have helped you close a deal or refine your outreach strategy, we'd love to hear from you! Share your success story with us on X (formerly Twitter) using the hashtag #DomainOutboundingSuccess or tag us directly.
        </p>
        <p>
          Thanks for being part of our growing community, and happy selling!
        </p>
        <p className="font-medium text-foreground">
          - Sam, Founder of DNOutreach.com
        </p>
      </div>
    </div>
  );
}