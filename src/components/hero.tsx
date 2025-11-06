import { Container } from "./container";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-primary/5 to-primary/10 py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(47,133,90,0.1),transparent_50%)]" />
      <Container className="relative text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
          Βιώσιμες λύσεις για το έδαφος και την καλλιέργεια
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          Η Green Soil Ι.Κ.Ε. παρέχει αξιόπιστες υπηρεσίες αγροτεχνολογίας και συμβουλευτικής για παραγωγούς και επιχειρήσεις.
        </p>
        <Button href="/contact">Επικοινωνήστε μαζί μας</Button>
      </Container>
    </section>
  );
}


