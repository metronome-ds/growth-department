// Hero — primary headline and CTA. The core positioning lives here.
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="section py-24 md:py-36">
        <p className="eyebrow mb-6">Outsourced marketing for Dubai SMEs</p>

        <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          Your Marketing Department.
          <br />
          <span className="text-accent">For Less Than One Employee.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted md:text-xl">
          Social media, content creation, design, advertising and reporting —
          run by one team, for a fraction of the cost of a single hire.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/book"
            className="rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-paper transition-opacity hover:opacity-90"
          >
            Book a Growth Session
          </Link>
          <a
            href="#pricing"
            className="rounded-full border border-line px-7 py-3.5 text-base font-semibold transition-colors hover:bg-paper-2"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
