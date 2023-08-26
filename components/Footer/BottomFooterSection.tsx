"use client";

export default function BottomFooterSection() {
  return (
    <section className="mx-auto flex justify-between bg-[#020202] px-4 py-3 text-white  lg:px-10 xl:px-52">
      {/* Newsletter */}
      <article className="flex flex-col gap-4">
        <div className="text-center">
          <h3 className="mb-1 text-lg font-medium">
            Sign Up To Our Newsletter.
          </h3>
          <p className="text-xs font-light">
            Be the first to hear about the latest offers.
          </p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <input
            type="email"
            className="rounded-md border-2 border-white bg-[#020202] px-2 py-1 placeholder:text-[11px] placeholder:font-light placeholder:text-white"
            placeholder="Your Email"
          />
          <button className="rounded-full bg-darkerBlue px-2 py-1 text-[13px] font-semibold text-white">
            Subscribe
          </button>
        </div>
      </article>

      {/* section */}

      {/* more info */}
      <div>{/* social */}</div>
      <div>{/* payments */}</div>
      <div>{/* copyright */}</div>
    </section>
  );
}
