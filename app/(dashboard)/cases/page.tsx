import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import CasesTable from "@/components/cases/cases-table";

const cases = [
  {
    id: "1042",
    patient: "علی رضایی",
    doctor: "دکتر احمدی",
    type: "Crown",
    typeIcon: "crown",
    status: "در حال طراحی",
    dueDate: "۱۴۰۵/۰۶/۲۲",
  },
  {
    id: "1041",
    patient: "مریم کریمی",
    doctor: "دکتر محمدی",
    type: "Bridge",
    typeIcon: "dental",
    status: "در حال تولید",
    dueDate: "۱۴۰۵/۰۶/۲۱",
  },
  {
    id: "1040",
    patient: "رضا مرادی",
    doctor: "دکتر حسینی",
    type: "Implant",
    typeIcon: "implant",
    status: "تکمیل شده",
    dueDate: "۱۴۰۵/۰۶/۱۹",
  },
  {
    id: "1039",
    patient: "سارا احمدی",
    doctor: "دکتر کریمی",
    type: "Veneer",
    typeIcon: "dental",
    status: "در حال بررسی",
    dueDate: "۱۴۰۵/۰۶/۲۳",
  },
  {
    id: "1038",
    patient: "محمد نادری",
    doctor: "دکتر رضایی",
    type: "Crown",
    typeIcon: "crown",
    status: "کنترل کیفیت",
    dueDate: "۱۴۰۵/۰۶/۲۰",
  },
];

export default function CasesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight">کیس‌ها</h1>

          <p className="text-sm text-muted-foreground">
            مدیریت و پیگیری کیس‌های لابراتوار
          </p>
        </div>

        <Button>
          <Plus className="size-4" />
          کیس جدید
        </Button>
      </div>

      <CasesTable cases={cases} />
    </div>
  );
}
