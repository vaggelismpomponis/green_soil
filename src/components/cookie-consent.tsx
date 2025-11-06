"use client";
import { useEffect, useRef, useState } from "react";
import { loadGA } from "@/lib/analytics";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
  v?: number;
  ts?: number;
};

const STORAGE_KEY = "cookie-consent";
const CONSENT_VERSION = 1;
let gaLoadedOnce = false;

function persistConsent(state: ConsentState) {
  const payload: ConsentState = {
    ...state,
    essential: true,
    v: CONSENT_VERSION,
    ts: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function readConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (!parsed.v || parsed.v < CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    essential: true,
    analytics: false,
  });
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setOpen(true);
      return;
    }
    setConsent(existing);
    if (existing.analytics && !gaLoadedOnce) {
      loadGA();
      gaLoadedOnce = true;
    }
  }, []);

  useEffect(() => {
    if (open) dialogRef.current?.focus();
  }, [open]);

  const handleReject = () => {
    const next = { essential: true, analytics: false };
    persistConsent(next);
    setConsent(next);
    setOpen(false);
  };

  const handleAcceptSelected = () => {
    const next = { essential: true, analytics: consent.analytics };
    persistConsent(next);
    if (next.analytics && !gaLoadedOnce) {
      loadGA();
      gaLoadedOnce = true;
    }
    setOpen(false);
  };

  const handleAcceptAll = () => {
    const next = { essential: true, analytics: true };
    persistConsent(next);
    if (!gaLoadedOnce) {
      loadGA();
      gaLoadedOnce = true;
    }
    setOpen(false);
  };

  // ✅ Επιστρέφουμε conditional JSX (όχι early return πριν τα hooks)
  return !open ? null : (
    <>
      {/* Overlay (προαιρετικό) */}
      <div className="fixed inset-0 z-40 bg-black/30" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Συναίνεση Cookies"
        tabIndex={-1}
        className="fixed inset-x-0 bottom-0 z-50"
      >
        <div className="mx-auto max-w-screen-xl px-4 pb-4">
          <div className="rounded-xl border bg-white shadow-xl md:mb-4">
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-12 md:gap-6 md:p-6">
              {/* Κείμενο */}
              <div className="md:col-span-7">
                <h2 className="text-base font-semibold text-gray-900">Τα cookies μας</h2>
                <p id="cookie-banner-desc" className="mt-1 text-[15px] leading-6 text-gray-700">
                  Χρησιμοποιούμε cookies για να λειτουργεί σωστά ο ιστότοπος (απαραίτητα).
                  Προαιρετικά χρησιμοποιούμε cookies ανάλυσης για στατιστικά χρήσης και βελτίωση υπηρεσιών.
                  Τα analytics ενεργοποιούνται μόνο αν τα αποδεχτείτε.
                  <span className="mt-2 block text-gray-600">
                    Μάθετε περισσότερα στην{" "}
                    <a href="/legal/privacy" className="underline underline-offset-2 hover:no-underline">
                      Πολιτική Απορρήτου
                    </a>{" "}
                    και στην{" "}
                    <a href="/legal/cookies" className="underline underline-offset-2 hover:no-underline">
                      Πολιτική Cookies
                    </a>.
                  </span>
                </p>
              </div>

              {/* Επιλογές */}
              <fieldset aria-describedby="cookie-banner-desc" className="md:col-span-3 grid grid-cols-1 gap-2">
                <label className="group inline-flex w-full items-start gap-2 rounded-lg border px-3 py-2 text-sm">
                  <input type="checkbox" checked readOnly aria-readonly />
                  <span className="leading-5">
                    <span className="font-medium">Απαραίτητα</span>
                    <span className="block text-gray-600">Αναγκαία για βασικές λειτουργίες του ιστότοπου.</span>
                  </span>
                </label>

                <label className="group inline-flex w-full items-start gap-2 rounded-lg border px-3 py-2 text-sm">
                  <input
                    type="checkbox"
                    checked={!!consent.analytics}
                    onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                  />
                  <span className="leading-5">
                    <span className="font-medium">Στατιστικά (analytics)</span>
                    <span className="block text-gray-600">
                      Μας βοηθούν να κατανοήσουμε τη χρήση του ιστότοπου. Ενεργοποιούνται μόνο με συγκατάθεση.
                    </span>
                  </span>
                </label>
              </fieldset>

              {/* Κουμπιά */}
              <div className="md:col-span-2 flex flex-wrap items-start gap-2 md:justify-end">
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-900 hover:bg-gray-200"
                  onClick={handleReject}
                >
                  Απόρριψη
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-primary px-3 py-2 text-sm text-white hover:bg-primary/90"
                  onClick={handleAcceptSelected}
                >
                  Αποδοχή επιλογών
                </button>
                <button
                  type="button"
                  className="inline-flex items-center rounded-lg bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-700"
                  onClick={handleAcceptAll}
                >
                  Αποδοχή όλων
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
