// Who It's For — qualifies the audience by business type.
const audience = [
  "Clinics",
  "Restaurants",
  "Real Estate Agencies",
  "Salons & Beauty",
  "Fitness Studios",
  "Professional Services",
  "Education Providers",
  "Home Services",
];

export default function WhoItsFor() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">Who it&apos;s for</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Built for businesses that need marketing handled.
        </h2>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {audience.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-line bg-paper p-6 text-base"
            >
              <span className="mt-0.5 text-accent">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-base text-muted">
          If your business is growing but marketing is inconsistent, Growth
          Department provides the team, structure and execution needed to move
          faster.
        </p>
      </div>
    </section>
  );
}
