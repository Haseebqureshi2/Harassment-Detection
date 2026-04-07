import { TrendingUp } from "lucide-react";

export default function KPICard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between hover:shadow-md transition">
      <div>
        <p className="text-sm text-gray-500">{title}</p>

        <h2 className="text-2xl font-semibold mt-1">
          {value ?? "-"}
        </h2>
      </div>

      <div className="p-3 bg-[rgb(63,177,181)]/10 rounded-xl">
        <Icon className="text-[rgb(63,177,181)]" size={22} />
      </div>
    </div>
  );
}