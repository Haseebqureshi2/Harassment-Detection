import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function LineChartBox({ data }) {
  if (!data || data.length === 0) {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm text-center text-gray-400">
      No data available
    </div>
  );
}

const monthNames = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
];

const normalizeMonthlyData = (data) => {
  const map = {};

  data.forEach(item => {
    const month = item.month.split(" ")[0]; // ✅ FIX HERE
    map[month] = item.count;
  });

  return monthNames.map(month => ({
    month,
    count: map[month] || 0
  }));
};
const normalizedData = normalizeMonthlyData(data);
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm">
      <h3 className="font-semibold mb-4">Analyses Trend</h3>

      <ResponsiveContainer width="100%" height={260}>
<LineChart data={normalizedData}>
  <defs>
    <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#3FB1B5" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#3FB1B5" stopOpacity={0.1}/>
    </linearGradient>
  </defs>

  <CartesianGrid strokeDasharray="3 3" />

  <XAxis dataKey="month" interval={0} />

  <Tooltip />

  <Line
    type="monotone"
    dataKey="count"
    stroke="#3FB1B5"
    strokeWidth={3}
    fill="url(#colorLine)"
  />
</LineChart>
      </ResponsiveContainer>
    </div>
  );
}