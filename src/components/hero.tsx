import { Container } from "./container";
import { Button } from "./button";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-primary/10 py-20">
      <Container className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-4">βιώσιμες λύσεις για το έδαφος και την καλλιέργεια</h1>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">η green soil ι.κ.ε. παρέχει αξιόπιστες υπηρεσίες αγροτεχνολογίας και συμβουλευτικής για παραγωγούς και επιχειρήσεις.</p>
        <Button href="/contact">επικοινωνήστε μαζί μας</Button>
      </Container>
    </section>
  );
}


