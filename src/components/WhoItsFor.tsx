// Who It's For — qualifies the audience. Placeholder copy.
const audience = [
  "SMEs without an in-house marketing team",
  "Founders spread too thin to run marketing themselves",
  "Businesses that have outgrown freelancers",
  "Teams that want consistent, reportable output",
];

export default function WhoItsFor() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">Who it&apos;s for</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Built for growing businesses in Dubai.
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {audience.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-line bg-paper p-6 text-base"
            >
              <span className="mt-1 text-accent">→</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
