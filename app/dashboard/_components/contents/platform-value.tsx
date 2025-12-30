import { MonthlyPlatformData } from "../platform-item";
import { monthlyPlatformData } from "../../lib/content-data";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ValueStats from "./value-stats";
import StatLabels from "./stat-labels";
import StatLines from "./stat-lines";

export default function PlatformValue() {
  return (
    <div className="bg-card rounded-2xl">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="h-8 flex gap-2.5 p-0">
            <span className="text-2xl">🏀</span>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Platform Value</span>
              <div className="flex items-center hover:cursor-pointer">
                <span className="text-black">Dribble</span>
                <ChevronDown className="w-3 h-3 ml-1 text-muted-foreground" />
              </div>
            </div>
          </Button>
        </div>
        <div className="flex bg-white p-0.5 rounded-xl gap-0.5">
          <Button
            variant="default"
            size="sm"
            className="h-8 px-3 py-2 bg-black text-white rounded-lg hover:cursor-pointer"
          >
            Revenue
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 py-2 bg-card rounded-lg hover:cursor-pointer"
          >
            Leads
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 px-3 py-2 bg-card rounded-lg hover:cursor-pointer"
          >
            W/L
          </Button>
        </div>
      </div>

      <div className="relative">
        <StatLines />
        <div className="relative flex items-end gap-6">
          <StatLabels />
          <div className="flex items-end space-x-1 mb-8 w-full -ml-1.5 pr-4">
            {monthlyPlatformData.map((platform) => (
              <MonthlyPlatformData
                key={platform.name}
                name={platform.name}
                height={platform.height}
                value={platform.value}
              />
            ))}
            <ValueStats />
          </div>
        </div>
      </div>
    </div>
  );
}
