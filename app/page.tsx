"use client";

import SidebarItem from "./dashboard/_components/sidebar";
import AppBar from "./dashboard/_components/app-bar";
import {
  ChevronDown,
  ChevronsDown,
  ChevronsUp,
  Circle,
  DollarSign,
  Download,
  Menu,
  MenuIcon,
  MenuSquareIcon,
  Plus,
  Radio,
  Search,
  Settings,
  Settings2,
  SlidersHorizontal,
  SwitchCameraIcon,
  ToggleRight,
  Upload,
} from "lucide-react";
import UserAvatar from "./dashboard/_components/user-avatar";
import Image from "next/image";
import Header from "./dashboard/_components/header";
import Contents from "./dashboard/_components/contents";

export default function Dashboard() {
  // return (
  //   <div className="flex min-h-screen p-4 gap-4 bg-[#F9F7F7]">
  //     <aside className="w-64 bg-white rounded-[40px] p-6 flex flex-col shadow-sm hidden xl:flex sticky top-4 h-[calc(100vh-2rem)]">
  //       <div className="flex items-center gap-2 mb-10 px-2">
  //         <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold">
  //           C
  //         </div>
  //         <span className="font-bold text-lg text-black">Codename.com</span>
  //         <ChevronDown size={16} className="text-slate-400" />
  //       </div>
  //       <nav className="flex-1 space-y-1 overflow-y-auto">
  //         <div className="text-xs font-bold text-slate-400 px-3 mb-2 uppercase tracking-wider">
  //           Starred
  //         </div>
  //         <SidebarItem icon={Target} label="Goals" />
  //         <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
  //         <div className="mt-6 text-xs font-bold text-slate-400 px-3 mb-2 uppercase tracking-wider">
  //           Codename
  //         </div>
  //         <SidebarItem icon={Folder} label="Shared with me" />
  //         <div className="pl-4 space-y-1 border-l ml-6 border-slate-100">
  //           <SidebarItem icon={FileText} label="Cargo2go" />
  //           <SidebarItem icon={FileText} label="Cloudz3r" hasNotification />
  //           <SidebarItem icon={FileText} label="Idioma" />
  //         </div>
  //         <div className="mt-6 text-xs font-bold text-slate-400 px-3 mb-2 uppercase tracking-wider">
  //           Reports
  //         </div>
  //         <div className="pl-4 space-y-1 border-l ml-6 border-slate-100">
  //           <SidebarItem icon={FileText} label="Share with me" />
  //           <SidebarItem icon={FileText} label="My reports" />
  //           <div className="text-rose-500 font-medium px-3 py-2 text-sm">
  //             New report
  //           </div>
  //           <SidebarItem icon={FileText} label="Analytics" hasNotification />
  //         </div>
  //       </nav>
  //       <div className="mt-auto space-y-2">
  //         <SidebarItem icon={Settings} label="Manage folders" />
  //       </div>
  //     </aside>
  //     {/* --- Main Content --- */}
  //     <div className="flex-column">
  //       <header className="flex justify-between items-center mb-4">
  //         <div className="relative w-96 text-slate-800">
  //           <Search
  //             className="absolute left-4 top-1/2 -translate-y-1/2 "
  //             size={20}
  //           />
  //           <input
  //             type="text"
  //             placeholder='Try searching "insights"'
  //             className="w-full bg-white pl-12 pr-4 py-3 rounded-full text-sm outline-none focus:ring-2 focus:ring-slate-100"
  //           />
  //         </div>
  //         <div className="flex items-center gap-4">
  //           <div className="flex -space-x-2"></div>
  //           <button className="flex w-full bg-white rounded-full text-sm outline-none px-1 pl-3 py-1 items-center gap-2 text-black hover:cursor-pointer">
  //             <MenuIcon size={20} />
  //             <UserAvatar src="https://i.pravatar.cc/150?u=eren" alt="Eren" />
  //           </button>
  //           <button className="p-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 hover:cursor-pointer">
  //             <Plus size={20} />
  //           </button>
  //         </div>
  //       </header>
  //       <main className="flex-1 bg-white rounded-[40px] p-8 shadow-sm overflow-y-auto">
  //         {/* Header */}
  //         {/* Title & Controls */}
  //         <div className="flex justify-between items-center mb-8">
  //           <h1 className="text-3xl font-bold text-gray-300">New report</h1>
  //           <div className="flex items-center gap-4">
  //             <div className="flex items-center gap-2 bg-slate-50 p-1 pr-4 rounded-full">
  //               <div className="bg-black w-10 h-6 rounded-full relative flex items-center px-1">
  //                 <div className="w-4 h-4 bg-white rounded-full"></div>
  //               </div>
  //               <span className="text-sm font-medium">Timeframe</span>
  //             </div>
  //             <div className="bg-slate-50 px-4 py-2 rounded-full text-sm font-medium text-slate-600 cursor-pointer">
  //               Sep 1 – Nov 30, 2023{" "}
  //               <ChevronDown size={14} className="inline ml-2" />
  //             </div>
  //             <div className="flex gap-2">
  //               <button className="p-2 border rounded-full text-slate-400 hover:text-black">
  //                 <Share2 size={18} />
  //               </button>
  //               <button className="p-2 border rounded-full text-slate-400 hover:text-black">
  //                 <Download size={18} />
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //         {/* Container Utama Grid */}
  //         <div className="flex flex-col xl:flex-row gap-4 w-full">
  //           {/* --- 1. Left Side: Revenue Big Card (5 Kolom) --- */}
  //           <div className="flex flex-1 gap-3 min-w-0">
  //             <div className="mb-2 text-slate-500 font-medium">Revenue</div>
  //             <div className="flex items-center gap-3 w-max mb-3">
  //               <span className="text-3xl font-bold tracking-tight text-slate-800">
  //                 $528,976<span className="text-gray-300">.82</span>
  //               </span>
  //               <div className="flex items-center gap-2">
  //                 <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
  //                   <ArrowUpRight size={12} /> 7.9%
  //                 </span>
  //                 <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-md">
  //                   $27,335.09
  //                 </span>
  //               </div>
  //             </div>
  //             <p className="text-sm text-slate-400 mb-8  flex items-center gap-2">
  //               <span>vs prev. $501,641.73 Jun 1 - Aug 31, 2023 </span>
  //               <ChevronDown />
  //             </p>
  //             {/* Mini Stat Row inside Revenue */}
  //             <div className="flex gap-4 mt-10">
  //               <div className="flex-1 bg-white p-3 rounded-2xl flex items-center gap-3 shadow-sm">
  //                 <UserAvatar
  //                   src="https://i.pravatar.cc/150?u=armin"
  //                   size="sm"
  //                 />
  //                 <div>
  //                   <div className="font-bold text-sm">$209,633</div>
  //                 </div>
  //                 <div className="text-xs text-slate-400 ml-auto">39.63%</div>
  //               </div>
  //               <div className="flex-1 bg-white p-3 rounded-2xl flex items-center gap-3 shadow-sm">
  //                 <UserAvatar
  //                   src="https://i.pravatar.cc/150?u=eren"
  //                   size="sm"
  //                 />
  //                 <div>
  //                   <div className="font-bold text-sm">$156,841</div>
  //                 </div>
  //                 <div className="text-xs text-slate-400 ml-auto">29.65%</div>
  //               </div>
  //             </div>
  //           </div>

  //           {/* --- 2. Right Side: Stats Group (7 Kolom) --- */}
  //           <div className="flex gap-3 shrink-0">
  //             <div className="flex flex-col xl:flex-row gap-4 w-full h-full">
  //               <div className="flex flex-1 gap-3 min-w-0">
  //                 <div className="w-1/2">
  //                   <StatCards title="Top sales" value="72" subtext="Mikasa" />
  //                 </div>
  //                 <div className="w-1/2">
  //                   <StatCards
  //                     title="Best deal"
  //                     value="$42,300"
  //                     subtext="Rolf Inc."
  //                     dark
  //                     highlight
  //                   />
  //                 </div>
  //               </div>
  //               {/* Group B: Small Cards (Deals, Value, Win rate) - Fixed/Auto Width */}
  //               <div className="flex gap-3 overflow-x-auto pb-2 xl:pb-0">
  //                 {/* Card: Deals */}
  //                 <div className="bg-white p-4 rounded-3xl flex flex-col items-center justify-between min-w-[100px] xl:min-w-[110px] border border-slate-100 shadow-sm">
  //                   <span className="text-slate-500 text-sm font-medium">
  //                     Deals
  //                   </span>
  //                   <div className="bg-slate-100 px-3 py-1 rounded-full">
  //                     <span className="font-bold text-slate-400">256</span>
  //                   </div>
  //                   <span className="text-xs font-medium text-slate-500 mt-2">
  //                     ↓ 5
  //                   </span>
  //                 </div>
  //                 {/* Card: Value */}
  //                 <div className="bg-white p-4 rounded-3xl flex flex-col items-center justify-between min-w-[100px] xl:min-w-[110px] border border-rose-100 shadow-sm">
  //                   <span className="text-slate-800 text-sm font-medium">
  //                     Value
  //                   </span>
  //                   <div className="bg-rose-500 px-3 py-1 rounded-full shadow-md shadow-rose-200">
  //                     <span className="font-bold text-white text-sm">528k</span>
  //                   </div>
  //                   <span className="text-xs font-medium text-slate-800 mt-2">
  //                     ↑ 7.9%
  //                   </span>
  //                 </div>
  //                 {/* Card: Win rate */}
  //                 <div className="bg-white p-4 rounded-3xl flex flex-col items-center justify-between min-w-[100px] xl:min-w-[110px] border border-slate-100 shadow-sm">
  //                   <span className="text-slate-800 text-sm font-medium">
  //                     Win rate
  //                   </span>
  //                   <div className="bg-slate-200 px-3 py-1 rounded-full">
  //                     <span className="font-bold text-white text-sm">44%</span>
  //                   </div>
  //                   <span className="text-xs font-medium text-slate-800 mt-2">
  //                     ↑ 1.2%
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="grid grid-cols-12 gap-6">
  //           {/* Filter Lists */}
  //           <div className="col-span-12 lg:col-span-3 space-y-4">
  //             <div className="bg-white p-5 rounded-3xl border border-slate-100">
  //               <div className="flex justify-between items-center mb-4">
  //                 <Filter size={16} className="text-slate-400" />
  //                 <button className="text-xs bg-slate-100 px-3 py-1 rounded-full">
  //                   Filters
  //                 </button>
  //               </div>
  //               <div className="space-y-4">
  //                 {["Dribbble", "Instagram", "Behance", "Google"].map(
  //                   (platform, i) => (
  //                     <div
  //                       key={platform}
  //                       className="flex justify-between items-center"
  //                     >
  //                       <div className="flex items-center gap-2">
  //                         <div
  //                           className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white
  //                                       ${
  //                                         platform === "Dribbble"
  //                                           ? "bg-pink-400"
  //                                           : platform === "Instagram"
  //                                           ? "bg-orange-400"
  //                                           : platform === "Behance"
  //                                           ? "bg-blue-400"
  //                                           : "bg-green-500"
  //                                       }
  //                                    `}
  //                         >
  //                           {platform[0]}
  //                         </div>
  //                         <span className="text-sm font-medium text-slate-600">
  //                           {platform}
  //                         </span>
  //                       </div>
  //                       <span className="text-xs font-bold text-slate-800">
  //                         {["$227,459", "$142,823", "$89,935", "$37,028"][i]}
  //                       </span>
  //                       <span className="text-xs text-slate-400">
  //                         {["43%", "27%", "11%", "7%"][i]}
  //                       </span>
  //                     </div>
  //                   )
  //                 )}
  //               </div>
  //             </div>
  //           </div>
  //           {/* Bar Chart (Simulated with CSS) */}
  //           <div className="col-span-12 lg:col-span-4">
  //             <div className="bg-slate-50 p-5 rounded-3xl h-full flex flex-col">
  //               <div className="flex justify-between items-center mb-6">
  //                 <div className="flex gap-2">
  //                   <div className="w-0.5 h-4 bg-slate-300"></div>
  //                   <div className="w-0.5 h-4 bg-slate-300"></div>
  //                 </div>
  //                 <button className="text-xs bg-white px-3 py-1 rounded-full shadow-sm">
  //                   Filters
  //                 </button>
  //               </div>
  //               <div className="flex-1 flex items-end justify-between px-2 gap-2">
  //                 {/* Bar 1 */}
  //                 <div className="flex flex-col items-center gap-2 w-full">
  //                   <div className="w-full bg-white rounded-t-xl h-24 relative group">
  //                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-sm p-1 rounded-full">
  //                       <div className="w-4 h-4 bg-blue-500 rounded-full text-white text-[8px] flex items-center justify-center">
  //                         Bē
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* Bar 2 */}
  //                 <div className="flex flex-col items-center gap-2 w-full">
  //                   <div className="w-full bg-rose-500 rounded-t-xl h-40 relative shadow-lg shadow-rose-200">
  //                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-sm p-1 rounded-full">
  //                       <div className="w-4 h-4 bg-pink-400 rounded-full text-white text-[8px] flex items-center justify-center">
  //                         Dr
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* Bar 3 */}
  //                 <div className="flex flex-col items-center gap-2 w-full">
  //                   <div className="w-full bg-white rounded-t-xl h-16 relative">
  //                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-sm p-1 rounded-full">
  //                       <div className="w-4 h-4 bg-green-500 rounded-full text-white text-[8px] flex items-center justify-center">
  //                         G
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 {/* Bar 4 */}
  //                 <div className="flex flex-col items-center gap-2 w-full">
  //                   <div className="w-full bg-white rounded-t-xl h-32 relative">
  //                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white shadow-sm p-1 rounded-full">
  //                       <div className="w-4 h-4 bg-orange-400 rounded-full text-white text-[8px] flex items-center justify-center">
  //                         Ig
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="mt-4 text-xs font-medium text-slate-500">
  //                 Deals amount <br />{" "}
  //                 <span className="text-slate-400">by referrer category</span>
  //               </div>
  //             </div>
  //           </div>
  //           {/* Platform Value Card (Gradient) */}
  //           <div className="col-span-12 lg:col-span-5">
  //             <div className="bg-gradient-to-br from-rose-50 to-orange-50 p-6 rounded-3xl h-full relative overflow-hidden">
  //               {/* Header Row */}
  //               <div className="flex justify-between items-start mb-6 z-10 relative">
  //                 <div>
  //                   <h3 className="font-bold text-lg">Sales dynamic</h3>
  //                 </div>
  //                 <div className="flex gap-2">
  //                   <span className="bg-rose-500 text-white text-xs px-2 py-1 rounded-full">
  //                     3
  //                   </span>
  //                   <span className="bg-rose-400 text-white text-xs px-3 py-1 rounded-full">
  //                     $156,841
  //                   </span>
  //                 </div>
  //               </div>
  //               {/* Decorative List */}
  //               <div className="space-y-4 relative z-10">
  //                 <div className="flex items-center justify-between">
  //                   <div className="flex items-center gap-3">
  //                     <UserAvatar
  //                       src="https://i.pravatar.cc/150?u=armin"
  //                       size="sm"
  //                     />
  //                     <span className="text-sm font-medium">Armin A.</span>
  //                   </div>
  //                   <div className="text-sm font-bold">$209,633</div>
  //                   <div className="flex gap-2 text-xs">
  //                     <span className="bg-black text-white px-2 py-0.5 rounded-full">
  //                       41
  //                     </span>
  //                     <span className="bg-white px-2 py-0.5 rounded-full">
  //                       118
  //                     </span>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-center justify-between">
  //                   <div className="flex items-center gap-3">
  //                     <UserAvatar
  //                       src="https://i.pravatar.cc/150?u=mikasa"
  //                       size="sm"
  //                     />
  //                     <span className="text-sm font-medium">Mikasa A.</span>
  //                   </div>
  //                   <div className="text-sm font-bold">$156,841</div>
  //                   <div className="flex gap-2 text-xs">
  //                     <span className="bg-black text-white px-2 py-0.5 rounded-full">
  //                       54
  //                     </span>
  //                     <span className="bg-white px-2 py-0.5 rounded-full">
  //                       103
  //                     </span>
  //                   </div>
  //                 </div>
  //               </div>
  //               {/* Abstract Graph overlay */}
  //               <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent">
  //                 <svg
  //                   className="w-full h-full text-rose-400"
  //                   preserveAspectRatio="none"
  //                   viewBox="0 0 100 100"
  //                 >
  //                   <path
  //                     d="M0,80 Q25,50 50,70 T100,60 V100 H0 Z"
  //                     fill="currentColor"
  //                     opacity="0.1"
  //                   />
  //                   <path
  //                     d="M0,80 Q25,50 50,70 T100,60"
  //                     fill="none"
  //                     stroke="currentColor"
  //                     strokeWidth="2"
  //                   />
  //                 </svg>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </main>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex h-dvh bg-[#f7f0f0] text-black px-4 py-5 gap-6">
      <AppBar />
      <SidebarItem />
      <main className="w-full flex flex-col gap-4">
        <Header />
        <Contents />
      </main>
    </div>
  );
}
