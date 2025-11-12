import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TopBarProps {
  onMenuClick: () => void;
}

export const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Left: Menu Button (mobile) + Search */}
        <div className="flex items-center gap-2 flex-1 max-w-2xl">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5" />
          </Button>

          <div className="relative flex-1 hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-secondary/50 border-0 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Right: Notifications + Profile */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
          </Button>

          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              JD
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
