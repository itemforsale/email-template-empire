import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function AuthSection() {
  const navigate = useNavigate();

  return (
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
  );
}