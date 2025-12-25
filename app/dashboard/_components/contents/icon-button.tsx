import { IconButtonProps } from "../../types";

export const IconButton = ({ icon: Icon, filled = false }: IconButtonProps) => (
  <div
    className={`p-1.5 rounded-full border border-[#ececec] w-max h-max flex text-center ${
      filled ? "bg-black p-1" : "bg-white"
    }`}
  >
    <Icon color={filled ? "white" : "black"} size={filled ? 22 : 20} />
  </div>
);
