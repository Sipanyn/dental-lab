export { cn } from "cn";

export const englishToPersianNumber = (str: string | number) => {
  if (typeof str === "number") str = str.toString();
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
};

////////////////////////

import type { Case } from "@/data/cases";

export function getPatientStatus(patientId: string, cases: Case[]) {
  const hasActiveCase = cases.some(
    (currentCase) =>
      currentCase.patientId === patientId && currentCase.status !== "تکمیل شده",
  );

  return hasActiveCase ? "فعال" : "غیرفعال";
}

///////////////////////////////

export function getDoctorCases(doctorId: string, cases: Case[]) {
  return cases.filter((currentCase) => currentCase.doctorId === doctorId);
}

export function getDoctorPatients(doctorId: string, cases: Case[]) {
  const doctorCases = getDoctorCases(doctorId, cases);

  const uniquePatients = new Map(
    doctorCases.map((currentCase) => [
      currentCase.patientId,
      {
        id: currentCase.patientId,
        name: currentCase.patient,
      },
    ]),
  );

  return Array.from(uniquePatients.values());
}
