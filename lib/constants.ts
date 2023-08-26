import { MdOutlineHeadsetMic, MdPersonPin } from "react-icons/md";
import { VscTag } from "react-icons/vsc";

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
  { id: 1, name: "Men", link: "/categories/men" },
  { id: 2, name: "Women", link: "/categories/women" },
  { id: 3, name: "Children", link: "/categories/children" },
  { id: 4, name: "Accessories", link: "/categories/accessories" },
];

// Navigation Info
export const NAV_PAGES = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Stores", link: "/stores" },
];

export const FOOTER_LINKS = [
  { id: 1, name: "FAQ", link: "/FAQ" },
  { id: 2, name: "pages", link: "/pages" },
  { id: 3, name: "stores", link: "/stores" },
  { id: 4, name: "compare", link: "/compare" },
  { id: 5, name: "cookies", link: "/cookies" },
];

// Footer
export const COMPANY_SERVICES = [
  {
    id: 1,
    icon: MdOutlineHeadsetMic,
    title: "Product Support",
    description:
      "Up to 3 years on-site warranty available for your peace of mind.",
  },
  {
    id: 2,
    icon: MdPersonPin,
    title: "Personal Account",
    description:
      "With big discounts, free delivery and a dedicated support specialist.",
  },
  {
    id: 3,
    icon: VscTag,
    title: "Amazing Savings",
    description:
      "Up to 70% off new Products, you can be sure of the best price.",
  },
];
