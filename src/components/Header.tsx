// Header — sticky top nav. Edit nav links and brand here.
import Link from "next/link";

const navLinks = [
  { label: "What's included", href: "#included" },
  { label: "Pricing", href: "#pricing" },
  { label: "Process", href: "#process" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/80 backdrop-blur">
      <div className="section flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold tracking-tight">
          Growth Department
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/book"
          className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-opacity hover:opacity-90"
        >
          Book a Growth Session
        </Link>
      </div>
    </header>
  );
}
