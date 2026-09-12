import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import DoctorsTable from "@/components/doctors/doctors-table";
import { doctors } from "@/data/doctors";

export default function DoctorsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">پزشکان</h1>

          <p className="mt-1 text-sm text-muted-foreground">
            مدیریت دندانپزشکان طرف قرارداد با لابراتوار
          </p>
        </div>

        <Button>
          <Plus className="size-4" />
          افزودن پزشک
        </Button>
      </div>

      <DoctorsTable doctors={doctors} />
    </div>
  );
}
