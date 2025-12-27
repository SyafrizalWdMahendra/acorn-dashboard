import { TrendingUp } from "lucide-react";

export function PlatformWork() {
  const platforms = [
    {
      name: "Dribbble",
      icon: "🏀",
      percentage: "45.3%",
      value: "$71,048",
      color: "text-foreground",
    },
    {
      name: "Instagram",
      icon: "📷",
      percentage: "28.1%",
      value: "$44,072",
      color: "text-muted-foreground",
    },
    {
      name: "Google",
      icon: "🔍",
      percentage: "14.1%",
      value: "$22,114",
      color: "text-muted-foreground",
    },
    {
      name: "Other",
      icon: "📦",
      percentage: "7.1%",
      value: "$11,135",
      color: "text-muted-foreground",
    },
  ];

  return (
    <div className="bg-card rounded-xl p-4 border border-border">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-muted-foreground">
          Work with platforms
        </span>
        <div className="flex items-center gap-1">
          <span className="text-xs px-1.5 py-0.5 rounded bg-coral text-primary-foreground font-medium">
            3
          </span>
          <span className="text-sm font-semibold text-coral">$156,841</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex items-center gap-2">
            <span className="text-sm">{platform.icon}</span>
            <span className="text-xs text-muted-foreground">
              {platform.name}
            </span>
            <div className="ml-auto text-right">
              <span className={`text-sm font-medium ${platform.color}`}>
                {platform.percentage}
              </span>
              <span className="text-xs text-muted-foreground ml-1">
                {platform.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Highlighted platform */}
      <div className="mt-4 flex items-center gap-2">
        <span className="text-xl">🏀</span>
        <div>
          <span className="text-2xl font-bold text-foreground">45.3%</span>
          <span className="text-lg font-medium text-foreground ml-2">
            $71,048
          </span>
        </div>
      </div>
    </div>
  );
}
