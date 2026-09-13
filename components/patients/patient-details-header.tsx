import Link from "next/link";

import { ArrowLeft, UserRound } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import type { Patient } from "@/data/patients";

import { cases } from "@/data/cases";
import { getPatientStatus } from "@/lib/utils";

type PatientDetailsHeaderProps = {
  patient: Patient;
};

function getStatusClass(status: string) {
  switch (status) {
    case "فعال":
      return "border-green-200 bg-green-100 text-green-700";

    case "غیرفعال":
      return "border-muted bg-muted text-muted-foreground";

    default:
      return "bg-muted text-muted-foreground";
  }
}

export function PatientDetailsHeader({ patient }: PatientDetailsHeaderProps) {
  const status = getPatientStatus(patient.id, cases);

  return (
    <div className="flex flex-row justify-between">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <UserRound className="size-5" />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">
              {patient.name}
            </h1>

            <Badge variant="outline" className={getStatusClass(status)}>
              {status}
            </Badge>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            کد بیمار: {patient.id}
          </p>
        </div>
      </div>

      {/* Back */}
      <Button
        variant="ghost"
        className="group h-8 gap-2 px-2 text-muted-foreground"
        nativeButton={false}
        render={
          <Link href="/patients" className="flex items-center gap-2">
            بازگشت
            <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
          </Link>
        }
      />
    </div>
  );
}
