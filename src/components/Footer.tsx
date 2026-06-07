// Footer — brand, minimal links, copyright. Edit contact details here.
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="section flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">Growth Department</p>
          <p className="mt-1 text-sm text-muted">
            Your marketing department, for less than one employee. Dubai, UAE.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="#pricing" className="transition-colors hover:text-ink">
            Pricing
          </a>
          <a href="#included" className="transition-colors hover:text-ink">
            Services
          </a>
          <Link href="/book" className="transition-colors hover:text-ink">
            Book a session
          </Link>
        </div>
      </div>

      <div className="section pb-8">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Growth Department. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
