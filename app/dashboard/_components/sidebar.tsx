import {
  ChevronDown,
  ChevronUp,
  CirclePlus,
  FileStack,
  Minus,
  RotateCcw,
  Star,
} from "lucide-react";
import React from "react";

export default function SidebarItem() {
  return (
    <nav className="flex flex-col w-max p-5 py-2">
      <div className="flex font-bold mb-8 items-center">
        <span>Codename.com</span>
        <ChevronDown className="text-sm text-slate-500 w-4 h-4" />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 text-sm items-center font-bold text-gray-500">
          <Star className="w-4 h-4" />
          <span>Starred</span>
        </div>
        <div className="flex gap-3 text-sm items-center font-bold text-gray-500">
          <RotateCcw className="w-4 h-4" />
          <span>Recent</span>
        </div>
        <div className="flex gap-3 text-sm items-center font-bold">
          <span>Sales List</span>
        </div>
        <div className="flex gap-3 text-sm items-center font-bold">
          <span>Goals</span>
        </div>
        <div className="flex gap-20 text-sm items-center font-bold">
          <span>Dashboard</span>
          <CirclePlus className="w-4 h-4 hover:cursor-pointer" color="gray" />
        </div>

        {/* Dashboard Content */}
        <div className="flex flex-col">
          <div className="w-0.5 h-max bg-gray-300 rounded-full">
            <div className="flex w-max text-sm font-bold items-center gap-1">
              <Minus className="w-4 text-gray-300" />
              <span>Codename</span>
            </div>
            <div className="flex w-max text-sm font-bold gap-1">
              <Minus className="w-4 text-gray-300" />
              <div className="flex flex-col pt-0.5">
                <div className="flex gap-7">
                  <span>Shared With Me</span>
                  <ChevronUp
                    className="w-4 h-4 hover:cursor-pointer"
                    color="gray"
                  />
                </div>
                <div className="w-0.5 bg-gray-300 rounded-full mt-2 h-27">
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>Cargo2go</span>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <div className="flex items-center gap-13 ">
                      <span>Claudz3r</span>
                      <div className="bg-rose-700 rounded-md py-0.5 px-1.5 text-white text-xs">
                        <span>2</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>Idioma</span>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>Syllables</span>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>x-Ob</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-25 text-sm items-center font-bold mt-2">
          <span>Reports</span>
          <CirclePlus className="w-4 h-4 hover:cursor-pointer" color="gray" />
        </div>

        {/* Reports Content */}
        <div className="flex flex-col">
          <div className="w-0.5 h-max bg-gray-300 rounded-full">
            <div className="flex w-max text-sm font-bold gap-1">
              <Minus className="w-4 text-gray-300" />
              <div className="flex flex-col pt-0.5">
                <div className="flex gap-9">
                  <span>Share With Me</span>
                  <ChevronUp
                    className="w-4 h-4 hover:cursor-pointer"
                    color="gray"
                  />
                </div>
                <div className="w-0.5 bg-gray-300 rounded-full mt-2 h-9.5">
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>Deals by user</span>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>Deal duration</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-max text-sm font-bold gap-1 mt-5">
              <Minus className="w-4 text-gray-300" />
              <div className="flex flex-col pt-0.5">
                <div className="flex gap-15">
                  <span>My reports</span>
                  <ChevronUp
                    className="w-4 h-4 hover:cursor-pointer"
                    color="gray"
                  />
                </div>
                <div className="w-0.5 bg-gray-300 rounded-full mt-2 h-21">
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>Emails received</span>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>Deal duration</span>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <span>New report</span>
                  </div>
                  <div className="flex w-max text-sm font-bold items-center gap-1">
                    <Minus className="w-4 text-gray-300" />
                    <div className="flex items-center gap-12 ">
                      <span>Analytics</span>
                      <div className="bg-rose-700 rounded-md py-0.5 px-1.5 text-white text-xs">
                        <span>7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 text-sm items-center font-bold text-gray-500 mt-3">
          <FileStack className="w-4 h-4" />
          <span>Manage folders</span>
        </div>
      </div>
    </nav>
  );
}
