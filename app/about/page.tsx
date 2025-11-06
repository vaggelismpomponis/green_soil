import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "ποιοι είμαστε",
  description: "συνδυάζουμε επιστημονική γνώση και πρακτική εμπειρία",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Container className="prose max-w-none">
      <h1>ποιοι είμαστε</h1>
      <p>
        στη green soil ι.κ.ε. συνδυάζουμε επιστημονική γνώση και πρακτική εμπειρία για να υποστηρίζουμε βιώσιμες, αποδοτικές καλλιέργειες.
      </p>
    </Container>
  );
}


