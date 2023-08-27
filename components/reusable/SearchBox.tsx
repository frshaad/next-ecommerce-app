"use client";

import { useState } from "react";
import { MdSearch } from "react-icons/md";

export default function SearchBox() {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="relative flex items-center text-sm font-semibold">
      <input
        type="text"
        aria-label="search items"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        placeholder="Search an item..."
        className="rounded-full border-2 py-2 pl-4 pr-12 placeholder:text-xs placeholder:font-medium"
      />
      <div className="absolute right-1">
        <button className="flex items-center justify-center rounded-full border-2 border-darkerBlue bg-darkerBlue p-2 font-semibold  text-white transition hover:bg-darkerBlue hover:text-white">
          <MdSearch />
        </button>
      </div>
    </div>
  );
}
