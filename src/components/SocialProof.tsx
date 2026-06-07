// Social Proof — credibility through sectors worked across.
const sectors = [
  "Government",
  "Hospitality",
  "Tourism",
  "Retail",
  "Real Estate",
  "Professional Services",
];

export default function SocialProof() {
  return (
    <section className="scroll-mt-20">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">Experience</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Built on experience across complex brands and organizations.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-muted">
          Growth Department combines proven marketing systems with modern
          execution to help businesses grow efficiently.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="bg-paper-2 p-8 font-display text-lg font-semibold"
            >
              {sector}
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-muted">
          Now packaged into a simple monthly service for growing businesses.
        </p>
      </div>
    </section>
  );
}
