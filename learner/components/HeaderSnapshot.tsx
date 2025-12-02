import Image from "next/image";
import StatCard from "./StatCard";
import { Learner } from "@/types/learner";

type Props = {
  learner: Learner;
};

export default function HeaderSnapshot({ learner }: Props) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        <Image
          src={learner.avatar}
          alt="avatar"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">Hi, {learner.name}</h1>
          <p className="text-gray-600">{learner.tagline}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <StatCard label="Simulations Started" value={learner.simsStarted} />
        <StatCard label="Simulations Completed" value={learner.simsCompleted} />
        <StatCard label="Average Score" value={learner.avgScore + "%"} />
        <StatCard label="Current Streak" value={learner.streak + " days"} />
        <StatCard
          label="Career Activation Rate"
          value={learner.careerActivationRate + "%"}
        />
      </div>
    </section>
  );
}
