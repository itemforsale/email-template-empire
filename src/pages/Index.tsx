import { useState } from "react";
import { templates, categories, platforms, Template } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Copy, Search, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const { toast } = useToast();

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch = template.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || template.category === selectedCategory;
    const matchesPlatform = !selectedPlatform || template.platform === selectedPlatform;
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({
      title: "Copied to clipboard",
      description: "Template has been copied to your clipboard",
    });
  };

  const getPlatformDisplay = (platform: string) => {
    return platform === 'twitter' ? 'X' : platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <ThemeToggle />
        <div className="mb-12 text-center">
          <h1 className="mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent transition-colors duration-300 sm:text-5xl">
            Domain Outreach Templates
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/80 transition-colors duration-300">
            Professional templates to help you market and sell your domain names effectively
          </p>
        </div>

        <div className="mb-12 space-y-6">
          <div className="relative mx-auto max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
              <Search className="h-5 w-5 text-foreground/50" />
            </div>
            <Input
              type="text"
              placeholder="Search templates..."
              className="h-12 w-full rounded-full border-none bg-background/90 pl-14 pr-6 text-foreground shadow-sm outline-none ring-1 ring-border transition-all duration-300 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedCategory === "" ? "default" : "outline"}
              className="rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => setSelectedCategory("")}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              variant={selectedPlatform === "" ? "default" : "outline"}
              className="rounded-full transition-all duration-200 hover:scale-105"
              onClick={() => setSelectedPlatform("")}
            >
              All Platforms
            </Button>
            {platforms.map((platform) => (
              <Button
                key={platform}
                variant={selectedPlatform === platform ? "default" : "outline"}
                className="rounded-full transition-all duration-200 hover:scale-105"
                onClick={() => setSelectedPlatform(platform)}
              >
                {getPlatformDisplay(platform)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group relative overflow-hidden rounded-xl bg-card p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <button
                onClick={() => copyToClipboard(template.content)}
                className="absolute right-4 top-4 rounded-full bg-background/90 p-2 opacity-0 shadow-lg transition-all duration-300 hover:bg-primary/10 group-hover:opacity-100"
                aria-label="Copy template"
              >
                <Copy className="h-5 w-5 text-foreground" />
              </button>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  <Sparkles className="h-3 w-3" />
                  {getPlatformDisplay(template.platform)}
                </span>
                <span className="text-xs text-muted-foreground">{template.category}</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-card-foreground">
                {template.title}
              </h3>
              <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
                <pre className="whitespace-pre-wrap font-sans">
                  {template.content}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}