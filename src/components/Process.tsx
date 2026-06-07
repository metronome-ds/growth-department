// Process — simple three-step onboarding. Edit steps and copy here.
const steps = [
  {
    n: "01",
    title: "Book a Growth Session",
    desc: "We learn your business, goals and current marketing.",
  },
  {
    n: "02",
    title: "We build your plan",
    desc: "A clear monthly plan across channels, ready to run.",
  },
  {
    n: "03",
    title: "We run it for you",
    desc: "Delivery, optimisation and reporting, every month.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">Process</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Up and running in three steps.
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n}>
              <span className="font-display text-4xl font-semibold text-accent">
                {step.n}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
