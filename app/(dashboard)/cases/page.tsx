import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import CasesTable from "@/components/cases/cases-table";
import { cases } from "@/data/cases";

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
