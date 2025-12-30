import Image from "next/image";
import {
  IconMap,
  MonthlyPlatformProps,
  PlatformBarItemProps,
  PlatformItemProps,
} from "../types";

const PlatformItem = ({ icon, name, value, percentage }: PlatformItemProps) => (
  <div className="flex items-center bg-white rounded-lg p-2">
    <div className="flex w-1/2 gap-1 items-center">
      <Image
        src={`/img/${icon}`}
        alt="Platform Icon"
        className="w-5 h-5 object-contain"
        width={50}
        height={50}
      />
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

const PlatformBarItem = ({ icon, height }: PlatformBarItemProps) => {
  const LucideIconComponent = IconMap[icon];
  return (
    <div
      className={`flex flex-col bg-white rounded-lg ${height} transition-all duration-300 w-full pt-2 items-center`}
    >
      {LucideIconComponent ? (
        <LucideIconComponent className="w-5 h-5 text-black" />
      ) : (
        <Image
          src={`/img/${icon}`}
          alt="Platform Icon"
          className="w-5 h-5 object-contain"
          width={50}
          height={50}
        />
      )}
    </div>
  );
};

const MonthlyPlatformData = ({ name, height, value }: MonthlyPlatformProps) => {
  if (name == "Behance" || name == "Instagram" || name == "bbbb") {
    return (
      <div className="relative flex flex-col items-center justify-end h-full ml-2.5">
        <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2">
          <div className="bg-rose-700 text-white rounded-sm p-1 flex items-center leading-none border border-white text-center">
            <span className="text-[10px] font-semibold">{value}</span>
          </div>
        </div>

        <div
          className={`flex flex-col bg-red-200 rounded-sm w-6 ${height} transition-all duration-300 relative`}
        >
          <div className="flex w-full h-full items-end px-2 justify-center">
            <img
              src="https://i.pravatar.cc/150"
              alt="Mikasa"
              className="w-3.5 h-3.5 rounded-full border border-white absolute bottom-0 translate-y-1/2"
            />
          </div>
        </div>
      </div>
    );
  } else if (name === "Dribbble" || name === "Shopping" || name === "njn") {
    const monthLabels: Record<string, string> = {
      Dribbble: "Sep",
      Shopping: "Oct",
      njn: "Nov",
    };

    return (
      <div
        className={`flex flex-col bg-secondary rounded-sm w-6 ${height} transition-all duration-300 relative group`}
      >
        <div className="flex w-full h-full items-end px-2 justify-center">
          <img
            src="https://i.pravatar.cc/150"
            alt="Avatar"
            className="w-3.5 h-3.5 rounded-full border border-white absolute bottom-0 translate-y-1/2 z-10"
          />
        </div>

        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-secondary">
          {monthLabels[name]}
        </span>
      </div>
    );
  } else {
    return (
      <div
        className={`flex flex-col bg-secondary rounded-sm w-6 ${height} transition-all duration-300 relative`}
      >
        <div className="flex w-full h-full items-end px-2 justify-center">
          <img
            src="https://i.pravatar.cc/150"
            alt="Mikasa"
            className="w-3.5 h-3.5 rounded-full border border-white absolute bottom-0 translate-y-1/2"
          />
        </div>
      </div>
    );
  }
};

export { PlatformBarItem, PlatformItem, MonthlyPlatformData };
