import { ChevronDown, FileStack, RotateCcw, Star } from "lucide-react";
import { TreeGroup } from "./trees/tree-group";
import { dashboardSections, reportsSections } from "../lib/sidebar-data";

export default function SidebarItem() {
  return (
    <nav className="flex flex-col w-64 py-2 pl-3 min-h-screen">
      <div className="flex items-center mb-8 gap-1">
        <span className="font-bold">Codename.com</span>
        <ChevronDown className="w-4 h-4 text-slate-500" />
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-500">
          <Star className="w-4 h-4" />
          <span>Starred</span>
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold text-gray-500">
          <RotateCcw className="w-4 h-4" />
          <span>Recent</span>
        </div>
        <div className="text-sm font-semibold">
          <span>Sales list</span>
        </div>
        <div className="text-sm font-semibold">
          <span>Goals</span>
        </div>

        <TreeGroup title="Dashboard" sections={dashboardSections} />
        <TreeGroup title="Reports" sections={reportsSections} />

        <div className="flex items-center gap-3 text-sm font-bold text-gray-500 mt-3">
          <FileStack className="w-4 h-4" />
          <span>Manage folders</span>
        </div>
      </div>
    </nav>
  );
}
