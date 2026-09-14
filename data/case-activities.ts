export type CaseActivity = {
  id: string;
  caseId: string;
  title: string;
  description?: string;
  date: string;
  time: string;
  icon: "created" | "review" | "design" | "file" | "completed";
};
export const caseActivities: CaseActivity[] = [
  {
    id: "A001",
    caseId: "1042",
    title: "کیس توسط پزشک ثبت شد",
    description: "کیس توسط دکتر احمدی برای لابراتوار ارسال شد.",
    date: "1405/06/18",
    time: "10:25",
    icon: "created",
  },
  {
    id: "A002",
    caseId: "1042",
    title: "بررسی اولیه تکمیل شد",
    description: "اطلاعات کیس و فایل‌های ارسال‌شده بررسی شدند.",
    date: "1405/06/18",
    time: "11:10",
    icon: "review",
  },
  {
    id: "A003",
    caseId: "1042",
    title: "کیس وارد مرحله طراحی شد",
    description: "طراحی ترمیم توسط لابراتوار آغاز شد.",
    date: "1405/06/19",
    time: "09:30",
    icon: "design",
  },
  {
    id: "A004",
    caseId: "1042",
    title: "فایل جدید اضافه شد",
    description: "upper-scan.stl به پرونده کیس اضافه شد.",
    date: "1405/06/19",
    time: "10:15",
    icon: "file",
  },
];
