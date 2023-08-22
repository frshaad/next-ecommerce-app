import Link from "next/link";

type Props = {
  links: { id: string; name: string }[];
  pathToLink?: string;
};

export default function LinksList({ links, pathToLink }: Props) {
  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={pathToLink ? `${pathToLink}/${link.name}` : `/${link.name}`}
            className="capitalize"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}
