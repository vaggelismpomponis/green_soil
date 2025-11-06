import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Πολιτική Cookies",
  description: "Πληροφορίες για τα cookies και τη διαχείρισή τους",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="bg-primary/5">
      <Container className="prose max-w-none py-12">
        <h1>Πολιτική cookies</h1>
        <p>
          Χρησιμοποιούμε απολύτως απαραίτητα cookies και προαιρετικά analytics μόνο μετά από συναίνεση.
        </p>
      </Container>
    </div>
  );
}


