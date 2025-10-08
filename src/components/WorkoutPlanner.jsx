import React, { useMemo, useState } from "react";
import { Plus, Trash2, CheckCircle, Dumbbell, Timer } from "lucide-react";

export default function WorkoutPlanner() {
  const [items, setItems] = useState([
    { id: "1", name: "Warm-up Jog", minutes: 10, done: false, type: "Cardio" },
    { id: "2", name: "Push-ups", minutes: 5, done: false, type: "Strength" },
  ]);
  const [name, setName] = useState("");
  const [minutes, setMinutes] = useState(20);
  const [type, setType] = useState("Cardio");

  const totalMinutes = useMemo(() => items.reduce((acc, it) => acc + Number(it.minutes || 0), 0), [items]);

  const addItem = (e) => {
    e.preventDefault();
    const cleanName = name.trim();
    const mins = Number(minutes);
    if (!cleanName || !mins || mins <= 0) return;
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setItems((prev) => [{ id, name: cleanName, minutes: mins, done: false, type }, ...prev]);
    setName("");
    setMinutes(20);
    setType("Cardio");
  };

  const toggleDone = (id) => setItems((prev) => prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)));
  const removeItem = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30 text-emerald-400">
            <Dumbbell className="h-5 w-5" />
          </div>
          <h3 className="text-base font-semibold">Workout Planner</h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-zinc-400">
          <Timer className="h-4 w-4" />
          {totalMinutes} min total
        </div>
      </div>

      <form onSubmit={addItem} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Exercise name (e.g., Squats)"
          className="sm:col-span-5 w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:ring-2"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="sm:col-span-3 w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:ring-2"
        >
          <option>Cardio</option>
          <option>Strength</option>
          <option>Mobility</option>
        </select>
        <input
          type="number"
          min={1}
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          className="sm:col-span-2 w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm outline-none ring-emerald-500/40 focus:ring-2"
          placeholder="Minutes"
        />
        <button
          type="submit"
          className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-500 transition"
        >
          <Plus className="h-4 w-4" /> Add
        </button>
      </form>

      <ul className="mt-5 space-y-2">
        {items.length === 0 && (
          <li className="rounded-lg border border-dashed border-zinc-800 p-4 text-sm text-zinc-400">No exercises yet. Add your first above.</li>
        )}
        {items.map((it) => (
          <li
            key={it.id}
            className="group flex items-center justify-between gap-3 rounded-lg border border-zinc-800 bg-zinc-950/40 px-3 py-2"
          >
            <button
              onClick={() => toggleDone(it.id)}
              className={`inline-flex items-center gap-2 rounded-md px-2 py-1 text-xs transition ${
                it.done ? "bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/30" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <CheckCircle className={`h-4 w-4 ${it.done ? "text-emerald-400" : "text-zinc-400"}`} />
              {it.done ? "Done" : "Mark"}
            </button>
            <div className="flex-1 overflow-hidden">
              <p className={`truncate text-sm ${it.done ? "text-zinc-500 line-through" : "text-zinc-100"}`}>
                {it.name}
                <span className="ml-2 rounded bg-zinc-800 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-400">{it.type}</span>
              </p>
            </div>
            <span className="text-xs text-zinc-400 shrink-0">{it.minutes} min</span>
            <button
              onClick={() => removeItem(it.id)}
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition"
              aria-label="Remove"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
