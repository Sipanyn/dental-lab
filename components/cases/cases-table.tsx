"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import {
  CalendarDays,
  ChevronDown,
  MoreHorizontal,
  SlidersHorizontal,
  User,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

import { SearchInput } from "@/components/shared/search-input";
type Case = {
  id: string;
  patient: string;
  doctor: string;
  type: string;
  typeIcon: string;
  status: string;
  dueDate: string;
};

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
      return "bg-purple-100 text-purple-700 border-purple-200";

    case "در حال بررسی":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";

    case "در حال تولید":
      return "bg-blue-100 text-blue-700 border-blue-200";

    case "کنترل کیفیت":
      return "bg-orange-100 text-orange-700 border-orange-200";

    case "تکمیل شده":
      return "bg-green-100 text-green-700 border-green-200";

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
        item.doctor.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [cases, search]);

  return (
    <div className="space-y-4">
      {/* Filters */}
      <Card className="border-border/60 shadow-none">
        <CardContent className="p-3">
          <div className="flex flex-col gap-2 lg:flex-row">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="جستجوی کیس..."
            />

            <div className="flex gap-2">
              <Button
                variant="outline"
                className="h-10 gap-2 border-border/60 px-3 font-normal"
              >
                <span>وضعیت</span>
                <ChevronDown className="size-3.5 text-muted-foreground" />
              </Button>

              <Button
                variant="outline"
                className="h-10 gap-2 border-border/60 px-3 font-normal"
              >
                <span>پزشک</span>
                <ChevronDown className="size-3.5 text-muted-foreground" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 text-muted-foreground"
                title="فیلترهای بیشتر"
              >
                <SlidersHorizontal className="size-4" />
              </Button>
            </div>
          </div>

          {/* Active filters */}
          <div className="mt-3 flex items-center gap-2 border-t border-border/50 pt-3">
            <span className="text-xs text-muted-foreground">فیلترها:</span>

            <Button
              variant="secondary"
              size="sm"
              className="h-7 gap-1.5 rounded-md px-2 text-xs font-normal"
            >
              همه کیس‌ها
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="h-7 gap-1.5 px-2 text-xs text-muted-foreground"
              onClick={() => setSearch("")}
            >
              پاک کردن
              <X className="size-3" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>شماره کیس</TableHead>
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
                colSpan={7}
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
                  {/* Case ID */}
                  <TableCell>
                    <Link
                      href={`/cases/${item.id}`}
                      className="font-medium text-primary hover:underline"
                    >
                      #{item.id}
                    </Link>
                  </TableCell>

                  {/* Patient */}
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <User className="size-4 text-muted-foreground" />
                      <span>{item.patient}</span>
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
                    <Button variant="ghost" size="icon" className="size-8">
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
}
