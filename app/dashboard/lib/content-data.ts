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
    icon: "🅱️",
    name: "Behance",
    value: "$89,935",
    percentage: 11,
    height: "h-24",
  },
  {
    icon: "🏀",
    name: "Dribbble",
    value: "$227,459",
    percentage: 43,
    height: "h-32",
  },
  {
    icon: "🔍",
    name: "Google",
    value: "$37,028",
    percentage: 7,
    height: "h-20",
  },
  {
    icon: "📷",
    name: "Instagram",
    value: "$142,823",
    percentage: 27,
    height: "h-14",
  },
  {
    icon: "👜",
    name: "Shopping",
    value: "$0",
    percentage: 30,
    height: "h-26",
  },
];

const platforms = [
  { icon: "🏀", name: "Dribbble", value: "$227,459", percentage: 43 },
  { icon: "📷", name: "Instagram", value: "$142,823", percentage: 27 },
  { icon: "🅱️", name: "Behance", value: "$89,935", percentage: 11 },
  { icon: "🔍", name: "Google", value: "$37,028", percentage: 7 },
];

export { users, stats, platformBars, platforms };
