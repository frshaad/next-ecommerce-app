"use client";

import Image from "next/image";
import Link from "next/link";
import { MdOutlinePersonOutline, MdShoppingCart } from "react-icons/md";

import { CATEGORIES } from "@/lib/constants";

import ActionButton from "../reusable/ActionButton";
import SearchBox from "../reusable/SearchBox";
import MobileMenu from "./MobileMenu";

export default function BottomHeaderSection() {
  return (
    <section className="mx-auto flex justify-between px-4 py-3 shadow-lg lg:px-10 xl:px-52">
      <div className="flex items-center gap-1 lg:gap-7">
        {/* //! humbebrger menu */}
        <div className="text-3xl text-darkerBlue md:hidden">
          <MobileMenu />
        </div>
        {/* // logo icon */}
        <Link href="/">
          <Image alt="logo" src="/images/logo.svg" width={57} height={47} />
        </Link>
        {/* //?  categories */}
        <ul className="hidden flex-1 items-center gap-6 md:flex ">
          {CATEGORIES.map((category) => (
            <li key={category.id} className="text-sm font-semibold">
              <Link href={category.link}>{category.name}</Link>
            </li>
          ))}
        </ul>

        {/* //?  deals */}
        <div className="hidden xl:block">
          <ActionButton onClickFn={() => console.log("hello")}>
            Our Deals
          </ActionButton>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* <ul className="hidden flex-1 items-center gap-6 xl:flex ">
          {NAV_PAGES.map((page) => (
            <li key={page.id} className="text-sm font-semibold">
              <Link href={page.link}>{page.name}</Link>
            </li>
          ))}
        </ul> */}
        <SearchBox />
        <div>
          <button className="relative rounded-full p-2 text-xl transition hover:bg-gray-200">
            <MdShoppingCart />
            <span className="absolute right-0 top-0 rounded-full bg-darkerBlue p-1 text-xs text-white">
              3
            </span>
          </button>
        </div>
        <div>
          <button className="relative rounded-full bg-gray-200 p-1 text-2xl transition">
            <MdOutlinePersonOutline />
          </button>
        </div>
      </div>
    </section>
  );
}
