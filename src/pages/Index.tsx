import { useState } from "react";
import { templates, categories, platforms } from "@/data/templates";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Globe, X, Mail } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TemplateCard } from "@/components/TemplateCard";
import { Template } from "@/data/templates/types";

const getPlatformDisplay = (platform: string): string => {
  const displayNames: { [key: string]: string } = {
    'email': 'Email',
    'linkedin': 'LinkedIn',
    'twitter': 'Twitter/X'
  };
  return displayNames[platform] || platform;
};

const FloatingDomains = () => {
  const domains = [
    "example.com",
    "domain.io",
    "website.net",
    "brand.co",
    "startup.app",
    "tech.dev",
    "digital.xyz",
  ];

  return (
    <div className="floating-domains">
      {domains.map((domain, index) => (
        <div
          key={domain}
          className="floating-domain"
          style={{
            left: `${(index * 15) % 100}%`,
            animationDelay: `${index * 2}s`,
          }}
        >
          {domain}
        </div>
      ))}
    </div>
  );
};

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");

  const filteredTemplates = templates
    .filter((template) => {
      const matchesSearch =
        template.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || template.category === selectedCategory;
      const matchesPlatform = !selectedPlatform || template.platform === selectedPlatform;
      return matchesSearch && matchesCategory && matchesPlatform;
    });

  const totalTemplates = templates.length;

  return (
    <div className="min-h-screen bg-background transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
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
            <div className="h-4 w-px bg-border" /> {/* Separator */}
            <a
              href="mailto:sam@wizard.uk"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
            >
              <Mail className="h-6 w-6" />
              <span className="text-sm font-medium">Contact</span>
            </a>
          </div>
          <ThemeToggle />
        </div>
        
        <div className="relative mb-12 text-center">
          <FloatingDomains />
          <div className="relative z-10">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground transition-all duration-300 sm:text-5xl">
                <span className="text-primary font-black">DN</span>
                <span>Outreach.com</span>
              </h1>
            </div>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground transition-all duration-300">
              Professional templates to help you market and sell your domain names effectively
            </p>
          </div>
        </div>

        <div className="mb-12 max-w-4xl mx-auto text-left bg-card/50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-primary">Welcome to DNOutreach.com</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Welcome to DNOutreach.com, the ultimate resource for professionals and enthusiasts looking to excel in the domain name marketplace! Our mission is to simplify the process of reaching out to potential buyers, ensuring your domain sales efforts are efficient, professional, and successful.
            </p>
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

        <div className="mb-12 space-y-6">

          <div className="relative mx-auto max-w-2xl flex items-center gap-4">
            <div className="flex-1 relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search templates..."
                className="h-12 w-full rounded-full pl-14 pr-6 text-foreground shadow-sm outline-none ring-1 ring-border transition-all duration-300 focus:ring-2 focus:ring-primary placeholder:text-muted-foreground"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-baseline gap-2 text-2xl font-bold whitespace-nowrap">
              <span className="text-3xl text-primary animate-[pulse_3s_ease-in-out_infinite]">
                {totalTemplates}
              </span>
              <span className="text-muted-foreground">templates</span>
            </div>
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTemplates.map((template) => (
              <TemplateCard 
                key={template.id} 
                template={template} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
