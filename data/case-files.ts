export type CaseFile = {
  id: string;
  caseId: string;
  name: string;
  type: "STL" | "X-Ray" | "Photo" | "Document";
  size: string;
  uploadedAt: string;
};
export const caseFiles: CaseFile[] = [
  {
    id: "F001",
    caseId: "1042",
    name: "upper-scan.stl",
    type: "STL",
    size: "24.8 MB",
    uploadedAt: "1405/06/18",
  },
  {
    id: "F002",
    caseId: "1042",
    name: "lower-scan.stl",
    type: "STL",
    size: "18.4 MB",
    uploadedAt: "1405/06/18",
  },
  {
    id: "F003",
    caseId: "1042",
    name: "xray.jpg",
    type: "X-Ray",
    size: "3.2 MB",
    uploadedAt: "1405/06/18",
  },
  {
    id: "F004",
    caseId: "1042",
    name: "reference-photo.jpg",
    type: "Photo",
    size: "2.7 MB",
    uploadedAt: "1405/06/18",
  },
  {
    id: "F005",
    caseId: "1042",
    name: "prescription.pdf",
    type: "Document",
    size: "640 KB",
    uploadedAt: "1405/06/18",
  },
];
