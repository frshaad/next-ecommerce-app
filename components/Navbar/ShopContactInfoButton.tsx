"use client";

import { useState } from "react";
import { MdExpandMore } from "react-icons/md";

import { COMPANY_CONTACT_INFO } from "@/lib/constants";

export default function ShopContactInfoButton() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { wordDays, workCloseHour, workOpenHour } = COMPANY_CONTACT_INFO;

  const handleInfoPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button
        onClick={handleInfoPopup}
        className="rounded-full border border-[#acacac] px-4 py-1"
      >
        <p className="flex items-center gap-1 text-xs font-semibold">
          <span className="capitalize text-primaryGray">{wordDays}: </span>
          <span className="uppercase">
            {workOpenHour} - {workCloseHour}
          </span>
          <MdExpandMore size={16} />
        </p>
      </button>
    </div>
  );
}
