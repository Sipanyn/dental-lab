import { notFound } from "next/navigation";

import { doctors } from "@/data/doctors";

import DoctorDetailsHeader from "@/components/doctors/doctor-details-header";
import DoctorInfo from "@/components/doctors/doctor-info";

type DoctorDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function DoctorDetailsPage({
  params,
}: DoctorDetailsPageProps) {
  const { id } = await params;

  const doctor = doctors.find((doctor) => doctor.id === id);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <DoctorDetailsHeader doctor={doctor} />

      <DoctorInfo doctor={doctor} />
    </div>
  );
}
