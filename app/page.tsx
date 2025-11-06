import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";

export const metadata: Metadata = {
  title: "βιώσιμες λύσεις για το έδαφος και την καλλιέργεια",
  description:
    "η green soil ι.κ.ε. παρέχει αξιόπιστες υπηρεσίες αγροτεχνολογίας και συμβουλευτικής για παραγωγούς και επιχειρήσεις.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "green soil ι.κ.ε.",
    description:
      "η green soil ι.κ.ε. παρέχει αξιόπιστες υπηρεσίες αγροτεχνολογίας και συμβουλευτικής για παραγωγούς και επιχειρήσεις.",
    type: "website",
    url: "/",
  },
};

export default function Page() {
  return (
    <>
      <Hero />
      <section className="py-16">
        <Container>
          <Features />
        </Container>
      </section>
      <section className="py-12 bg-primary/5">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <h2 className="text-xl font-semibold">θέλετε να συζητήσουμε το έργο σας;</h2>
            <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2">
              επικοινωνήστε μαζί μας
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}


