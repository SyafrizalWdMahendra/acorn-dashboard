const users = [
  { name: "Armin A.", src: "https://i.pravatar.cc/150?u=eren" },
  { name: "Mikasa A.", src: "https://i.pravatar.cc" },
  { name: "Jean K.", src: "https://i.pravatar.cc/150?u=jean" },
];

const stats = [
  {
    title: "Deals",
    value: "256k",
    change: "5",
    isPositive: false,
    highlighted: false,
  },
  {
    title: "Value",
    value: "528k",
    change: "7.9%",
    isPositive: true,
    highlighted: true,
  },
  {
    title: "Win Rate",
    value: "44%",
    change: "1.2%",
    isPositive: true,
    highlighted: false,
  },
];

const platformBars = [
  {
    icon: "behance-icon.png",
    name: "Behance",
    value: "$89,935",
    percentage: 11,
    height: "h-24",
  },
  {
    icon: "dribble-icon.webp",
    name: "Dribbble",
    value: "$227,459",
    percentage: 43,
    height: "h-32",
  },
  {
    icon: "google-icon.webp",
    name: "Google",
    value: "$37,028",
    percentage: 7,
    height: "h-20",
  },
  {
    icon: "instagram-icon.png",
    name: "Instagram",
    value: "$142,823",
    percentage: 27,
    height: "h-14",
  },
  {
    icon: "Shopping",
    name: "Shopping",
    value: "$0",
    percentage: 30,
    height: "h-26",
  },
];

const platforms = [
  {
    icon: "dribble-icon.webp",
    name: "Dribbble",
    value: "$227,459",
    percentage: 43,
  },
  {
    icon: "instagram-icon.png",
    name: "Instagram",
    value: "$142,823",
    percentage: 27,
  },
  {
    icon: "behance-icon.png",
    name: "Behance",
    value: "$89,935",
    percentage: 11,
  },
  { icon: "google-icon.webp", name: "Google", value: "$37,028", percentage: 7 },
];

const monthlyPlatformData = [
  {
    name: "Behance",
    value: "$6,901",
    height: "h-17",
  },
  {
    name: "Dribbble",
    value: "$227,459",
    height: "h-12",
  },
  {
    name: "Google",
    value: "$37,028",
    height: "h-5.5",
  },
  {
    name: "Instagram",
    value: "$11,035",
    height: "h-27.5",
  },
  {
    name: "Shopping",
    value: "$0",
    height: "h-19.5",
  },
  {
    name: "asd",
    value: "$227,459",
    height: "h-12",
  },
  {
    name: "bbbb",
    value: "$9,288",
    height: "h-21.5",
  },
  {
    name: "njn",
    value: "$142,823",
    height: "h-13",
  },
  {
    name: "kjn",
    value: "$0",
    height: "h-18.5",
  },
];

export { users, stats, platformBars, platforms, monthlyPlatformData };
