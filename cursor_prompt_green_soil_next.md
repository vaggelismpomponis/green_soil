# Prompt for Cursor: Build GREEN SOIL Corporate Website (Next.js)

> **Goal:** Generate a production‑ready, lightweight, fully responsive corporate website for **GREEN SOIL I.K.E.** using **Next.js (App Router + TypeScript)** and **Tailwind CSS**, deployed on **Vercel** with a custom domain. The site must follow modern best practices for performance, accessibility, SEO, security, and GDPR compliance (cookie consent with prior consent for analytics). All text is in **Greek** with clean, professional styling.

---

## 🔧 Tech & Constraints
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS + CSS variables; optional shadcn/ui components
- **State/Forms:** React Server Actions or simple API routes
- **Images:** `next/image` with optimized sizes
- **Icons:** lucide-react (optional)
- **Linting/Formatting:** ESLint + Prettier
- **Testing (lightweight):** Playwright smoke tests for core pages
- **Accessibility:** WCAG 2.1 AA principles, semantic HTML, focus styles, skip links
- **Performance:** Aim for Lighthouse ≥ 90 in Performance/SEO/Best Practices
- **i18n:** Greek only for now (`lang="el"`).

---

## 🗂️ Project Setup
1. Create a new Next.js (App Router) + TS project, Tailwind configured.
2. Add scripts: `lint`, `build`, `start`, `test` (Playwright), `typecheck`.
3. Configure absolute imports `@/`.
4. Add `robots.txt` and `sitemap.xml` routes.
5. Set up cookie consent with **prior consent** and load GA4 **only after** acceptance.
6. Prepare `.env` variables via Vercel (see below).

---

## 📁 Directory Structure (App Router)
```
app/
  layout.tsx
  page.tsx                 // Home
  about/page.tsx           // Ποιοι είμαστε
  services/page.tsx        // Υπηρεσίες
  projects/page.tsx        // Έργα/Πελάτες (προαιρετικό)
  contact/page.tsx         // Επικοινωνία (φόρμα)
  legal/
    privacy/page.tsx
    terms/page.tsx
    cookies/page.tsx
  api/
    contact/route.ts       // Serverless email handler
  (seo)/
    sitemap.ts
    robots.ts
public/
  favicon.ico
  og-image.png
  logo.svg
  images/...               // Responsive assets
src/
  components/
    header.tsx
    footer.tsx
    container.tsx
    button.tsx
    section.tsx
    hero.tsx
    features.tsx
    stat.tsx
    card.tsx
    contact-form.tsx
    cookie-consent.tsx
  lib/
    analytics.ts           // load GA4 after consent
    validations.ts
    mailer.ts
  styles/
    globals.css
```

---

## 🧱 Pages & Content (Greek)
**Brand:** *GREEN SOIL Ι.Κ.Ε.*  
**Κλάδος:** υπηρεσίες/λύσεις εδάφους, αγροτεχνολογία, συμβουλευτική (placeholders).

### 1) Home (`/`)
- **Hero:** Τίτλος + υπότιτλος + CTA ("Επικοινωνήστε μαζί μας").
- **Features/Υπηρεσίες σε 3–6 κάρτες** (εικονίδια, σύντομα κείμενα).
- **Ενότητα Αξιών/Γιατί εμείς**
- **Mini-αναφορά σε έργα/πιστοποιήσεις**
- **CTA ζώνη** (σταθερό button προς `/contact`).
- **SEO metadata:** τίτλος ~60 χαρακτήρες, meta description ~155, OG tags.

### 2) Ποιοι Είμαστε (`/about`)
- Ιστορία, όραμα, αποστολή, ομάδα (placeholder portraits), με εικόνες web-optimized.
- Στοιχεία εταιρείας (NAP): επωνυμία, διεύθυνση, τηλέφωνο, email.

### 3) Υπηρεσίες (`/services`)
- Κάρτες υπηρεσιών με περιγραφή, bullets για οφέλη, CTA.

### 4) Έργα/Πελάτες (`/projects`) — προαιρετικό
- Grid από κάρτες έργων με σύντομες περιγραφές και αποτελέσματα.

### 5) Επικοινωνία (`/contact`)
- Φόρμα: Ονοματεπώνυμο, Email, Τηλέφωνο, Μήνυμα, **checkbox GDPR** ("Έχω διαβάσει…").
- Serverless handler (API Route) → στέλνει email (Resend/SMTP). Basic spam honeypot.
- Google Map embed (static image ή iframe με `loading="lazy"`).

