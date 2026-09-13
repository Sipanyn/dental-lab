"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      className="group h-8 gap-2 px-2 text-muted-foreground cursor-pointer"
      onClick={() => router.back()}
    >
      بازگشت
      <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
    </Button>
  );
}
