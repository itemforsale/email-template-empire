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
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState as useReactState } from "react";

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
  const [isAuthenticated, setIsAuthenticated] = useReactState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

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

        {isAuthenticated ? (
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
        ) : (
          <div className="mt-12 text-center space-y-6">
            <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Access Premium Templates</h2>
              <p className="text-muted-foreground mb-6">
                Sign up to access our complete collection of professional domain outreach templates.
              </p>
              <Button 
                onClick={() => navigate("/auth")}
                size="lg"
                className="font-semibold"
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}