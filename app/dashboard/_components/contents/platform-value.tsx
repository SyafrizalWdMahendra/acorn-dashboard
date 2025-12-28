import React from "react";
import { MonthlyPlatformData, PlatformItem } from "../platform-item";
import { monthlyPlatformData, platforms } from "../../lib/content-data";
import { ChevronDown, ListFilter, TextAlignStart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PlatformValue() {
  return (
    <div className="bg-card rounded-2xl">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <Button variant="ghost" size="sm" className="h-8 flex gap-2.5 p-0">
            <span className="text-2xl">🏀</span>
            <div className="flex flex-col">
              <span className="text-muted-foreground">
                Platform Value
              </span>
              <div className="flex items-center hover:cursor-pointer">
                <span className="text-black">Dribble</span>
                <ChevronDown className="w-3 h-3 ml-1 text-muted-foreground" />
              </div>
            </div>
          </Button>
        </div>
        <div className="flex bg-white p-1 rounded-xl gap-0.5">
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

      {monthlyPlatformData.map((platform) => (
        <MonthlyPlatformData key={platform.revenue} {...platform} />
      ))}
    </div>
  );
}
