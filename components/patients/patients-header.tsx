import { Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PatientsHeader() {
  return (
    <div className="flex items-center justify-between">
      {/* Title */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Users className="size-5" />
        </div>

        <div>
          <h1 className="text-2xl font-semibold">بیماران</h1>
          <p className="text-sm text-muted-foreground">
            مدیریت اطلاعات و پرونده بیماران
          </p>
        </div>
      </div>

      {/* Action */}
      <Button>
        <Plus className="size-4" />
        افزودن بیمار
      </Button>
    </div>
  );
}
