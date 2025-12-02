import { Learner } from "@/types/learner";

type Props = {
  learner: Learner;
};

export default function Recommendations({ learner }: Props) {
  return (
    <section className="bg-white rounded-xl border p-6 space-y-4">
      <h2 className="text-xl font-semibold">Recommendations For You</h2>

      {learner.recommendations.map((r) => (
        <div
          key={r.id}
          className="border rounded-lg p-4 hover:shadow-sm transition"
        >
          <h3 className="font-semibold">{r.title}</h3>
          <p className="text-sm text-gray-600">{r.company}</p>
          <p className="text-sm mt-1">Difficulty: {r.difficulty}</p>
          <p className="text-sm">Est. Time: {r.estimate}</p>
          <p className="text-sm text-gray-700 mt-2 italic">{r.reason}</p>
        </div>
      ))}
    </section>
  );
}
