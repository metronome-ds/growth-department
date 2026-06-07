// What's Included — the five core services in the monthly offer.
const services = [
  { title: "Social media", desc: "Channel management, scheduling and community." },
  { title: "Content creation", desc: "Posts, captions, short-form video and copy." },
  { title: "Design", desc: "On-brand creative for every channel and campaign." },
  { title: "Advertising", desc: "Paid campaigns set up, run and optimised." },
  { title: "Reporting", desc: "Clear monthly reporting on what's working." },
];

export default function WhatsIncluded() {
  return (
    <section id="included" className="scroll-mt-20">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">What&apos;s included</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Everything your marketing needs, in one monthly engagement.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="bg-paper-2 p-8">
              <h3 className="font-display text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-muted">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
