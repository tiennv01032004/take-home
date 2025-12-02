import { useSkillOverview } from "@/contexts/SkillOverview";
import { Learner, Skill } from "@/types/learner";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

type Props = {
  learner: Learner;
};

export default function SkillsOverview({ learner }: Props) {
  const { value, setValue } = useSkillOverview();

  const handleClick = (data: any) => {
    setValue(data.name);
  };

  return (
    <section className="bg-white rounded-xl border p-6">
      <h2 className="text-xl font-semibold mb-4">Skills Overview</h2>

      <ResponsiveContainer width="100%" height={learner.skills.length * 70}>
        <BarChart
          data={learner.skills}
          layout="vertical"
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
          barCategoryGap={20}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]} />
          <YAxis
            type="category"
            dataKey="name"
            width={100}
            tick={{ fontSize: 14 }}
          />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#2563EB"
            barSize={30}
            onClick={handleClick}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
