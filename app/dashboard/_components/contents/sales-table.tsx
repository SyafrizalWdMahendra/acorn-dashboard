import { TrendingUp, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SalesRowProps {
  avatar: string;
  name: string;
  revenue: string;
  leads: number;
  leadsTotal: number;
  kpi: number;
  winRate: string;
  w: number;
  l: number;
  highlight?: boolean;
}

const SalesRow = ({
  avatar,
  name,
  revenue,
  leads,
  leadsTotal,
  kpi,
  winRate,
  w,
  l,
  highlight,
}: SalesRowProps) => (
  <div
    className={`flex items-center gap-4 py-3 ${
      highlight ? "bg-coral-light rounded-lg px-2 -mx-2" : ""
    }`}
  >
    <div className="flex items-center gap-2 min-w-[100px]">
      <Avatar className="w-6 h-6">
        <AvatarFallback className="bg-muted text-xs">{name[0]}</AvatarFallback>
      </Avatar>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
    <span className="text-sm text-foreground min-w-[80px]">{revenue}</span>
    <div className="flex items-center gap-1 min-w-[60px]">
      <span className="text-xs px-1.5 py-0.5 rounded bg-purple-light text-purple font-medium">
        {leads}
      </span>
      <span className="text-xs text-muted-foreground">{leadsTotal}</span>
    </div>
    <span className="text-sm text-foreground min-w-[40px]">{kpi}</span>
    <span className="text-sm text-foreground min-w-[40px]">{winRate}</span>
    <div className="flex items-center gap-1">
      <span className="text-xs px-1.5 py-0.5 rounded bg-coral-light text-coral font-medium">
        {w}
      </span>
      <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
        {l}
      </span>
    </div>
    {highlight && <TrendingUp className="w-4 h-4 text-coral ml-auto" />}
  </div>
);

export function SalesTable() {
  const salesData = [
    {
      avatar: "",
      name: "Armin A.",
      revenue: "$209,633",
      leads: 41,
      leadsTotal: 118,
      kpi: 0.84,
      winRate: "31%",
      w: 12,
      l: 29,
    },
    {
      avatar: "",
      name: "Mikasa A.",
      revenue: "$156,841",
      leads: 54,
      leadsTotal: 103,
      kpi: 0.89,
      winRate: "39%",
      w: 21,
      l: 33,
      highlight: true,
    },
  ];

  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <div className="flex items-center gap-4 pb-2 border-b border-border text-xs text-muted-foreground">
        <span className="min-w-25">Sales</span>
        <span className="min-w-25">Revenue</span>
        <span className="min-w-25">Leads</span>
        <span className="min-w-25">KPI</span>
        <span className="min-w-25">W/L</span>
      </div>

      {salesData.map((row) => (
        <SalesRow key={row.name} {...row} />
      ))}

      <div className="flex items-center gap-2 mt-4 text-xs">
        <span className="flex items-center gap-1">
          <span className="text-success">💪</span> Top sales
        </span>
        <span className="flex items-center gap-1">
          <span className="text-warning">🔥</span> Sales streak
        </span>
        <span className="flex items-center gap-1">
          <span className="text-coral">👍</span> Top review
        </span>
      </div>
    </div>
  );
}
