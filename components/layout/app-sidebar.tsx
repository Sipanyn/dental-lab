"use client";

import { useState } from "react";
import { UserRound, LogOut, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { menuItems, settingsItems } from "@/data/sidebar";

export default function AppSidebar() {
  const pathname = usePathname();

  const [openSettings, setOpenSettings] = useState(
    pathname.startsWith("/settings"),
  );

  return (
    <Sidebar side="right" variant="sidebar" collapsible="icon">
      {/* ================= HEADER ================= */}

      <SidebarHeader className="border-b">
        <div
          className=" flex items-center gap-3
      transition-all duration-200 "
        >
          {/* Logo */}
          <div
            className="
        flex size-8 shrink-0 items-center justify-center
        rounded-xl bg-primary text-primary-foreground
        shadow-sm"
          >
            <span className="text-base font-bold">Y</span>
          </div>

          {/* Brand */}
          <div
            className="
        flex min-w-0 flex-col
        group-data-[collapsible=icon]:hidden"
          >
            <span className="truncate text-sm font-bold">لابراتوار یاشام</span>

            <span className="truncate text-xs text-muted-foreground">
              مدیریت لابراتوار
            </span>
          </div>
        </div>
      </SidebarHeader>

      {/* ================= CONTENT ================= */}

      <SidebarContent>
        {/* ================= MAIN MENU ================= */}

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs">
            منوی اصلی
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {menuItems.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.title}
                      render={<Link href={item.url} />}
                      className="h-10
                                 rounded-lg
                                 px-3
                                  text-sm
                                 font-medium
                                 transition-colors
                                 cursor-pointer"
                    >
                      <item.icon className="size-4 shrink-0" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* ================= SYSTEM ================= */}

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-xs">سیستم</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {settingsItems.map((item) => {
                const isActive = pathname.startsWith(item.url);

                return (
                  <SidebarMenuItem key={item.title}>
                    {/* ================= SETTINGS BUTTON ================= */}

                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={item.title}
                      className="
                        h-10
                        rounded-lg
                        px-3
                        text-sm
                        font-medium
                        cursor-pointer
                      "
                      onClick={() => setOpenSettings(!openSettings)}
                    >
                      <item.icon className="size-4 shrink-0" />

                      <span>{item.title}</span>

                      {/* Chevron */}

                      <ChevronLeft
                        className={`
                          mr-auto
                          size-4
                          opacity-70
                          transition-transform
                          duration-200
                          ${openSettings ? "-rotate-90" : "rotate-0"}
                        `}
                      />
                    </SidebarMenuButton>

                    {/* ================= SUBMENU ================= */}

                    {openSettings && (
                      <SidebarMenuSub>
                        {item.children.map((child) => {
                          const isChildActive = pathname === child.url;

                          return (
                            <SidebarMenuSubItem
                              className="cursor-pointer"
                              key={child.title}
                            >
                              <SidebarMenuSubButton
                                render={<a href={child.url} />}
                                isActive={isChildActive}
                              >
                                {child.title}
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ================= FOOTER ================= */}

      <SidebarFooter className="border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="h-11 rounded-lg"
              tooltip="مدیریت حساب"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-muted">
                <UserRound className="size-4" />
              </div>

              <div className="flex min-w-0 flex-1 flex-col text-right">
                <span className="truncate text-sm font-medium">مدیر سیستم</span>

                <span className="truncate text-xs text-muted-foreground">
                  مدیریت حساب
                </span>
              </div>

              <LogOut className="size-4 text-muted-foreground" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
