import { COMPANY_SERVICES } from "@/lib/constants";

const CompanyServices = () => (
  <ul className="flex flex-col items-center gap-5 md:flex-row md:items-start md:justify-between">
    {COMPANY_SERVICES.map((service) => (
      <li
        key={service.id}
        className="flex max-w-[265px] flex-col items-center gap-1 text-center md:max-w-full"
      >
        <div className="mb-2 rounded-full bg-darkerBlue p-3 text-xl text-white">
          <service.icon />
        </div>
        <h3 className="text-sm font-bold">{service.title}</h3>
        <p className="text-xs">{service.description}</p>
      </li>
    ))}
  </ul>
);

export default function TopFooterSection() {
  return (
    <section className="mx-auto px-14 py-6 text-black md:px-48 md:pb-11 xl:px-96 xl:pt-16">
      <CompanyServices />
    </section>
  );
}
