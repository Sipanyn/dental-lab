import { CalendarDays, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { Doctor01Icon } from "@/components/icons/hugeicons-doctor-01";
import { DentalCrown1Icon } from "@/components/icons/streamline-ultimate-dental-crown-1";
import { OdontologyImplantOutlineIcon } from "@/components/icons/healthicons-odontology-implant-outline";
import { DentalIcon } from "@/components/icons/akar-icons-dental";

type CaseInfoCardProps = {
  patient: string;
  doctor: string;
  type: string;
  status: string;
  dueDate: string;
};

function TypeIcon({ type }: { type: string }) {
  switch (type) {
    case "Crown":
      return <DentalCrown1Icon className="size-4 text-muted-foreground" />;

    case "Implant":
      return (
        <OdontologyImplantOutlineIcon className="size-4 text-muted-foreground" />
      );

    default:
      return <DentalIcon className="size-4 text-muted-foreground" />;
  }
}

function getStatusClass(status: string) {
  switch (status) {
    case "در حال طراحی":
      return "bg-purple-100 text-purple-700 border-purple-200";

    case "در حال بررسی":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";

    case "در حال تولید":
      return "bg-blue-100 text-blue-700 border-blue-200";

    case "کنترل کیفیت":
      return "bg-orange-100 text-orange-700 border-orange-200";

    case "تکمیل شده":
      return "bg-green-100 text-green-700 border-green-200";

    default:
      return "bg-muted text-muted-foreground";
  }
}

export default function CaseInfoCard({
  patient,
  doctor,
  type,
  status,
  dueDate,
}: CaseInfoCardProps) {
  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <CardTitle className="text-base">اطلاعات کیس</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {/* Patient */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">بیمار</p>

            <div className="flex items-center gap-2 text-sm font-medium">
              <User className="size-4 text-muted-foreground" />
              {patient}
            </div>
          </div>

          {/* Doctor */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">پزشک</p>

            <div className="flex items-center gap-2 text-sm font-medium">
              <Doctor01Icon className="size-4 text-muted-foreground" />
              {doctor}
            </div>
          </div>

          {/* Work Type */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">نوع کار</p>

            <Badge variant="outline" className="gap-1.5 p-2">
              <TypeIcon type={type} />
              {type}
            </Badge>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">وضعیت</p>

            <Badge variant="outline" className={getStatusClass(status)}>
              {status}
            </Badge>
          </div>

          {/* Due Date */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">موعد تحویل</p>

            <div className="flex items-center gap-2 text-sm font-medium">
              <CalendarDays className="size-4 text-muted-foreground" />
              {dueDate}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
