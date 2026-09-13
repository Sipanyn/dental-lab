import {
  CalendarDays,
  MapPin,
  Phone,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { Patient } from "@/data/patients";
import { englishToPersianNumber } from "@/lib/utils";

type PatientInfoProps = {
  patient: Patient;
};

export function PatientInfo({ patient }: PatientInfoProps) {
  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <CardTitle className="text-base">اطلاعات بیمار</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Phone className="size-4" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">شماره تماس</p>

              <p className="mt-1 font-medium" dir="ltr">
                {patient.phone}
              </p>
            </div>
          </div>

          {/* Age */}
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <UserRound className="size-4" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">سن</p>

              <p className="mt-1 font-medium">
                {englishToPersianNumber(patient.age)} سال
              </p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <UserRound className="size-4" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">جنسیت</p>

              <p className="mt-1 font-medium">{patient.gender}</p>
            </div>
          </div>

          {/* Doctor */}
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Stethoscope className="size-4" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">پزشک</p>

              <p className="mt-1 font-medium">{patient.doctor}</p>
            </div>
          </div>

          {/* Cases */}
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CalendarDays className="size-4" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">تعداد کیس</p>

              <p className="mt-1 font-medium">
                {englishToPersianNumber(patient.cases)} کیس
              </p>
            </div>
          </div>

          {/* Last Case */}
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CalendarDays className="size-4" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">آخرین کیس</p>

              <p className="mt-1 font-medium">
                {englishToPersianNumber(patient.lastCaseDate)}
              </p>
            </div>
          </div>

          {/* Created At */}
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <CalendarDays className="size-4" />
            </div>

            <div>
              <p className="text-xs text-muted-foreground">تاریخ ثبت بیمار</p>

              <p className="mt-1 font-medium">
                {englishToPersianNumber(patient.createdAt)}
              </p>
            </div>
          </div>

          {/* Address */}
          {patient.address && (
            <div className="flex items-start gap-3 sm:col-span-2">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="size-4" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">آدرس</p>

                <p className="mt-1 font-medium">{patient.address}</p>
              </div>
            </div>
          )}
        </div>

        {/* Notes */}
        {patient.notes && (
          <div className="mt-6 border-t pt-6">
            <p className="text-xs text-muted-foreground">یادداشت</p>

            <p className="mt-2 text-sm leading-6">{patient.notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
