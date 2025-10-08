import React from "react";
import Header from "./components/Header";
import ActivitySummary from "./components/ActivitySummary";
import WorkoutPlanner from "./components/WorkoutPlanner";
import ProgressChart from "./components/ProgressChart";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-zinc-100">
      <Header />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pb-20">
        <section className="mt-6">
          <ActivitySummary />
        </section>

        <section className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <WorkoutPlanner />
          </div>
          <div className="lg:col-span-1">
            <ProgressChart />
          </div>
        </section>
      </main>
    </div>
  );
}
