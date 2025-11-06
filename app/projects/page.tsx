import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Card } from "@/components/card";

export const metadata: Metadata = {
  title: "Έργα",
  description: "Ενδεικτικά έργα και αποτελέσματα",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="bg-primary/5">
      <Container className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Έργα / Πελάτες</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Δείτε μερικά από τα έργα που έχουμε υλοποιήσει με επιτυχία
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} title={`Έργο ${i}`} description={`Σύντομη περιγραφή έργου ${i} με λεπτομέρειες για την υλοποίηση και τα αποτελέσματα.`} />
          ))}
        </div>
      </Container>
    </div>
  );
}


