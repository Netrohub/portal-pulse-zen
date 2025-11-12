import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserPlus } from "lucide-react";
import { ModWorkloadCard } from "@/components/dashboard/ModWorkloadCard";

const moderators = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Lead Moderator",
    activeAssignments: 8,
    completedToday: 12,
    avgResponseTime: "6.2min",
    status: "online" as const,
    responseScore: 96,
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    role: "Senior Moderator",
    activeAssignments: 5,
    completedToday: 9,
    avgResponseTime: "8.5min",
    status: "online" as const,
    responseScore: 92,
  },
  {
    id: "3",
    name: "Emma Thompson",
    role: "Moderator",
    activeAssignments: 3,
    completedToday: 7,
    avgResponseTime: "11.3min",
    status: "away" as const,
    responseScore: 88,
  },
  {
    id: "4",
    name: "James Wilson",
    role: "Junior Moderator",
    activeAssignments: 2,
    completedToday: 5,
    avgResponseTime: "14.7min",
    status: "offline" as const,
    responseScore: 85,
  },
];

const Team = () => {
  const [inviteOpen, setInviteOpen] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Moderator Team</h1>
          <p className="text-muted-foreground mt-1">
            Monitor workload, performance, and assign reinforcements
          </p>
        </div>

        <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary text-white">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Moderator
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Moderator</DialogTitle>
              <DialogDescription>
                Invite a moderator to help manage the Discord community
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Discord Username</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="username#0000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="moderator">
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lead">Lead Moderator</SelectItem>
                    <SelectItem value="senior">Senior Moderator</SelectItem>
                    <SelectItem value="moderator">Moderator</SelectItem>
                    <SelectItem value="junior">Junior Moderator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setInviteOpen(false)}>
                Cancel
              </Button>
              <Button className="gradient-primary text-white">
                Send Invite
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Moderator Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {moderators.map((mod) => (
          <ModWorkloadCard key={mod.id} {...mod} />
        ))}
      </div>
    </div>
  );
};

export default Team;
