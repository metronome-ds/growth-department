// Problem / Comparison — contrasts "hiring in-house" vs "Growth Department".
const columns = [
  {
    title: "Hiring In-House",
    tone: "muted" as const,
    points: [
      "One salary",
      "One skillset",
      "Recruitment costs",
      "Requires management",
      "Limited capacity",
    ],
    footer: "20,000+ AED/month",
  },
  {
    title: "Growth Department",
    tone: "accent" as const,
    points: ["Strategy", "Design", "Content", "Advertising", "Reporting"],
    footer: "10,000 AED/month",
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
              className={`flex flex-col rounded-2xl border p-8 ${
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
              <p
                className={`mt-8 font-display text-2xl font-semibold ${
                  col.tone === "accent" ? "text-paper" : "text-ink"
                }`}
              >
                {col.footer}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-base text-muted">
          Most growing businesses don&apos;t need another employee. They need a
          team. Growth Department gives you access to strategy, creative,
          content and advertising through one fixed monthly engagement.
        </p>
      </div>
    </section>
  );
}
