import { nanoid } from "@reduxjs/toolkit";

// Company Info
export const COMPANY_CONTACT_INFO = {
  phoneNumber: "02112345678",
  email: "info@nextshop.com",
  wordDays: "sat-thu",
  workOpenHour: "9:00 am",
  workCloseHour: "4:30 pm",
  address: "Tehran Province, Tehran, District 11, Enghelab St, PC24+364, Iran",
  showroomAddress:
    "Tehran District 12 Panzdah-e-Khordad St Fifth Khordad Avenue Arg Sqr.",
};

// Products info
export const CATEGORIES = [
  { id: nanoid(), name: "men" },
  { id: nanoid(), name: "women" },
  { id: nanoid(), name: "children" },
  { id: nanoid(), name: "accessories" },
];

// Navigation Info
export const NAV_PAGES = [
  { id: nanoid(), name: "home" },
  { id: nanoid(), name: "about" },
  { id: nanoid(), name: "contact" },
  { id: nanoid(), name: "stores" },
];

export const FOOTER_LINKS = [
  { id: nanoid(), name: "FAQ" },
  { id: nanoid(), name: "pages" },
  { id: nanoid(), name: "stores" },
  { id: nanoid(), name: "compare" },
  { id: nanoid(), name: "cookies" },
];
