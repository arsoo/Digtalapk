import Link from "next/link";
import { SPRITES } from "@/lib/games";

function Stars({ n }) {
  return (
    <span style={{ display: "inline-flex", gap: "3px", verticalAlign: "middle" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i < n ? "#f0ad4e" : "#2d3a47"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

function GameCard({ game }) {
  const bgPosX = (game.c / 3) * 100;
  const bgPosY = (game.ro / 2) * 100;
  const spriteUrl = SPRITES[game.s];
  return (
    <Link
      href={`/${game.slug}`}
      title={`Download ${game.t} APK – Real Money Earning App Pakistan`}
      style={{
        display: "flex",
        gap: "14px",
        alignItems: "center",
        background: "var(--color-bg-card)",
        border: "1px solid rgba(26,188,156,0.12)",
        borderRadius: "12px",
        padding: "14px",
        textDecoration: "none",
        transition: "border-color 0.2s, transform 0.2s",
      }}
    >
      <div style={{ width: "52px", height: "52px", borderRadius: "10px", overflow: "hidden", background: "#080c12", position: "relative", flexShrink: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${spriteUrl})`, backgroundPosition: `${bgPosX}% ${bgPosY}%`, backgroundSize: "400% 300%", backgroundRepeat: "no-repeat" }} aria-hidden="true" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 800, color: "var(--color-text-primary)", fontSize: "0.95rem", marginBottom: "3px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {game.t}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
          <Stars n={game.rating} />
          <span style={{ fontSize: "0.68rem", color: "var(--color-text-muted)" }}>{game.rating}.0/5</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{game.tagline}</div>
      </div>
      <div style={{ flexShrink: 0, fontSize: "0.72rem", fontWeight: 800, color: "var(--color-accent)", background: "rgba(26,188,156,0.1)", border: "1px solid rgba(26,188,156,0.25)", padding: "6px 12px", borderRadius: "8px", whiteSpace: "nowrap" }}>
        Download APK
      </div>
    </Link>
  );
}

const S = {
  h2: { fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.25rem", marginBottom: "14px", marginTop: 0 },
  p: { color: "var(--color-text-secondary)", fontSize: "0.93rem", lineHeight: "1.85", marginBottom: "12px", marginTop: "0px" },
  card: { background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.12)", borderRadius: "14px", padding: "28px", marginBottom: "20px" },
  cardSub: { background: "var(--color-bg-secondary)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "28px", marginBottom: "20px" },
};

/**
 * Shared category page layout.
 * Props:
 *  - meta: { slug, title, h1, badge, intro, whyTitle, whyPoints, choosePoints, safetyPoints, faqs, finalCtaText }
 *  - games: game objects from TOP_GAMES matching this category
 *  - relatedCategories: [{ label, href, desc }]
 */
export default function CategoryPage({ meta, games, relatedCategories }) {
  const topGames = [...games].sort((a, b) => b.rating - a.rating);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": meta.title,
    "description": meta.intro[0],
    "url": `https://digitalapkgames.com/${meta.slug}`,
    "inLanguage": "en-PK",
    "publisher": { "@type": "Organization", "name": "DigitalAPK", "url": "https://digitalapkgames.com" },
    "hasPart": topGames.map((g) => ({
      "@type": "SoftwareApplication",
      "name": `${g.t} APK`,
      "url": `https://digitalapkgames.com/${g.slug}`,
      "applicationCategory": "GameApplication",
      "operatingSystem": "Android 6.0+",
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitalapkgames.com" },
      { "@type": "ListItem", "position": 2, "name": meta.h1, "item": `https://digitalapkgames.com/${meta.slug}` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": meta.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumb */}
      <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "12px 20px", fontSize: "0.8rem", color: "var(--color-text-muted)" }} aria-label="Breadcrumb">
        <ol style={{ display: "flex", flexWrap: "wrap", gap: "6px", listStyle: "none", padding: 0, margin: 0 }} itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" style={{ color: "var(--color-text-muted)", textDecoration: "none" }} itemProp="item"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li style={{ color: "var(--color-text-secondary)" }} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{meta.badge}</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px 80px" }}>

        {/* ── Hero ── */}
        <div style={{ background: "linear-gradient(135deg,rgba(26,188,156,0.1) 0%,rgba(26,188,156,0.03) 100%)", border: "1px solid rgba(26,188,156,0.2)", borderRadius: "16px", padding: "36px 32px", marginBottom: "24px" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(26,188,156,0.1)", border: "1px solid rgba(26,188,156,0.25)", color: "var(--color-accent)", fontSize: "0.72rem", fontWeight: 700, padding: "4px 14px", borderRadius: "999px", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            ✅ {games.length} Verified Apps – Updated 2026
          </span>
          <h1 style={{ fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 900, color: "var(--color-text-primary)", fontSize: "clamp(1.6rem,4vw,2.2rem)", lineHeight: 1.2, marginBottom: "12px", marginTop: 0 }}>
            {meta.h1}
          </h1>
          {meta.intro.map((para, i) => (
            <p key={i} style={{ ...S.p, marginBottom: i < meta.intro.length - 1 ? "10px" : 0 }}
              dangerouslySetInnerHTML={{ __html: para }}
            />
          ))}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "16px" }}>
            <a
              href="#games"
              style={{ background: "var(--color-accent)", color: "#fff", fontWeight: 800, fontSize: "0.9rem", padding: "12px 24px", borderRadius: "10px", textDecoration: "none" }}
            >
              Browse All {meta.badge} Apps ↓
            </a>
            <Link href="/#directory" style={{ background: "var(--color-bg-card)", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: "0.9rem", padding: "12px 24px", borderRadius: "10px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
              View All 40+ Earning Games
            </Link>
          </div>
        </div>

        {/* ── Game List ── */}
        <div style={S.card} id="games">
          <h2 style={S.h2}>Best {meta.badge} in Pakistan – All Verified Apps (2026)</h2>
          <p style={{ ...S.p, marginBottom: "20px" }}>
            Every app below is independently verified by DigitalAPK for real <strong style={{ color: "var(--color-text-primary)" }}>EasyPaisa</strong> and <strong style={{ color: "var(--color-text-primary)" }}>JazzCash</strong> withdrawals. Click any game to view the full download guide.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {topGames.map((game) => <GameCard key={game.slug} game={game} />)}
          </div>
        </div>

        {/* ── Why section ── */}
        <div style={S.cardSub}>
          <h2 style={S.h2}>{meta.whyTitle}</h2>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {meta.whyPoints.map((pt) => (
              <li key={pt.title} style={{ display: "flex", gap: "12px", padding: "12px 14px", background: "var(--color-bg-card)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px" }}>
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{pt.icon}</span>
                <div>
                  <strong style={{ color: "var(--color-text-primary)", fontSize: "0.9rem" }}>{pt.title}</strong>
                  <span style={{ color: "var(--color-text-secondary)", fontSize: "0.87rem" }}> — {pt.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── How to Choose ── */}
        <div style={S.card}>
          <h2 style={S.h2}>How to Choose the Right {meta.badge} App</h2>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
            {meta.choosePoints.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ width: "26px", height: "26px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.78rem", flexShrink: 0 }}>{i + 1}</span>
                <div>
                  <strong style={{ color: "var(--color-text-primary)", fontSize: "0.9rem" }}>{pt.title}:</strong>
                  <span style={{ color: "var(--color-text-secondary)", fontSize: "0.87rem" }}> {pt.desc}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Safety ── */}
        <div style={{ ...S.cardSub, background: "rgba(26,188,156,0.04)", borderColor: "rgba(26,188,156,0.15)" }}>
          <h2 style={S.h2}>How to Download APKs Safely in Pakistan</h2>
          <p style={S.p}>
            Since these earning apps are not on the Google Play Store, you install them as APK files. Follow these safety tips:
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {meta.safetyPoints.map((pt, i) => (
              <li key={i} style={{ display: "flex", gap: "10px", fontSize: "0.88rem", color: "var(--color-text-secondary)" }}>
                <span style={{ color: "var(--color-accent)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* ── FAQ ── */}
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ ...S.h2, marginBottom: "16px" }}>Frequently Asked Questions – {meta.badge} Pakistan</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {meta.faqs.map((faq, i) => (
              <details key={i} style={{ background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.12)", borderRadius: "12px", overflow: "hidden" }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary style={{ padding: "16px 20px", cursor: "pointer", fontWeight: 600, color: "var(--color-text-primary)", fontSize: "0.92rem", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }} itemProp="name">
                  {faq.q}
                  <span style={{ color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 300, flexShrink: 0, marginLeft: "12px" }}>+</span>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "16px", paddingTop: "14px", ...S.p, borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "0px", marginBottom: "0px" }} itemProp="text">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ── Related Categories ── */}
        {relatedCategories.length > 0 && (
          <div style={S.cardSub}>
            <h2 style={S.h2}>More Earning Apps in Pakistan – Other Categories</h2>
            <p style={{ ...S.p, marginBottom: "14px" }}>Looking for different types of earning games? Explore these verified categories:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "10px" }}>
              {relatedCategories.map((cat) => (
                <Link key={cat.href} href={cat.href} style={{ display: "block", padding: "14px 16px", background: "var(--color-bg-card)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", textDecoration: "none" }}
                  title={cat.desc}>
                  <div style={{ fontWeight: 700, color: "var(--color-accent)", fontSize: "0.88rem", marginBottom: "4px" }}>{cat.label}</div>
                  <div style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>{cat.desc}</div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <Link href="/#directory" style={{ color: "var(--color-accent)", fontSize: "0.88rem", fontWeight: 700, textDecoration: "none" }}>Browse All 40+ Earning Apps in Pakistan →</Link>
            </div>
          </div>
        )}

        {/* ── Inline text links – top games ── */}
        <div style={{ ...S.cardSub, marginBottom: "20px" }}>
          <h2 style={S.h2}>Quick Links – Top {meta.badge} APK Downloads Pakistan</h2>
          <p style={{ ...S.p, marginBottom: "14px" }}>
            Click any app below to view the full download guide, step-by-step install instructions, and withdrawal walkthrough:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
            {topGames.map((g) => (
              <Link
                key={g.slug}
                href={`/${g.slug}`}
                title={`Download ${g.t} APK – Real Money Earning App Pakistan`}
                style={{ color: "var(--color-text-link)", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}
              >
                Download {g.t} APK →
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
            {[
              { href: "/earning-games-pakistan",          label: "Best earning games in Pakistan" },
              { href: "/casino-games-pakistan",           label: "Casino APK games Pakistan" },
              { href: "/color-prediction-games-pakistan", label: "Color prediction apps Pakistan" },
              { href: "/sports-betting-apps-pakistan",    label: "Sports betting APK Pakistan" },
              { href: "/referral-earning-apps-pakistan",  label: "Referral earning apps Pakistan" },
              { href: "/card-games-pakistan",             label: "Card games Pakistan" },
            ].filter((c) => !c.href.includes(meta.slug)).map((c) => (
              <Link key={c.href} href={c.href} style={{ color: "var(--color-accent)", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none" }}>
                {c.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* ── Final CTA ── */}
        <div style={{ background: "linear-gradient(135deg,rgba(26,188,156,0.12) 0%,rgba(26,188,156,0.04) 100%)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "16px", padding: "32px 28px", textAlign: "center" }}>
          <h2 style={{ ...S.h2, textAlign: "center", fontSize: "1.2rem", marginBottom: "10px" }}>
            {meta.finalCtaText}
          </h2>
          <p style={{ ...S.p, textAlign: "center", maxWidth: "520px", margin: "0 auto 20px" }}>
            All apps are free to download. Start with the minimum deposit, test the withdrawal, and build your earnings from there.
          </p>
          <a href="#games" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--color-accent)", color: "#fff", fontWeight: 800, fontSize: "1rem", padding: "14px 32px", borderRadius: "12px", textDecoration: "none", boxShadow: "0 4px 18px rgba(26,188,156,0.35)" }}>
            Choose an App & Download APK Free
          </a>
          <p style={{ fontSize: "0.72rem", color: "var(--color-text-muted)", marginTop: "14px", marginBottom: 0 }}>
            <strong>Disclaimer:</strong> DigitalAPK is an independent review platform. All earning apps involve financial risk. Never deposit more than you can afford to lose.
          </p>
        </div>

      </main>
    </>
  );
}
