import Link from "next/link";
import { ArrowLeft, Glasses } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CaseNotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="w-full max-w-md border-border/60 shadow-none">
        <CardHeader className="text-center">
          <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-muted">
            <Glasses className="size-6 text-muted-foreground" />
          </div>

          <CardTitle>بیمار پیدا نشد</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 text-center">
          <p className="text-sm text-muted-foreground">
            بیمار موردنظر وجود ندارد یا ممکن است حذف شده باشد.
          </p>

          <Button variant="outline">
            <Link href="/cases" className="flex items-center gap-1.5">
              بازگشت
              <ArrowLeft className="size-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
