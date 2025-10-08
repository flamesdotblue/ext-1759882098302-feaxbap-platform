import React from "react";
import { Activity } from "lucide-react";

// Simple responsive SVG line chart for weekly active minutes
export default function ProgressChart() {
  const data = [32, 48, 40, 55, 30, 62, 46]; // mock active minutes per day
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const width = 360;
  const height = 160;
  const padding = 24;

  const maxVal = Math.max(...data, 60);
  const xStep = (width - padding * 2) / (data.length - 1);
  const yScale = (v) => {
    const usable = height - padding * 2;
    return height - padding - (v / maxVal) * usable;
  };

  const points = data.map((v, i) => `${padding + i * xStep},${yScale(v)}`).join(" ");

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/10 ring-1 ring-sky-500/30 text-sky-400">
            <Activity className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold">Weekly Activity</h3>
        </div>
        <span className="text-xs text-zinc-400">Active minutes</span>
      </div>

      <div className="w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/40">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-48">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* grid */}
          {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
            <line
              key={i}
              x1={padding}
              x2={width - padding}
              y1={padding + (height - padding * 2) * t}
              y2={padding + (height - padding * 2) * t}
              stroke="#27272a"
              strokeWidth="1"
            />
          ))}

          {/* area fill */}
          <polygon
            points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
            fill="url(#grad)"
          />

          {/* line */}
          <polyline
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            points={points}
          />

          {/* points */}
          {data.map((v, i) => (
            <circle
              key={i}
              cx={padding + i * xStep}
              cy={yScale(v)}
              r="3.2"
              fill="#38bdf8"
              stroke="#0b1220"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-1 text-[10px] text-center text-zinc-400">
        {labels.map((l, i) => (
          <span key={l} className="truncate">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
