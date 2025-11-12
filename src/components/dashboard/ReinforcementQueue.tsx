import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReinforcementCard } from "./ReinforcementCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const mockReinforcements = [
  {
    id: "1",
    user: "Alex_Chen",
    request: "Need help with Docker setup - getting permission errors on volume mounts",
    priority: "high" as const,
    status: "queued" as const,
    tags: ["technical", "docker"],
    timestamp: "5m ago",
    hasAttachment: true,
  },
  {
    id: "2",
    user: "Sara_K",
    request: "Can someone review my PR for the new authentication flow?",
    priority: "medium" as const,
    status: "in_progress" as const,
    assignee: "Mike_R",
    tags: ["code-review"],
    timestamp: "12m ago",
  },
  {
    id: "3",
    user: "Jordan_P",
    request: "Question about best practices for state management in our project",
    priority: "low" as const,
    status: "queued" as const,
    tags: ["question"],
    timestamp: "23m ago",
  },
  {
    id: "4",
    user: "Taylor_M",
    request: "Urgent: Production deployment failing on CI/CD pipeline",
    priority: "urgent" as const,
    status: "in_progress" as const,
    assignee: "Sarah_C",
    tags: ["urgent", "deployment"],
    timestamp: "2m ago",
    hasAttachment: true,
  },
];

export const ReinforcementQueue = () => {
  const queued = mockReinforcements.filter((r) => r.status === "queued");
  const inProgress = mockReinforcements.filter((r) => r.status === "in_progress");

  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-xl">Reinforcement Queue</CardTitle>
        <Button size="sm" className="gradient-primary text-white">
          <Plus className="w-4 h-4 mr-1.5" />
          <span className="hidden sm:inline">New Request</span>
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="queued" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="queued" className="text-xs sm:text-sm">
              Queued ({queued.length})
            </TabsTrigger>
            <TabsTrigger value="in_progress" className="text-xs sm:text-sm">
              In Progress ({inProgress.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="queued" className="space-y-3 mt-0">
            {queued.length > 0 ? (
              queued.map((reinforcement) => (
                <ReinforcementCard key={reinforcement.id} {...reinforcement} />
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No queued reinforcements
              </div>
            )}
          </TabsContent>

          <TabsContent value="in_progress" className="space-y-3 mt-0">
            {inProgress.length > 0 ? (
              inProgress.map((reinforcement) => (
                <ReinforcementCard key={reinforcement.id} {...reinforcement} />
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No reinforcements in progress
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
