import Link from "next/link";

import { COMPANY_CONTACT_INFO } from "@/lib/constants";

import ShopContactInfoButton from "./ShopContactInfoButton";

export default function TopHeaderSection() {
  const { phoneNumber, showroomAddress } = COMPANY_CONTACT_INFO;

  return (
    <section className="mx-auto flex justify-between bg-[#020202] px-4 py-3 text-white  lg:px-10 xl:px-52">
      <ShopContactInfoButton />
      <div className="hidden items-center gap-2 text-xs font-semibold text-[#acacac] lg:flex">
        <p>{showroomAddress}</p>
        <Link href="/contact-us" className="text-white underline">
          Contact Us
        </Link>
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold">
        <span>Call Us:</span>
        <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      </div>
    </section>
  );
}
