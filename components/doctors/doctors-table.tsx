"use client";

import { MoreHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

import { SearchInput } from "@/components/shared/search-input";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Doctor } from "@/data/doctors";
import { englishToPersianNumber } from "@/lib/utils";
import { Doctor01Icon } from "../icons/hugeicons-doctor-01";
import Link from "next/link";

type DoctorsTableProps = {
  doctors: Doctor[];
};

function getStatusClass(status: string) {
  switch (status) {
    case "فعال":
      return "border-green-200 bg-green-100 text-green-700";

    case "غیرفعال":
      return "border-muted bg-muted text-muted-foreground";

    default:
      return "bg-muted text-muted-foreground";
  }
}

export default function DoctorsTable({ doctors }: DoctorsTableProps) {
  const [search, setSearch] = useState("");

  const filteredDoctors = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return doctors.filter((doctor) => {
      return (
        doctor.name.toLowerCase().includes(normalizedSearch) ||
        doctor.phone.includes(normalizedSearch) ||
        doctor.id.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [doctors, search]);

  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-base">لیست پزشکان</CardTitle>

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="جستجوی پزشک..."
          />
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>پزشک</TableHead>
              <TableHead>شماره تماس</TableHead>
              <TableHead>تعداد کیس</TableHead>
              <TableHead>وضعیت</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredDoctors.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-32 text-center text-muted-foreground"
                >
                  پزشکی با این مشخصات پیدا نشد.
                </TableCell>
              </TableRow>
            ) : (
              filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Doctor01Icon className="size-4 text-muted-foreground" />
                      </div>

                      <div>
                        <p className="font-medium">{doctor.name}</p>

                        <p className="text-xs text-muted-foreground">
                          {doctor.id}
                        </p>
                      </div>
                    </div>
                  </TableCell>

                  <TableCell className="text-sm">{doctor.phone}</TableCell>

                  <TableCell>
                    <span className="font-medium">
                      {englishToPersianNumber(doctor.cases)}
                    </span>

                    <span className="mr-1 text-xs text-muted-foreground">
                      کیس
                    </span>
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant="outline"
                      className={getStatusClass(doctor.status)}
                    >
                      {doctor.status}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8 cursor-pointer"
                      nativeButton={false}
                      render={
                        <Link href={`/doctors/${doctor.id}`}>
                          <MoreHorizontal className="size-4" />
                        </Link>
                      }
                    ></Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
