import {
  Activity,
  BarChart3,
  Clock,
  AlertTriangle,
} from "lucide-react";

import useDashboard from "../hooks/useDashboard";

import KPICard from "../components/dashboard/KPICard";
import LineChartBox from "../components/Charts/LineChartBox";
import PieChartBox from "../components/Charts/PieChartBox";
import RecentRisks from "../components/dashboard/RecentRisks";

export default function DashboardHome() {
  const { data, loading } = useDashboard();
console.log(data);
  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!data) {
    return <div className="p-8">No data found</div>;
  }

  const { kpis, charts, insights } = data;

  return (
    <div className="space-y-8 ml-3 mr-3 mb-3">
      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <KPICard title="Total Analyses" value={kpis.totalAnalyses} icon={BarChart3} />
        <KPICard title="Today Analyses" value={kpis.todayAnalyses} icon={Activity} />
        <KPICard title="Avg Duration" value={Math.round(kpis.avgDuration)} icon={Clock} />
        <KPICard
          title="Escalation Rate (%)"
          value={kpis.escalationRate?.toFixed(1)}
          icon={AlertTriangle}
        />
      </div>


<RecentRisks data={insights.recentHighRisk} />
      {/* CHARTS */}
   <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6">
    <LineChartBox data={charts.analysisGrowth} />
  </div>
     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">

        <PieChartBox title="Severity Distribution" data={charts.severityDistribution} />
        <PieChartBox title="Language Distribution" data={charts.languageDistribution} />
          </div>
    
    </div>
  );
}