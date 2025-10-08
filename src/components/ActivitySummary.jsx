import React from "react";
import { Activity, Flame, Droplet, Timer } from "lucide-react";

const StatCard = ({ icon: Icon, label, value, unit, accent = "emerald" }) => {
  const accentClasses = {
    emerald: {
      ring: "ring-emerald-500/30",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400",
    },
    orange: {
      ring: "ring-orange-500/30",
      bg: "bg-orange-500/10",
      text: "text-orange-400",
    },
    sky: {
      ring: "ring-sky-500/30",
      bg: "bg-sky-500/10",
      text: "text-sky-400",
    },
    violet: {
      ring: "ring-violet-500/30",
      bg: "bg-violet-500/10",
      text: "text-violet-400",
    },
  };

  const a = accentClasses[accent] || accentClasses.emerald;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
      <div className="flex items-center justify-between">
        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${a.bg} ${a.ring} `}>
          <Icon className={`h-5 w-5 ${a.text}`} />
        </div>
        <span className="text-xs text-zinc-500">Today</span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-zinc-400">{label}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-2xl font-semibold tracking-tight">{value}</span>
          {unit && <span className="text-xs text-zinc-500">{unit}</span>}
        </div>
      </div>
    </div>
  );
};

export default function ActivitySummary() {
  // Mock summary data
  const stats = [
    { icon: Activity, label: "Steps", value: 7420, unit: "steps", accent: "emerald" },
    { icon: Flame, label: "Calories", value: 540, unit: "kcal", accent: "orange" },
    { icon: Timer, label: "Active Minutes", value: 46, unit: "min", accent: "violet" },
    { icon: Droplet, label: "Water", value: 1.8, unit: "L", accent: "sky" },
  ];

  return (
    <div>
      <div className="mb-3 flex items-end justify-between">
        <h2 className="text-base font-semibold text-zinc-100">Today's Summary</h2>
        <span className="text-xs text-zinc-500">Auto-tracked • Mock data</span>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
