import { TreeItemType } from "../../types";

export const TreeItem = ({ label, badge }: TreeItemType) => (
  <div className="flex items-center">
    <div className="w-2.5 h-0 border-t border-gray-300 shrink-0 mr-2" />
    <div className="flex justify-between w-full items-center">
      <span className="text-sm font-semibold whitespace-nowrap mt-0.5">
        {label}
      </span>
      {badge && (
        <div className="bg-rose-700 rounded-md py-0.5 px-1.5 text-white text-xs ml-8">
          {badge}
        </div>
      )}
    </div>
  </div>
);
