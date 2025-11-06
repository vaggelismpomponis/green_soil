"use client";
import { useEffect, useState } from "react";
import { loadGA } from "@/lib/analytics";

type ConsentState = {
  essential: boolean;
  analytics: boolean;
};

const STORAGE_KEY = "cookie-consent";

export function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({ essential: true, analytics: false });

  useEffect(() => {
    const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) {
      setOpen(true);
      return;
    }
    try {
      const parsed = JSON.parse(raw) as ConsentState;
      setConsent(parsed);
      if (parsed.analytics) loadGA();
    } catch {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white p-4 shadow-lg">
      <div className="mx-auto max-w-screen-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-700 flex-1">χρησιμοποιούμε cookies για τη βελτίωση της εμπειρίας σας. τα analytics φορτώνουν μόνο μετά από αποδοχή.</p>
        <div className="flex items-center gap-2">
          <label className="text-sm flex items-center gap-2">
            <input type="checkbox" checked disabled /> essential
          </label>
          <label className="text-sm flex items-center gap-2">
            <input type="checkbox" checked={consent.analytics} onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))} /> analytics
          </label>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-lg bg-gray-100 px-3 py-2 text-sm hover:bg-gray-200"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, JSON.stringify({ essential: true, analytics: false }));
              setOpen(false);
            }}
          >
            απόρριψη
          </button>
          <button
            className="rounded-lg bg-primary px-3 py-2 text-sm text-white hover:bg-primary-dark"
            onClick={() => {
              localStorage.setItem(STORAGE_KEY, JSON.stringify({ essential: true, analytics: consent.analytics }));
              if (consent.analytics) loadGA();
              setOpen(false);
            }}
          >
            αποδοχή επιλογών
          </button>
        </div>
      </div>
    </div>
  );
}


