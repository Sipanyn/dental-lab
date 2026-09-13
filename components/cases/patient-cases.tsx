import Link from "next/link";

import { ArrowLeft, ClipboardList } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import type { Case } from "@/data/cases";
import { englishToPersianNumber } from "@/lib/utils";

type PatientCasesProps = {
  cases: Case[];
};

function getStatusClass(status: string) {
  switch (status) {
    case "تکمیل شده":
      return "border-green-200 bg-green-100 text-green-700";

    case "در حال تولید":
      return "border-blue-200 bg-blue-100 text-blue-700";

    case "در حال طراحی":
      return "border-purple-200 bg-purple-100 text-purple-700";

    case "کنترل کیفیت":
      return "border-yellow-200 bg-yellow-100 text-yellow-700";

    case "در حال بررسی":
      return "border-orange-200 bg-orange-100 text-orange-700";

    default:
      return "bg-muted text-muted-foreground";
  }
}

export function PatientCases({ cases }: PatientCasesProps) {
  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <div className="flex items-center gap-2">
          <ClipboardList className="size-5 text-primary" />

          <CardTitle className="text-base">کیس‌های بیمار</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        {cases.length === 0 ? (
          <div className="flex h-24 items-center justify-center text-sm text-muted-foreground">
            هنوز کیسی برای این بیمار ثبت نشده است.
          </div>
        ) : (
          <div className="divide-y">
            {cases.map((currentCase) => (
              <div
                key={currentCase.id}
                className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
              >
                {/* Case Info */}
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <ClipboardList className="size-4" />
                  </div>

                  <div className="min-w-0">
                    <p className="font-medium">
                      کیس #{englishToPersianNumber(currentCase.id)}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {currentCase.type} · {currentCase.doctor}
                    </p>
                  </div>
                </div>

                {/* Status + Action */}
                <div className="flex shrink-0 items-center gap-3">
                  <Badge
                    variant="outline"
                    className={getStatusClass(currentCase.status)}
                  >
                    {currentCase.status}
                  </Badge>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="size-8"
                    nativeButton={false}
                    render={
                      <Link href={`/cases/${currentCase.id}`}>
                        <ArrowLeft className="size-4" />
                      </Link>
                    }
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
