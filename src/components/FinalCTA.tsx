// Final CTA — closing conversion block.
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-ink text-paper">
      <div className="section py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Your marketing department is one conversation away.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/70">
          Book a free Growth Session and we&apos;ll show you exactly what we&apos;d do.
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
