"use client";

import Link from "next/link";

import { CalendarDays, MoreHorizontal, User } from "lucide-react";

import { useMemo, useState } from "react";

import { SearchInput } from "@/components/shared/search-input";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Doctor01Icon } from "@/components/icons/hugeicons-doctor-01";
import { DentalCrown1Icon } from "@/components/icons/streamline-ultimate-dental-crown-1";
import { OdontologyImplantOutlineIcon } from "@/components/icons/healthicons-odontology-implant-outline";
import { DentalIcon } from "@/components/icons/akar-icons-dental";

import type { Case } from "@/data/cases";

type CasesTableProps = {
  cases: Case[];
};

function getTypeIcon(typeIcon: string) {
  switch (typeIcon) {
    case "crown":
      return DentalCrown1Icon;

    case "implant":
      return OdontologyImplantOutlineIcon;

    default:
      return DentalIcon;
  }
}

function getStatusClass(status: string) {
  switch (status) {
    case "در حال طراحی":
      return "border-purple-200 bg-purple-100 text-purple-700";

    case "در حال بررسی":
      return "border-yellow-200 bg-yellow-100 text-yellow-700";

    case "در حال تولید":
      return "border-blue-200 bg-blue-100 text-blue-700";

    case "کنترل کیفیت":
      return "border-orange-200 bg-orange-100 text-orange-700";

    case "تکمیل شده":
      return "border-green-200 bg-green-100 text-green-700";

    default:
      return "bg-muted text-muted-foreground";
  }
}

export default function CasesTable({ cases }: CasesTableProps) {
  const [search, setSearch] = useState("");

  const filteredCases = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return cases.filter((item) => {
      return (
        item.id.toLowerCase().includes(normalizedSearch) ||
        item.patient.toLowerCase().includes(normalizedSearch) ||
        item.doctor.toLowerCase().includes(normalizedSearch) ||
        item.type.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [cases, search]);

  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-base">لیست کیس‌ها</CardTitle>

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="جستجوی کیس..."
          />
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>بیمار</TableHead>
              <TableHead>پزشک</TableHead>
              <TableHead>نوع کار</TableHead>
              <TableHead>وضعیت</TableHead>
              <TableHead>موعد تحویل</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredCases.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="h-32 text-center text-muted-foreground"
                >
                  کیسی با این مشخصات پیدا نشد.
                </TableCell>
              </TableRow>
            ) : (
              filteredCases.map((item) => {
                const TypeIcon = getTypeIcon(item.typeIcon);

                return (
                  <TableRow key={item.id}>
                    {/* Patient */}
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <User className="size-4" />
                        </div>

                        <div>
                          <p className="font-medium">{item.patient}</p>

                          <p className="text-xs text-muted-foreground">
                            #{item.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    {/* Doctor */}
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Doctor01Icon className="size-4 text-muted-foreground" />

                        <span>{item.doctor}</span>
                      </div>
                    </TableCell>

                    {/* Work Type */}
                    <TableCell>
                      <Badge variant="outline" className="gap-1.5">
                        <TypeIcon className="size-4 text-muted-foreground" />

                        {item.type}
                      </Badge>
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getStatusClass(item.status)}
                      >
                        {item.status}
                      </Badge>
                    </TableCell>

                    {/* Due Date */}
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="size-4" />

                        <span>{item.dueDate}</span>
                      </div>
                    </TableCell>

                    {/* Actions */}
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 cursor-pointer"
                        nativeButton={false}
                        render={
                          <Link href={`/cases/${item.id}`}>
                            <MoreHorizontal className="size-4" />
                          </Link>
                        }
                      />
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
