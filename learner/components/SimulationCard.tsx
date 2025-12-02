import { Simulation } from "@/types/learner";

type Props = {
  sim: Simulation;
};

export default function SimulationCard({ sim }: Props) {
  return (
    <div className="border rounded-xl p-4 flex gap-4 hover:shadow-sm transition">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gray-200 rounded" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-semibold">{sim.title}</h3>
        <p className="text-sm text-gray-600">
          {sim.company} — {sim.role}
        </p>
        <p className="text-sm text-gray-500">Difficulty: {sim.difficulty}</p>
        <p className="text-xs text-gray-500 mt-1">
          Last activity: {sim.lastActivity}
        </p>

        {/* progress */}
        <div className="mt-2">
          <div className="h-2 bg-gray-200 rounded">
            <div
              className="h-full bg-green-600 rounded"
              style={{ width: `${sim.progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
