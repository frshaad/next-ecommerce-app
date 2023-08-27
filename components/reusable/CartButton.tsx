"use client";

import { MdShoppingCart } from "react-icons/md";

export default function CartButton() {
  return (
    <div>
      <button className="relative rounded-full p-2 text-xl transition hover:bg-gray-200">
        <MdShoppingCart />
        <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-darkerBlue p-1 text-xs text-white">
          3
        </span>
      </button>
    </div>
  );
}
