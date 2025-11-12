import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle2, Circle } from "lucide-react";

interface StatusCount {
  label: string;
  count: number;
  icon: typeof Circle;
  color: string;
}

const statusCounts: StatusCount[] = [
  { label: "Pending", count: 12, icon: Clock, color: "text-warning" },
  { label: "In Progress", count: 8, icon: Circle, color: "text-primary" },
  { label: "Completed", count: 45, icon: CheckCircle2, color: "text-success" },
];

export const ReinforcementStatus = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Reinforcement Status</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {statusCounts.map((status) => {
            const Icon = status.icon;
            return (
              <div
                key={status.label}
                className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/50"
              >
                <Icon className={`w-6 h-6 ${status.color} mb-2`} />
                <p className="text-2xl font-semibold">{status.count}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {status.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="pt-4 space-y-2">
          <Button className="w-full gradient-primary text-white">
            Start New Session
          </Button>
          <Button variant="outline" className="w-full">
            View All Sessions
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
