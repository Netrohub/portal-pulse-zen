# Design Assets & Visual Polish

## 🎨 Design System Overview

All visual design is implemented through CSS variables in `src/index.css`. No external assets are required - everything is code-based for maximum flexibility and maintainability.

---

## 📐 Spacing Scale

Based on 4px grid system:

```css
/* Tailwind spacing classes available */
p-1  → 4px    p-2  → 8px     p-3  → 12px
p-4  → 16px   p-5  → 20px    p-6  → 24px
p-8  → 32px   p-10 → 40px    p-12 → 48px
p-16 → 64px   p-20 → 80px    p-24 → 96px
```

**Component Padding Standards:**
- Cards: `p-6` (24px)
- Buttons: `px-4 py-2` (16px horizontal, 8px vertical)
- Page margins: `p-4 md:p-6 lg:p-8` (responsive)
- Bottom spacing for mobile nav: `pb-20` (80px)

---

## 🎨 Color Palette

### Light Mode
```css
Background:     hsl(210, 20%, 98%)   #F8F9FB
Foreground:     hsl(220, 15%, 20%)   #2A2E3A
Primary:        hsl(215, 80%, 58%)   #3B82F6
Accent:         hsl(265, 75%, 65%)   #A855F7
Success:        hsl(145, 65%, 50%)   #22C55E
Warning:        hsl(40, 95%, 55%)    #F59E0B
Destructive:    hsl(0, 75%, 58%)     #EF4444
```

### Dark Mode
```css
Background:     hsl(220, 20%, 12%)   #1A1D23
Foreground:     hsl(210, 20%, 95%)   #F1F3F5
Primary:        hsl(215, 85%, 65%)   #60A5FA
Accent:         hsl(265, 80%, 70%)   #C084FC
Success:        hsl(145, 60%, 45%)   #16A34A
Warning:        hsl(40, 90%, 50%)    #D97706
Destructive:    hsl(0, 70%, 55%)     #DC2626
```

---

## ✨ Gradients

### Primary Gradient
```css
/* Used for: Hero banners, CTA buttons, highlights */
background: linear-gradient(135deg, hsl(215 80% 58%) 0%, hsl(265 75% 65%) 100%);
/* #3B82F6 → #A855F7 */
```

### Card Gradient
```css
/* Used for: Card backgrounds (subtle depth) */
background: linear-gradient(135deg, hsl(0 0% 100%) 0%, hsl(210 20% 99%) 100%);
/* Pure white → Very light blue */
```

### Subtle Gradient
```css
/* Used for: Page backgrounds, section dividers */
background: linear-gradient(180deg, hsl(210 25% 98%) 0%, hsl(215 25% 96%) 100%);
/* Light gradient for depth */
```

**Usage in Components:**
```tsx
<div className="gradient-primary">Primary gradient</div>
<div className="gradient-card">Card gradient</div>
<div className="gradient-subtle">Subtle gradient</div>
```

---

## 🌑 Shadows

### Shadow Levels
```css
/* sm - Subtle elevation */
shadow-sm: 0 1px 2px 0 hsl(220 15% 20% / 0.05)

/* md - Default card elevation */
shadow-md: 0 4px 6px -1px hsl(220 15% 20% / 0.08)

/* lg - Elevated cards */
shadow-lg: 0 10px 15px -3px hsl(220 15% 20% / 0.08)

/* xl - Modals, overlays */
shadow-xl: 0 20px 25px -5px hsl(220 15% 20% / 0.08)

/* card - Standard card shadow */
shadow-card: 0 2px 8px -1px hsl(220 15% 20% / 0.06)

/* hover - Interactive hover state */
shadow-hover: 0 8px 16px -4px hsl(220 15% 20% / 0.1)
```

**Usage:**
```tsx
<Card className="shadow-card hover:shadow-hover transition-smooth">
  /* Card lifts on hover */
</Card>
```

---

## 🎭 Animations & Transitions

### Transition Speeds
```css
/* Smooth - Default interactions */
transition-smooth: all 0.2s cubic-bezier(0.4, 0, 0.2, 1)

/* Spring - Playful bounce effect */
transition-spring: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)
```

### Predefined Animations
```css
/* Fade in on page load */
animate-fade-in: fade-in 0.3s ease-out

/* Scale in for modals */
animate-scale-in: scale-in 0.2s ease-out

/* Slide in from right */
animate-slide-in-right: slide-in-right 0.3s ease-out

/* Accordion expand */
animate-accordion-down: accordion-down 0.2s ease-out
```

**Usage:**
```tsx
<div className="animate-fade-in">
  {/* Page content fades in smoothly */}
</div>

<Card className="transition-smooth hover:scale-105">
  {/* Card scales on hover */}
</Card>
```

---

## 🔤 Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Heading Scale (Responsive)
```css
/* H1 */
Mobile:  text-3xl (1.875rem / 30px)
Tablet:  text-4xl (2.25rem / 36px)
Desktop: text-5xl (3rem / 48px)

/* H2 */
Mobile:  text-2xl (1.5rem / 24px)
Tablet:  text-3xl (1.875rem / 30px)
Desktop: text-4xl (2.25rem / 36px)

/* H3 */
Mobile:  text-xl (1.25rem / 20px)
Tablet:  text-2xl (1.5rem / 24px)
Desktop: text-3xl (1.875rem / 30px)
```

