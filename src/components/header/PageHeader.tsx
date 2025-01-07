import { Globe } from "lucide-react";

export function PageHeader() {
  return (
    <div className="relative mb-12 text-center">
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground transition-all duration-300 sm:text-5xl">
            DN Outreach Domain Name Outbounding Templates Free
          </h1>
        </div>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground transition-all duration-300">
          Professional templates to help you market and sell your domain names effectively
        </p>
      </div>
    </div>
  );
}