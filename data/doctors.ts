export type Doctor = {
  id: string;
  name: string;
  phone: string;
  officePhone?: string;
  address?: string;

  specialty: string;

  cases: number;
  status: "فعال" | "غیرفعال";

  collaborationSince: string;

  email?: string;
  notes?: string;
};
export const doctors: Doctor[] = [
  {
    id: "D001",
    name: "دکتر احمدی",
    phone: "۰۹۱۲۱۲۳۴۵۶۷",
    officePhone: "۰۲۱۸۸۴۵۶۷۸۹",
    address: "تهران، خیابان ولیعصر، پلاک ۱۲۴",
    specialty: "دندانپزشک عمومی",
    cases: 24,
    status: "فعال",
    collaborationSince: "۱۴۰۲/۰۵/۱۵",
    email: "ahmadi@example.com",
    notes: "ترجیح ارسال کیس‌ها به صورت دیجیتال",
  },
  {
    id: "D002",
    name: "دکتر محمدی",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    officePhone: "۰۲۱۸۸۳۴۵۶۷۸",
    address: "تهران، خیابان شریعتی، پلاک ۸۲",
    specialty: "پروتز",
    cases: 18,
    status: "فعال",
    collaborationSince: "۱۴۰۳/۰۲/۱۰",
    email: "mohammadi@example.com",
  },
  {
    id: "D003",
    name: "دکتر حسینی",
    phone: "۰۹۱۰۱۲۳۴۵۶۷",
    officePhone: "۰۲۱۸۸۱۲۳۴۵۶",
    address: "تهران، میدان ونک، خیابان ملاصدرا",
    specialty: "ایمپلنت",
    cases: 12,
    status: "فعال",
    collaborationSince: "۱۴۰۳/۰۸/۲۰",
  },
  {
    id: "D004",
    name: "دکتر کریمی",
    phone: "۰۹۳۵۱۲۳۴۵۶۷",
    officePhone: "۰۲۱۸۸۲۳۴۵۶۷",
    address: "تهران، سعادت‌آباد، بلوار پاکنژاد",
    specialty: "زیبایی",
    cases: 9,
    status: "فعال",
    collaborationSince: "۱۴۰۴/۰۱/۰۵",
  },
  {
    id: "D005",
    name: "دکتر رضایی",
    phone: "۰۹۱۹۱۲۳۴۵۶۷",
    officePhone: "۰۲۱۸۸۷۶۵۴۳۲",
    address: "تهران، خیابان پاسداران",
    specialty: "دندانپزشک عمومی",
    cases: 6,
    status: "غیرفعال",
    collaborationSince: "۱۴۰۳/۰۳/۱۲",
    notes: "همکاری موقتاً متوقف شده",
  },
];
