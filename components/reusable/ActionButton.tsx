"use client";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  onClickFn: () => void;
  contained?: boolean;
  color?: "primary" | "secondary";
  fullWidth?: boolean;
  customClasses?: string;
};

export default function ActionButton({
  children,
  onClickFn,
  color,
  fullWidth,
  contained,
  customClasses,
}: Props) {
  return (
    <button
      onClick={onClickFn}
      className={clsx(
        "flex items-center justify-center rounded-full border-2 border-darkerBlue px-4 py-1 text-sm font-semibold text-darkerBlue transition hover:bg-darkerBlue hover:text-white",
        {
          customClasses: customClasses,
          "w-full": fullWidth,
          "bg-darkerBlue text-white": contained,
          "bg-[#FFB800] text-black": contained && color === "secondary",
        },
      )}
    >
      {children}
    </button>
  );
}
