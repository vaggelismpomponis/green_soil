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
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">Οι υπηρεσίες μας</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Παρέχουμε ολοκληρωμένες λύσεις για βιώσιμες και αποδοτικές καλλιέργειες.
            </p>
          </div>
          <Features />
        </Container>
      </section>
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-white">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary/20 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Θέλετε να συζητήσουμε το έργο σας;</h2>
            <a href="/contact" className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-medium hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Επικοινωνήστε μαζί μας
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}


