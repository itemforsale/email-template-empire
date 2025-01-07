import { Globe } from "lucide-react";

export function PageHeader() {
  return (
    <div className="relative mb-12 text-center">
      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-center gap-2">
          <Globe className="h-8 w-8 text-primary" />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground transition-all duration-300 sm:text-5xl">
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] bg-clip-text text-transparent animate-pulse">Domain Name</span>
            <span> Outreach</span>
          </h1>
        </div>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground transition-all duration-300">
          Free Domain Outbound Templates to Drive Your Sales Success
        </p>
      </div>
    </div>
  );
}