import {
  BriefcaseBusiness,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react";

import { doctors } from "@/data/doctors";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Doctor = (typeof doctors)[number];

type DoctorInfoProps = {
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

export default function DoctorInfo({ doctor }: DoctorInfoProps) {
  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card className="border-border/60 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">اطلاعات تماس</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-3">
              <Phone className="mt-0.5 size-4 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">شماره موبایل</p>

                <p className="mt-1 font-medium">{doctor.phone}</p>
              </div>
            </div>

            {doctor.officePhone && (
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-4 text-muted-foreground" />

                <div>
                  <p className="text-sm text-muted-foreground">تلفن مطب</p>

                  <p className="mt-1 font-medium">{doctor.officePhone}</p>
                </div>
              </div>
            )}

            {doctor.email && (
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-4 text-muted-foreground" />

                <div>
                  <p className="text-sm text-muted-foreground">ایمیل</p>

                  <p className="mt-1 font-medium">{doctor.email}</p>
                </div>
              </div>
            )}

            {doctor.address && (
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-4 text-muted-foreground" />

                <div>
                  <p className="text-sm text-muted-foreground">آدرس مطب</p>

                  <p className="mt-1 font-medium">{doctor.address}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Collaboration Information */}
      <Card className="border-border/60 shadow-none">
        <CardHeader>
          <CardTitle className="text-base">اطلاعات همکاری</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-3">
              <Stethoscope className="mt-0.5 size-4 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">تخصص</p>

                <p className="mt-1 font-medium">{doctor.specialty}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CalendarDays className="mt-0.5 size-4 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">شروع همکاری</p>

                <p className="mt-1 font-medium">{doctor.collaborationSince}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <BriefcaseBusiness className="mt-0.5 size-4 text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">تعداد کیس‌ها</p>

                <p className="mt-1 font-medium">{doctor.cases}</p>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">وضعیت همکاری</p>

              <Badge
                variant="outline"
                className={`mt-2 ${getStatusClass(doctor.status)}`}
              >
                {doctor.status}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notes */}
      {doctor.notes && (
        <Card className="border-border/60 shadow-none">
          <CardHeader>
            <CardTitle className="text-base">یادداشت‌ها</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-sm leading-6 text-muted-foreground">
              {doctor.notes}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
