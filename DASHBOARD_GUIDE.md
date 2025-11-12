# Discord Bot Dashboard - Integration Guide

## 📁 Architecture Overview

```
src/
├── components/
│   ├── layout/
│   │   ├── DashboardLayout.tsx    # Main app shell (sidebar + topbar + mobile nav)
│   │   ├── Sidebar.tsx            # Desktop sidebar navigation
│   │   ├── TopBar.tsx             # Header with search & notifications
│   │   └── MobileNav.tsx          # Bottom navigation (mobile only)
│   │
│   └── dashboard/
│       ├── MetricCard.tsx         # KPI display card
│       ├── ReinforcementCard.tsx  # Individual reinforcement request
│       ├── ReinforcementQueue.tsx # Tabbed queue (queued/in progress)
│       ├── AlertPanel.tsx         # Active alerts list
│       ├── AlertsStrip.tsx        # Compact alerts (legacy)
│       ├── ActivityFeed.tsx       # Bot action timeline
│       ├── ModWorkloadCard.tsx    # Moderator stats card
│       └── ReinforcementStatus.tsx # Status widget (legacy)
│
├── pages/
│   ├── Overview.tsx               # Main dashboard page
│   ├── Reinforcements.tsx         # Full queue management
│   ├── Analytics.tsx              # Charts & insights
│   └── Team.tsx                   # Mod workload & roster
│
└── index.css                      # Design system tokens
```

---

## 🎨 Design System Tokens

All defined in `src/index.css` - use semantic tokens, never hard-coded colors!

### Colors (HSL format)
```css
--primary: 215 80% 58%           /* Soft blue */
--accent: 265 75% 65%            /* Purple */
--success: 145 65% 50%           /* Green */
--warning: 40 95% 55%            /* Orange */
--destructive: 0 75% 58%         /* Red */
--background: 210 20% 98%        /* Light mode bg */
--foreground: 220 15% 20%        /* Light mode text */
```

### Gradients
```css
--gradient-primary: linear-gradient(135deg, hsl(215 80% 58%), hsl(265 75% 65%))
--gradient-card: linear-gradient(135deg, hsl(0 0% 100%), hsl(210 20% 99%))
--gradient-subtle: linear-gradient(180deg, hsl(210 25% 98%), hsl(215 25% 96%))
```

### Shadows
```css
--shadow-card: 0 2px 8px -1px hsl(220 15% 20% / 0.06)
--shadow-hover: 0 8px 16px -4px hsl(220 15% 20% / 0.1)
--shadow-sm/md/lg/xl: Various elevation levels
```

### Animations
```css
--transition-smooth: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)
--transition-spring: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
```

**Usage in components:**
```tsx
<div className="gradient-primary shadow-card transition-smooth">
  <p className="text-primary">Use semantic tokens</p>
</div>
```

---

## 📊 Data Contracts

### ReinforcementRequest
```typescript
interface ReinforcementRequest {
  id: string;                    // Unique identifier
  user: string;                  // Discord username
  request: string;               // Description text
  priority: "low" | "medium" | "high" | "urgent";
  status: "queued" | "in_progress" | "completed";
  assignee?: string;             // Mod username (optional)
  tags?: string[];               // ["technical", "docker", ...]
  timestamp: string;             // "5m ago" or ISO date
  hasAttachment?: boolean;       // True if files attached
}
```

**Example:**
```json
{
  "id": "req_123",
  "user": "Alex_Chen",
  "request": "Need help with Docker setup - getting permission errors",
  "priority": "high",
  "status": "queued",
  "tags": ["technical", "docker"],
  "timestamp": "5m ago",
  "hasAttachment": true
}
```

### Alert
```typescript
interface Alert {
  id: string;
  type: "info" | "warning" | "urgent" | "resolved";
  title: string;
  description: string;
  channel: string;               // "#general", "#support"
  user?: string;                 // Optional user mention
  timestamp: string;
}
```

