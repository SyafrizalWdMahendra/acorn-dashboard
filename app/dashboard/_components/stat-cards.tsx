import { Star, Target } from "lucide-react";
import React from "react";
import UserAvatar from "./user-avatar";

export default function StatCards({
  title,
  value,
  subtext,
  trend,
  trendValue,
  highlight = false,
  dark = false,
}: any) {
  return (
    <div
      className={`p-5 rounded-3xl flex flex-col justify-between border border-slate  ${
        dark ? "bg-slate-900 text-white" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-start">
        <span
          className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}
        >
          {title}
        </span>
        {highlight && (
          <div className="p-1 bg-white/10 rounded-full">
            <Star size={14} className="text-white" />
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold">{value}</h3>
        <div className="flex items-center gap-2 mt-1">
          {subtext && (
            <div className="flex items-center gap-2">
              <UserAvatar src="https://i.pravatar.cc/150?u=mikasa" size="sm" />
              <span className="text-xs text-slate-500">{subtext}</span>
            </div>
          )}
          {trend && (
            <span
              className={`text-xs flex items-center px-1.5 py-0.5 rounded ${
                trend === "up"
                  ? "bg-green-100 text-green-700"
                  : "bg-green-100 text-green-700"
              }`}
            >
              {trend === "up" ? "↑" : "↓"} {trendValue}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
