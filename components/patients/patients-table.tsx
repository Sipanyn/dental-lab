"use client";

import Link from "next/link";

import { MoreHorizontal, User } from "lucide-react";

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

import type { Patient } from "@/data/patients";
import { cases } from "@/data/cases";
import { englishToPersianNumber, getPatientStatus } from "@/lib/utils";

type PatientsTableProps = {
  patients: Patient[];
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

export default function PatientsTable({ patients }: PatientsTableProps) {
  const [search, setSearch] = useState("");

  const filteredPatients = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return patients.filter((patient) => {
      return (
        patient.name.toLowerCase().includes(normalizedSearch) ||
        patient.phone.includes(normalizedSearch) ||
        patient.id.toLowerCase().includes(normalizedSearch) ||
        patient.doctor.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [patients, search]);

  return (
    <Card className="border-border/60 shadow-none">
      <CardHeader>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-base">لیست بیماران</CardTitle>

          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="جستجوی بیمار..."
          />
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>بیمار</TableHead>
              <TableHead>شماره تماس</TableHead>
              <TableHead>سن</TableHead>
              <TableHead>پزشک</TableHead>
              <TableHead>تعداد کیس</TableHead>
              <TableHead>آخرین کیس</TableHead>
              <TableHead>وضعیت</TableHead>
              <TableHead className="w-12" />
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredPatients.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={8}
                  className="h-32 text-center text-muted-foreground"
                >
                  بیماری با این مشخصات پیدا نشد.
                </TableCell>
              </TableRow>
            ) : (
              filteredPatients.map((patient) => {
                const status = getPatientStatus(patient.id, cases);

                return (
                  <TableRow key={patient.id}>
                    {/* Patient */}
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <User className="size-5" />
                        </div>

                        <div>
                          <p className="font-medium">{patient.name}</p>

                          <p className="text-xs text-muted-foreground">
                            {patient.id}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    {/* Phone */}
                    <TableCell className="text-sm">
                      {englishToPersianNumber(patient.phone)}
                    </TableCell>

                    {/* Age */}
                    <TableCell>{englishToPersianNumber(patient.age)}</TableCell>

                    {/* Doctor */}
                    <TableCell>{patient.doctor}</TableCell>

                    {/* Cases */}
                    <TableCell>
                      <span className="font-medium">
                        {englishToPersianNumber(patient.cases)}
                      </span>

                      <span className="mr-1 text-xs text-muted-foreground">
                        کیس
                      </span>
                    </TableCell>

                    {/* Last Case */}
                    <TableCell>
                      {englishToPersianNumber(patient.lastCaseDate)}
                    </TableCell>

                    {/* Status */}
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={getStatusClass(status)}
                      >
                        {status}
                      </Badge>
                    </TableCell>

                    {/* Action */}
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 cursor-pointer"
                        nativeButton={false}
                        render={
                          <Link href={`/patients/${patient.id}`}>
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
