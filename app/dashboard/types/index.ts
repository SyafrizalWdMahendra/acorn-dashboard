import { LucideIcon, ShoppingBag, ShoppingBagIcon } from "lucide-react";

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
  index?: number;
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

export interface PlatformItemProps {
  icon: string;
  name: string;
  value: string;
  percentage: number;
}

export interface PlatformBarItemProps extends PlatformItemProps {
  height: string;
}

export interface MonthlyPlatformProps {
  name?: string;
  value?: string;
  height?: string;
}

export const IconMap: Record<string, any> = {
  Shopping: ShoppingBagIcon,
};
