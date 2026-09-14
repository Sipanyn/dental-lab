import {
  Check,
  ClipboardCheck,
  FilePlus2,
  FileUp,
  Palette,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Activity = {
  id: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  icon: "created" | "review" | "design" | "file" | "completed";
};

type CaseActivityProps = {
  activities: Activity[];
};

function getActivityIcon(icon: Activity["icon"]) {
  switch (icon) {
    case "created":
      return FilePlus2;

    case "review":
      return ClipboardCheck;

    case "design":
      return Palette;

    case "file":
      return FileUp;

    case "completed":
      return Check;
  }
}

export function CaseActivity({ activities }: CaseActivityProps) {
  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <CardTitle className="text-base">تاریخچه کیس</CardTitle>
      </CardHeader>

      <CardContent>
        {activities.length === 0 ? (
          <div className="flex h-24 items-center justify-center text-sm text-muted-foreground">
            هنوز فعالیتی برای این کیس ثبت نشده است.
          </div>
        ) : (
          <div className="relative space-y-0">
            {activities.map((activity, index) => {
              const ActivityIcon = getActivityIcon(activity.icon);

              const isLast = index === activities.length - 1;

              return (
                <div
                  key={activity.id}
                  className="relative flex gap-4 pb-6 last:pb-0"
                >
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute right-4 top-9 h-[calc(100%-1rem)] w-px bg-border" />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary">
                    <ActivityIcon className="size-4" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-sm font-medium">{activity.title}</p>

                      <div className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                        <span>{activity.date}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>

                    {activity.description && (
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {activity.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
