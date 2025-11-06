import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <Container className="py-10 grid gap-8 md:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">green soil ι.κ.ε.</div>
          <p className="text-gray-600">βιώσιμες λύσεις για το έδαφος και την καλλιέργεια</p>
        </div>
        <div>
          <div className="font-semibold mb-2">νομικά</div>
          <ul className="space-y-1">
            <li><Link href="/legal/terms" className="hover:text-primary-dark">όροι χρήσης</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-primary-dark">πολιτική απορρήτου</Link></li>
            <li><Link href="/legal/cookies" className="hover:text-primary-dark">πολιτική cookies</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <div className="font-semibold mb-2">εταιρικά στοιχεία</div>
          <ul className="text-gray-600 space-y-1">
            <li>επωνυμία: green soil ι.κ.ε.</li>
            <li>έδρα: [διεύθυνση]</li>
            <li>α.φ.μ.: [αφμ] — δ.ο.υ.: [δου]</li>
            <li>αρ. γ.ε.μη.: [αριθμός]</li>
            <li>email: [info@domain.gr] — τηλ.: [210-xxx xxxx]</li>
          </ul>
        </div>
      </Container>
      <div className="border-t py-4 text-center text-xs text-gray-600">© {year} – green soil ι.κ.ε.</div>
    </footer>
  );
}


