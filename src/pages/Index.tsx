import { useState } from "react";
import { templates, categories, platforms, Template } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Copy, Search } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Domain Outreach Templates
          </h1>
          <p className="text-lg text-gray-600">
            Professional templates to help you market and sell your domain names
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-6 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search templates..."
              className="search-input pl-14"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === "" ? "default" : "outline"}
              className="category-chip"
              onClick={() => setSelectedCategory("")}
            >
              All Categories
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="category-chip"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedPlatform === "" ? "default" : "outline"}
              className="category-chip"
              onClick={() => setSelectedPlatform("")}
            >
              All Platforms
            </Button>
            {platforms.map((platform) => (
              <Button
                key={platform}
                variant={selectedPlatform === platform ? "default" : "outline"}
                className="category-chip"
                onClick={() => setSelectedPlatform(platform)}
              >
                {platform.charAt(0).toUpperCase() + platform.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="template-card">
              <button
                onClick={() => copyToClipboard(template.content)}
                className="copy-button"
                aria-label="Copy template"
              >
                <Copy className="h-5 w-5" />
              </button>
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {template.platform}
                </span>
                <span className="text-xs text-gray-500">{template.category}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                {template.title}
              </h3>
              <div className="template-preview">
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