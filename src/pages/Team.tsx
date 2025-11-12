import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { UserPlus, MoreVertical } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "admin" | "member" | "viewer";
  status: "active" | "pending" | "inactive";
  lastLogin: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    role: "admin",
    status: "active",
    lastLogin: "2 hours ago",
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    email: "mike.rodriguez@company.com",
    role: "member",
    status: "active",
    lastLogin: "1 day ago",
  },
  {
    id: "3",
    name: "Emma Thompson",
    email: "emma.thompson@company.com",
    role: "member",
    status: "active",
    lastLogin: "3 hours ago",
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james.wilson@company.com",
    role: "viewer",
    status: "pending",
    lastLogin: "Never",
  },
];

const roleConfig = {
  admin: { color: "bg-accent/10 text-accent border-accent/20", label: "Admin" },
  member: { color: "bg-primary/10 text-primary border-primary/20", label: "Member" },
  viewer: { color: "bg-muted/50 text-muted-foreground border-border", label: "Viewer" },
};

const statusConfig = {
  active: { color: "bg-success/10 text-success border-success/20", label: "Active" },
  pending: { color: "bg-warning/10 text-warning border-warning/20", label: "Pending" },
  inactive: { color: "bg-destructive/10 text-destructive border-destructive/20", label: "Inactive" },
};

const Team = () => {
  const [inviteOpen, setInviteOpen] = useState(false);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Team Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your team members and permissions
          </p>
        </div>

        <Dialog open={inviteOpen} onOpenChange={setInviteOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary text-white">
              <UserPlus className="w-4 h-4 mr-2" />
              Invite Member
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Invite Team Member</DialogTitle>
              <DialogDescription>
                Send an invitation to join your team
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="colleague@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="member">
                  <SelectTrigger id="role">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="member">Member</SelectItem>
                    <SelectItem value="viewer">Viewer</SelectItem>
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

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map((member) => (
          <Card key={member.id} className="shadow-card hover:shadow-hover transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {member.email}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={roleConfig[member.role].color}>
                    {roleConfig[member.role].label}
                  </Badge>
                  <Badge variant="outline" className={statusConfig[member.status].color}>
                    {statusConfig[member.status].label}
                  </Badge>
                </div>

                <div className="pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    Last login: {member.lastLogin}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
