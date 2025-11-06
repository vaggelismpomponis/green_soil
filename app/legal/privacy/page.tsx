import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Πολιτική απορρήτου",
  description: "Πληροφορίες για την επεξεργασία προσωπικών δεδομένων (GDPR)",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <Container className="prose max-w-none py-12">
        <h1>Πολιτική απορρήτου</h1>
        <p>
          H Green Soil Ι Κ Ε σέβεται την ιδιωτικότητά σας. περιγράφουμε τις κατηγορίες δεδομένων, σκοπούς, νομική βάση,
          χρόνο τήρησης, τρίτους επεξεργαστές και τα δικαιώματα σας.
        </p>
      </Container>
    </div>
  );
}


