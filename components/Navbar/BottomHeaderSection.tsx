import Image from "next/image";
import Link from "next/link";

export default function BottomHeaderSection() {
  return (
    <section className="mx-auto flex justify-between bg-darkerBlue px-4 py-3 text-white md:px-20 xl:px-64">
      <div>
        {/* //! humbebrger menu */}
        {/* // logo icon */}
        <Link href="/">
          <Image alt="logo" src="/images/logo.svg" width={57} height={47} />
        </Link>
        {/* //?  categories */}

        {/* //?  deals */}
      </div>
      <div>
        {/* // search icon */}
        {/* // cart icon */}
        {/* // profile icon */}
      </div>
    </section>
  );
}
