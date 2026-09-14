import Link from "next/link";

import { CalendarDays, ClipboardList, ExternalLink, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Doctor01Icon } from "@/components/icons/hugeicons-doctor-01";

import { DentalCrown1Icon } from "@/components/icons/streamline-ultimate-dental-crown-1";

import { OdontologyImplantOutlineIcon } from "@/components/icons/healthicons-odontology-implant-outline";

import { DentalIcon } from "@/components/icons/akar-icons-dental";
import { englishToPersianNumber } from "@/lib/utils";

type CaseInfoCardProps = {
  caseId: string;
  patientId: string;
  patient: string;
  doctorId: string;
  doctor: string;
  type: string;
  status: string;
  createdAt: string;
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
  caseId,
  patientId,
  patient,
  doctorId,
  doctor,
  type,
  status,
  createdAt,
  dueDate,
}: CaseInfoCardProps) {
  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <CardTitle className="text-base">اطلاعات کیس</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Case ID */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">شماره کیس</p>

            <div className="flex items-center gap-2 text-sm font-medium">
              <ClipboardList className="size-4 text-muted-foreground" />#
              {caseId}
            </div>
          </div>

          {/* Patient */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">بیمار</p>
            <Link
              href={`/patients/${patientId}`}
              className="group flex w-fit items-center gap-2 text-sm font-medium"
            >
              <Doctor01Icon className="size-4 text-muted-foreground" />

              <span className="transition-colors group-hover:text-primary">
                {patient}
              </span>

              <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary" />
            </Link>
          </div>

          {/* Doctor */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">پزشک</p>

            <Link
              href={`/doctors/${doctorId}`}
              className="group flex w-fit items-center gap-2 text-sm font-medium"
            >
              <Doctor01Icon className="size-4 text-muted-foreground" />

              <span className="transition-colors group-hover:text-primary">
                {doctor}
              </span>

              <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary" />
            </Link>
          </div>

          {/* Work Type */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">نوع کار</p>

            <Badge variant="outline" className="w-fit gap-1.5 p-2">
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

          {/* Created Date */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">تاریخ ثبت</p>

            <div className="flex items-center gap-2 text-sm font-medium">
              <CalendarDays className="size-4 text-muted-foreground" />

              {englishToPersianNumber(createdAt)}
            </div>
          </div>

          {/* Due Date */}
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">موعد تحویل</p>

            <div className="flex items-center gap-2 text-sm font-medium">
              <CalendarDays className="size-4 text-muted-foreground" />

              {englishToPersianNumber(dueDate)}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
