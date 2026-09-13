import { notFound } from "next/navigation";

import CaseDetailsHeader from "@/components/cases/case-details-header";
import CaseInfoCard from "@/components/cases/case-info-card";
import CaseWorkflow from "@/components/cases/case-workflow";
import { cases } from "@/data/cases";

type CaseDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function CaseDetailsPage({
  params,
}: CaseDetailsPageProps) {
  const { id } = await params;

  const currentCase = cases.find((item) => item.id === id);

  if (!currentCase) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <CaseDetailsHeader
        caseId={currentCase.id}
        patient={currentCase.patient}
        doctor={currentCase.doctor}
        status={currentCase.status}
      />

      <CaseInfoCard
        patient={currentCase.patient}
        doctor={currentCase.doctor}
        type={currentCase.type}
        status={currentCase.status}
        dueDate={currentCase.dueDate}
      />
      <CaseWorkflow status={currentCase.status} />
    </div>
  );
}
