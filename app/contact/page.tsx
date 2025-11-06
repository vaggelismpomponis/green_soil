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
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Επικοινωνία</h1>
          <p className="text-xl text-gray-600">
            Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <ContactForm />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="χάρτης"
            src="https://maps.google.com/maps?q=athens&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            className="w-full h-80"
          />
        </div>
      </div>
    </Container>
  );
}


