import Link from "next/link";

import { CATEGORIES, FOOTER_LINKS } from "@/lib/constants";

import { LinksList } from "../reusable";

type FooterInfoProps = {
  title: string;
  children: React.ReactNode;
};

const FooterInfo = ({ title, children }: FooterInfoProps) => (
  <div className="flex-1">
    <h3 className="mb-2 text-lg font-medium text-gray-700">{title}</h3>
    {children}
  </div>
);

export default function Footer() {
  return (
    <footer className="px-48 pb-5 pt-24">
      <section className="mb-12 flex justify-between">
        <article className="flex w-1/2 justify-between">
          <FooterInfo title="Categories">
            <ul className="flex flex-col gap-1 font-light">
              <LinksList links={CATEGORIES} pathToLink="/products" />
            </ul>
          </FooterInfo>
          <FooterInfo title="Links">
            <ul className="flex flex-col gap-1 font-light">
              <LinksList links={FOOTER_LINKS} />
            </ul>
          </FooterInfo>
        </article>

        <article className="flex w-1/2 justify-between">
          <FooterInfo title="About">
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit deleniti corrupti reiciendis. Provident dicta harum vero?
            </p>
          </FooterInfo>
          <FooterInfo title="Contact">
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam quam odit recusandae delectus excepturi. Vel provident
              nulla dolorum, totam dolore odio incidunt.
            </p>
          </FooterInfo>
        </article>
      </section>

      <section className="flex items-center justify-between">
        <article className="flex items-center justify-between gap-2">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider text-sky-600"
          >
            LAMASTORE
          </Link>
          <span className="text-xs capitalize text-gray-500">
            &copy; copyright 2023. all rights reserved.
          </span>
        </article>
        <article className="flex items-center"></article>
      </section>
    </footer>
  );
}
