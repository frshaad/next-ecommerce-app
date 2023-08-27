"use client";

import { MdOutlinePersonOutline } from "react-icons/md";

export default function UserProfileButton() {
  return (
    <div>
      <button className="relative rounded-full bg-gray-200 p-1 text-2xl transition hover:bg-gray-300">
        <MdOutlinePersonOutline />
      </button>
    </div>
  );
}
