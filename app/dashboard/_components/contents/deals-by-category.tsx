import { ChevronDown, BarChart2, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { platformBars } from "../../lib/content-data";
import { PlatformBarItem } from "../platform-item";

export function DealsByCategory() {
  return (
    <div className="bg-card rounded-xl p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="h-8 px-2">
            <BarChart2 className="text-sm" />
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

      <div className="flex items-end justify-evenly mt-7 space-x-0.5">
        {platformBars.map((platform) => (
          <PlatformBarItem key={platform.name} {...platform} />
        ))}
      </div>

      <div className="mt-2">
        <p className="text-sm font-semibold text-muted-foreground">
          Deals amount
        </p>
        <p className="text-xs font-semibold flex items-center gap-1 cursor-pointer">
          by referrer category <ChevronDown size={12} />
        </p>
      </div>
    </div>
  );
}
