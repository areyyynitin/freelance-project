import { useState } from "react";
import {
  Home, ChevronUp, ChevronDown, Cake, Heart, Baby,
  PartyPopper, Star, Armchair, User
} from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarMenu,
  SidebarMenuItem, SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  Collapsible, CollapsibleTrigger, CollapsibleContent,
} from "@/components/ui/collapsible";
import Link from "next/link";

export function AppSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <Sidebar>
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center">
          <Star className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-medium leading-none">DecoStudio</p>
          <p className="text-xs text-muted-foreground mt-0.5">Event Decorations</p>
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Overview
          </p>
          <SidebarMenu>

            {/* Dashboard */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/dashboard" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Dashboard
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Events
          </p>
          <SidebarMenu>

            {/* Birthday */}
            <SidebarMenuItem>
              <Collapsible open={openMenu === "birthday"} onOpenChange={() => toggleMenu("birthday")}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2 w-full">
                    <Cake className="w-4 h-4" />
                    <span className="flex-1 text-left">Birthday</span>
                    {openMenu === "birthday" ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-1 space-y-1 border-l border-border pl-3">
                  <SidebarMenuButton asChild><Link href="/birthday/girls">Girls Birthday</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/birthday/boys">Boys Birthday</Link></SidebarMenuButton>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            {/* Baby Events */}
            <SidebarMenuItem>
              <Collapsible open={openMenu === "baby"} onOpenChange={() => toggleMenu("baby")}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2 w-full">
                    <Baby className="w-4 h-4" />
                    <span className="flex-1 text-left">Baby Events</span>
                    {openMenu === "baby" ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-1 space-y-1 border-l border-border pl-3">
                  <SidebarMenuButton asChild><Link href="/baby-shower">Baby Shower</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/baby-welcome">Baby Welcome</Link></SidebarMenuButton>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            {/* Wedding & Romantic */}
            <SidebarMenuItem>
              <Collapsible open={openMenu === "wedding"} onOpenChange={() => toggleMenu("wedding")}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2 w-full">
                    <Heart className="w-4 h-4" />
                    <span className="flex-1 text-left">Wedding & Romantic</span>
                    {openMenu === "wedding" ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-1 space-y-1 border-l border-border pl-3">
                  <SidebarMenuButton asChild><Link href="/wedding">Wedding</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/proposal">Proposal Decor</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/candle-light">Candle Light</Link></SidebarMenuButton>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            {/* Party & Events */}
            <SidebarMenuItem>
              <Collapsible open={openMenu === "party"} onOpenChange={() => toggleMenu("party")}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2 w-full">
                    <PartyPopper className="w-4 h-4" />
                    <span className="flex-1 text-left">Party & Events</span>
                    {openMenu === "party" ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-1 space-y-1 border-l border-border pl-3">
                  <SidebarMenuButton asChild><Link href="/bachelorette">Bachelorette</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/corporate-events">Corporate Events</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/ceremony">Ceremony</Link></SidebarMenuButton>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

            {/* Kids Special */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/kids-special" className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  Kids Special
                  <span className="ml-auto text-[10px] font-semibold bg-pink-100 text-pink-600 px-2 py-0.5 rounded-full">New</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Decor Types
          </p>
          <SidebarMenu>

            {/* Decor Types */}
            <SidebarMenuItem>
              <Collapsible open={openMenu === "decor"} onOpenChange={() => toggleMenu("decor")}>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="flex items-center gap-2 w-full">
                    <Armchair className="w-4 h-4" />
                    <span className="flex-1 text-left">Decor Types</span>
                    {openMenu === "decor" ? <ChevronUp className="w-4 h-4 ml-auto" /> : <ChevronDown className="w-4 h-4 ml-auto" />}
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-6 mt-1 space-y-1 border-l border-border pl-3">
                  <SidebarMenuButton asChild><Link href="/room-decor">Room Decor</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/canopy-decor">Canopy Decor</Link></SidebarMenuButton>
                  <SidebarMenuButton asChild><Link href="/car-boot-decor">Car Boot Decor</Link></SidebarMenuButton>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>

          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <div className="mt-auto border-t border-border px-3 py-3">
        <SidebarMenuButton asChild>
          <Link href="/account" className="flex items-center gap-2 text-muted-foreground">
            <User className="w-4 h-4" />
            Account
          </Link>
        </SidebarMenuButton>
      </div>
    </Sidebar>
  );
}