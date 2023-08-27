"use client";

import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
  onCLick?: () => void;
  color?: "primary" | "secondary" | "black";
  fullWidth?: boolean;
};

export default function Button({
  children,
  onCLick,
  color = "primary",
  fullWidth = false,
  variant = "contained",
}: Props) {
  return (
    <button
      onClick={onCLick}
      className={clsx(
        "rounded-full border-2 px-5 py-1 text-sm font-semibold transition",
        {
          "w-full": fullWidth,
          "border-darkerBlue text-darkerBlue hover:bg-darkerBlue hover:text-white":
            variant === "outlined" && color === "primary",
          "border-primaryGray text-primaryGray hover:bg-primaryGray hover:text-darkerGray":
            variant === "outlined" && color === "secondary",
          "border-darkerBlue bg-darkerBlue text-white hover:bg-transparent hover:text-darkerBlue":
            variant === "contained" && color === "primary",
          "border-primaryYellow bg-primaryYellow text-black":
            variant === "contained" && color === "secondary",
          "border-black bg-black text-white":
            variant === "contained" && color === "black",
        },
      )}
    >
      {children}
    </button>
  );
}
