import {
  BarChart3,
  Circle,
  FileText,
  Network,
  PenTool,
  RefreshCcw,
} from "lucide-react";
import React from "react";

export default function AppBar() {
  return (
    <aside className="w-max flex flex-col items-center gap-12">
      <div className="p-2 rounded-full bg-black w-max">
        <Circle color="white" />
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div className="p-2 rounded-full bg-white w-max">
          <RefreshCcw />
        </div>
        <div className="p-3 rounded-full bg-rose-700 w-max text-white">
          <BarChart3 />
        </div>
        <div className="p-2 rounded-full bg-white w-max">
          <FileText />
        </div>
        <div className="p-2 rounded-full bg-white w-max">
          <Network />
        </div>
        <div className="p-2 rounded-full bg-white w-max">
          <PenTool />
        </div>
      </div>
    </aside>
  );
}
