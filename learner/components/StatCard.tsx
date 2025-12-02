export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <div className="text-gray-600 text-sm">{label}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}
