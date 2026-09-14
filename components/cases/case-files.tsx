import Link from "next/link";
import { Download, FileImage, FileText, ScanLine } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { englishToPersianNumber } from "@/lib/utils";
type CaseFile = {
  id: string;
  name: string;
  type: "STL" | "X-Ray" | "Photo" | "Document";
  size: string;
  uploadedAt: string;
};
type CaseFilesProps = { files: CaseFile[] };
function getFileIcon(type: CaseFile["type"]) {
  switch (type) {
    case "STL":
      return ScanLine;
    case "X-Ray":
      return FileImage;
    case "Photo":
      return FileImage;
    case "Document":
      return FileText;
  }
}
function getFileTypeClass(type: CaseFile["type"]) {
  switch (type) {
    case "STL":
      return "border-purple-200 bg-purple-100 text-purple-700";
    case "X-Ray":
      return "border-blue-200 bg-blue-100 text-blue-700";
    case "Photo":
      return "border-green-200 bg-green-100 text-green-700";
    case "Document":
      return "border-orange-200 bg-orange-100 text-orange-700";
  }
}
export function CaseFiles({ files }: CaseFilesProps) {
  return (
    <Card className="border-border/60 shadow-none">
      {" "}
      <CardHeader>
        {" "}
        <div className="flex items-center justify-between">
          {" "}
          <CardTitle className="text-base"> فایل‌ها و تصاویر </CardTitle>{" "}
          <span className="text-sm text-muted-foreground">
            {files.length === 0
              ? null
              : `${englishToPersianNumber(files.length)} فایل`}
          </span>{" "}
        </div>{" "}
      </CardHeader>{" "}
      <CardContent>
        {" "}
        {files.length === 0 ? (
          <div className="flex h-24 items-center justify-center text-sm text-muted-foreground">
            {" "}
            هنوز فایلی برای این کیس ثبت نشده است.{" "}
          </div>
        ) : (
          <div className="divide-y rounded-lg border">
            {" "}
            {files.map((file) => {
              const FileIcon = getFileIcon(file.type);
              return (
                <div
                  key={file.id}
                  className="flex items-center justify-between gap-4 p-4"
                >
                  {" "}
                  {/* File information */}{" "}
                  <div className="flex min-w-0 items-center gap-3">
                    {" "}
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                      {" "}
                      <FileIcon className="size-5 text-muted-foreground" />{" "}
                    </div>{" "}
                    <div className="min-w-0">
                      {" "}
                      <p className="truncate text-sm font-medium">
                        {" "}
                        {file.name}{" "}
                      </p>{" "}
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        {" "}
                        <span>{file.size}</span> <span>•</span>{" "}
                        <span> {file.uploadedAt} </span>{" "}
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                  {/* Type + action */}{" "}
                  <div className="flex shrink-0 items-center gap-3">
                    {" "}
                    <Badge
                      variant="outline"
                      className={getFileTypeClass(file.type)}
                    >
                      {" "}
                      {file.type}{" "}
                    </Badge>{" "}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-8"
                      nativeButton={false}
                      render={
                        <Link href="#">
                          {" "}
                          <Download className="size-4" />{" "}
                        </Link>
                      }
                    />{" "}
                  </div>{" "}
                </div>
              );
            })}{" "}
          </div>
        )}{" "}
      </CardContent>{" "}
    </Card>
  );
}
