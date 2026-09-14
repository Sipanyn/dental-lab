"use client";
import { Check, Hammer, Palette, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type CaseActionsProps = {
  status: string;
  onStatusChange: (newStatus: string) => void;
};
function getNextAction(status: string) {
  switch (status) {
    case "در حال بررسی":
      return { label: "شروع طراحی", nextStatus: "در حال طراحی", icon: Palette };
    case "در حال طراحی":
      return {
        label: "انتقال به تولید",
        nextStatus: "در حال تولید",
        icon: Hammer,
      };
    case "در حال تولید":
      return {
        label: "ارسال برای کنترل کیفیت",
        nextStatus: "کنترل کیفیت",
        icon: ShieldCheck,
      };
    case "کنترل کیفیت":
      return {
        label: "تأیید و تکمیل کیس",
        nextStatus: "تکمیل شده",
        icon: Check,
      };
    default:
      return null;
  }
}
export function CaseActions({ status, onStatusChange }: CaseActionsProps) {
  const nextAction = getNextAction(status);
  if (!nextAction) {
    return null;
  }
  const ActionIcon = nextAction.icon;
  return (
    <Card className="border-border/60 shadow-none">
      {" "}
      <CardHeader>
        {" "}
        <CardTitle className="text-base"> اقدامات کیس </CardTitle>{" "}
      </CardHeader>{" "}
      <CardContent>
        {" "}
        <div className="flex items-center justify-between gap-4 rounded-lg border bg-muted/30 p-4">
          {" "}
          <div>
            {" "}
            <p className="text-sm font-medium"> مرحله بعدی </p>{" "}
            <p className="mt-1 text-sm text-muted-foreground">
              {" "}
              این کیس آماده انتقال به مرحله بعد است.{" "}
            </p>{" "}
          </div>{" "}
          <Button onClick={() => onStatusChange(nextAction.nextStatus)}>
            {" "}
            <ActionIcon className="size-4" /> {nextAction.label}{" "}
          </Button>{" "}
        </div>{" "}
      </CardContent>{" "}
    </Card>
  );
}
