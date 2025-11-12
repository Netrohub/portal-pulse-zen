import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface AlertItem {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  description: string;
}

const alerts: AlertItem[] = [
  {
    id: "1",
    type: "success",
    title: "System Update",
    description: "All systems running smoothly with 99.9% uptime",
  },
  {
    id: "2",
    type: "warning",
    title: "Low Response Time",
    description: "Average response time increased by 15% in the last hour",
  },
];

const alertConfig = {
  info: { icon: Info, className: "border-primary/50 bg-primary/5 text-primary" },
  success: { icon: CheckCircle, className: "border-success/50 bg-success/5 text-success" },
  warning: { icon: AlertCircle, className: "border-warning/50 bg-warning/5 text-warning" },
  error: { icon: XCircle, className: "border-destructive/50 bg-destructive/5 text-destructive" },
};

export const AlertsStrip = () => {
  return (
    <div className="space-y-3">
      {alerts.map((alert) => {
        const config = alertConfig[alert.type];
        const Icon = config.icon;

        return (
          <Alert key={alert.id} className={config.className}>
            <Icon className="h-4 w-4" />
            <AlertTitle className="text-sm font-medium">{alert.title}</AlertTitle>
            <AlertDescription className="text-sm">{alert.description}</AlertDescription>
          </Alert>
        );
      })}
    </div>
  );
};
