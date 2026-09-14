"use client";

import { useState } from "react";

import { CaseFiles } from "@/components/cases/case-files";
import { CaseNotes } from "@/components/cases/case-notes";
import { CaseActivity } from "@/components/cases/case-activity";
import { CaseActions } from "@/components/cases/case-actions";

import type { Case } from "@/data/cases";
import type { CaseFile } from "@/data/case-files";
import type { CaseActivity as CaseActivityType } from "@/data/case-activities";
import CaseDetailsHeader from "./case-details-header";
import CaseInfoCard from "./case-info-card";
import CaseWorkflow from "./case-workflow";

type CaseDetailsClientProps = {
  currentCase: Case;
  files: CaseFile[];
  activities: CaseActivityType[];
};

export function CaseDetailsClient({
  currentCase,
  files,
  activities,
}: CaseDetailsClientProps) {
  const [status, setStatus] = useState(currentCase.status);

  return (
    <div className="space-y-6">
      <CaseDetailsHeader
        caseId={currentCase.id}
        patient={currentCase.patient}
        doctor={currentCase.doctor}
        status={status}
      />

      <div className="rounded-xl border border-border/60 bg-card">
        <CaseWorkflow status={status} />
      </div>

      <CaseInfoCard
        caseId={currentCase.id}
        patientId={currentCase.patientId}
        patient={currentCase.patient}
        doctorId={currentCase.doctorId}
        doctor={currentCase.doctor}
        type={currentCase.type}
        status={status}
        createdAt={currentCase.createdAt}
        dueDate={currentCase.dueDate}
      />

      <CaseFiles files={files} />

      <CaseNotes
        notes={currentCase.notes}
        instructions={currentCase.instructions}
      />

      <CaseActivity activities={activities} />

      <CaseActions status={status} onStatusChange={setStatus} />
    </div>
  );
}
