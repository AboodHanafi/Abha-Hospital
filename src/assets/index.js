import vital from "./vital.png";
import testReport from "./testReports.png";
import myDoctors from "./myDoctors.png";
import InsuranceApprovement from "./InsuranceApprovement.png";
import sickLeave from "./sickLeave.png";
import preScription from "./preScription.png";
import myFamily from "./myFamily.png";
import bookAppoinment from "./bookAppoinment.png";
import Calendar from "./Calendar.png";
import order from "./order.png";
import payment from "./payment.png";

import logo from "./logo.png";

import Hypertension from "./Hypertension.png";
import blood from "./blood.png";
import length from "./length.png";
import weight from "./weight.png";

export const Images = {
  logo,
};

export const listHome = [
  {
    id: 1,
    text: "المؤشرات الحيوية",
    path: "/vital-signs",
  },
];

export const firstSideBarSection = [
  {
    id: 0,
    name: "Vital signs",
    icon: vital,
    path: "vital-signs",
  },
  {
    id: 1,
    name: "Test report",
    icon: testReport,
    children: [
      { id: 0, name: "Lab Reports", path: "lab-reports" },
      { id: 1, name: "Rad Reports", path: "rad-reports" },
    ],
  },
  {
    id: 2,
    name: "My doctors",
    icon: myDoctors,
    path: "my-doctors",
  },
  {
    id: 3,
    name: "Insurance approvement",
    icon: InsuranceApprovement,
    path: "Insurance-approvment",
  },

  {
    id: 4,
    name: "Sick leave",
    icon: sickLeave,
    path: "sick-leave",
  },
  {
    id: 5,
    name: " Patient prescriptions",
    icon: preScription,
    path: "prescription-list",
  },
];

export const familySideBarSection = [
  {
    id: 0,
    name: "My Family",
    icon: myFamily,
    path: "my-family",
  },
];

export const myAppointmentSideBar = [
  {
    id: 0,
    name: "Book appoinment",
    icon: bookAppoinment,
    path: "next-appointments",
  },
  {
    id: 1,
    name: "Next appointment",
    icon: Calendar,
    path: "next-appointments",
  },
  {
    id: 2,
    name: "Previous appointment",
    icon: Calendar,
    path: "previous-appointments",
  },
];

export const offersSideBar = [
  {
    id: 0,
    name: "order",
    icon: order,
  },
  {
    id: 1,
    name: "payment",
    icon: payment,
    path: "invoices",
  },
];

export const vitalSignsIcon = [
  {
    id: 1,
    icon: Hypertension,
  },
  {
    id: 2,
    icon: length,
  },
  {
    id: 3,
    icon: blood,
  },

  {
    id: 4,
    icon: length,
  },
  {
    id: 5,
    icon: weight,
  },
];