**Example:**
```json
{
  "id": "alert_456",
  "type": "urgent",
  "title": "High Message Volume Spike",
  "description": "Detected 150+ messages/min in #general",
  "channel": "#general",
  "timestamp": "2m ago"
}
```

### Moderator
```typescript
interface Moderator {
  id: string;
  name: string;
  role: string;                  // "Lead Moderator", "Senior Moderator"
  activeAssignments: number;
  completedToday: number;
  avgResponseTime: string;       // "6.2min"
  status: "online" | "away" | "offline";
  responseScore: number;         // 0-100
}
```

**Example:**
```json
{
  "id": "mod_789",
  "name": "Sarah Chen",
  "role": "Lead Moderator",
  "activeAssignments": 8,
  "completedToday": 12,
  "avgResponseTime": "6.2min",
  "status": "online",
  "responseScore": 96
}
```

### Activity
```typescript
interface Activity {
  id: string;
  user: string;                  // Username who performed action
  action: string;                // Description of action
  timestamp: string;
  status: "success" | "pending" | "error";
}
```

### MetricCardProps
```typescript
interface MetricCardProps {
  title: string;                 // "Active Reinforcements"
  value: string | number;        // "12" or 12
  change?: string;               // "4 queued, 8 in progress"
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;              // From lucide-react
}
```

---

## 🔌 Component API

### ReinforcementCard
**Location:** `src/components/dashboard/ReinforcementCard.tsx`

**Props:**
```typescript
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
```

**Usage:**
```tsx
<ReinforcementCard
  id="req_123"
  user="Alex_Chen"
  request="Need help with Docker setup"
  priority="high"
  status="queued"
  tags={["technical", "docker"]}
  timestamp="5m ago"
  hasAttachment={true}
/>
```

---

### ReinforcementQueue
**Location:** `src/components/dashboard/ReinforcementQueue.tsx`

**Current State:** Uses mock data internally  
**TODO:** Accept `reinforcements` prop from API

**Expected Refactor:**
```tsx
interface ReinforcementQueueProps {
  reinforcements: ReinforcementRequest[];
  onCreateNew?: () => void;
}

// Usage:
<ReinforcementQueue 
  reinforcements={apiData}
  onCreateNew={() => openModal()}
/>
```

---

### AlertPanel
**Location:** `src/components/dashboard/AlertPanel.tsx`

**Current State:** Uses mock data internally  
**TODO:** Accept `alerts` prop from API

**Expected Refactor:**
```tsx
interface AlertPanelProps {
  alerts: Alert[];
  onInvestigate?: (alertId: string) => void;
  onDismiss?: (alertId: string) => void;
}
```

---

### ModWorkloadCard
**Location:** `src/components/dashboard/ModWorkloadCard.tsx`

**Props:** (Already complete)
```typescript
interface ModWorkloadCardProps {
  name: string;
  role: string;
  activeAssignments: number;
  completedToday: number;
  avgResponseTime: string;
  status: "online" | "away" | "offline";
  responseScore: number;
}
```

---

### MetricCard
**Location:** `src/components/dashboard/MetricCard.tsx`

**Props:** (Already complete)
```typescript
interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}
```

**Usage:**
```tsx
import { Activity } from "lucide-react";

<MetricCard
  title="Active Reinforcements"
  value={12}
  change="4 queued, 8 in progress"
  changeType="neutral"
  icon={Activity}
/>
```

---

### ActivityFeed
**Location:** `src/components/dashboard/ActivityFeed.tsx`

**Current State:** Uses mock data  
**Expected Props:**
```typescript
interface ActivityFeedProps {
  activities: Activity[];
}
```

---

## 🚀 Integration Steps

### 1. Connect Overview Page to API
**File:** `src/pages/Overview.tsx`

