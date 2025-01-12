import { useState } from "react";
import { templates } from "@/data/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { SearchBar } from "@/components/search/SearchBar";
import { CategoryFilter } from "@/components/filters/CategoryFilter";
import { PlatformFilter } from "@/components/filters/PlatformFilter";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface TemplateSectionProps {
  categories: string[];
  platforms: string[];
}

export function TemplateSection({ categories, platforms }: TemplateSectionProps) {
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
    <div className="mb-12 space-y-6">
      <SearchBar 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalTemplates={templates.length}
      />

      <div className="flex justify-center my-8">
        <Button
          variant="ghost"
          size="lg"
          onClick={() => {
            const categoriesSection = document.querySelector('[data-categories]');
            if (categoriesSection) {
              categoriesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </Button>
      </div>

      <div data-categories>
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

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
  );
}