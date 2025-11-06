import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "πολιτική cookies",
  description: "πληροφορίες για τα cookies και τη διαχείρισή τους",
  alternates: { canonical: "/legal/cookies" },
};

export default function CookiesPage() {
  return (
    <Container className="prose max-w-none">
      <h1>πολιτική cookies</h1>
      <p>
        χρησιμοποιούμε απολύτως απαραίτητα cookies και προαιρετικά analytics μόνο μετά από συναίνεση.
      </p>
    </Container>
  );
}


