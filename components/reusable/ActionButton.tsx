"use client";

type Props = {
  children: string | React.ReactNode;
  varient: "outlined" | "primary" | "secondary";
  onClick: () => void;
  fullWidth?: boolean;
};

export default function ActionButton({ children, onClick, fullWidth }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-[#acacac] px-4 py-1 ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {children}
    </button>
  );
}
