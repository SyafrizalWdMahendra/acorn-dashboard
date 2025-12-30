import React from "react";

export default function StatLabels() {
  return (
    <div className="flex bg-rose-700 text-white rounded-tr-2xl rounded-bl-2xl w-max p-5 pt-6 pb-10 pr-6 shadow-lg">
      <div className="flex">
        <span className="[writing-mode:vertical-lr] -rotate-180 m-auto text-start h-28.5 text-card text-xs p-0">
          Average Monthly
        </span>

        <div className="flex flex-col pl-5 gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-card">Revenue</span>
            <span className="text-xs font-semibold">$18,552</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-card">Leads</span>
            <div className="flex gap-1">
              <span className="text-xs font-semibold">373</span>
              <span className="text-xs text-card">97/276</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-card">W/L</span>
            <div className="flex gap-1">
              <span className="text-xs font-semibold">16%</span>
              <span className="text-xs text-card">51/318</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
