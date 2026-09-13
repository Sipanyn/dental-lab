import { Doctor01Icon } from "@/components/icons/hugeicons-doctor-01";
import {
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  Settings,
  UserRoundGroup,
  Users,
} from "lucide-react";

export const menuItems = [
  {
    title: "داشبورد",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "کیس‌ها",
    url: "/cases",
    icon: ClipboardList,
  },
  {
    title: "پزشکان",
    url: "/doctors",
    icon: Doctor01Icon,
  },
  {
    title: "بیماران",
    url: "/patients",
    icon: Users,
  },
  {
    title: "تکنسین‌ها",
    url: "/technicians",
    icon: UserRoundGroup,
  },
  {
    title: "گزارش‌ها",
    url: "/reports",
    icon: BarChart3,
  },
];

export const settingsItems = [
  {
    title: "تنظیمات",
    url: "/settings",
    icon: Settings,
    children: [
      {
        title: "عمومی",
        url: "/settings/general",
      },
      {
        title: "تیم",
        url: "/settings/team",
      },
    ],
  },
];
