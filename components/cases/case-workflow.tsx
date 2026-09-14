import { CardContent } from "@/components/ui/card";
import { getCurrentStep, workflowSteps } from "@/data/workflowSteps";
type CaseWorkflowProps = { status: string };

export default function CaseWorkflow({ status }: CaseWorkflowProps) {
  const currentStep = getCurrentStep(status);
  return (
    <CardContent>
      {" "}
      <div className="flex w-full items-start">
        {" "}
        {workflowSteps.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          return (
            <div
              key={step.id}
              className="relative flex min-w-0 flex-1 flex-col items-center"
            >
              {" "}
              {/* Step + connector row */}{" "}
              <div className="relative flex w-full items-center">
                {" "}
                {/* Left connector */}{" "}
                {index > 0 && (
                  <div
                    className={` absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 ${index <= currentStep ? "bg-primary" : "bg-border"} `}
                  />
                )}{" "}
                {/* Right connector */}{" "}
                {index < workflowSteps.length - 1 && (
                  <div
                    className={` absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 ${isCompleted ? "bg-primary" : "bg-border"} `}
                  />
                )}{" "}
                {/* Step icon */}{" "}
                <div
                  className={` relative z-10 mx-auto flex size-9 shrink-0 items-center justify-center rounded-full border ${isCompleted || isCurrent ? "border-primary bg-primary text-primary-foreground" : "border-border bg-muted text-muted-foreground"} `}
                >
                  {" "}
                  <StepIcon className="size-4" />{" "}
                </div>{" "}
              </div>{" "}
              {/* Step text */}{" "}
              <div className="mt-3 w-full text-center">
                {" "}
                <p
                  className={` text-sm font-medium ${isCurrent ? "text-primary" : ""} `}
                >
                  {" "}
                  {step.title}{" "}
                </p>{" "}
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {" "}
                  {step.description}{" "}
                </p>{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </div>{" "}
    </CardContent>
  );
}
