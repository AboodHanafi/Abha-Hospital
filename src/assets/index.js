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

import smallLogo from "./logo.png";
import MainLogo from "./MainLogo.png";

import Hypertension from "./Hypertension.png";
import blood from "./blood.png";
import length from "./length.png";
import weight from "./weight.png";

export const logo = {
  smallLogo,
  MainLogo,
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
  },
  {
    id: 1,
    name: "Test report",
    icon: testReport,
    children: [
      { id: 0, name: "Lab Reports" },
      { id: 1, name: "Rad Reports" },
    ],
  },
  {
    id: 2,
    name: "My doctors",
    icon: myDoctors,
  },
  {
    id: 3,
    name: "Insurance approvement",
    icon: InsuranceApprovement,
  },

  {
    id: 4,
    name: "Sick leave",
    icon: sickLeave,
  },
  {
    id: 5,
    name: " Patient prescriptions",
    icon: preScription,
  },
];

export const familySideBarSection = [
  {
    id: 0,
    name: "My Family",
    icon: myFamily,
  },
];

export const myAppointmentSideBar = [
  {
    id: 0,
    name: "Book appoinment",
    icon: bookAppoinment,
  },
  {
    id: 1,
    name: "Next appointment",
    icon: Calendar,
  },
  {
    id: 2,
    name: "Previous appointment",
    icon: Calendar,
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
