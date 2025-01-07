import { Star } from "lucide-react";

interface TemplateHeaderProps {
  platform: string;
  category: string;
  title: string;
}

export function TemplateHeader({ platform, category, title }: TemplateHeaderProps) {
  const getPlatformDisplay = (platform: string) => {
    return platform === "twitter" ? "X" : platform.charAt(0).toUpperCase() + platform.slice(1);
  };

  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <span className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <Star className="h-3 w-3" />
          {getPlatformDisplay(platform)}
        </span>
        <span className="text-xs text-muted-foreground">{category}</span>
      </div>
      <h3 className="mb-3 text-lg font-semibold text-card-foreground">
        {title}
      </h3>
    </>
  );
}