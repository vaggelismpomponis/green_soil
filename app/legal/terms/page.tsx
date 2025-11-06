import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Όροι χρήσης",
  description: "Όροι και προϋποθέσεις χρήσης ιστότοπου",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-beige-light">
      <Container className="prose max-w-none py-12">
        <h1>Όροι χρήσης</h1>
        <p>
          Παρακαλούμε διαβάστε προσεκτικά τους παρόντες όρους χρήσης. ισχύει το ελληνικό δίκαιο.
        </p>
      </Container>
    </div>
  );
}


