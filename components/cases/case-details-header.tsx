import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackButton } from "../shared/back-button";

type CaseDetailsHeaderProps = {
  caseId: string;
  patient: string;
  doctor: string;
  status: string;
};

function getStatusClass(status: string) {
  switch (status) {
    case "در حال طراحی":
      return "bg-purple-100 text-purple-700 border-purple-200";

    case "در حال بررسی":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";

    case "در حال تولید":
      return "bg-blue-100 text-blue-700 border-blue-200";

    case "کنترل کیفیت":
      return "bg-orange-100 text-orange-700 border-orange-200";

    case "تکمیل شده":
      return "bg-green-100 text-green-700 border-green-200";

    default:
      return "bg-muted text-muted-foreground";
  }
}

export default function CaseDetailsHeader({
  caseId,
  patient,
  doctor,
  status,
}: CaseDetailsHeaderProps) {
  return (
    <div className="space-y-4 flex flex-row justify-between">
      {/* Case Info Summary */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">کیس #{caseId}</h1>

            <Badge variant="outline" className={getStatusClass(status)}>
              {status}
            </Badge>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{patient}</span>
            <span>•</span>
            <span>{doctor}</span>
          </div>
        </div>
      </div>
      {/* Back */}
      <BackButton />
    </div>
  );
}
