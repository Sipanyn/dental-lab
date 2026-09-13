export type Case = {
  id: string;
  patient: string;
  doctor: string;
  type: string;
  typeIcon: string;
  status: string;
  dueDate: string;
};

export const cases = [
  {
    id: "1042",
    patient: "علی رضایی",
    doctor: "دکتر احمدی",
    type: "Crown",
    typeIcon: "crown",
    status: "در حال طراحی",
    dueDate: "۱۴۰۵/۰۶/۲۲",
  },
  {
    id: "1041",
    patient: "مریم کریمی",
    doctor: "دکتر محمدی",
    type: "Bridge",
    typeIcon: "dental",
    status: "در حال تولید",
    dueDate: "۱۴۰۵/۰۶/۲۱",
  },
  {
    id: "1040",
    patient: "رضا مرادی",
    doctor: "دکتر حسینی",
    type: "Implant",
    typeIcon: "implant",
    status: "تکمیل شده",
    dueDate: "۱۴۰۵/۰۶/۱۹",
  },
  {
    id: "1039",
    patient: "سارا احمدی",
    doctor: "دکتر کریمی",
    type: "Veneer",
    typeIcon: "dental",
    status: "در حال بررسی",
    dueDate: "۱۴۰۵/۰۶/۲۳",
  },
  {
    id: "1038",
    patient: "محمد نادری",
    doctor: "دکتر رضایی",
    type: "Crown",
    typeIcon: "crown",
    status: "کنترل کیفیت",
    dueDate: "۱۴۰۵/۰۶/۲۰",
  },
];
