"use client";
import { useState } from "react";
import { TreeSectionType } from "../../types";
import { ChevronDown, ChevronUp } from "lucide-react";
import { TreeItem } from "./tree-item";

export const TreeSection = ({
  title,
  items,
  defaultOpen = true,
  hideToggle = false,
}: TreeSectionType) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="relative">
      <div className="flex items-center gap-1">
        <div className="w-2.5 h-0 border-t border-gray-300 shrink-0 mr-1" />
        <div
          className="flex items-center justify-between flex-1 hover:cursor-pointer"
          onClick={() => !hideToggle && setIsOpen(!isOpen)}
        >
          <span className="text-sm font-semibold select-none">{title}</span>
          {!hideToggle && (
            <button className="shrink-0 hover:cursor-pointer">
              {isOpen ? (
                <ChevronUp className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              )}
            </button>
          )}
        </div>
      </div>

      {isOpen && items.length > 0 && (
        <div className="ml-4.5 mt-1 border-l h-max border-gray-300 space-y-1 overflow-hidden">
          {items.map((item, index) => (
            <TreeItem
              key={`${item.label}-${index}`}
              label={item.label}
              badge={item.badge}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
};
