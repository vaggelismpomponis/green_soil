import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "επικοινωνία",
  description: "συμπληρώστε τη φόρμα και θα επικοινωνήσουμε σύντομα",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-4">επικοινωνία</h1>
      <p className="mb-6">συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο.</p>
      <ContactForm />
      <div className="mt-8">
        <iframe
          title="χάρτης"
          src="https://maps.google.com/maps?q=athens&t=&z=13&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          className="w-full h-64 border rounded"
        />
      </div>
    </Container>
  );
}


