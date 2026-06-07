// What's Included — the six core capabilities in the monthly offer.
const services = [
  {
    title: "Content",
    desc: "Stay visible with consistent content, publishing and creative execution.",
  },
  {
    title: "Advertising",
    desc: "Generate leads and enquiries through Meta and Google campaigns.",
  },
  {
    title: "Creative",
    desc: "Professional design and campaign assets that strengthen your brand.",
  },
  {
    title: "Strategy",
    desc: "Monthly planning and guidance focused on growth and performance.",
  },
  {
    title: "Reporting",
    desc: "Clear reporting that shows what's working and where to improve.",
  },
  {
    title: "Execution",
    desc: "Everything managed for you so you can focus on running the business.",
  },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="scroll-mt-20">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">What&apos;s included</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Everything your business needs to attract customers and grow.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-paper-2 p-8">
              <h3 className="font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-muted">{service.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-base text-muted">
          Social media, content creation, advertising, design and reporting.
          Managed through one dedicated team.
        </p>
      </div>
    </section>
  );
}
