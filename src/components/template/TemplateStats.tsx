import { Copy, Edit2, FileDown } from "lucide-react";

interface TemplateStatsProps {
  copyCount: number;
  editCount: number;
  downloadCount: number;
}

export function TemplateStats({ copyCount, editCount, downloadCount }: TemplateStatsProps) {
  return (
    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
      <span className="flex items-center gap-1">
        <Copy className="h-3 w-3" /> {copyCount} copies
      </span>
      <span className="flex items-center gap-1">
        <Edit2 className="h-3 w-3" /> {editCount} edits
      </span>
      <span className="flex items-center gap-1">
        <FileDown className="h-3 w-3" /> {downloadCount} downloads
      </span>
    </div>
  );
}