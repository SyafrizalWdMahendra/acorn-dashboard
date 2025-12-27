import { PlatformBarItemProps, PlatformItemProps } from "../types";

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

export { PlatformBarItem, PlatformItem };
