import Image from "next/image";
import Link from "next/link";

import { CATEGORIES } from "@/lib/constants";

import { Button, CartButton, SearchBox, UserProfileButton } from "../reusable";
import MobileMenu from "./MobileMenu";

const Logo = () => (
  <Link href="/">
    <Image
      alt="logo"
      src="/images/logo.svg"
      width="0"
      height="0"
      className="h-auto w-full"
    />
  </Link>
);

const NavbarCategories = () => (
  <ul className="hidden flex-1 items-center gap-6 md:flex ">
    {CATEGORIES.map((category) => (
      <li key={category.id} className="text-sm font-semibold">
        <Link href={category.link}>{category.name}</Link>
      </li>
    ))}
  </ul>
);

export default function BottomHeaderSection() {
  return (
    <section className="mx-auto flex justify-between px-4 py-3 shadow-lg lg:px-10 2xl:px-52">
      <div className="flex items-center gap-1 lg:gap-7">
        <div className="text-3xl text-darkerBlue md:hidden">
          <MobileMenu />
        </div>
        <Logo />
        <NavbarCategories />
        <div className="hidden xl:block">
          <Button variant="outlined">Our Deals</Button>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <SearchBox />
        <CartButton />
        <UserProfileButton />
      </div>
    </section>
  );
}
