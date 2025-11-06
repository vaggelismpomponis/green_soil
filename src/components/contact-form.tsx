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
    <form action={onSubmit} className="grid gap-4 max-w-xl" aria-label="φόρμα επικοινωνίας">
      <div>
        <label htmlFor="fullName" className="block text-sm mb-1 font-medium">ονοματεπώνυμο</label>
        <input id="fullName" name="fullName" required className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark" aria-required="true" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm mb-1 font-medium">email</label>
          <input id="email" type="email" name="email" required className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark" aria-required="true" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm mb-1 font-medium">τηλέφωνο</label>
          <input id="phone" type="tel" name="phone" className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark" />
        </div>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">εταιρεία</label>
        <input id="company" name="company" autoComplete="off" tabIndex={-1} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm mb-1 font-medium">μήνυμα</label>
        <textarea id="message" name="message" required className="w-full rounded border border-gray-300 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-primary-dark focus:border-primary-dark" aria-required="true" />
      </div>
      <div className="flex items-start gap-2">
        <input id="consent" type="checkbox" name="consent" required className="mt-1 focus:outline-none focus:ring-2 focus:ring-primary-dark" aria-required="true" />
        <label htmlFor="consent" className="text-sm">
          έχω διαβάσει και αποδέχομαι την <a href="/legal/privacy" className="text-primary-dark hover:underline focus:outline-none focus:ring-2 focus:ring-primary-dark rounded">πολιτική απορρήτου</a>
        </label>
      </div>
      <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed" aria-busy={status === "loading"}>
        {status === "loading" ? "αποστολή…" : "αποστολή"}
      </button>
      {status === "success" && <p className="text-green-700" role="status" aria-live="polite">το μήνυμά σας στάλθηκε επιτυχώς.</p>}
      {status === "error" && <p className="text-red-700" role="alert" aria-live="assertive">παρουσιάστηκε σφάλμα: {error}</p>}
    </form>
  );
}


