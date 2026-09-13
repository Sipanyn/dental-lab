import { notFound } from "next/navigation";

import { PatientDetailsHeader } from "@/components/patients/patient-details-header";
import { PatientInfo } from "@/components/patients/patient-info";

import { patients } from "@/data/patients";
import { cases } from "@/data/cases";
import { PatientCases } from "@/components/cases/patient-cases";

export default async function PatientDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const patient = patients.find((patient) => patient.id === id);

  if (!patient) {
    notFound();
  }

  const patientCases = cases.filter(
    (currentCase) => currentCase.patientId === patient.id,
  );

  return (
    <div className="space-y-6">
      <PatientDetailsHeader patient={patient} />

      <PatientInfo patient={patient} />

      <PatientCases cases={patientCases} />
    </div>
  );
}
