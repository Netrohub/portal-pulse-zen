import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, AlertTriangle, Info, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Alert Data Structure
 * 
 * Represents a single alert/incident from the Discord bot.
 * 
 * @example
 * ```json
 * {
 *   "id": "alert_456",
 *   "type": "urgent",
 *   "title": "High Message Volume Spike",
 *   "description": "Detected 150+ messages/min in #general",
 *   "channel": "#general",
 *   "timestamp": "2m ago"
 * }
 * ```
 */
interface Alert {
  /** Unique alert identifier */
  id: string;
  
  /** Alert severity level - affects color and icon */
  type: "info" | "warning" | "urgent" | "resolved";
  
  /** Short alert title */
  title: string;
  
  /** Detailed description of the alert */
  description: string;
  
  /** Discord channel where alert originated */
  channel: string;
  
  /** Optional user mention if alert is user-specific */
  user?: string;
  
  /** Relative time string (e.g., "2m ago") */
  timestamp: string;
}

const alerts: Alert[] = [
  {
    id: "1",
    type: "urgent",
    title: "High Message Volume Spike",
    description: "Detected 150+ messages/min in #general - possible raid or incident",
    channel: "#general",
    timestamp: "2m ago",
  },
  {
    id: "2",
    type: "warning",
    title: "Keyword Alert: Harassment",
    description: "Multiple reports of inappropriate behavior detected",
    channel: "#support",
    user: "User_12345",
    timestamp: "8m ago",
  },
  {
    id: "3",
    type: "info",
    title: "New Member Surge",
    description: "15 new members joined in the last hour",
    channel: "#welcome",
    timestamp: "15m ago",
  },
];

const alertConfig = {
  info: {
    icon: Info,
    color: "bg-primary/10 text-primary border-primary/20",
    badgeColor: "bg-primary/10 text-primary border-primary/20",
  },
  warning: {
    icon: AlertTriangle,
    color: "bg-warning/10 text-warning border-warning/20",
    badgeColor: "bg-warning/10 text-warning border-warning/20",
  },
  urgent: {
    icon: AlertCircle,
    color: "bg-destructive/10 text-destructive border-destructive/20",
    badgeColor: "bg-destructive/10 text-destructive border-destructive/20",
  },
  resolved: {
    icon: XCircle,
    color: "bg-success/10 text-success border-success/20",
    badgeColor: "bg-success/10 text-success border-success/20",
  },
};

export const AlertPanel = () => {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl">Active Alerts</CardTitle>
        <Button variant="ghost" size="sm" className="text-xs">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert) => {
          const config = alertConfig[alert.type];
          const Icon = config.icon;

          return (
            <div
              key={alert.id}
              className={`p-4 rounded-lg border ${config.color} transition-smooth hover:shadow-sm`}
            >
              <div className="flex items-start gap-3">
                <Icon className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-semibold">{alert.title}</h4>
                    <Badge variant="outline" className={`${config.badgeColor} text-xs`}>
                      {alert.type.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-xs mb-2">{alert.description}</p>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-medium">{alert.channel}</span>
                    {alert.user && (
                      <>
                        <span>•</span>
                        <span>{alert.user}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{alert.timestamp}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" className="h-7 text-xs flex-1">
                  Investigate
                </Button>
                <Button variant="ghost" size="sm" className="h-7 text-xs">
                  Dismiss
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};
