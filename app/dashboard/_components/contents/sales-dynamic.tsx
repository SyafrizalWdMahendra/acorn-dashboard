import { TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { week: "W 1", value: 2000 },
  { week: "W 3", value: 3500 },
  { week: "W 5", value: 2800 },
  { week: "W 7", value: 4200 },
  { week: "W 9", value: 3800 },
  { week: "W 11", value: 5500 },
];

export function SalesDynamic() {
  return (
    <div className="bg-card rounded-2xl p-4 ml-5 h-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">Sales dynamic</span>
        <TrendingUp className="w-4 h-4 text-muted-foreground" />
      </div>

      {/* Chart */}
      <div className="h-24">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
          >
            <XAxis
              dataKey="week"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--coral))"
              strokeWidth={2}
              dot={{ fill: "hsl(var(--coral))", strokeWidth: 0, r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bottom row */}
      <div className="flex items-center gap-3 mt-4 pt-3 border-t border-border">
        <Avatar className="w-6 h-6 ring-2 ring-yellow ring-offset-1 ring-offset-card">
          <AvatarFallback className="bg-yellow text-foreground text-[10px]">
            E
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-foreground">Eren Y.</span>
        <span className="text-sm text-foreground">$117,115</span>
        <div className="flex items-center gap-1 ml-auto">
          <span className="text-xs px-1.5 py-0.5 rounded bg-purple-light text-purple font-medium">
            22
          </span>
          <span className="text-xs text-muted-foreground">84</span>
        </div>
        <span className="text-sm text-muted-foreground">0.79</span>
        <span className="text-sm text-foreground">32%</span>
        <div className="flex items-center gap-1">
          <span className="text-xs px-1.5 py-0.5 rounded bg-coral-light text-coral font-medium">
            7
          </span>
          <span className="text-xs px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-medium">
            15
          </span>
        </div>
      </div>
    </div>
  );
}
