import { notFound } from "next/navigation";

import { doctors } from "@/data/doctors";
import { cases } from "@/data/cases";
import { getDoctorCases, getDoctorPatients } from "@/lib/utils";
import DoctorDetailsHeader from "@/components/doctors/doctor-details-header";
import DoctorInfo from "@/components/doctors/doctor-info";

export default async function DoctorDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const doctor = doctors.find((doctor) => doctor.id === id);

  if (!doctor) {
    notFound();
  }

  const doctorCases = getDoctorCases(doctor.id, cases);

  const doctorPatients = getDoctorPatients(doctor.id, cases);

  return (
    <div className="space-y-6">
      <DoctorDetailsHeader doctor={doctor} />

      <DoctorInfo doctor={doctor} />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Doctor Cases */}
        <div className="rounded-xl border border-border/60 bg-card p-6">
          <h2 className="mb-4 text-base font-semibold">کیس‌های پزشک</h2>

          {doctorCases.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              هنوز کیسی برای این پزشک ثبت نشده است.
            </p>
          ) : (
            <div className="space-y-3">
              {doctorCases.map((currentCase) => (
                <div
                  key={currentCase.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">کیس #{currentCase.id}</p>

                    <p className="text-sm text-muted-foreground">
                      {currentCase.patient} · {currentCase.type}
                    </p>
                  </div>

                  <span className="text-sm text-muted-foreground">
                    {currentCase.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Doctor Patients */}
        <div className="rounded-xl border border-border/60 bg-card p-6">
          <h2 className="mb-4 text-base font-semibold">بیماران پزشک</h2>

          {doctorPatients.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              هنوز بیماری برای این پزشک ثبت نشده است.
            </p>
          ) : (
            <div className="space-y-3">
              {doctorPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">{patient.name}</p>

                    <p className="text-xs text-muted-foreground">
                      {patient.id}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
