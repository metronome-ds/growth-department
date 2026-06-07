// Final CTA — closing conversion block.
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-ink text-paper">
      <div className="section py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Ready to stop managing marketing yourself?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/70">
          Get the team, structure and execution your business needs, for one
          fixed monthly fee.
        </p>
        <Link
          href="/book"
          className="mt-10 inline-block rounded-full bg-accent-2 px-8 py-4 text-base font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Book a Growth Session
        </Link>
      </div>
    </section>
  );
}
