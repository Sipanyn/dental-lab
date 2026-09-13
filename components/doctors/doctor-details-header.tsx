import Link from "next/link";
import { ArrowLeft, Stethoscope } from "lucide-react";

import { doctors } from "@/data/doctors";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Doctor01Icon } from "../icons/hugeicons-doctor-01";

type Doctor = (typeof doctors)[number];

type DoctorDetailsHeaderProps = {
  doctor: Doctor;
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

export default function DoctorDetailsHeader({
  doctor,
}: DoctorDetailsHeaderProps) {
  return (
    <div className="space-y-4 flex flex-row justify-between">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Doctor01Icon />
        </div>

        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">{doctor.name}</h1>

            <Badge variant="outline" className={getStatusClass(doctor.status)}>
              {doctor.status}
            </Badge>
          </div>

          <p className="mt-1 text-sm text-muted-foreground">
            کد پزشک: {doctor.id}
          </p>
        </div>
      </div>
      {/* Back */}
      <Button
        variant="ghost"
        className="group h-8 gap-2 px-2 text-muted-foreground"
      >
        <Link href="/doctors" className="flex items-center gap-2">
          بازگشت
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
        </Link>
      </Button>
    </div>
  );
}
