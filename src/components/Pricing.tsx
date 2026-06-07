// Pricing — single headline price. Edit the number and inclusions here.
import Link from "next/link";

const inclusions = [
  "Social media",
  "Content creation",
  "Design",
  "Advertising",
  "Monthly reporting",
];

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 border-y border-line bg-paper-2">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">Pricing</p>
        <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          One plan. Everything included.
        </h2>

        <div className="mt-12 max-w-lg rounded-3xl border border-ink bg-paper p-10">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-5xl font-semibold tracking-tight">
              10,000
            </span>
            <span className="text-lg text-muted">AED / month</span>
          </div>

          <ul className="mt-8 space-y-3">
            {inclusions.map((item) => (
              <li key={item} className="flex items-center gap-3 text-base">
                <span className="text-accent">—</span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/book"
            className="mt-10 block rounded-full bg-accent px-7 py-3.5 text-center text-base font-semibold text-paper transition-opacity hover:opacity-90"
          >
            Book a Growth Session
          </Link>
        </div>
      </div>
    </section>
  );
}
