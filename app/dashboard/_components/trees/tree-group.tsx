import { CirclePlus } from "lucide-react";
import { TreeGroupType } from "../../types";
import { TreeSection } from "./tree-section";

export const TreeGroup = ({ title, sections }: TreeGroupType) => (
  <div className="flex flex-col">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-semibold">{title}</span>
      <CirclePlus className="w-4 h-4 text-gray-500 cursor-pointer" />
    </div>

    <div className="border-l border-gray-300 space-y-3 mb-1">
      {sections.map((section, index) => (
        <TreeSection
          key={index}
          title={section.title}
          items={section.items}
          defaultOpen={section.defaultOpen}
          hideToggle={section.hideToggle}
        />
      ))}
    </div>
  </div>
);
