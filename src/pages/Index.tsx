import { useState } from "react";
import { templates, categories, platforms } from "@/data/templates";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TemplateCard } from "@/components/TemplateCard";
import { CommunityLinks } from "@/components/header/CommunityLinks";
import { PageHeader } from "@/components/header/PageHeader";
import { WelcomeSection } from "@/components/welcome/WelcomeSection";
import { SearchBar } from "@/components/search/SearchBar";
import { CategoryFilter } from "@/components/filters/CategoryFilter";
import { PlatformFilter } from "@/components/filters/PlatformFilter";

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

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || template.category === selectedCategory;
    const matchesPlatform = !selectedPlatform || template.platform === selectedPlatform;
    return matchesSearch && matchesCategory && matchesPlatform;
  });

  return (
    <div className="min-h-screen bg-background transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <CommunityLinks />
          <ThemeToggle />
        </div>
        
        <PageHeader />
        <WelcomeSection />

        <div className="mb-12 space-y-6">
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            totalTemplates={templates.length}
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <PlatformFilter
            platforms={platforms}
            selectedPlatform={selectedPlatform}
            onPlatformChange={setSelectedPlatform}
          />

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
