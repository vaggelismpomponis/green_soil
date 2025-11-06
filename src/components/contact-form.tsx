"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);
    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
      consent: formData.get("consent") === "on",
      honey: String(formData.get("company") || ""),
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload) });
      const json = await res.json();
      if (!res.ok || !json.ok) throw new Error(json.error || "error");
      setStatus("success");
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "error");
    }
  }

  return (
    <form action={onSubmit} className="grid gap-6 max-w-xl" aria-label="φόρμα επικοινωνίας">
      <div>
        <label htmlFor="fullName" className="block text-sm mb-2 font-semibold text-gray-900">Ονοματεπώνυμο</label>
        <input id="fullName" name="fullName" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark transition-all duration-200" aria-required="true" />
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm mb-2 font-semibold text-gray-900">Email</label>
          <input id="email" type="email" name="email" required className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark transition-all duration-200" aria-required="true" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm mb-2 font-semibold text-gray-900">Τηλέφωνο</label>
          <input id="phone" type="tel" name="phone" className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark transition-all duration-200" />
        </div>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">εταιρεία</label>
        <input id="company" name="company" autoComplete="off" tabIndex={-1} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-2 font-semibold text-gray-900">Μήνυμα</label>
        <textarea id="message" name="message" required className="w-full rounded-lg border border-gray-300 px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark transition-all duration-200 resize-none" aria-required="true" />
      </div>
      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox" name="consent" required className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary-dark" aria-required="true" />
        <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
          Έχω διαβάσει και αποδέχομαι την <a href="/legal/privacy" className="text-primary-dark hover:underline focus:outline-none focus:ring-2 focus:ring-primary-dark rounded font-medium">πολιτική απορρήτου</a>
        </label>
      </div>
      <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:transform-none" aria-busy={status === "loading"}>
        {status === "loading" ? "Αποστολή…" : "Αποστολή"}
      </button>
      {status === "success" && <p className="text-green-700 font-medium p-4 bg-green-50 rounded-lg border border-green-200" role="status" aria-live="polite">Το μήνυμά σας στάλθηκε επιτυχώς.</p>}
      {status === "error" && <p className="text-red-700 font-medium p-4 bg-red-50 rounded-lg border border-red-200" role="alert" aria-live="assertive">Παρουσιάστηκε σφάλμα: {error}</p>}
    </form>
  );
}


