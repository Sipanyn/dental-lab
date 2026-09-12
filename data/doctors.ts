export type Doctor = {
  id: string;
  name: string;
  phone: string;
  cases: number;
  status: string;
};
export const doctors = [
  {
    id: "D001",
    name: "دکتر احمدی",
    phone: "۰۹۱۲۱۲۳۴۵۶۷",
    cases: 24,
    status: "فعال",
  },
  {
    id: "D002",
    name: "دکتر محمدی",
    phone: "۰۹۱۲۳۴۵۶۷۸۹",
    cases: 18,
    status: "فعال",
  },
  {
    id: "D003",
    name: "دکتر حسینی",
    phone: "۰۹۱۰۱۲۳۴۵۶۷",
    cases: 12,
    status: "فعال",
  },
  {
    id: "D004",
    name: "دکتر کریمی",
    phone: "۰۹۳۵۱۲۳۴۵۶۷",
    cases: 9,
    status: "فعال",
  },
  {
    id: "D005",
    name: "دکتر رضایی",
    phone: "۰۹۱۹۱۲۳۴۵۶۷",
    cases: 6,
    status: "غیرفعال",
  },
];
