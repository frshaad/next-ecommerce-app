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
  { id: nanoid(), name: "Men", link: "/categories/men" },
  { id: nanoid(), name: "Women", link: "/categories/women" },
  { id: nanoid(), name: "Children", link: "/categories/children" },
  { id: nanoid(), name: "Accessories", link: "/categories/accessories" },
];

// Navigation Info
export const NAV_PAGES = [
  { id: nanoid(), name: "Home", link: "/" },
  { id: nanoid(), name: "About", link: "/about" },
  { id: nanoid(), name: "Stores", link: "/stores" },
];

export const FOOTER_LINKS = [
  { id: nanoid(), name: "FAQ", link: "/FAQ" },
  { id: nanoid(), name: "pages", link: "/pages" },
  { id: nanoid(), name: "stores", link: "/stores" },
  { id: nanoid(), name: "compare", link: "/compare" },
  { id: nanoid(), name: "cookies", link: "/cookies" },
];
