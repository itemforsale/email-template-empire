import { useState, useEffect, useRef } from "react";
import { templates, categories, platforms } from "@/data/templates";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TemplateCard } from "@/components/TemplateCard";
import { CommunityLinks } from "@/components/header/CommunityLinks";
import { PageHeader } from "@/components/header/PageHeader";
import { WelcomeSection } from "@/components/welcome/WelcomeSection";
import { SearchBar } from "@/components/search/SearchBar";
import { CategoryFilter } from "@/components/filters/CategoryFilter";
import { PlatformFilter } from "@/components/filters/PlatformFilter";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, ChevronDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function Index() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const categoriesRef = useRef<HTMLDivElement>(null);

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

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: error.message,
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been signed out of your account.",
      });
      navigate("/");
    }
  };

  const scrollToCategories = () => {
    categoriesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <div className="flex items-center gap-4">
            {isAuthenticated && (
              <Button
                variant="outline"
                size="default"
                onClick={handleSignOut}
                className="bg-background shadow-md hover:bg-primary hover:text-primary-foreground"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            )}
            <ThemeToggle />
          </div>
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

            <div className="flex justify-center my-8">
              <Button
                variant="ghost"
                size="lg"
                onClick={scrollToCategories}
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ChevronDown className="w-8 h-8 animate-bounce" />
              </Button>
            </div>

            <div ref={categoriesRef} data-categories>
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
                className="font-semibold text-lg px-8 py-6 h-auto"
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        )}

        {/* Privacy Policy Link */}
        <div className="fixed bottom-4 left-4">
          <Link 
            to="/privacy-policy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
