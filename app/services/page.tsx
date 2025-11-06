import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Card } from "@/components/card";

export const metadata: Metadata = {
  title: "υπηρεσίες",
  description: "ανάλυση εδάφους, σχέδια λίπανσης, συμβουλευτική καλλιεργειών",
  alternates: { canonical: "/services" },
};

const services = [
  { title: "ανάλυση εδάφους & δεδομένων", description: "δειγματοληψία, εργαστηριακή ανάλυση, ερμηνεία μετρήσεων." },
  { title: "σχέδια λίπανσης", description: "εξατομικευμένα πλάνα, μείωση κόστους, αύξηση παραγωγής." },
  { title: "συμβουλευτική καλλιεργειών", description: "παρακολούθηση, βέλτιστες πρακτικές, εκπαίδευση." },
];

export default function ServicesPage() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-6">υπηρεσίες</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} title={s.title} description={s.description} cta={{ href: "/contact", label: "ζητήστε προσφορά" }} />
        ))}
      </div>
    </Container>
  );
}


