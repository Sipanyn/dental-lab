import { FileText, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type CaseNotesProps = { notes?: string; instructions?: string };
export function CaseNotes({ notes, instructions }: CaseNotesProps) {
  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <CardTitle className="text-base"> یادداشت و دستورالعمل </CardTitle>{" "}
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {/* Notes */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MessageSquare className="size-4 text-muted-foreground" />
              <h3 className="text-sm font-medium"> یادداشت لابراتوار </h3>
            </div>
            <div className="rounded-lg border bg-muted/30 p-4">
              {notes ? (
                <p className="text-sm leading-6 text-muted-foreground">
                  {" "}
                  {notes}{" "}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {" "}
                  یادداشتی ثبت نشده است.{" "}
                </p>
              )}
            </div>
          </div>{" "}
          {/* Instructions */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              {" "}
              <FileText className="size-4 text-muted-foreground" />
              <h3 className="text-sm font-medium"> دستورالعمل پزشک </h3>
            </div>
            <div className="rounded-lg border bg-muted/30 p-4">
              {instructions ? (
                <p className="text-sm leading-6 text-muted-foreground">
                  {instructions}
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  دستورالعملی ثبت نشده است.
                </p>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
