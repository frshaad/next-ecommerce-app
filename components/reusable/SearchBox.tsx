"use client";

import { useState } from "react";

import ActionButton from "./ActionButton";

export default function SearchBox() {
  const [searchTerm, setsearchTerm] = useState("");

  const handleSearch = () => {};

  return (
    <div className="relative flex items-center text-sm font-semibold">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setsearchTerm(e.target.value)}
        placeholder="Search an item..."
        className="rounded-full border-2 py-2 pl-5 pr-24 placeholder:text-xs placeholder:font-medium placeholder:italic"
      />
      <div className="absolute right-1">
        <ActionButton
          onClickFn={handleSearch}
          contained
          customClasses="shadow-md"
        >
          Search
        </ActionButton>
      </div>
    </div>
  );
}
