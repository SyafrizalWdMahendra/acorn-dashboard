import {
  MonthlyPlatformProps,
  PlatformBarItemProps,
  PlatformItemProps,
} from "../types";

const PlatformBarItem = ({ icon, height }: PlatformBarItemProps) => (
  <div
    className={`flex flex-col bg-white rounded-lg ${height} transition-all duration-300`}
  >
    <div className="flex w-full h-full pt-2 px-2">
      <span className="text-xl">{icon}</span>
    </div>
  </div>
);

const PlatformItem = ({ icon, name, value, percentage }: PlatformItemProps) => (
  <div className="flex items-center bg-white rounded-lg p-2">
    <div className="flex w-1/2 gap-1 items-center">
      <span className="text-lg">{icon}</span>
      <span className="text-sm text-foreground flex-1">{name}</span>
    </div>
    <div className="flex w-1/2 items-center justify-end gap-1">
      <div className="w-max flex justify-end mr-1">
        <span className="text-foreground text-sm font-semibold">{value}</span>
      </div>
      <div className="w-max flex">
        <span className="bg-gray-100 p-1.5 rounded-full text-xs w-10 text-center ml-auto font-semibold">
          {percentage}%
        </span>
      </div>
    </div>
  </div>
);

const MonthlyPlatformData = ({ revenue, leads, wl }: MonthlyPlatformProps) => {
  return (
    <div className="flex bg-rose-700 text-white rounded-tr-2xl rounded-bl-2xl w-max p-5 pt-6 pb-10 pr-8">
      <div className="flex">
        <span className="[writing-mode:vertical-lr] -rotate-180 m-auto text-start h-28.5 text-card text-xs p-0">
          Average Monthly
        </span>

        <div className="flex flex-col pl-5 gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-card">Revenue</span>
            <span className="text-xs font-semibold">{revenue}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-card">Leads</span>
            <div className="flex gap-1">
              <span className="text-xs font-semibold">{leads}</span>
              <span className="text-xs text-card">97/276</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-card">W/L</span>
            <div className="flex gap-1">
              <span className="text-xs font-semibold">{wl}</span>
              <span className="text-xs text-card">51/318</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlatformBarItem, PlatformItem, MonthlyPlatformData };
