import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-white">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3 text-sm max-w-5xl mx-auto text-center md:text-left">
          <div>
            <div className="font-bold text-lg mb-3 text-gray-900">Green Soil Ι.Κ.Ε.</div>
            <p className="text-gray-600 leading-relaxed">Βιώσιμες λύσεις για το έδαφος και την καλλιέργεια</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-gray-900">Νομικά</div>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="text-gray-600 hover:text-primary-dark transition-colors">Όροι χρήσης</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-600 hover:text-primary-dark transition-colors">Πολιτική απορρήτου</Link></li>
              <li><Link href="/legal/cookies" className="text-gray-600 hover:text-primary-dark transition-colors">Πολιτική cookies</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-gray-900">Εταιρικά στοιχεία</div>
            <ul className="text-gray-600 space-y-2 leading-relaxed">
              <li>Επωνυμία: GREEN SOIL Ι.Κ.Ε.</li>
              <li>Έδρα: [διεύθυνση]</li>
              <li>Α.Φ.Μ.: 802454370 — Δ.Ο.Υ.: [δου]</li>
              <li>Αρ. Γ.Ε.ΜΗ.: [αριθμός]</li>
              <li>Email: [info@domain.gr] — Τηλ.: [210-xxx xxxx]</li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t py-6 text-center text-sm text-gray-600">© {year} – Green Soil Ι.Κ.Ε.</div>
    </footer>
  );
}


