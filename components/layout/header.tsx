"use client";

import { Bell, User } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-4">
      {/* Right side */}
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <Separator orientation="vertical" className="h-6" />

        <div>
          <h1 className="text-sm font-semibold">سیستم مدیریت لابراتوار</h1>

          <p className="text-xs text-muted-foreground">
            مدیریت و پیگیری کیس‌ها
          </p>
        </div>
      </div>

      {/* Left side */}
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">تغییر حالت روشن و تاریک</span>
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
          <span className="sr-only">اعلان‌ها</span>
        </Button>

        <Button variant="ghost" size="icon">
          <User />
          <span className="sr-only">پروفایل</span>
        </Button>
      </div>
    </header>
  );
}
