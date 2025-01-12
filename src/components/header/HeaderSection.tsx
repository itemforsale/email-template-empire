import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommunityLinks } from "@/components/header/CommunityLinks";
import { PageHeader } from "@/components/header/PageHeader";
import { LogOut } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";

interface HeaderSectionProps {
  isAuthenticated: boolean;
}

export function HeaderSection({ isAuthenticated }: HeaderSectionProps) {
  const navigate = useNavigate();
  const { toast } = useToast();

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

  return (
    <>
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
    </>
  );
}