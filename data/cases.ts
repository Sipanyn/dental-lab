export type Case = {
  id: string;
  patientId: string;
  patient: string;

  doctorId: string;
  doctor: string;

  type: string;
  typeIcon: string;
  status: string;

  createdAt: string;
  dueDate: string;
};

export const cases: Case[] = [
  // ─────────────────────────────────────
  // علی رضایی - P001
  // ─────────────────────────────────────
  {
    id: "1042",
    patientId: "P001",
    doctorId: "D001",
    patient: "علی رضایی",
    doctor: "دکتر احمدی",
    type: "Crown",
    typeIcon: "crown",
    status: "در حال طراحی",
    createdAt: "1405/06/18",
    dueDate: "1405/06/22",
  },
  {
    id: "0985",
    patientId: "P001",
    doctorId: "D001",
    patient: "علی رضایی",
    doctor: "دکتر احمدی",
    type: "Bridge",
    typeIcon: "dental",
    status: "تکمیل شده",
    createdAt: "1404/09/10",
    dueDate: "1404/09/17",
  },
  {
    id: "0912",
    patientId: "P001",
    doctorId: "D001",
    patient: "علی رضایی",
    doctor: "دکتر احمدی",
    type: "Crown",
    typeIcon: "crown",
    status: "تکمیل شده",
    createdAt: "1403/11/05",
    dueDate: "1403/11/12",
  },

  // ─────────────────────────────────────
  // مریم کریمی - P002
  // ─────────────────────────────────────
  {
    id: "1041",
    patientId: "P002",
    doctorId: "D002",
    patient: "مریم کریمی",
    doctor: "دکتر محمدی",
    type: "Bridge",
    typeIcon: "dental",
    status: "در حال تولید",
    createdAt: "1405/06/17",
    dueDate: "1405/06/21",
  },
  {
    id: "0970",
    patientId: "P002",
    doctorId: "D002",
    patient: "مریم کریمی",
    doctor: "دکتر محمدی",
    type: "Veneer",
    typeIcon: "dental",
    status: "تکمیل شده",
    createdAt: "1404/06/08",
    dueDate: "1404/06/15",
  },
  {
    id: "0885",
    patientId: "P002",
    doctorId: "D002",
    patient: "مریم کریمی",
    doctor: "دکتر محمدی",
    type: "Crown",
    typeIcon: "crown",
    status: "تکمیل شده",
    createdAt: "1403/10/20",
    dueDate: "1403/10/27",
  },

  // ─────────────────────────────────────
  // رضا مرادی - P003
  // ─────────────────────────────────────
  {
    id: "1040",
    patientId: "P003",
    doctorId: "D003",
    patient: "رضا مرادی",
    doctor: "دکتر حسینی",
    type: "Implant",
    typeIcon: "implant",
    status: "تکمیل شده",
    createdAt: "1405/06/15",
    dueDate: "1405/06/19",
  },
  {
    id: "0954",
    patientId: "P003",
    doctorId: "D003",
    patient: "رضا مرادی",
    doctor: "دکتر حسینی",
    type: "Crown",
    typeIcon: "crown",
    status: "تکمیل شده",
    createdAt: "1404/03/12",
    dueDate: "1404/03/19",
  },

  // ─────────────────────────────────────
  // سارا احمدی - P004
  // ─────────────────────────────────────
  {
    id: "1039",
    patientId: "P004",
    doctorId: "D004",
    patient: "سارا احمدی",
    doctor: "دکتر کریمی",
    type: "Veneer",
    typeIcon: "dental",
    status: "در حال بررسی",
    createdAt: "1405/06/19",
    dueDate: "1405/06/23",
  },
  {
    id: "0991",
    patientId: "P004",
    doctorId: "D004",
    patient: "سارا احمدی",
    doctor: "دکتر کریمی",
    type: "Veneer",
    typeIcon: "dental",
    status: "تکمیل شده",
    createdAt: "1404/11/02",
    dueDate: "1404/11/12",
  },
  {
    id: "0901",
    patientId: "P004",
    doctorId: "D004",
    patient: "سارا احمدی",
    doctor: "دکتر کریمی",
    type: "Crown",
    typeIcon: "crown",
    status: "تکمیل شده",
    createdAt: "1403/08/14",
    dueDate: "1403/08/21",
  },

  // ─────────────────────────────────────
  // محمد نادری - P005
  // ─────────────────────────────────────
  {
    id: "1038",
    patientId: "P005",
    doctorId: "D005",
    patient: "محمد نادری",
    doctor: "دکتر رضایی",
    type: "Crown",
    typeIcon: "crown",
    status: "کنترل کیفیت",
    createdAt: "1405/06/16",
    dueDate: "1405/06/20",
  },

  // ─────────────────────────────────────
  // کیس قدیمی محمد نادری
  // ─────────────────────────────────────
  {
    id: "0876",
    patientId: "P005",
    doctorId: "D005",
    patient: "محمد نادری",
    doctor: "دکتر رضایی",
    type: "Bridge",
    typeIcon: "dental",
    status: "تکمیل شده",
    createdAt: "1404/02/18",
    dueDate: "1404/02/26",
  },
];
