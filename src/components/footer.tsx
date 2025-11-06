import Link from "next/link";
import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-700 bg-gray-800">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-sm max-w-6xl mx-auto text-center md:text-left">
          <div>
            <div className="font-bold text-lg mb-3 text-white">Green Soil Ι Κ Ε</div>
            <p className="text-gray-300 leading-relaxed">Βιώσιμες λύσεις για το έδαφος και την καλλιέργεια</p>
          </div>
          <div>
            <div className="font-semibold mb-3 text-white">Νομικά</div>
            <ul className="space-y-2">
              <li><Link href="/legal/terms" className="text-gray-300 hover:text-primary-light transition-colors">Όροι χρήσης</Link></li>
              <li><Link href="/legal/privacy" className="text-gray-300 hover:text-primary-light transition-colors">Πολιτική απορρήτου</Link></li>
              <li><Link href="/legal/cookies" className="text-gray-300 hover:text-primary-light transition-colors">Πολιτική cookies</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-white">Εταιρικά Στοιχεία</div>
            <ul className="text-gray-300 space-y-2 leading-relaxed">
              <li><strong className="text-white">Επωνυμία:</strong> GREEN SOIL Ι Κ Ε</li>
              <li>
                <strong className="text-white">📍 Έδρα:</strong>{" "}
                <a href="https://www.google.com/maps?q=Μπουμπουλίνας+107,+Φυλή,+Αττική,+13341" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-primary transition-colors">Μπουμπουλίνας 107, Φυλή, Αττική, Τ.Κ.: 13341</a>
              </li>
              <li><strong className="text-white">Email:</strong> <a href="mailto:info@greensoil.gr" className="text-primary-light hover:text-primary transition-colors">info@greensoil.gr</a></li>
              <li><strong className="text-white">Τηλέφωνο:</strong> <a href="tel:2110011776" className="text-primary-light hover:text-primary transition-colors">211 0011 776</a></li>
              <li><strong className="text-white">Α.Φ.Μ.:</strong> 802454370</li>
              <li><strong className="text-white">Αρ. Γ.Ε.ΜΗ.:</strong> 176654101000</li>
              <li><strong className="text-white">ΑΡ. ΜΗΤΡΩΟΥ ΕΠΙΜΕΛΗΤΗΡΙΟΥ:</strong> 309252</li>
              <li><strong className="text-white">ΚΥΡΙΟΣ ΚΑΔ:</strong> 46901003</li>
              <li><strong className="text-white">ΕΜΠΟΡΙΚΟ ΚΑΙ ΒΙΟΜΗΧΑΝΙΚΟ ΕΠΙΜΕΛΗΤΗΡΙΟ ΑΘΗΝΩΝ:</strong> 309252</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3 text-white">Εταίροι Επιχείρισης</div>
            <ul className="text-gray-300 space-y-2 leading-relaxed">
              <li><strong className="text-white">ΛΙΑΤΗΣ ΙΩΑΝΝΗΣ:</strong> ΠΟΣΟΣΤΟ ΣΥΜΜΕΤΟΧΗΣ 50%</li>
              <li><strong className="text-white">ΔΗΜΟΥ ΟΛΓΑ:</strong> ΠΟΣΟΣΤΟ ΣΥΜΜΕΤΟΧΗΣ 50%</li>
            </ul>
          </div>
        </div>
      </Container>
      <div className="border-t border-gray-700 py-6 text-center text-sm text-gray-300">© {year} – Green Soil Ι Κ Ε | Developed by <a href="https://www.linkedin.com/in/vaggelis-bomponis/" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-primary transition-colors">Vaggelis Bomponis</a></div>
    </footer>
  );
}


