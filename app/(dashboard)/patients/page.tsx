import { PatientsHeader } from "@/components/patients/patients-header";
import PatientsTable from "@/components/patients/patients-table";

import { patients } from "@/data/patients";

export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <PatientsHeader />

      <PatientsTable patients={patients} />
    </div>
  );
}