### 6) Νομικές Σελίδες (`/legal/*`)
- **Πολιτική Απορρήτου** (GDPR), **Πολιτική Cookies**, **Όροι Χρήσης**.
- Footer links πάντα ορατά.

---

## ⚖️ Υποχρεωτικές Νομικές Πληροφορίες (Footer)
- **Επωνυμία:** GREEN SOIL Ι.Κ.Ε.
- **Διακριτικός Τίτλος:** Green Soil (αν υπάρχει)
- **Έδρα:** [Διεύθυνση]
- **Α.Φ.Μ.:** [ΑΦΜ] — **Δ.Ο.Υ.:** [ΔΟΥ]
- **Αρ. Γ.Ε.ΜΗ.:** [Αριθμός]
- **Email:** [info@domain.gr], **Τηλ.:** [210-xxx xxxx]
- **© Έτος – GREEN SOIL Ι.Κ.Ε.**
- **Σύνδεσμοι:** Όροι Χρήσης, Πολιτική Απορρήτου, Πολιτική Cookies

---

## 🧩 Components & UI Guidelines
- Mobile‑first, **grid/flex** layouts, spacing scale Tailwind, **max-w-screen-xl** containers.
- **Typography:** system font stack ή Inter; 8‑point spacing; line-height ≥ 1.5.
- **Buttons:** primary/secondary, focus-visible rings.
- **Cards:** soft shadow, rounded-2xl, balanced white space, hover elevation.
- **Navigation:** sticky header, accessible nav, hamburger on mobile (Disclosure/Sheet).
- **Footer:** 3–4 columns σε desktop, stack σε mobile.
- **Images:** responsive `next/image`, `sizes` attr, lazy; no CLS.
- **Animations:** ελαφριές (Framer Motion ή CSS), προσοχή στην προτιμώμενη κίνηση (`prefers-reduced-motion`).

---

## 🧠 SEO & Metadata
- Χρήση Next.js `generateMetadata` ανά σελίδα (App Router) με:
  - `title`, `description`, `alternates: { canonical }`, `openGraph`, `twitter`.
- **`robots.txt`**: allow all + sitemap path.
- **`sitemap.xml`**: αυτόματο με `sitemap.ts`.
- **Structured Data (JSON‑LD)** στο Home:
  - `Organization` ή `LocalBusiness` με **ίδια NAP** σε όλο το site.
- **Canonical URLs** σταθερά με βάση το production domain.

---

## 🔒 GDPR / Cookies / Security
- **Cookie Banner με prior consent**: μπλοκάρει GA4 μέχρι αποδοχή.
- **Πολιτική Απορρήτου**: σκοποί, χρόνος τήρησης, τρίτοι (π.χ. Google), δικαιώματα υποκειμένου.
- **Πολιτική Cookies**: λίστα cookies/διάρκεια/κατηγορίες, αλλαγή προτιμήσεων.
- **Φόρμα**: checkbox συναίνεσης, server‑side validation, rate limit, honeypot.
- **Security headers** (via `@vercel/edge` middleware ή `next.config.js`): `Content-Security-Policy` (με hashes/nonce για inline), `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Strict-Transport-Security`.

---

## 📈 Analytics (με συναίνεση)
- GA4 Measurement ID από `.env`.
- Μη φόρτωση script πριν από consent.
- Event for Contact form submit.

---

