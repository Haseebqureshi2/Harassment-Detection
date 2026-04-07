import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#3FB1B5", "#6366F1", "#F59E0B", "#EF4444"];

const renderLabel = ({ name, percent }) => {
  return `${name} (${(percent * 100).toFixed(0)}%)`;
};

export default function PieChartBox({ title, data }) {
  if (!data || data.length === 0) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm text-center text-gray-400">
      No data available
    </div>
  );
}
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="font-semibold mb-4">{title}</h3>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="_id"
            outerRadius={90}
            label={renderLabel} // ✅ SHOW LABELS
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}