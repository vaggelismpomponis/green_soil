import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "όροι χρήσης",
  description: "όροι και προϋποθέσεις χρήσης ιστότοπου",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  return (
    <Container className="prose max-w-none">
      <h1>όροι χρήσης</h1>
      <p>
        παρακαλούμε διαβάστε προσεκτικά τους παρόντες όρους χρήσης. ισχύει το ελληνικό δίκαιο.
      </p>
    </Container>
  );
}


