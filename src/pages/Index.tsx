import { useState, useEffect } from "react";
import { categories, platforms } from "@/data/templates";
import { WelcomeSection } from "@/components/welcome/WelcomeSection";
import { supabase } from "@/integrations/supabase/client";
import { HeaderSection } from "@/components/header/HeaderSection";
import { AuthSection } from "@/components/auth/AuthSection";
import { TemplateSection } from "@/components/template/TemplateSection";
import { PrivacyDialog } from "@/components/privacy/PrivacyDialog";

export default function Index() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false);

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

  return (
    <div className="min-h-screen bg-background transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <HeaderSection isAuthenticated={isAuthenticated} />
        <WelcomeSection />

        {isAuthenticated ? (
          <TemplateSection categories={categories} platforms={platforms} />
        ) : (
          <AuthSection />
        )}

        <PrivacyDialog 
          open={privacyDialogOpen} 
          onOpenChange={setPrivacyDialogOpen} 
        />

        {/* Privacy Policy Link */}
        <div className="fixed bottom-4 left-4">
          <button
            onClick={() => setPrivacyDialogOpen(true)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Privacy Policy
          </button>
        </div>
      </div>
    </div>
  );
}