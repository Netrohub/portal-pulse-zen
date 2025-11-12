import { ReinforcementQueue } from "@/components/dashboard/ReinforcementQueue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const Reinforcements = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Reinforcement Queue</h1>
          <p className="text-muted-foreground mt-1">
            Manage and assign reinforcement requests from the community
          </p>
        </div>
        <Button variant="outline" className="self-start md:self-center">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </Button>
      </div>

      {/* Queue Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">Total Today</p>
            <p className="text-2xl font-bold">47</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">Avg Time</p>
            <p className="text-2xl font-bold">8.5m</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">Completed</p>
            <p className="text-2xl font-bold text-success">35</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground mb-1">Overdue</p>
            <p className="text-2xl font-bold text-destructive">2</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Queue */}
      <ReinforcementQueue />

      {/* Recent Activity */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { mod: "Sarah_C", action: "completed", request: "Docker help", time: "2m ago" },
              { mod: "Mike_R", action: "assigned to", request: "PR review", time: "8m ago" },
              { mod: "Emma_T", action: "started", request: "State management Q", time: "15m ago" },
            ].map((activity, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{activity.mod}</span>
                  <span className="text-sm text-muted-foreground">{activity.action}</span>
                  <span className="text-sm font-medium">"{activity.request}"</span>
                </div>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reinforcements;