### Text Styles
```css
Body:           text-base (1rem / 16px)
Small:          text-sm (0.875rem / 14px)
Tiny:           text-xs (0.75rem / 12px)

Font Weights:
Regular:        font-normal (400)
Medium:         font-medium (500)
Semibold:       font-semibold (600)
Bold:           font-bold (700)
```

---

## 🖼️ Icon System

### Icon Library
**Lucide React** - Tree-shakeable, consistent 24×24 grid

**Common Icons Used:**
```tsx
// Navigation
import { LayoutDashboard, BarChart3, Users, ListChecks } from "lucide-react";

// Status
import { CheckCircle2, Clock, AlertCircle, Circle } from "lucide-react";

// Actions
import { Plus, Filter, Search, Menu, MoreVertical } from "lucide-react";

// UI
import { Bell, X, ChevronDown, Paperclip } from "lucide-react";
```

**Icon Sizing:**
```tsx
<Icon className="w-4 h-4" />  {/* 16px - Small buttons */}
<Icon className="w-5 h-5" />  {/* 20px - Default */}
<Icon className="w-6 h-6" />  {/* 24px - Large */}
<Icon className="w-8 h-8" />  {/* 32px - Feature icons */}
```

---

## 🎯 Component Visual Standards

### Cards
```tsx
<Card className="shadow-card hover:shadow-hover transition-smooth">
  {/* Standard card styling */}
</Card>

<Card className="gradient-card shadow-card">
  {/* Card with gradient background */}
</Card>
```

### Buttons
```tsx
{/* Primary CTA */}
<Button className="gradient-primary text-white">
  Primary Action
</Button>

{/* Secondary */}
<Button variant="outline">
  Secondary Action
</Button>

{/* Ghost (subtle) */}
<Button variant="ghost">
  Tertiary Action
</Button>
```

### Badges
```tsx
{/* Status badges with semantic colors */}
<Badge variant="outline" className="bg-success/10 text-success border-success/20">
  Active
</Badge>

<Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
  Pending
</Badge>

<Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
  Error
</Badge>
```

### Avatars
```tsx
<Avatar className="w-8 h-8">
  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
    JD
  </AvatarFallback>
</Avatar>
```

---

## 🎬 Motion Guidelines

### Hover States
```tsx
{/* Cards lift on hover */}
<Card className="hover:shadow-hover hover:-translate-y-0.5 transition-smooth">

{/* Buttons brighten */}
<Button className="hover:brightness-110 transition-smooth">

{/* Icons rotate */}
<Icon className="hover:rotate-90 transition-smooth" />
```

### Loading States
```tsx
{/* Skeleton pulse */}
<div className="h-4 bg-secondary/50 rounded animate-pulse" />

{/* Spinner (using lucide) */}
<Loader2 className="w-4 h-4 animate-spin" />
```

### Focus States
```tsx
{/* Inputs */}
<Input className="focus-visible:ring-primary focus-visible:ring-2" />

{/* Buttons */}
<Button className="focus-visible:ring-2 focus-visible:ring-ring" />
```

---

## 📱 Mobile-Specific Considerations

### Touch Targets
```css
/* Minimum 44×44px for mobile touch */
<Button size="icon" className="h-11 w-11">  {/* Mobile-friendly */}
<Button size="sm" className="h-9 px-4">     {/* Tablet+ */}
```

### Safe Areas
```tsx
{/* Bottom nav accounts for notch */}
<nav className="pb-safe">

{/* Top bar with status bar spacing */}
<header className="pt-safe">
```

### Scroll Behavior
```css
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Overscroll bounce (iOS) */
body {
  overscroll-behavior-y: contain;
}
```

---

## 🔧 Developer Tools

### Tailwind IntelliSense
Install VSCode extension: `bradlc.vscode-tailwindcss`

### Design Token Autocomplete
All CSS variables are available in Tailwind classes via `tailwind.config.ts`

### Dark Mode Testing
```tsx
{/* Force dark mode for testing */}
<html className="dark">
```

### Responsive Testing
Use browser DevTools or these breakpoints:
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad)
- Desktop: 1440px (Laptop)

---

## 📦 Export Assets (If Needed)

If you need to export static assets for external use:

**Logo/Branding:**
- Extract SVG from gradient-primary background
- Use figma-to-code or similar tools

**Screenshots:**
- Use browser DevTools device emulation
- Capture at standard breakpoints
- Save in `/public/screenshots/`

**Icons:**
- All icons from Lucide are SVG-based
- Import directly: `import { Icon } from "lucide-react"`

---

## ✅ Design Checklist

- [x] Responsive layout (mobile, tablet, desktop)
- [x] Design system tokens (colors, spacing, shadows)
- [x] Dark mode support
- [x] Gradient system
- [x] Animation/transition standards
- [x] Typography scale
- [x] Icon library integration
- [x] Component visual consistency
- [x] Touch-friendly mobile UI
- [x] Hover/focus states
- [x] Loading states
- [x] Error states

**All design elements are code-based - no external assets required!**
