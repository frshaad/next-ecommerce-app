import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import PersistStore from "@/redux/PersistStore";
// import ReduxProvider from "@/redux/ReduxProvider";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Shop",
  description:
    "E-Commerce website by Farshad Hatami, built with next.js, tailwind and redux",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <ReduxProvider>
          <PersistStore> */}
        <Navbar />
        {children}
        <Footer />
        {/* </PersistStore>
        </ReduxProvider> */}
      </body>
    </html>
  );
}
