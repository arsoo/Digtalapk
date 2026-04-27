import Link from "next/link";

export const metadata = {
  title: "Disclaimer – DigitalAPK Pakistan Earning Apps Review Platform",
  description: "DigitalAPK disclaimer: earning apps involve financial risk. We review apps independently with EasyPaisa & JazzCash tests. Affiliate links disclosed. Pakistan 2026.",
  alternates: { canonical: "https://digitalapkgames.com/disclaimer" },
  openGraph: {
    title: "Disclaimer – DigitalAPK Pakistan",
    description: "Read DigitalAPK's full disclaimer regarding earning app risks, affiliate relationships, and editorial independence for Pakistani players.",
    url: "https://digitalapkgames.com/disclaimer",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Disclaimer – DigitalAPK",
  "url": "https://digitalapkgames.com/disclaimer",
  "description": "Disclaimer for DigitalAPK — earning app risks, affiliate disclosures, and editorial independence statement.",
  "publisher": { "@type": "Organization", "name": "DigitalAPK", "url": "https://digitalapkgames.com" },
};

const S = {
  page: { maxWidth: 820, margin: "0 auto", padding: "60px 20px 80px" },
  h1: { fontFamily: "var(--font-outfit)", fontWeight: 900, fontSize: "clamp(1.7rem,4vw,2.2rem)", color: "var(--color-text-primary)", marginBottom: 8, lineHeight: 1.2 },
  h2: { fontFamily: "var(--font-outfit)", fontWeight: 800, fontSize: "1.2rem", color: "var(--color-text-primary)", marginTop: 40, marginBottom: 12, lineHeight: 1.3 },
  p: { color: "var(--color-text-secondary)", lineHeight: 1.85, fontSize: "0.97rem", marginBottom: 16 },
  warnBox: { background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 14, padding: "20px 24px", marginBottom: 28 },
  infoBox: { background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.15)", borderRadius: 14, padding: "20px 24px", marginBottom: 16 },
  tag: { display: "inline-block", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", background: "rgba(239,68,68,0.08)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.2)", padding: "3px 12px", borderRadius: 20, marginBottom: 18 },
  link: { color: "var(--color-accent)", textDecoration: "none", fontWeight: 600 },
  divider: { border: "none", borderTop: "1px solid rgba(255,255,255,0.06)", margin: "36px 0" },
  updated: { fontSize: "0.78rem", color: "var(--color-text-muted)", marginBottom: 32 },
};

export default function DisclaimerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main style={{ background: "var(--color-bg-primary)", minHeight: "100vh" }}>
        <div style={S.page}>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 28, fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
            <Link href="/" style={S.link}>Home</Link>
            <span style={{ margin: "0 8px" }}>›</span>
            <span style={{ color: "var(--color-text-secondary)" }}>Disclaimer</span>
          </nav>

          <span style={S.tag}>Important Notice</span>
          <h1 style={S.h1}>Disclaimer</h1>
          <p style={S.updated}>Last Updated: April 2026 · Applies to: digitalapkgames.com</p>

          {/* Risk Warning Box */}
          <div style={S.warnBox}>
            <p style={{ fontFamily: "var(--font-outfit)", fontWeight: 800, color: "#ef4444", marginBottom: 10, fontSize: "0.95rem" }}>⚠ Financial Risk Warning</p>
            <p style={{ ...S.p, marginBottom: 0 }}>
              All earning apps listed on DigitalAPK involve real financial risk. You can lose the money you deposit. <strong style={{ color: "#ef4444" }}>Never deposit more than you can afford to lose entirely.</strong> DigitalAPK does not guarantee profits, earnings, or returns of any kind from any listed app.
            </p>
          </div>

          <h2 style={S.h2}>1. General Disclaimer</h2>
          <p style={S.p}>
            DigitalAPK (&quot;we&quot;, &quot;our&quot;, &quot;the platform&quot;) is an independent information and review website. The content published on digitalapkgames.com — including app reviews, earning guides, withdrawal instructions, and game descriptions — is provided for informational purposes only.
          </p>
          <p style={S.p}>
            We make every reasonable effort to ensure the accuracy of the information we publish. However, we cannot guarantee that all information is current, complete, or accurate at the time you read it. Earning apps update their terms, bonus structures, withdrawal limits, and payment methods frequently — always verify current conditions directly within the app before depositing.
          </p>

          <h2 style={S.h2}>2. Not Financial Advice</h2>
          <p style={S.p}>
            Nothing on DigitalAPK constitutes financial advice, investment advice, or gambling advice. Our reviews describe the features and payout history of apps as observed during our testing — they are not recommendations to deposit money or earn a specific income. All earning figures mentioned in reviews reflect individual test results and are not guarantees of what you will earn.
          </p>
          <p style={S.p}>
            Real money earning apps are entertainment products with variable outcomes. Your results will differ based on your deposit amount, playing style, luck, and the platform&apos;s current performance.
          </p>

          <h2 style={S.h2}>3. Affiliate Link Disclosure</h2>
          <div style={S.infoBox}>
            <p style={{ ...S.p, marginBottom: 8 }}>
              DigitalAPK earns revenue through affiliate referral partnerships. When you click a &quot;Download APK&quot; button on our site and register on the linked platform, we may receive a commission from the app operator.
            </p>
            <p style={{ ...S.p, marginBottom: 0 }}>
              <strong style={{ color: "var(--color-text-primary)" }}>This commission does not influence our ratings or review conclusions.</strong> All affiliate links are marked with <code style={{ background: "rgba(26,188,156,0.1)", padding: "2px 5px", borderRadius: 4, fontSize: "0.83rem", color: "var(--color-accent)" }}>rel=&quot;nofollow noopener noreferrer&quot;</code> in compliance with Google&apos;s webmaster guidelines. Apps that fail our withdrawal verification test are rejected regardless of affiliate terms offered.
            </p>
          </div>

          <h2 style={S.h2}>4. Legal Status of Earning Apps in Pakistan</h2>
          <p style={S.p}>
            The legal status of real money prediction games, online casino apps, and sports betting applications in Pakistan is unclear and subject to interpretation under existing Pakistani law, including the Prevention of Electronic Crimes Act (PECA) and gambling statutes.
          </p>
          <p style={S.p}>
            DigitalAPK does not provide legal advice. Players are solely responsible for understanding and complying with the laws of their jurisdiction before using any app listed on our platform. By using a listed app, you confirm that you have assessed the legal situation in your local area independently.
          </p>

          <h2 style={S.h2}>5. Age Restriction</h2>
          <p style={S.p}>
            All apps listed on DigitalAPK are intended for users aged <strong style={{ color: "var(--color-text-primary)" }}>18 years and older</strong>. DigitalAPK does not knowingly facilitate access to earning apps for minors. If you are under 18, you must not use any app listed on this platform.
          </p>

          <h2 style={S.h2}>6. Third-Party Platforms</h2>
          <p style={S.p}>
            DigitalAPK reviews third-party apps that are not owned, operated, or controlled by us. We have no responsibility for the actions, policies, terms, or payment practices of any app listed on our site after publication. App operators may change their terms without notice. Always review the current terms directly within each app before depositing.
          </p>
          <p style={S.p}>
            If an app you found through DigitalAPK fails to process a withdrawal or changes its terms unfairly, please <Link href="/about" style={S.link}>contact us</Link> so we can investigate and update our review. We remove or downgrade apps that are reported to have stopped paying.
          </p>

          <h2 style={S.h2}>7. Responsible Gaming</h2>
          <p style={S.p}>
            We encourage all Pakistani players to engage with earning apps responsibly. Signs of problematic gambling include depositing money needed for essential expenses, chasing losses with larger deposits, or inability to stop playing despite persistent losses.
          </p>
          <p style={S.p}>
            If you or someone you know has a problem with gambling, contact a mental health professional or a national helpline. DigitalAPK supports responsible earning and recreational play only.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>8. Changes to This Disclaimer</h2>
          <p style={S.p}>
            This disclaimer may be updated periodically to reflect changes in our affiliate relationships, applicable laws, or platform policies. The &quot;Last Updated&quot; date at the top of this page indicates when the most recent revision was made. Continued use of digitalapkgames.com after any update constitutes acceptance of the revised disclaimer.
          </p>

          <p style={{ ...S.p, marginTop: 32 }}>
            For questions about this disclaimer, see our <Link href="/about" style={S.link}>About page</Link> or review our <Link href="/privacy-policy" style={S.link}>Privacy Policy</Link> and <Link href="/terms-and-conditions" style={S.link}>Terms and Conditions</Link>.
          </p>
        </div>
      </main>
    </>
  );
}
