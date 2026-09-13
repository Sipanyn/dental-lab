import {
  Check,
  ClipboardCheck,
  FilePlus2,
  Hammer,
  Palette,
  PackageCheck,
} from "lucide-react";

import { CardContent } from "@/components/ui/card";

type CaseWorkflowProps = {
  status: string;
};

const workflowSteps = [
  {
    id: "created",
    title: "ثبت کیس",
    description: "کیس توسط پزشک ثبت شد",
    icon: FilePlus2,
  },
  {
    id: "review",
    title: "بررسی اولیه",
    description: "اطلاعات و فایل‌های کیس بررسی می‌شوند",
    icon: ClipboardCheck,
  },
  {
    id: "design",
    title: "طراحی",
    description: "طراحی ترمیم انجام می‌شود",
    icon: Palette,
  },
  {
    id: "production",
    title: "تولید",
    description: "فرآیند ساخت ترمیم",
    icon: Hammer,
  },
  {
    id: "quality",
    title: "کنترل کیفیت",
    description: "محصول نهایی بررسی می‌شود",
    icon: Check,
  },
  {
    id: "completed",
    title: "تکمیل شده",
    description: "کیس آماده تحویل است",
    icon: PackageCheck,
  },
];
function getCurrentStep(status: string) {
  switch (status) {
    case "در حال طراحی":
      return 2;

    case "در حال تولید":
      return 3;

    case "کنترل کیفیت":
      return 4;

    case "تکمیل شده":
      return 5;

    case "در حال بررسی":
      return 1;

    default:
      return 0;
  }
}
export default function CaseWorkflow({ status }: CaseWorkflowProps) {
  const currentStep = getCurrentStep(status);

  return (
    <CardContent>
      <div className="flex w-full items-start">
        {workflowSteps.map((step, index) => {
          const StepIcon = step.icon;

          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div key={step.id} className="flex flex-1 items-start">
              {/* Step */}
              <div className="flex min-w-0 flex-col items-center text-center">
                <div
                  className={`
                flex size-9 shrink-0 items-center justify-center rounded-full border
                ${
                  isCompleted || isCurrent
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-muted text-muted-foreground"
                }
              `}
                >
                  <StepIcon className="size-4" />
                </div>

                <div className="mt-3">
                  <p
                    className={`text-sm font-medium ${
                      isCurrent ? "text-primary" : ""
                    }`}
                  >
                    {step.title}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector */}
              {index < workflowSteps.length - 1 && (
                <div
                  className={`
                mt-4.5 h-px flex-1
                ${isCompleted ? "bg-primary" : "bg-border"}
              `}
                />
              )}
            </div>
          );
        })}
      </div>
    </CardContent>
  );
}
