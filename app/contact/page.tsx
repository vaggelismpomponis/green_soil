import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: "Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε σύντομα",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-beige-light">
      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Επικοινωνία</h1>
          <p className="text-xl text-gray-600">
            Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100">
          <ContactForm />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="χάρτης"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.3088455185!2d23.7275!3d37.9838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x273627c9ad3b4fe6!2sSyntagma%20Square%2C%20Athens%2C%20Greece!5e0!3m2!1sen!2sgr!4v1699123456789!5m2!1sen!2sgr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            aria-label="Χάρτης τοποθεσίας"
          />
        </div>
      </div>
    </Container>
    </div>
  );
}


