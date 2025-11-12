import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Activity {
  id: string;
  user: string;
  action: string;
  timestamp: string;
  status: "success" | "pending" | "error";
}

const activities: Activity[] = [
  {
    id: "1",
    user: "Sarah Chen",
    action: "Completed reinforcement training session",
    timestamp: "2 minutes ago",
    status: "success",
  },
  {
    id: "2",
    user: "Mike Rodriguez",
    action: "Started new reinforcement cycle",
    timestamp: "15 minutes ago",
    status: "pending",
  },
  {
    id: "3",
    user: "Emma Thompson",
    action: "Updated team member permissions",
    timestamp: "1 hour ago",
    status: "success",
  },
  {
    id: "4",
    user: "James Wilson",
    action: "Failed to complete training module",
    timestamp: "2 hours ago",
    status: "error",
  },
];

const statusConfig = {
  success: { color: "bg-success/10 text-success border-success/20", label: "Success" },
  pending: { color: "bg-warning/10 text-warning border-warning/20", label: "Pending" },
  error: { color: "bg-destructive/10 text-destructive border-destructive/20", label: "Error" },
};

export const ActivityFeed = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
          >
            <Avatar className="w-9 h-9">
              <AvatarFallback className="text-xs bg-secondary text-foreground">
                {activity.user.split(" ").map((n) => n[0]).join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium">{activity.user}</p>
              <p className="text-sm text-muted-foreground truncate">
                {activity.action}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {activity.timestamp}
              </p>
            </div>
            <Badge
              variant="outline"
              className={statusConfig[activity.status].color}
            >
              {statusConfig[activity.status].label}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
