import Link from "next/link";

import {
  CalendarDays,
  ExternalLink,
  MapPin,
  Phone,
  Stethoscope,
  UserRound,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { Patient } from "@/data/patients";
import { doctors } from "@/data/doctors";
import { englishToPersianNumber } from "@/lib/utils";
import { Doctor01Icon } from "../icons/hugeicons-doctor-01";
import { DentalIcon } from "../icons/akar-icons-dental";

type PatientInfoProps = {
  patient: Patient;
};

export function PatientInfo({ patient }: PatientInfoProps) {
  const doctor = doctors.find(
    (currentDoctor) => currentDoctor.id === patient.doctorId,
  );

  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <CardTitle className="text-base">اطلاعات بیمار</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 size-4 text-muted-foreground" />

            <div>
              <p className="text-xs text-muted-foreground">شماره تماس</p>

              <p className="mt-1 text-sm font-medium">
                {englishToPersianNumber(patient.phone)}
              </p>
            </div>
          </div>

          {/* Age */}
          <div className="flex items-start gap-3">
            <UserRound className="mt-0.5 size-4 text-muted-foreground" />

            <div>
              <p className="text-xs text-muted-foreground">سن</p>

              <p className="mt-1 text-sm font-medium">
                {englishToPersianNumber(patient.age)} سال
              </p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-start gap-3">
            <UserRound className="mt-0.5 size-4 text-muted-foreground" />

            <div>
              <p className="text-xs text-muted-foreground">جنسیت</p>

              <p className="mt-1 text-sm font-medium">{patient.gender}</p>
            </div>
          </div>

          {/* Doctor */}
          <div className="flex items-start gap-3">
            <Doctor01Icon className="mt-0.5 size-4 text-muted-foreground" />

            <div>
              <p className="text-xs text-muted-foreground">پزشک</p>
              <Link
                href={`/doctors/${patient.doctorId}`}
                className="group flex w-fit items-center gap-2 text-sm font-medium"
              >
                <span className="transition-colors group-hover:text-primary">
                  {patient.doctor}
                </span>

                <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-primary" />
              </Link>
            </div>
          </div>

          {/* Cases */}
          <div className="flex items-start gap-3">
            <DentalIcon className="mt-0.5 size-4 text-muted-foreground" />

            <div>
              <p className="text-xs text-muted-foreground">تعداد کیس</p>

              <p className="mt-1 text-sm font-medium">
                {englishToPersianNumber(patient.cases)} کیس
              </p>
            </div>
          </div>

          {/* Last Case */}
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 size-4 text-muted-foreground" />

            <div>
              <p className="text-xs text-muted-foreground">آخرین کیس</p>

              <p className="mt-1 text-sm font-medium">
                {englishToPersianNumber(patient.lastCaseDate)}
              </p>
            </div>
          </div>

          {/* Created At */}
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 size-4 text-muted-foreground" />

            <div>
              <p className="text-xs text-muted-foreground">تاریخ ثبت بیمار</p>

              <p className="mt-1 text-sm font-medium">
                {englishToPersianNumber(patient.createdAt)}
              </p>
            </div>
          </div>

          {/* Address */}
          {patient.address && (
            <div className="flex items-start gap-3 sm:col-span-2">
              <MapPin className="mt-0.5 size-4 text-muted-foreground" />

              <div>
                <p className="text-xs text-muted-foreground">آدرس</p>

                <p className="mt-1 text-sm font-medium">{patient.address}</p>
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
