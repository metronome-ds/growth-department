// FAQ — objection-handling accordion. Native details/summary, no JS needed.
const faqs = [
  {
    q: "Do I need a long-term contract?",
    a: "Our minimum commitment is three months to allow enough time for planning, execution and optimization.",
  },
  {
    q: "Is advertising spend included?",
    a: "No. Advertising budgets are paid directly by the client. We manage strategy, setup and optimization.",
  },
  {
    q: "Can you work with my existing website?",
    a: "Yes. We can work with your current website and recommend improvements when needed.",
  },
  {
    q: "Do you create content?",
    a: "Yes. One content session is included each month, along with editing and content preparation.",
  },
  {
    q: "What if I already have someone in-house?",
    a: "We can work alongside your existing team and provide additional capacity, expertise and execution.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most clients can begin onboarding within days of signing.",
  },
];

export default function FAQ() {
  return (
    <section className="scroll-mt-20">
      <div className="section py-20 md:py-28">
        <p className="eyebrow mb-4">FAQ</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold marker:content-['']">
                {faq.q}
                <span className="text-accent transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
