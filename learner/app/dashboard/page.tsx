"use client";

import { learner } from "../../data/user.json";
import HeaderSnapshot from "@/components/HeaderSnapshot";
import Recommendations from "@/components/Recommendations";
import SimulationList from "@/components/SimulationList";
import SkillsOverview from "@/components/SkillsOverview";
import { SkillOverviewProvider } from "@/contexts/SkillOverview";

export default function DashboardPage() {
  return (
    <SkillOverviewProvider>
      <div className="p-6 space-y-8 max-w-7xl mx-auto font-sans">
        {/* ---------------- HEADER SNAPSHOT ---------------- */}
        <HeaderSnapshot learner={learner} />

        {/* ---------------- MAIN GRID ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* ---- SIMULATIONS LIST ---- */}
            <SimulationList learner={learner} />
            {/* ---- SKILLS BAR CHART ---- */}
            <SkillsOverview learner={learner} />
          </div>

          <div className="space-y-8">
            {/* ---- RECOMMENDATIONS ---- */}
            <Recommendations learner={learner} />
          </div>
        </div>
      </div>
    </SkillOverviewProvider>
  );
}
