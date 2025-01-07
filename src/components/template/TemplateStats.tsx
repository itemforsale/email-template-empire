import { Copy, Edit2, FileDown } from "lucide-react";

interface TemplateStatsProps {
  copyCount: number;
  editCount: number;
  downloadCount: number;
}

export function TemplateStats({ copyCount, editCount, downloadCount }: TemplateStatsProps) {
  return (
    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
      <div className="flex items-center gap-1">
        <Copy className="h-3 w-3" /> 
        <span>{copyCount} copies</span>
      </div>
      <div className="flex items-center gap-1">
        <Edit2 className="h-3 w-3" /> 
        <span>{editCount} edits</span>
      </div>
      <div className="flex items-center gap-1">
        <FileDown className="h-3 w-3" /> 
        <span>{downloadCount} downloads</span>
      </div>
    </div>
  );
}