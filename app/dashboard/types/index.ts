import { LucideIcon } from "lucide-react";

export type UserBadgeProps = {
  name: string;
  imageSrc: string;
};

export type IconButtonProps = {
  icon: LucideIcon;
  filled?: boolean;
};

export type StatCardProps = {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  isHighlighted?: boolean;
};

export type TreeItemType = {
  label: string;
  badge?: string | number;
};

export type TreeSectionType = {
  title: string;
  items: TreeItemType[];
  defaultOpen?: boolean;
  hideToggle?: boolean;
};

export type TreeGroupType = {
  title: string;
  sections: TreeSectionType[];
};
