import { Learner } from "@/types/learner";
import { useMemo, useState } from "react";
import SimulationCard from "./SimulationCard";
import { useSkillOverview } from "@/contexts/SkillOverview";
import { log } from "console";

type Props = {
  learner: Learner;
};

export default function SimulationList({ learner }: Props) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const { value, setValue } = useSkillOverview();
  console.log(value);

  const filteredSimulations = useMemo(() => {
    if (!value || value === "default") return learner.simulations;
    return learner.simulations.filter((s) => s.skills.includes(value));
  }, [value, learner.simulations]);

  return (
    <section className="bg-white rounded-xl border p-6 space-y-4">
      <h2 className="text-xl font-semibold">Active & Completed Simulations</h2>

      {value && value !== "default" && (
        <div className="flex items-center justify-between bg-blue-100 text-blue-700 p-2 rounded">
          <span>
            Filtered by skill: <b>{value}</b>
          </span>
          <button
            onClick={() => setValue("default")}
            className="text-sm underline"
          >
            Clear filter
          </button>
        </div>
      )}

      <div className="flex flex-col gap-4">
        {filteredSimulations.length === 0 ? (
          <p>No simulations match this skill.</p>
        ) : (
          filteredSimulations.map((sim) => (
            <SimulationCard key={sim.id} sim={sim} />
          ))
        )}
      </div>
    </section>
  );
}
