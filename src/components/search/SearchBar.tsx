import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  totalTemplates: number;
}

export function SearchBar({ searchTerm, onSearchChange, totalTemplates }: SearchBarProps) {
  return (
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
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex items-baseline gap-2 text-2xl font-bold whitespace-nowrap">
        <span className="text-3xl text-primary animate-[pulse_3s_ease-in-out_infinite]">
          {totalTemplates}
        </span>
        <span className="text-muted-foreground">templates</span>
      </div>
    </div>
  );
}