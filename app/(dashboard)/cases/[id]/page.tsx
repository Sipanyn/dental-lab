import { notFound } from "next/navigation";
import { CaseDetailsClient } from "@/components/cases/case-details-client";
import { cases } from "@/data/cases";
import { caseFiles } from "@/data/case-files";
import { caseActivities } from "@/data/case-activities";
type CaseDetailsPageProps = { params: Promise<{ id: string }> };
export default async function CaseDetailsPage({
  params,
}: CaseDetailsPageProps) {
  const { id } = await params;
  const currentCase = cases.find((item) => item.id === id);
  if (!currentCase) {
    notFound();
  }
  const files = caseFiles.filter((file) => file.caseId === currentCase.id);
  const activities = caseActivities.filter(
    (activity) => activity.caseId === currentCase.id,
  );
  return (
    <CaseDetailsClient
      currentCase={currentCase}
      files={files}
      activities={activities}
    />
  );
}
