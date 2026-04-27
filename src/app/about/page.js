import Link from "next/link";

export const metadata = {
  title: "About DigitalAPK – Pakistan's Verified Earning Games Review Platform",
  description: "DigitalAPK is Pakistan's trusted review platform for real money earning apps. We test every APK with EasyPaisa & JazzCash to verify genuine payouts for Pakistani players.",
  alternates: { canonical: "https://digitalapkgames.com/about" },
  openGraph: {
    title: "About DigitalAPK – Pakistan's Earning Games Review Platform",
    description: "Learn how DigitalAPK independently tests and reviews earning apps in Pakistan. We verify EasyPaisa and JazzCash withdrawals on every listed app.",
    url: "https://digitalapkgames.com/about",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About DigitalAPK",
  "url": "https://digitalapkgames.com/about",
  "description": "DigitalAPK is Pakistan's most trusted independent review platform for real money earning game APKs.",
  "publisher": {
    "@type": "Organization",
    "name": "DigitalAPK",
    "url": "https://digitalapkgames.com",
  },
};

const S = {
  page: { maxWidth: 820, margin: "0 auto", padding: "60px 20px 80px" },
  h1: { fontFamily: "var(--font-outfit)", fontWeight: 900, fontSize: "clamp(1.7rem,4vw,2.2rem)", color: "var(--color-text-primary)", marginBottom: 8, lineHeight: 1.2 },
  h2: { fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "clamp(1.15rem,3vw,1.4rem)", color: "var(--color-text-primary)", marginTop: 44, marginBottom: 14, lineHeight: 1.3 },
  p: { color: "var(--color-text-secondary)", lineHeight: 1.85, fontSize: "0.97rem", marginBottom: 16 },
  lead: { color: "var(--color-text-secondary)", lineHeight: 1.85, fontSize: "1.05rem", marginBottom: 24 },
  card: { background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.15)", borderRadius: 14, padding: "22px 24px", marginBottom: 16 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(180px,1fr))", gap: 14, margin: "24px 0" },
  statBox: { background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.15)", borderRadius: 12, padding: "18px 16px", textAlign: "center" },
  tag: { display: "inline-block", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", background: "rgba(26,188,156,0.1)", color: "var(--color-accent)", border: "1px solid rgba(26,188,156,0.2)", padding: "3px 12px", borderRadius: 20, marginBottom: 18 },
  link: { color: "var(--color-accent)", textDecoration: "none", fontWeight: 600 },
  divider: { border: "none", borderTop: "1px solid rgba(255,255,255,0.06)", margin: "36px 0" },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ background: "var(--color-bg-primary)", minHeight: "100vh" }}>
        <div style={S.page}>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28, fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
            <Link href="/" style={S.link}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "var(--color-text-secondary)" }}>About</span>
          </nav>

          <span style={S.tag}>About Us</span>
          <h1 style={S.h1}>About DigitalAPK</h1>
          <p style={{ color: "var(--color-accent)", fontWeight: 700, fontSize: "0.9rem", marginBottom: 20 }}>Pakistan&apos;s Most Trusted Earning Game Review Platform — Est. 2024</p>

          <p style={S.lead}>
            DigitalAPK is an independent review and download platform for real money earning game APKs in Pakistan. We test every app ourselves — with real PKR deposits and real EasyPaisa and JazzCash withdrawals — before listing it. If an app does not pay, it does not appear on our site.
          </p>

          {/* Stats */}
          <div style={S.grid}>
            {[
              { n: "54+", label: "Verified Apps" },
              { n: "5 Min", label: "Avg. Payout Speed" },
              { n: "100%", label: "Withdrawal Tested" },
              { n: "2026", label: "Updated" },
            ].map(({ n, label }) => (
              <div key={label} style={S.statBox}>
                <div style={{ fontFamily: "var(--font-outfit)", fontWeight: 900, fontSize: "1.6rem", color: "var(--color-accent)", marginBottom: 4 }}>{n}</div>
                <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.07em", color: "var(--color-text-muted)" }}>{label}</div>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>What We Do</h2>
          <p style={S.p}>
            The Pakistani earning app market is flooded with scams — apps that accept deposits but never pay out. DigitalAPK exists to solve this problem. Our team reviews every app through the complete user journey: download, installation, registration, deposit, gameplay, and withdrawal to a Pakistani mobile wallet.
          </p>
          <p style={S.p}>
            Every app listed on DigitalAPK has been tested with a real money deposit and a confirmed EasyPaisa or JazzCash withdrawal. We document payout times, bonus terms, customer support response rates, and app stability. Reviews are updated quarterly or whenever a significant platform change occurs.
          </p>

          <h2 style={S.h2}>Our Review Process</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
            {[
              { icon: "⬇️", step: "Download & Install", desc: "We download the APK from the official source, verify the file is genuine (not modified), and install it on a clean Android test device." },
              { icon: "📝", step: "Register & Deposit", desc: "We register using a real Pakistani mobile number and make a minimum deposit via JazzCash or EasyPaisa to activate the account fully." },
              { icon: "🎮", step: "Play & Test Features", desc: "We test all game modes, bonus claim processes, referral system, and customer support response quality before writing our review." },
              { icon: "💸", step: "Verify Withdrawal", desc: "We request a withdrawal and time the exact minutes until funds arrive in our JazzCash or EasyPaisa account. This is the most important test." },
              { icon: "✅", step: "Publish or Reject", desc: "Apps that complete all steps with no issues are listed with a verified badge. Apps that fail the withdrawal test are rejected — we do not list scams." },
            ].map(({ icon, step, desc }) => (
              <div key={step} style={{ display: "flex", gap: 16, padding: "16px 18px", background: "var(--color-bg-card)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 12 }}>
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: "var(--font-outfit)", fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 4 }}>{step}</div>
                  <p style={{ ...S.p, marginBottom: 0, fontSize: "0.9rem" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 style={S.h2}>Our Editorial Independence</h2>
          <p style={S.p}>
            DigitalAPK earns revenue through affiliate referral links — when you click a download button and register on a listed app, we may earn a commission. This commission <strong style={{ color: "var(--color-text-primary)" }}>never influences our ratings or review content</strong>. Apps that fail our withdrawal test are rejected regardless of commission potential. Apps we rate 2/5 remain listed to give users accurate information — we do not remove low-rated apps to protect affiliate income.
          </p>
          <p style={S.p}>
            All affiliate links are marked with <code style={{ background: "rgba(26,188,156,0.1)", padding: "2px 6px", borderRadius: 4, fontSize: "0.85rem", color: "var(--color-accent)" }}>rel=&quot;nofollow noopener noreferrer&quot;</code> so Google and other search engines treat them as paid links. We comply fully with Google&apos;s affiliate link disclosure guidelines.
          </p>

          <h2 style={S.h2}>Who We Are</h2>
          <p style={S.p}>
            DigitalAPK was founded by a team of Pakistani digital marketers and gaming enthusiasts who were tired of losing money to unverified earning apps. Our reviewers are based in Karachi, Lahore, and Islamabad, and use the same JazzCash and EasyPaisa accounts as our readers. We understand Pakistani mobile payment systems, local network conditions, and the specific challenges of using earning apps from Pakistan.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>Contact & Feedback</h2>
          <p style={S.p}>
            Found an app that should be listed? Discovered a withdrawal issue on a platform we reviewed? Want to report a scam app not yet on our radar? We welcome feedback from Pakistani players.
          </p>
          <div style={S.card}>
            <p style={{ ...S.p, marginBottom: 8 }}><strong style={{ color: "var(--color-text-primary)" }}>Review requests:</strong> Submit the app name and official APK source and we will add it to our review queue.</p>
            <p style={{ ...S.p, marginBottom: 8 }}><strong style={{ color: "var(--color-text-primary)" }}>Scam reports:</strong> If an app on our site has stopped paying, contact us immediately so we can investigate and update our review.</p>
            <p style={{ ...S.p, marginBottom: 0 }}><strong style={{ color: "var(--color-text-primary)" }}>Partnership inquiries:</strong> We only partner with platforms that pass our full review process. Commission size does not determine listing eligibility.</p>
          </div>

          <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/earning-games-pakistan" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-accent)", color: "var(--color-bg-primary)", fontWeight: 800, fontSize: "0.9rem", padding: "12px 24px", borderRadius: 10, textDecoration: "none" }}>
              Browse Verified Apps →
            </Link>
            <Link href="/disclaimer" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--color-bg-card)", color: "var(--color-text-primary)", fontWeight: 700, fontSize: "0.9rem", padding: "12px 24px", borderRadius: 10, textDecoration: "none", border: "1px solid rgba(26,188,156,0.2)" }}>
              Read Our Disclaimer
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
