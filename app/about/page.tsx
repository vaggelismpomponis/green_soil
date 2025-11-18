import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Ποιοι είμαστε",
  description: "Συνδυάζουμε επιστημονική γνώση και πρακτική εμπειρία",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-beige-light">
      <Container className="prose prose-lg max-w-4xl py-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Ποιοι είμαστε</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg">
          Στη Green Soil ΙΚΕ συνδυάζουμε επιστημονική γνώση και πρακτική εμπειρία για να υποστηρίζουμε βιώσιμες, αποδοτικές καλλιέργειες.
        </p>
        <p>
          Η ομάδα μας αποτελείται από έμπειρους επαγγελματίες που κατανοούν τις προκλήσεις του σύγχρονου αγροτικού τομέα. Με βασική αρχή την αειφορία, αναπτύσσουμε λύσεις που βελτιώνουν την παραγωγικότητα ενώ προστατεύουν το περιβάλλον.
        </p>
        <p>
          Πιστεύουμε ότι η συνεργασία και η συνεχής εκπαίδευση είναι θεμελιώδεις για την επιτυχία. Γι&apos; αυτό, δουλεύουμε στενά με τους πελάτες μας, παρέχοντας εξατομικευμένη υποστήριξη και συμβουλευτική που βασίζεται στις ανάγκες κάθε έργου.
        </p>
      </div>
    </Container>
    </div>
  );
}


