import { ChevronsDown, ChevronsUp } from "lucide-react";
import { StatCardProps } from "../../types";

export const StatCard = ({
  title,
  value,
  change,
  isPositive,
  isHighlighted,
}: StatCardProps) => (
  <div
    className={`bg-white border rounded-xl h-max px-3 py-2 w-24 sm:w-28 flex flex-col items-center gap-3 ${
      isHighlighted ? "border-rose-700" : "border-[#ececec]"
    }`}
  >
    <span className="text-[10px] font-semibold">{title}</span>
    <div
      className={`rounded-full px-2.5 py-0.5 ${
        isHighlighted ? "bg-rose-700" : "bg-[#cfcfcf]"
      }`}
    >
      <span
        className={`text-sm font-bold ${
          isHighlighted || title === "Win Rate" ? "text-white" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
    <div className="flex items-center gap-0.5">
      {isPositive ? (
        <ChevronsUp className="w-3 h-3" />
      ) : (
        <ChevronsDown className="w-3 h-3" />
      )}
      <span className="text-xs font-semibold">{change}</span>
    </div>
  </div>
);
