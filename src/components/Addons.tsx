// Add-ons — optional extras beyond the core plan. Placeholder items.
const addons = [
  { title: "Website & landing pages", desc: "Built and maintained as you grow." },
  { title: "Email marketing", desc: "Newsletters and automated campaigns." },
  { title: "Photography & video", desc: "On-location shoots and production." },
  { title: "Influencer campaigns", desc: "Sourcing, briefing and management." },
];

export default function Addons() {
  return (
    <section className="scroll-mt-20">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">Add-ons</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Need more? Bolt on extras when you do.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {addons.map((addon) => (
            <div
              key={addon.title}
              className="rounded-2xl border border-line p-8 transition-colors hover:border-ink"
            >
              <h3 className="font-display text-lg font-semibold">{addon.title}</h3>
              <p className="mt-2 text-muted">{addon.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
