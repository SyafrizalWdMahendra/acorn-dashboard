import { ChevronDown, ListFilter, TextAlignStart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlatformItem } from "../platform-item";
import { platforms } from "../../lib/content-data";

export function PlatformList() {
  return (
    <div className="bg-card rounded-xl p-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <TextAlignStart className="text-sm" />
            <ChevronDown className="w-3 h-3 ml-1" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-2 border border-border"
        >
          Filters
          <ListFilter className="w-4 h-4 mr-1" />
        </Button>
      </div>

      <div className="space-y-1">
        {platforms.map((platform) => (
          <PlatformItem key={platform.name} {...platform} />
        ))}
      </div>
    </div>
  );
}
