import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "πολιτική απορρήτου",
  description: "πληροφορίες για την επεξεργασία προσωπικών δεδομένων (gdpr)",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <Container className="prose max-w-none">
      <h1>πολιτική απορρήτου</h1>
      <p>
        η green soil ι.κ.ε. σέβεται την ιδιωτικότητά σας. περιγράφουμε τις κατηγορίες δεδομένων, σκοπούς, νομική βάση,
        χρόνο τήρησης, τρίτους επεξεργαστές και τα δικαιώματα σας.
      </p>
    </Container>
  );
}


