"use client";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<{ email: boolean; phone: boolean; message: boolean }>({
    email: false,
    phone: false,
    message: false,
  });
  const [values, setValues] = useState<{ email: string; phone: string; message: string }>({
    email: "",
    phone: "",
    message: "",
  });

  async function onSubmit(formData: FormData) {
    setStatus("loading");
    setError(null);
    const payload = {
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
      setValues({ email: "", phone: "", message: "" });
      setFocused({ email: false, phone: false, message: false });
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "error");
    }
  }

  return (
    <form action={onSubmit} className="grid gap-6 max-w-xl mx-auto" aria-label="φόρμα επικοινωνίας">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="relative">
          <label
            htmlFor="email"
            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
              focused.email || values.email
                ? "top-2 text-xs text-primary-dark font-semibold"
                : "top-3.5 text-sm text-gray-500"
            }`}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            onFocus={() => setFocused({ ...focused, email: true })}
            onBlur={() => setFocused({ ...focused, email: false })}
            className="w-full rounded-lg border border-gray-300 px-4 pt-5 pb-2 focus:outline-none  focus:ring-primary-dark focus:border-primary-dark transition-all duration-200 bg-white"
            aria-required="true"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="phone"
            className={`absolute left-4 transition-all duration-200 pointer-events-none ${
              focused.phone || values.phone
                ? "top-2 text-xs text-primary-dark font-semibold"
                : "top-3.5 text-sm text-gray-500"
            }`}
          >
            Τηλέφωνο
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            onFocus={() => setFocused({ ...focused, phone: true })}
            onBlur={() => setFocused({ ...focused, phone: false })}
            className="w-full rounded-lg border border-gray-300 px-4 pt-5 pb-2 focus:outline-none  focus:ring-primary-dark focus:border-primary-dark transition-all duration-200 bg-white"
          />
        </div>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">εταιρεία</label>
        <input id="company" name="company" autoComplete="off" tabIndex={-1} />
      </div>
      <div className="relative">
        <label
          htmlFor="message"
          className={`absolute left-4 top-3.5 transition-all duration-200 pointer-events-none ${
            focused.message || values.message
              ? "top-2 text-xs text-primary-dark font-semibold"
              : "text-sm text-gray-500"
          }`}
        >
          Μήνυμα
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          onFocus={() => setFocused({ ...focused, message: true })}
          onBlur={() => setFocused({ ...focused, message: false })}
          className="w-full rounded-lg border border-gray-300 px-4 pt-5 pb-3 h-32 focus:outline-none  focus:ring-primary-dark focus:border-primary-dark transition-all duration-200 resize-none bg-white"
          aria-required="true"
        />
      </div>
      <div className="flex items-start gap-3">
        <input id="consent" type="checkbox" name="consent" required className="mt-1 w-5 h-5 rounded border-gray-300 text-primary  focus:ring-primary-dark" aria-required="true" />
        <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
          Έχω διαβάσει και αποδέχομαι την <a href="/legal/privacy" className="text-primary-dark hover:underline focus:outline-none  focus:ring-primary-dark rounded font-medium">πολιτική απορρήτου</a>
        </label>
      </div>
      <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-dark focus:outline-none  focus:ring-primary-dark focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:transform-none" aria-busy={status === "loading"}>
        {status === "loading" ? "Αποστολή…" : "Αποστολή"}
      </button>
      {status === "success" && <p className="text-green-700 font-medium p-4 bg-green-50 rounded-lg border border-green-200" role="status" aria-live="polite">Το μήνυμά σας στάλθηκε επιτυχώς.</p>}
      {status === "error" && <p className="text-red-700 font-medium p-4 bg-red-50 rounded-lg border border-red-200" role="alert" aria-live="assertive">Παρουσιάστηκε σφάλμα: {error}</p>}
    </form>
  );
}


