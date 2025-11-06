import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Card } from "@/components/card";

export const metadata: Metadata = {
  title: "Υπηρεσίες",
  description: "Ανάλυση εδάφους, σχέδια λίπανσης, συμβουλευτική καλλιεργειών",
  alternates: { canonical: "/services" },
};

const services = [
  { title: "Ανάλυση εδάφους & δεδομένων", description: "Δειγματοληψία, εργαστηριακή ανάλυση, ερμηνεία μετρήσεων. Παρέχουμε αναλυτικές αναφορές που βοηθούν στην καλύτερη κατανόηση των χαρακτηριστικών του εδάφους σας." },
  { title: "Σχέδια λίπανσης", description: "Εξατομικευμένα πλάνα, μείωση κόστους, αύξηση παραγωγής. Αναπτύσσουμε στρατηγικές λίπανσης που βελτιώνουν την αποδοτικότητα και τη βιωσιμότητα." },
  { title: "Συμβουλευτική καλλιεργειών", description: "Παρακολούθηση, βέλτιστες πρακτικές, εκπαίδευση. Συμβουλεύουμε σε όλα τα στάδια της καλλιέργειας για βέλτιστα αποτελέσματα." },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Container className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Υπηρεσίες</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Παρέχουμε ολοκληρωμένες λύσεις για την ανάπτυξη βιώσιμων και αποδοτικών καλλιεργειών
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} title={s.title} description={s.description} cta={{ href: "/contact", label: "Ζητήστε προσφορά" }} />
          ))}
        </div>
      </Container>
    </div>
  );
}


