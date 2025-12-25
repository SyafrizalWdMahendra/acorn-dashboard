import Image from "next/image";
import { UserBadgeProps } from "../../types";

export const UserBadge = ({ name, imageSrc }: UserBadgeProps) => (
  <div className="p-1 rounded-full bg-white border border-[#ececec] w-max h-max flex text-center items-center gap-2">
    <Image
      src={imageSrc}
      width={30}
      height={30}
      alt={name}
      className="rounded-full object-cover border border-white"
    />
    <span className="text-sm font-bold text-black">{name}</span>
  </div>
);
