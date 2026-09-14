import {
  Check,
  ClipboardCheck,
  FilePlus2,
  Hammer,
  PackageCheck,
  Palette,
} from "lucide-react";

export const workflowSteps = [
  {
    id: "created",
    title: "ثبت کیس",
    description: "کیس توسط پزشک ثبت شد",
    icon: FilePlus2,
  },
  {
    id: "review",
    title: "بررسی اولیه",
    description: "اطلاعات و فایل‌های کیس بررسی می‌شوند",
    icon: ClipboardCheck,
  },
  {
    id: "design",
    title: "طراحی",
    description: "طراحی ترمیم انجام می‌شود",
    icon: Palette,
  },
  {
    id: "production",
    title: "تولید",
    description: "فرآیند ساخت ترمیم",
    icon: Hammer,
  },
  {
    id: "quality",
    title: "کنترل کیفیت",
    description: "محصول نهایی بررسی می‌شود",
    icon: Check,
  },
  {
    id: "completed",
    title: "تکمیل شده",
    description: "کیس آماده تحویل است",
    icon: PackageCheck,
  },
];

export function getCurrentStep(status: string) {
  switch (status) {
    case "در حال بررسی":
      return 1;
    case "در حال طراحی":
      return 2;
    case "در حال تولید":
      return 3;
    case "کنترل کیفیت":
      return 4;
    case "تکمیل شده":
      return 5;
    default:
      return 0;
  }
}
