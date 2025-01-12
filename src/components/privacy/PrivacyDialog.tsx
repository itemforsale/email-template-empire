import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PrivacyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyDialog({ open, onOpenChange }: PrivacyDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Privacy Policy - DNOutreach.com</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm dark:prose-invert space-y-4 max-h-[70vh] overflow-y-auto px-2">
          <section>
            <h3 className="text-lg font-semibold">Introduction</h3>
            <p className="text-sm">
              DNOutreach.com respects your privacy and is committed to protecting your personal data. This privacy policy explains how we handle your personal information and your privacy rights.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Information We Collect</h3>
            <ul className="text-sm list-disc pl-4 space-y-1">
              <li>Email address (when you sign up)</li>
              <li>Usage data (how you interact with our website)</li>
              <li>Authentication data</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">How We Use Your Information</h3>
            <ul className="text-sm list-disc pl-4 space-y-1">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To monitor the usage of our service</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Data Security</h3>
            <p className="text-sm">
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Your Rights</h3>
            <ul className="text-sm list-disc pl-4 space-y-1">
              <li>Access your personal data</li>
              <li>Correct your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:dnoutreach@60dna.com" className="text-primary hover:underline">
                dnoutreach@60dna.com
              </a>
            </p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}