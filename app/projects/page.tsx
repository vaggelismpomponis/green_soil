import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Card } from "@/components/card";

export const metadata: Metadata = {
  title: "έργα / πελάτες",
  description: "ενδεικτικά έργα και αποτελέσματα",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <Container>
      <h1 className="text-2xl font-semibold mb-6">έργα / πελάτες</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} title={`έργο ${i}`} description={`σύντομη περιγραφή έργου ${i}.`} />
        ))}
      </div>
    </Container>
  );
}


