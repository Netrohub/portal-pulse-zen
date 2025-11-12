import { Users, Activity, Clock, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { ReinforcementQueue } from "@/components/dashboard/ReinforcementQueue";
import { AlertPanel } from "@/components/dashboard/AlertPanel";

const Overview = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Banner */}
      <div className="gradient-primary rounded-xl p-6 md:p-8 text-white shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Discord Bot Dashboard 🤖
        </h1>
        <p className="text-white/90 text-sm md:text-base">
          Monitoring reinforcements, alerts, and community health in real-time
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Active Reinforcements"
          value="12"
          change="4 queued, 8 in progress"
          changeType="neutral"
          icon={Activity}
        />
        <MetricCard
          title="Avg Response Time"
          value="8.5min"
          change="-12% from last week"
          changeType="positive"
          icon={Clock}
        />
        <MetricCard
          title="Active Alerts"
          value="3"
          change="2 urgent, 1 warning"
          changeType="negative"
          icon={AlertCircle}
        />
        <MetricCard
          title="Completion Rate"
          value="94.2%"
          change="+5.1% from yesterday"
          changeType="positive"
          icon={CheckCircle2}
        />
      </div>

      {/* Alerts & Queue Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertPanel />
        <ReinforcementQueue />
      </div>

      {/* Activity Feed */}
      <ActivityFeed />
    </div>
  );
};

export default Overview;
