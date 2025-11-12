import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Clock, AlertCircle, Paperclip } from "lucide-react";

interface ReinforcementCardProps {
  id: string;
  user: string;
  request: string;
  priority: "low" | "medium" | "high" | "urgent";
  status: "queued" | "in_progress" | "completed";
  assignee?: string;
  tags?: string[];
  timestamp: string;
  hasAttachment?: boolean;
}

const priorityConfig = {
  low: { color: "bg-muted text-muted-foreground border-border", label: "Low" },
  medium: { color: "bg-primary/10 text-primary border-primary/20", label: "Medium" },
  high: { color: "bg-warning/10 text-warning border-warning/20", label: "High" },
  urgent: { color: "bg-destructive/10 text-destructive border-destructive/20", label: "Urgent" },
};

const statusConfig = {
  queued: { color: "bg-muted text-muted-foreground border-border", label: "Queued" },
  in_progress: { color: "bg-primary/10 text-primary border-primary/20", label: "In Progress" },
  completed: { color: "bg-success/10 text-success border-success/20", label: "Completed" },
};

export const ReinforcementCard = ({
  user,
  request,
  priority,
  status,
  assignee,
  tags,
  timestamp,
  hasAttachment,
}: ReinforcementCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-hover transition-smooth">
      <CardContent className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <Avatar className="w-8 h-8 flex-shrink-0">
              <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                {user.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium truncate">{user}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>{timestamp}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge variant="outline" className={priorityConfig[priority].color}>
              {priorityConfig[priority].label}
            </Badge>
          </div>
        </div>

        {/* Request */}
        <p className="text-sm mb-3 line-clamp-2">{request}</p>

        {/* Footer */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-border">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className={statusConfig[status].color}>
              {statusConfig[status].label}
            </Badge>
            {tags?.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {hasAttachment && <Paperclip className="w-3 h-3 text-muted-foreground" />}
          </div>
          {assignee ? (
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="hidden sm:inline">Assigned:</span>
              <span className="font-medium">{assignee}</span>
            </div>
          ) : (
            <Button variant="outline" size="sm" className="h-7 text-xs">
              Assign
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
