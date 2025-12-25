import { MenuIcon, Plus, Search } from "lucide-react";
import React from "react";
import UserAvatar from "./user-avatar";

export default function Header() {
  return (
    <header className="flex justify-between">
      <div className="relative w-1/3 h-full">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
          size={20}
        />
        <input
          type="text"
          placeholder='Try searching "insights"'
          className="w-full bg-white pl-12 pr-4 py-3 rounded-full text-sm outline-none focus:ring-2 focus:ring-slate-100"
        />
      </div>
      <div className="flex w-1/8 justify-between">
        <button className="flex bg-white rounded-full text-sm outline-none px-2 pl-3 py-1 items-center gap-2 text-black hover:cursor-pointer">
          <MenuIcon size={20} />
          <UserAvatar src="https://i.pravatar.cc/150?u=eren" alt="Eren" />
        </button>
        <div className="p-2.5 rounded-full bg-rose-700 w-max h-max flex text-center">
          <Plus color="white" size={25} />
        </div>
      </div>
    </header>
  );
}
