// Problem / Comparison — contrasts "hiring in-house" vs "Growth Department".
const columns = [
  {
    title: "Hiring in-house",
    tone: "muted" as const,
    points: [
      "One salary, one skill set",
      "Recruiting, onboarding, management overhead",
      "Gaps when they're on leave",
      "20,000+ AED/month all-in",
    ],
  },
  {
    title: "Growth Department",
    tone: "accent" as const,
    points: [
      "A full team across every channel",
      "Up and running in days, not months",
      "Always-on delivery and reporting",
      "From 10,000 AED/month",
    ],
  },
];

export default function ProblemComparison() {
  return (
    <section className="border-y border-line bg-paper-2">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">The problem</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          One marketing hire can&apos;t do everything. A department can.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {columns.map((col) => (
            <div
              key={col.title}
              className={`rounded-2xl border p-8 ${
                col.tone === "accent"
                  ? "border-accent bg-accent text-paper"
                  : "border-line bg-paper"
              }`}
            >
              <h3 className="font-display text-xl font-semibold">{col.title}</h3>
              <ul className="mt-6 space-y-3">
                {col.points.map((point) => (
                  <li
                    key={point}
                    className={`text-base ${
                      col.tone === "accent" ? "text-paper/90" : "text-muted"
                    }`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