```tsx
import { useQuery } from "@tanstack/react-query";

const Overview = () => {
  // Fetch real data
  const { data: metrics } = useQuery({
    queryKey: ["metrics"],
    queryFn: () => fetch("/api/metrics").then(r => r.json())
  });

  const { data: alerts } = useQuery({
    queryKey: ["alerts"],
    queryFn: () => fetch("/api/alerts").then(r => r.json())
  });

  return (
    <div className="space-y-6">
      {/* Use real metrics */}
      <MetricCard
        title="Active Reinforcements"
        value={metrics?.activeReinforcements || 0}
        // ...
      />

      {/* Pass alerts to AlertPanel */}
      <AlertPanel alerts={alerts || []} />
    </div>
  );
};
```

### 2. Wire Up Reinforcement Queue
**File:** `src/components/dashboard/ReinforcementQueue.tsx`

**Refactor to accept props:**
```tsx
interface ReinforcementQueueProps {
  reinforcements: ReinforcementRequest[];
}

export const ReinforcementQueue = ({ reinforcements }: ReinforcementQueueProps) => {
  const queued = reinforcements.filter(r => r.status === "queued");
  const inProgress = reinforcements.filter(r => r.status === "in_progress");

  // Rest stays the same
};
```

**Then in page:**
```tsx
const { data: reinforcements } = useQuery({
  queryKey: ["reinforcements"],
  queryFn: () => fetch("/api/reinforcements").then(r => r.json())
});

<ReinforcementQueue reinforcements={reinforcements || []} />
```

### 3. Add WebSocket for Real-Time Updates
```tsx
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

const Overview = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const ws = new WebSocket("wss://your-api.com/ws");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === "reinforcement:created") {
        queryClient.invalidateQueries(["reinforcements"]);
      }

      if (data.type === "alert:triggered") {
        queryClient.invalidateQueries(["alerts"]);
      }
    };

    return () => ws.close();
  }, [queryClient]);

  // ...
};
```

---

## 📱 Responsive Breakpoints

**Mobile:** `< 640px`
- Bottom nav visible
- Cards stack vertically
- Sidebar as drawer

**Tablet:** `640px - 1024px`
- 2-column grids
- Bottom nav visible

**Desktop:** `≥ 1024px`
- 4-column grids
- Persistent sidebar
- Bottom nav hidden

**Usage:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Responsive grid */}
</div>
```

---

## 🎯 Next Steps

1. **Enable Backend** - Set up API endpoints for:
   - `GET /api/reinforcements`
   - `GET /api/alerts`
   - `GET /api/team`
   - `GET /api/metrics`
   - `GET /api/analytics/*`

2. **Refactor Components** - Update mock data components to accept props:
   - `ReinforcementQueue`
   - `AlertPanel`
   - `ActivityFeed`

3. **Add Actions** - Implement handlers:
   - Assign reinforcement to mod
   - Update reinforcement status
   - Dismiss alerts
   - Create new reinforcement

4. **Add Charts** - Replace placeholders in Analytics with Recharts:
   ```bash
   # Already installed: recharts@^2.15.4
   ```

5. **WebSocket Integration** - Real-time updates for:
   - New reinforcements
   - Alert triggers
   - Status changes
   - Mod availability

---

## 🐛 Common Issues

**Colors not working?**
- Check you're using semantic tokens: `bg-primary` not `bg-blue-500`
- Verify index.css is imported in main.tsx

**Layout broken on mobile?**
- Ensure `DashboardLayout` has `min-h-screen bg-background`
- Check `pb-20` on main content (space for bottom nav)

**Components not found?**
- Verify imports use `@/` alias (configured in vite.config.ts)

**Dark mode issues?**
- All colors must be HSL format in index.css
- Check `.dark` class tokens exist

---

## 📚 Resources

- **Shadcn UI Docs:** https://ui.shadcn.com
- **Lucide Icons:** https://lucide.dev
- **Tailwind CSS:** https://tailwindcss.com
- **React Router:** https://reactrouter.com
- **React Query:** https://tanstack.com/query

---

**Questions?** Check component source code - all props are typed with TypeScript interfaces!
