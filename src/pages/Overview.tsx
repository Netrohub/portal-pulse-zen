import { Users, Activity, Clock, TrendingUp } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { ReinforcementStatus } from "@/components/dashboard/ReinforcementStatus";
import { AlertsStrip } from "@/components/dashboard/AlertsStrip";

const Overview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="gradient-primary rounded-xl p-6 md:p-8 text-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Welcome back, Jordan! 👋
        </h1>
        <p className="text-white/90 text-sm md:text-base">
          Here's what's happening with your dashboard today.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Reinforcements"
          value="2,847"
          change="+12.5% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
        <MetricCard
          title="Daily Active Users"
          value="1,234"
          change="+8.2% from yesterday"
          changeType="positive"
          icon={Users}
        />
        <MetricCard
          title="Avg Response Time"
          value="142ms"
          change="+15% from last hour"
          changeType="negative"
          icon={Clock}
        />
        <MetricCard
          title="System Health"
          value="99.9%"
          change="All systems operational"
          changeType="positive"
          icon={Activity}
        />
      </div>

      {/* Alerts */}
      <AlertsStrip />

      {/* Activity & Status Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
        <div>
          <ReinforcementStatus />
        </div>
      </div>
    </div>
  );
};

export default Overview;
