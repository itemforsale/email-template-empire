import { Button } from "@/components/ui/button";

interface PlatformFilterProps {
  platforms: string[];
  selectedPlatform: string;
  onPlatformChange: (platform: string) => void;
}

export function PlatformFilter({ platforms, selectedPlatform, onPlatformChange }: PlatformFilterProps) {
  const getPlatformDisplay = (platform: string): string => {
    const displayNames: { [key: string]: string } = {
      'email': 'Email',
      'linkedin': 'LinkedIn',
      'twitter': 'X'
    };
    return displayNames[platform] || platform;
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Button
        variant={selectedPlatform === "" ? "default" : "outline"}
        className="rounded-full transition-all duration-200 hover:scale-105"
        onClick={() => onPlatformChange("")}
      >
        All Platforms
      </Button>
      {platforms.map((platform) => (
        <Button
          key={platform}
          variant={selectedPlatform === platform ? "default" : "outline"}
          className="rounded-full transition-all duration-200 hover:scale-105"
          onClick={() => onPlatformChange(platform)}
        >
          {getPlatformDisplay(platform)}
        </Button>
      ))}
    </div>
  );
}