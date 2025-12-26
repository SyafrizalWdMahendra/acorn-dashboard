import { Circle } from "lucide-react";
import React from "react";

export default function StatBars() {
  return (
    <>
      <div className="flex bg-[#f2f2f2] text-black py-1 px-1 rounded-full text-sm items-center gap-1 w-10/11">
        <div className="flex bg-white px-1 py-1 rounded-full gap-2 w-1/2 items-center">
          <img
            src="https://i.pravatar.cc"
            alt="Mikasa"
            className="w-6 h-6 rounded-full"
          />
          <div className="flex justify-between w-full pr-2">
            <span className="text-sm font-medium">$209,633</span>
            <span className="text-sm font-medium text-[#cfcfcf]">39,63%</span>
          </div>
        </div>
        <div className="flex bg-white px-1 py-1 rounded-full gap-2 w-1/3 items-center">
          <img
            src="https://i.pravatar.cc"
            alt="Mikasa"
            className="w-6 h-6 rounded-full"
          />
          <div className="flex justify-between w-full pr-2">
            <span className="text-sm font-medium">$156,841</span>
            <span className="text-sm font-medium text-[#cfcfcf]">29,65%</span>
          </div>
        </div>
        <div className="flex bg-white px-1 py-1 rounded-full gap-2 w-1/4 items-center">
          <img
            src="https://i.pravatar.cc"
            alt="Mikasa"
            className="w-6 h-6 rounded-full"
          />
          <div className="flex justify-between w-full pr-2">
            <span className="text-sm font-medium">$117,115</span>
            <span className="text-sm font-medium text-[#cfcfcf]">22,14%</span>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="p-1 rounded-full bg-black w-max ml-2">
            <Circle color="white" className="w-4.5 h-4.5" />
          </div>
          <span className="font-semibold text-sm">$45,386</span>
          <div className="ml-6 text-[#a6a6a6] mr-3">8.58%</div>
        </div>
      </div>
      <div className="flex bg-black text-white rounded-full items-center px-4.5 text-sm font-semibold w-max">
        <span>Details</span>
      </div>
    </>
  );
}
