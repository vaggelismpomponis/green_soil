"use client";
import { useState } from "react";
import Link from "next/link";
import { Container } from "./container";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded">Green Soil</Link>
        <nav className="hidden md:flex items-center gap-4 text-sm" aria-label="κύρια πλοήγηση">
          <Link href="/about" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded">Ποιοι είμαστε</Link>
          <Link href="/services" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded">Υπηρεσίες</Link>
          <Link href="/projects" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded">Έργα</Link>
          <Link href="/contact" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded">Επικοινωνία</Link>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary-dark rounded"
          aria-label="άνοιγμα μενού"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {mobileMenuOpen && (
          <nav className="absolute top-14 left-0 right-0 bg-white border-b md:hidden" aria-label="κύρια πλοήγηση">
            <Container className="py-4 flex flex-col gap-4">
              <Link href="/about" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded" onClick={() => setMobileMenuOpen(false)}>Ποιοι είμαστε</Link>
              <Link href="/services" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded" onClick={() => setMobileMenuOpen(false)}>Υπηρεσίες</Link>
              <Link href="/projects" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded" onClick={() => setMobileMenuOpen(false)}>Έργα</Link>
              <Link href="/contact" className="hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark rounded" onClick={() => setMobileMenuOpen(false)}>Επικοινωνία</Link>
            </Container>
          </nav>
        )}
      </Container>
    </header>
  );
}


