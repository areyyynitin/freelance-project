"use client";


import { AppSidebar } from "@/components/services/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full font-sans ">
      
        <AppSidebar />

        <main className="flex-1">
          <div className="p-4 border-b flex items-center justify-between gap-4">
            <SidebarTrigger />
          </div>

          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}