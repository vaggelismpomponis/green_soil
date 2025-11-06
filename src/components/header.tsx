import Link from "next/link";
import { Container } from "./container";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold text-primary-dark">green soil</Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/about" className="hover:text-primary-dark">ποιοι είμαστε</Link>
          <Link href="/services" className="hover:text-primary-dark">υπηρεσίες</Link>
          <Link href="/projects" className="hover:text-primary-dark">έργα</Link>
          <Link href="/contact" className="hover:text-primary-dark">επικοινωνία</Link>
        </nav>
      </Container>
    </header>
  );
}


