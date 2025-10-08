import React from "react";
import { Dumbbell, Calendar, User } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30">
            <Dumbbell className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-semibold tracking-tight">FitTrack</h1>
            <p className="flex items-center gap-2 text-xs text-zinc-400">
              <Calendar className="h-4 w-4" /> {today}
            </p>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/60 transition">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Profile</span>
        </button>
      </div>
    </header>
  );
}
