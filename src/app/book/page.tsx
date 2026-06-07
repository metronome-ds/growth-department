// /book — placeholder booking page.
// Replace with your real booking flow (Calendly embed, Supabase form, etc.) later.
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow mb-4">Book a Growth Session</p>
      <h1 className="max-w-2xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
        Booking coming soon.
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        This is a placeholder. Drop in your booking embed or contact form here.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full border border-line px-7 py-3.5 text-base font-semibold transition-colors hover:bg-paper-2"
      >
        ← Back home
      </Link>
    </main>
  );
}