## ⚙️ Env Vars (Vercel)
- `NEXT_PUBLIC_SITE_URL` = `https://www.domain.gr`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` = `G-XXXXXXX`
- `MAIL_FROM` / `MAIL_TO`
- `RESEND_API_KEY` (ή SMTP credentials)

---

## 🚀 Deploy & Domain
- Push στο GitHub → Deploy στο Vercel.
- Προσθήκη custom domain, αυτόματο SSL.
- Ρύθμιση DNS: `www` CNAME σε Vercel; root A/ALIAS κατά Vercel.
- Submit `sitemap.xml` στη Google Search Console.

---

## ✅ Acceptance Criteria (Definition of Done)
- Lighthouse (Mobile & Desktop): **Performance ≥ 90**, **SEO ≥ 90**, **A11y ≥ 90**.
- HTML validates, no obvious CLS/LCP issues.
- Όλες οι σελίδες responsive σε 320–1536px+.
- Footer περιέχει **όλες** τις νομικές πληροφορίες.
- Cookie banner λειτουργεί (GA4 φορτώνει μόνο μετά από accept).
- Φόρμα επικοινωνίας στέλνει email επιτυχώς.
- `robots.txt` & `sitemap.xml` εξυπηρετούνται σωστά.
- JSON‑LD επιστρέφει valid στο Rich Results test.

---

## 🧩 Code Tasks (generate code)
1. **`layout.tsx`**
   - `<html lang="el">`, favicon, base theme, analytics loader (deferred), skip link.
   - Header + Footer components.
2. **SEO**
   - `generateMetadata` σε κάθε page με τίτλους/περιγραφές (ελληνικά) & OG.
   - `robots.ts` (allow), `sitemap.ts` (auto from static routes).
   - JSON‑LD `Organization` στο Home.
3. **UI Components** (Tailwind)
   - `Container`, `Button`, `Section`, `Card`, `Hero`, `Features`, `ContactForm`.
4. **Cookie Consent**
   - Banner με κατηγορίες (Essential/Analytics) + αποθήκευση επιλογών (local storage/cookie).
   - Hook για conditional load GA4.
5. **Contact API** (`app/api/contact/route.ts`)
   - POST schema validation (zod/yup), rate limit, honeypot.
   - Αποστολή μέσω Resend/SMTP (env vars), server action option.
6. **Security Headers**
   - Προσθήκη headers στο `next.config.js`.
7. **Playwright Tests**
   - Home loads, nav works, contact submit mock, legal pages exist, `robots.txt` served.

---

## ✍️ Greek Copy Placeholders
> Χρησιμοποίησε τα παρακάτω ως default κείμενα (να μπορεί ο χρήστης να τα αλλάξει εύκολα):

**Home Hero**
- Τίτλος: *Βιώσιμες λύσεις για το έδαφος και την καλλιέργεια*
- Υπότιτλος: *Η GREEN SOIL Ι.Κ.Ε. παρέχει αξιόπιστες υπηρεσίες αγροτεχνολογίας και συμβουλευτικής για παραγωγούς και επιχειρήσεις.*
- CTA: *Επικοινωνήστε μαζί μας*

**About**
- *Στη GREEN SOIL Ι.Κ.Ε. συνδυάζουμε επιστημονική γνώση και πρακτική εμπειρία για να υποστηρίζουμε βιώσιμες, αποδοτικές καλλιέργειες.*

**Services (3 δείγματα)**
- **Ανάλυση Εδάφους & Δεδομένων** — Δειγματοληψία, εργαστηριακή ανάλυση, ερμηνεία μετρήσεων.
- **Σχέδια Λίπανσης** — Εξατομικευμένα πλάνα, μείωση κόστους, αύξηση παραγωγής.
- **Συμβουλευτική Καλλιεργειών** — Παρακολούθηση, βέλτιστες πρακτικές, εκπαίδευση.

**Contact**
- *Συμπληρώστε τη φόρμα και η ομάδα μας θα επικοινωνήσει μαζί σας το συντομότερο.*

---

## 📃 Legal Templates (short starters)
**Όροι Χρήσης**: περιγράψτε χρήση ιστοσελίδας, δικαιώματα πνευματικής ιδιοκτησίας, αποποίηση ευθύνης, εφαρμοστέο δίκαιο (Ελληνικό).

**Πολιτική Απορρήτου (GDPR)**: κατηγορίες δεδομένων (φόρμα επικοινωνίας), σκοπός, νόμιμη βάση, χρόνος τήρησης, δικαιώματα υποκειμένου, τρίτοι επεξεργαστές (π.χ. Google), στοιχεία επικοινωνίας για αιτήματα.

**Πολιτική Cookies**: ορισμός cookies, κατηγορίες, λίστα/διάρκεια, τρόπος αλλαγής προτιμήσεων, σύνδεση με banner.

> Να συμπληρωθούν δυναμικά **Α.Φ.Μ., Δ.Ο.Υ., αρ. Γ.Ε.ΜΗ., έδρα, email, τηλέφωνο**.

---

## 📝 Deliverables
- Πλήρης Next.js κώδικας με Tailwind, components, νομικές σελίδες.
- Παραμετροποιήσιμα κείμενα (Greek), εύκολη αλλαγή μέσω constants ή MDX.
- Deploy στο Vercel + οδηγίες σύνδεσης domain.
- README (βήματα ανάπτυξης/παραμετροποίησης, περιβαλλοντικές μεταβλητές).

> **Παρακαλώ, Cursor, δημιούργησε άμεσα όλο τον κώδικα και τα βασικά περιεχόμενα σύμφωνα με τα παραπάνω.**

