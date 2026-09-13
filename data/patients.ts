export type Patient = {
  id: string;
  name: string;
  phone: string;
  age: number;
  gender: "مرد" | "زن";

  doctorId: string;
  doctor: string;

  cases: number;
  lastCaseDate: string;
  createdAt: string;

  address?: string;
  notes?: string;
};

export const patients: Patient[] = [
  {
    id: "P001",
    name: "علی رضایی",
    phone: "09121234567",
    age: 34,
    gender: "مرد",

    doctorId: "D001",
    doctor: "دکتر احمدی",

    cases: 3,
    lastCaseDate: "1405/06/18",
    createdAt: "1404/03/15",
    address: "تهران، خیابان ولیعصر",
    notes: "حساسیت به برخی مواد فلزی",
  },

  {
    id: "P002",
    name: "مریم کریمی",
    phone: "09123456789",
    age: 29,
    gender: "زن",

    doctorId: "D002",
    doctor: "دکتر محمدی",

    cases: 3,
    lastCaseDate: "1405/06/17",
    createdAt: "1404/06/10",
    address: "تهران، خیابان شریعتی",
  },

  {
    id: "P003",
    name: "رضا مرادی",
    phone: "09101234567",
    age: 41,
    gender: "مرد",

    doctorId: "D003",
    doctor: "دکتر حسینی",

    cases: 2,
    lastCaseDate: "1405/06/15",
    createdAt: "1404/08/20",
  },

  {
    id: "P004",
    name: "سارا احمدی",
    phone: "09351234567",
    age: 26,
    gender: "زن",

    doctorId: "D004",
    doctor: "دکتر کریمی",

    cases: 3,
    lastCaseDate: "1405/06/19",
    createdAt: "1403/12/05",
    address: "تهران، سعادت‌آباد",
  },

  {
    id: "P005",
    name: "محمد نادری",
    phone: "09191234567",
    age: 38,
    gender: "مرد",

    doctorId: "D005",
    doctor: "دکتر رضایی",

    cases: 2,
    lastCaseDate: "1405/06/16",
    createdAt: "1405/01/12",
    notes: "ادامه همکاری با پزشک در انتظار تأیید",
  },

  {
    id: "P006",
    name: "نگار موسوی",
    phone: "09129876543",
    age: 31,
    gender: "زن",

    doctorId: "D001",
    doctor: "دکتر احمدی",

    cases: 0,
    lastCaseDate: "-",
    createdAt: "1404/02/28",
  },
];
