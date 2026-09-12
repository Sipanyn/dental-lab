import { notFound } from "next/navigation";

import CaseDetailsHeader from "@/components/cases/case-details-header";
import CaseInfoCard from "@/components/cases/case-info-card";
import CaseWorkflow from "@/components/cases/case-workflow";

const cases = [
  {
    id: "1042",
    patient: "علی رضایی",
    doctor: "دکتر احمدی",
    type: "Crown",
    status: "در حال طراحی",
    dueDate: "۱۴۰۵/۰۶/۲۲",
  },
  {
    id: "1041",
    patient: "مریم کریمی",
    doctor: "دکتر محمدی",
    type: "Bridge",
    status: "در حال تولید",
    dueDate: "۱۴۰۵/۰۶/۲۱",
  },
  {
    id: "1040",
    patient: "رضا مرادی",
    doctor: "دکتر حسینی",
    type: "Implant",
    status: "تکمیل شده",
    dueDate: "۱۴۰۵/۰۶/۱۹",
  },
  {
    id: "1039",
    patient: "سارا احمدی",
    doctor: "دکتر کریمی",
    type: "Veneer",
    status: "در حال بررسی",
    dueDate: "۱۴۰۵/۰۶/۲۳",
  },
  {
    id: "1038",
    patient: "محمد نادری",
    doctor: "دکتر رضایی",
    type: "Crown",
    status: "کنترل کیفیت",
    dueDate: "۱۴۰۵/۰۶/۲۰",
  },
];

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
