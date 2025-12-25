import {
  ChevronDown,
  ChevronsUp,
  Circle,
  Download,
  Plus,
  Settings2,
  ToggleRight,
  Upload,
} from "lucide-react";
import { UserBadge } from "./contents/user-badge";
import { IconButton } from "./contents/icon-button";
import { StatCard } from "./contents/stat-cards";
import { stats, users } from "../lib/content-data";

export default function Contents() {
  return (
    <div className="bg-white w-full rounded-3xl h-dvh">
      {/* Row 1 */}
      <div className="flex rounded-3xl p-6 items-center gap-3 justify-between">
        <div className="flex rounded-3xl items-center gap-3">
          <div className="p-1.5 rounded-full bg-white border border-[#ececec] w-max h-max flex text-center">
            <Plus color="gray" size={20} />
          </div>

          {users.map((user, index) => (
            <UserBadge key={index} name={user.name} imageSrc={user.src} />
          ))}

          <IconButton icon={Circle} filled={true} />
        </div>
        <div className="flex rounded-3xl items-center gap-3">
          <IconButton icon={Settings2} />
          <IconButton icon={Download} />
          <IconButton icon={Upload} />
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex p-6 py-1 justify-between">
        <span className="font-semibold text-3xl text-[#cfcfcf]">
          New report
        </span>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center">
            <ToggleRight />
            <span className="font-semibold text-sm">Timeframe</span>
          </div>
          <div className="flex bg-[#ececec] text-black px-4 py-1 rounded-full text-sm items-center gap-2">
            <span>Sep 1 - Nov 30, 2023</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex p-6 flex-wrap w-full gap-23">
        <div className="sm:w-56 lg:w-64">
          <h3 className="text-md font-bold mb-3">Revenue</h3>
          <div className="flex items-center mb-3 gap-2">
            <div className="flex items-end">
              <span className="text-3xl lg:text-3xl font-bold">$528,976</span>
              <span className="text-[#cfcfcf] text-3xl lg:text-3xl font-bold">
                .82
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center text-white bg-rose-700 px-2 py-0.5 rounded-full">
                <ChevronsUp className="w-3 h-3" />
                <span className="text-xs font-medium">7.9%</span>
              </div>
              <div className="flex items-center text-white bg-rose-700 px-2 py-0.5 rounded-full">
                <span className="text-xs font-medium">$27,335.09</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 text-xs font-bold text-gray-700">
            <span className="text-[10px]">vs prev. $501,641.73</span>
            <span className="text-[10px] flex items-center -mt-0.5 gap-0.5">
              <span>Jun 1 - Aug 31, 2023</span>{" "}
              <ChevronDown className="w-4 h-4" />
            </span>
          </div>
        </div>

        <div className="flex gap-3 w-3/5 ml-auto">
          {/* Top Sales Card (Masih manual karena struktur beda sendiri) */}
          <div className="bg-white rounded-xl h-max px-3 py-2 w-full sm:w-44 lg:w-48 border border-[#ececec] ml-7.5">
            <h3 className="text-gray-400 text-[10px] font-medium mb-1.5">
              Top sales
            </h3>
            <div className="text-xl font-bold mb-2">72</div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://ui-avatars.com/api/?name=Mikasa&background=3b82f6&color=fff"
                  alt="Mikasa"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-medium">Mikasa</span>
              </div>
              <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-md transition">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Best Deal Card (Manual karena dark theme & layout khusus) */}
          <div className="bg-gray-900 rounded-xl h-max px-3 py-2 w-full sm:w-44 lg:w-48 shadow-sm mr-1">
            <div className="flex justify-between items-start mb-1.5">
              <h3 className="text-gray-400 text-[10px] font-medium">
                Best deal
              </h3>
              <svg
                className="w-4 h-4 text-gray-400 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <div className="text-xl font-bold text-white mb-2">$42,300</div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-white">Rolf Inc.</span>
              <button className="w-6 h-6 bg-white rounded-md flex items-center justify-center hover:bg-gray-200 transition">
                <svg
                  className="w-3 h-3 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Reusable Stat Cards */}
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              isPositive={stat.isPositive}
              isHighlighted={stat.highlighted}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
