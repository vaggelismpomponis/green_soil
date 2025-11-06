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
    <form action={onSubmit} className="grid gap-4 max-w-xl">
      <div>
        <label className="block text-sm mb-1">ονοματεπώνυμο</label>
        <input name="fullName" required className="w-full rounded border px-3 py-2" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">email</label>
          <input type="email" name="email" required className="w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">τηλέφωνο</label>
          <input name="phone" className="w-full rounded border px-3 py-2" />
        </div>
      </div>
      <div className="hidden">
        <label>εταιρεία</label>
        <input name="company" autoComplete="off" />
      </div>
      <div>
        <label className="block text-sm mb-1">μήνυμα</label>
        <textarea name="message" required className="w-full rounded border px-3 py-2 h-28" />
      </div>
      <label className="flex items-start gap-2 text-sm">
        <input type="checkbox" name="consent" required className="mt-1" /> έχω διαβάσει και αποδέχομαι την πολιτική απορρήτου
      </label>
      <button type="submit" disabled={status === "loading"} className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-dark disabled:opacity-60">
        {status === "loading" ? "αποστολή…" : "αποστολή"}
      </button>
      {status === "success" && <p className="text-green-700">το μήνυμά σας στάλθηκε επιτυχώς.</p>}
      {status === "error" && <p className="text-red-700">παρουσιάστηκε σφάλμα: {error}</p>}
    </form>
  );
}


