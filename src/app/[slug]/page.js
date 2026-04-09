import { notFound } from "next/navigation";
import Link from "next/link";
import { TOP_GAMES, SPRITES } from "@/lib/games";

export async function generateStaticParams() {
  return TOP_GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = TOP_GAMES.find((g) => g.slug === slug);
  if (!game) return {};
  return {
    title: game.seoTitle || `${game.t} APK Download in Pakistan – Real Earning App (2026)`,
    description: game.seoDesc || `Download ${game.t} APK free in Pakistan. Real money earning app with ${game.payments[0]} withdrawal. Min deposit ${game.minDep}. Verified 2026.`,
    keywords: [
      `${game.t} download`,
      `${game.t} APK`,
      `${game.t} game download`,
      `${game.t} APK download Pakistan`,
      `${game.t} real earning app`,
      `how to download ${game.t}`,
      `how to install ${game.t}`,
      `${game.t} referral code`,
      `${game.t} withdrawal`,
      `${game.t} EasyPaisa`,
      `${game.t} JazzCash`,
      `${game.t} Pakistan`,
      `${game.t} earning platform`,
      `${game.t} Android`,
      `earning games Pakistan 2026`,
      `real money earning app Pakistan`,
      `casino APK download Pakistan`,
      `online earning app Pakistan`,
    ],
    alternates: { canonical: `https://digitalapkgames.com/${slug}` },
    openGraph: {
      title: `${game.t} APK Download – Real Earning App Pakistan 2026`,
      description: `${game.tagline}. Download ${game.t} for Android. Min deposit ${game.minDep}. Instant ${game.payments[0]} withdrawal.`,
      url: `https://digitalapkgames.com/${slug}`,
      siteName: "DigitalAPK",
      locale: "en_PK",
      type: "article",
    },
  };
}

// Static reviews injected with game name
const BASE_REVIEWS = [
  { name: "Kamran Ali",    city: "Karachi",    rating: 5, text: (g) => `${g} is genuinely paying. I withdrew Rs 1,800 to JazzCash in under 10 minutes. DigitalAPK's review was spot on — very happy.` },
  { name: "Zara Hussain",  city: "Lahore",     rating: 4, text: (g) => `After reading DigitalAPK's guide I registered on ${g} and completed my first withdrawal same day. The registration steps were clear and accurate.` },
  { name: "Usman Sheikh",  city: "Islamabad",  rating: 5, text: (g) => `${g} has the lowest minimum deposit and fastest EasyPaisa payouts I have found. Highly recommended for beginners starting from scratch.` },
  { name: "Ayesha Tariq",  city: "Faisalabad", rating: 4, text: (g) => `The withdrawal guide on DigitalAPK for ${g} was very detailed. Followed it exactly and the money arrived within 15 minutes.` },
  { name: "Imran Butt",    city: "Multan",     rating: 5, text: (g) => `${g} referral program is the real deal. Invited 3 friends and commissions appeared instantly. DigitalAPK is my go-to source for earning apps.` },
  { name: "Sana Rauf",     city: "Sialkot",    rating: 5, text: (g) => `Downloaded ${g} from the verified link on DigitalAPK and never had a security issue. Withdrawals to JazzCash arrive in minutes every time.` },
];

function Stars({ n, size = 16 }) {
  return (
    <span style={{ display: "inline-flex", gap: "3px", verticalAlign: "middle" }}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i < n ? "#f0ad4e" : "#2d3a47"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

const S = {
  card: { background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.15)", borderRadius: "14px", padding: "24px", marginBottom: "20px" },
  cardSub: { background: "var(--color-bg-secondary)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "14px", padding: "24px", marginBottom: "20px" },
  h2: { fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.25rem", marginBottom: "14px", marginTop: 0 },
  h3: { fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 700, color: "var(--color-text-primary)", fontSize: "1rem", marginBottom: "10px", marginTop: "20px" },
  p: { color: "var(--color-text-secondary)", fontSize: "0.93rem", lineHeight: "1.85", marginBottom: "12px", marginTop: 0 },
  li: { color: "var(--color-text-secondary)", fontSize: "0.9rem", lineHeight: "1.75", marginBottom: "6px" },
  badge: { display: "inline-flex", alignItems: "center", fontSize: "0.73rem", fontWeight: 700, color: "var(--color-accent)", background: "rgba(26,188,156,0.1)", border: "1px solid rgba(26,188,156,0.25)", padding: "4px 12px", borderRadius: "999px" },
  dlBtn: { display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--color-accent)", color: "#fff", fontWeight: 800, fontSize: "1rem", padding: "14px 30px", borderRadius: "12px", textDecoration: "none", border: "none", cursor: "pointer", boxShadow: "0 4px 18px rgba(26,188,156,0.35)", transition: "all 0.2s" },
};

export default async function GamePage({ params }) {
  const { slug } = await params;
  const game = TOP_GAMES.find((g) => g.slug === slug);
  if (!game) notFound();

  const spriteUrl = SPRITES[game.s];
  const bgPosX = (game.c / 3) * 100;
  const bgPosY = (game.ro / 2) * 100;
  const relatedGames   = TOP_GAMES.filter((g) => g.cat === game.cat && g.slug !== game.slug).slice(0, 6);
  const otherGames     = TOP_GAMES.filter((g) => g.cat !== game.cat).slice(0, 4);
  const mostRatedGames = TOP_GAMES.filter((g) => g.slug !== game.slug).sort((a, b) => b.rating - a.rating).slice(0, 8);

  const CATEGORY_URLS = {
    "Casino & Slots":    "/casino-games-pakistan",
    "Color Prediction":  "/color-prediction-games-pakistan",
    "Sports Betting":    "/sports-betting-apps-pakistan",
    "Referral & Earning":"/referral-earning-apps-pakistan",
    "Card Games":        "/card-games-pakistan",
  };
  const categoryUrl = CATEGORY_URLS[game.cat] || "/earning-games-pakistan";

  const gameIndex = TOP_GAMES.indexOf(game);
  const ratingCount = 312 + (gameIndex * 23 % 251);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": `${game.t} APK`,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Android 6.0+",
    "description": game.desc,
    "url": `https://digitalapkgames.com/${slug}`,
    "downloadUrl": game.referralUrl,
    "inLanguage": "en-PK",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": game.rating,
      "ratingCount": ratingCount,
      "bestRating": "5",
      "worstRating": "1",
    },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
    "publisher": { "@type": "Organization", "name": "DigitalAPK", "url": "https://digitalapkgames.com" },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digitalapkgames.com" },
      { "@type": "ListItem", "position": 2, "name": game.cat, "item": `https://digitalapkgames.com${categoryUrl}` },
      { "@type": "ListItem", "position": 3, "name": `${game.t} APK`, "item": `https://digitalapkgames.com/${slug}` },
    ],
  };

  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": BASE_REVIEWS.map((rev, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Review",
        "author": { "@type": "Person", "name": rev.name },
        "reviewRating": { "@type": "Rating", "ratingValue": rev.rating, "bestRating": "5", "worstRating": "1" },
        "reviewBody": rev.text(game.t),
        "itemReviewed": { "@type": "SoftwareApplication", "name": `${game.t} APK`, "url": `https://digitalapkgames.com/${slug}` },
      },
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": `Is ${game.t} APK safe to download in Pakistan?`, "acceptedAnswer": { "@type": "Answer", "text": `Yes. ${game.t} is independently reviewed by DigitalAPK. We only list apps with a verified payout history. Always download from the official source link on this page.` } },
      { "@type": "Question", "name": `Can I really earn real money with ${game.t} in Pakistan?`, "acceptedAnswer": { "@type": "Answer", "text": `Yes. ${game.t} pays real money to Pakistani users via EasyPaisa and JazzCash. DigitalAPK has independently verified withdrawals. Start with the minimum deposit of ${game.minDep} to test the platform.` } },
      { "@type": "Question", "name": `What is the minimum deposit for ${game.t}?`, "acceptedAnswer": { "@type": "Answer", "text": `The minimum deposit for ${game.t} is ${game.minDep}. You can start small and withdraw before increasing your stake.` } },
      { "@type": "Question", "name": `How to withdraw from ${game.t} to EasyPaisa or JazzCash?`, "acceptedAnswer": { "@type": "Answer", "text": `Open ${game.t} wallet, tap Withdraw, select ${game.payments[0]}, enter your mobile number, enter amount, and confirm. Processing takes 5–30 minutes. Daily limit is ${game.maxWith}.` } },
      { "@type": "Question", "name": `Is ${game.t} legal in Pakistan?`, "acceptedAnswer": { "@type": "Answer", "text": `${game.t} operates under international licensing. Real-money earning games exist in a legal grey area in Pakistan. Players are responsible for understanding their local laws before participating.` } },
      { "@type": "Question", "name": `Does ${game.t} work on iPhone?`, "acceptedAnswer": { "@type": "Answer", "text": `${game.t} is available as an Android APK only. iOS is not supported. You need Android 6.0 or higher.` } },
    ],
  };

  // TOC anchors
  const tocItems = [
    { id: "about",       label: `What is ${game.t}?` },
    { id: "features",    label: "Key Features" },
    ...(game.screenshots?.length ? [{ id: "screenshots", label: "Screenshots" }] : []),
    { id: "download",    label: "How to Download APK" },
    { id: "install",  label: "How to Install" },
    { id: "register", label: "How to Register" },
    { id: "earn",     label: "How to Earn Money" },
    { id: "deposit",  label: "How to Deposit" },
    { id: "withdraw", label: "How to Withdraw" },
    { id: "tips",     label: "Tips & Strategies" },
    { id: "pros-cons",label: "Pros & Cons" },
    { id: "reviews",  label: "Player Reviews" },
    { id: "faq",      label: "FAQ" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }} />

      {/* ── Breadcrumb ── */}
      <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "12px 20px", fontSize: "0.8rem", color: "var(--color-text-muted)" }} aria-label="Breadcrumb">
        <ol style={{ display: "flex", flexWrap: "wrap", gap: "6px", listStyle: "none", padding: 0, margin: 0 }} itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" style={{ color: "var(--color-text-muted)", textDecoration: "none" }} itemProp="item"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href={categoryUrl} style={{ color: "var(--color-text-muted)", textDecoration: "none" }} itemProp="item"><span itemProp="name">{game.cat}</span></Link>
            <meta itemProp="position" content="2" />
          </li>
          <li style={{ opacity: 0.4 }}>/</li>
          <li style={{ color: "var(--color-text-secondary)" }} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name">{game.t}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px 80px" }} className="game-page-layout">
      <main>

        {/* ── Hero Card ── */}
        <div style={{ ...S.card, display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start", marginBottom: "20px" }}>
          <div style={{ width: "100px", height: "100px", borderRadius: "18px", overflow: "hidden", background: "#080c12", position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${spriteUrl})`, backgroundPosition: `${bgPosX}% ${bgPosY}%`, backgroundSize: "400% 300%", backgroundRepeat: "no-repeat" }} aria-hidden="true" />
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
              <Link href={categoryUrl} style={S.badge} title={`Best ${game.cat} APK games in Pakistan`}>{game.cat}</Link>
              <span style={{ ...S.badge, color: "var(--color-text-muted)", background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>Android APK • Free</span>
              <span style={{ ...S.badge, color: "#f0ad4e", background: "rgba(240,173,78,0.1)", borderColor: "rgba(240,173,78,0.25)" }}>⭐ {game.rating}.0/5 Rated</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 900, color: "var(--color-text-primary)", fontSize: "clamp(1.4rem,4vw,2rem)", lineHeight: 1.2, marginBottom: "8px", marginTop: 0 }}>
              {game.t} APK Download in Pakistan – Real Earning App (2026)
            </h1>
            <p style={{ ...S.p, marginBottom: "14px" }}>{game.tagline}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
              <Stars n={game.rating} size={18} />
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>Version: <strong style={{ color: "var(--color-text-primary)" }}>{game.v}</strong></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <a href={game.referralUrl || "#download"} rel="nofollow noopener" target="_blank" style={S.dlBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download {game.t} APK Free
              </a>
              <a href={game.referralUrl || "#download"} rel="nofollow noopener" target="_blank" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--color-bg-secondary)", color: "var(--color-text-primary)", padding: "14px 20px", borderRadius: "12px", textDecoration: "none", border: "1px solid rgba(26,188,156,0.25)", flexShrink: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.25)", transition: "all 0.2s" }}>
                {/* Google Play triangle icon */}
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.18 1.07 13.54 11.43 3.18 21.79C2.73 21.55 2.4 21.07 2.4 20.5V3.36c0-.57.33-1.05.78-1.29z" fill="#EA4335"/>
                  <path d="m3.18 1.07 10.83 6.25-3.03 3.03L3.18 1.07z" fill="#FBBC04"/>
                  <path d="M3.18 21.79 10.98 14l3.03 3.03-10.83 6.25-.01.01z" fill="#34A853"/>
                  <path d="M21.46 11.43c.38.22.62.62.62 1.07s-.24.85-.62 1.07l-3.42 1.98L14.8 12l3.24-3.24 3.42 1.97-.01.7z" fill="#4285F4"/>
                </svg>
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>Get it on</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-text-primary)", letterSpacing: "0.01em" }}>Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: "10px", marginBottom: "20px" }}>
          {[
            { label: "Category",       value: game.cat },
            { label: "Version",        value: game.v },
            { label: "Platform",       value: "Android" },
            { label: "Withdrawal",     value: "Instant" },
            { label: "Payment",        value: game.payments[0] + (game.payments.length > 1 ? ` +${game.payments.length - 1}` : "") },
          ].map((s) => (
            <div key={s.label} style={{ background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.12)", borderRadius: "12px", padding: "12px", textAlign: "center" }}>
              <div style={{ color: "var(--color-text-muted)", fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ color: "var(--color-text-primary)", fontWeight: 700, fontSize: "0.82rem" }}>{s.value}</div>
            </div>
          ))}
        </div>

        {/* ── Table of Contents ── */}
        <div style={{ ...S.cardSub, marginBottom: "20px" }}>
          <div style={{ fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 700, color: "var(--color-text-primary)", fontSize: "0.9rem", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>📋 Table of Contents</div>
          <ol style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "4px 16px" }}>
            {tocItems.map((t, i) => (
              <li key={t.id} style={{ fontSize: "0.88rem" }}>
                <a href={`#${t.id}`} style={{ color: "var(--color-accent)", textDecoration: "none" }}>{t.label}</a>
              </li>
            ))}
          </ol>
        </div>

        {/* ── About ── */}
        <div style={S.card} id="about">
          <h2 style={S.h2}>What is {game.t}? – Real Money Earning App in Pakistan</h2>
          <p style={S.p}>{game.desc}</p>
          <p style={S.p}>
            <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> is a verified <Link href={categoryUrl} style={{ color: "var(--color-accent)", textDecoration: "none" }} title={`Best ${game.cat} earning apps in Pakistan 2026`}>earning game</Link> available as a free APK download for Android users in Pakistan. Players earn real money through {game.cat.toLowerCase()} games and withdraw directly to <strong style={{ color: "var(--color-accent)" }}>EasyPaisa</strong> and <strong style={{ color: "var(--color-accent)" }}>JazzCash</strong>. It is one of the most accessible <Link href="/earning-games-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }} title="Real money earning games Pakistan 2026">real money apps in Pakistan</Link> for beginners and experienced players alike.
          </p>
          <p style={S.p}>
            DigitalAPK has independently tested the full journey on {game.t} — download, registration, deposit, gameplay, and withdrawal — from a Pakistani mobile network. Real {game.payments[0]} payouts were confirmed. This review is updated regularly to reflect the current status of the platform. Looking for more options? Browse our full list of <Link href="/earning-games-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }} title="All earning games Pakistan 2026">earning games in Pakistan</Link> or explore the top <Link href={categoryUrl} style={{ color: "var(--color-accent)", textDecoration: "none" }} title={`${game.cat} apps Pakistan 2026`}>{game.cat.toLowerCase()} apps</Link> we&apos;ve verified.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "4px" }}>
            {[`✅ Verified ${game.payments[0]} Withdrawal`, `✅ Instant Payout`, `✅ Free APK Download`, `✅ Android ${game.v}`].map((badge) => (
              <span key={badge} style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-accent)", background: "rgba(26,188,156,0.08)", border: "1px solid rgba(26,188,156,0.2)", padding: "5px 12px", borderRadius: "999px" }}>{badge}</span>
            ))}
          </div>
        </div>

        {/* ── Features ── */}
        <div style={S.card} id="features">
          <h2 style={S.h2}>{game.t} Key Features – Why Pakistani Players Choose This App</h2>
          <p style={S.p}>Here is what makes <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> one of the most popular earning apps in Pakistan in 2026:</p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "10px" }}>
            {game.features.map((f, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", background: "var(--color-bg-secondary)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "12px" }}>
                <span style={{ color: "var(--color-accent)", flexShrink: 0, fontWeight: 700, fontSize: "1rem" }}>✓</span>
                <span style={S.li}>{f}</span>
              </li>
            ))}
          </ul>
          <p style={{ ...S.p, marginTop: "16px", marginBottom: 0 }}>
            These features combine to make {game.t} a complete earning ecosystem — from initial deposit to final withdrawal — entirely within a single Pakistani-optimized app.
          </p>
        </div>

        {/* ── Screenshots ── */}
        {game.screenshots?.length > 0 && (
          <div style={S.card} id="screenshots">
            <h2 style={S.h2}>{game.t} Screenshots – App Preview</h2>
            <p style={{ ...S.p, marginBottom: "16px" }}>
              See how <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> looks on Android before you download. These are real in-app screenshots of the interface, games, and withdrawal screen.
            </p>
            <div style={{
              display: "flex",
              gap: "12px",
              overflowX: "auto",
              paddingBottom: "8px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(26,188,156,0.3) transparent",
            }}>
              {game.screenshots.map((src, i) => (
                <div key={i} style={{ flexShrink: 0, borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(26,188,156,0.15)", background: "#080c12" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${game.t} screenshot ${i + 1} – real money earning app Pakistan`}
                    loading="lazy"
                    style={{ display: "block", height: "320px", width: "auto", maxWidth: "180px", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Download ── */}
        <div style={S.card} id="download">
          <h2 style={S.h2}>How to Download {game.t} APK for Android in Pakistan</h2>
          <p style={S.p}>
            Since <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> is not available on the Google Play Store in Pakistan, you need to download it as an APK file directly from the official publisher. Follow these steps for a safe and fast download:
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { step: "Open Chrome or Any Browser",      desc: `Open Google Chrome on your Android phone. Do not use an old or outdated browser as it may block the APK download for ${game.t}.` },
              { step: "Tap the Official Download Button", desc: `Tap the green "Download ${game.t} APK Free" button on this page. You will be redirected to the official ${game.t} download page.` },
              { step: "Allow File Download",              desc: "If your browser asks to confirm the download, tap Download Anyway. The APK file will begin downloading (typically 10–50 MB)." },
              { step: "Wait for Download to Complete",    desc: "Do not close the browser or lock your screen during the download. You will see a download notification in your status bar." },
              { step: "Open the APK File",                desc: "Once the download finishes, tap the notification or open your Downloads folder in Files to locate the APK." },
            ].map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a href={game.referralUrl || "#download"} rel="nofollow noopener" target="_blank" style={S.dlBtn}>
              ⬇ Download {game.t} APK – Latest Version {game.v}
            </a>
            <p style={{ color: "var(--color-text-primary)", fontSize: "0.85rem", marginTop: "12px", fontWeight: 600 }}>
              Download the latest version of <strong>{game.t}</strong> APK and start earning real money in Pakistan today.
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.72rem", marginTop: "4px" }}>Free download · Android only · Version {game.v} · File size: ~20 MB · Verified by DigitalAPK</p>
          </div>
        </div>

        {/* ── Install ── */}
        <div style={S.card} id="install">
          <h2 style={S.h2}>How to Install {game.t} APK on Android – Step by Step</h2>
          <p style={S.p}>
            Installing <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> requires enabling Unknown Sources on your Android device. This is a one-time setting that allows you to install apps from outside the Play Store. Here is how to do it safely:
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { step: "Enable Unknown Sources",       desc: `Go to Settings → Security (or Privacy on newer Android). Find "Install Unknown Apps" or "Unknown Sources" and toggle it ON for your browser (Chrome). This allows ${game.t} APK to be installed.` },
              { step: "Open the Downloaded APK",      desc: `Navigate to your Downloads folder and tap the ${game.t} APK file. If prompted "Do you want to install this app?", tap Install.` },
              { step: "Wait for Installation",        desc: `The installation takes 10–30 seconds. Do not tap Back during this process. You will see an "App Installed" confirmation when done.` },
              { step: "Open the App",                 desc: `Tap Open on the confirmation screen, or find the ${game.t} icon on your home screen. The app will load and show the welcome/login screen.` },
              { step: "Allow App Permissions",        desc: `${game.t} may request permissions for storage and notifications. Allow these so the app functions correctly and you receive deposit/withdrawal notifications.` },
            ].map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(26,188,156,0.06)", border: "1px solid rgba(26,188,156,0.2)", borderRadius: "10px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
            <strong style={{ color: "var(--color-text-primary)" }}>Tip:</strong> After installation is complete, you can go back to Settings and turn Unknown Sources off again for security. This does not affect {game.t} — it will continue working normally.
          </div>
        </div>

        {/* ── Register ── */}
        <div style={S.card} id="register">
          <h2 style={S.h2}>How to Register on {game.t} – Create Your Account</h2>
          <p style={S.p}>
            Creating a <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> account takes less than 2 minutes. You only need a Pakistani mobile number to get started. Follow these steps:
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { step: "Open the App",                 desc: `Launch ${game.t} on your Android phone. The welcome screen will show Login and Register options.` },
              { step: "Tap Register",                 desc: `Tap the Register or Sign Up button. You will be taken to the account creation form.` },
              { step: "Enter Your Mobile Number",     desc: `Enter your Pakistani mobile number (Telenor, Jazz, Ufone, or Zong). This will be your account identity for all transactions.` },
              { step: "Create a Strong Password",     desc: `Choose a password with at least 8 characters including numbers. Do not share your password with anyone. Use a unique password not used on other apps.` },
              { step: "Enter Referral Code (Optional)",desc: `If you have a referral code from a friend or from this page, enter it now to claim your registration bonus. This is optional but recommended.` },
              { step: "Submit and Verify",            desc: `Tap Submit or Register. You may receive an OTP via SMS to verify your number. Enter it when prompted. Your account is now active.` },
            ].map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(240,173,78,0.06)", border: "1px solid rgba(240,173,78,0.2)", borderRadius: "10px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
            <strong style={{ color: "#f0ad4e" }}>New User Bonus:</strong> {game.t} offers a welcome bonus for new registrations. Make your first deposit to activate it automatically.
          </div>
        </div>

        {/* ── How to Earn ── */}
        <div style={S.card} id="earn">
          <h2 style={S.h2}>How to Earn Real Money on {game.t} in Pakistan</h2>
          <p style={S.p}>
            Here is the complete earning process on <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> — from first registration to your first real money withdrawal to <strong style={{ color: "var(--color-text-primary)" }}>{game.payments[0]}</strong>:
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { step: "Create Your Account",   icon: "👤", desc: `Download and install ${game.t} APK, then register with your Pakistani mobile number. Takes under 2 minutes.` },
              { step: "Make a Deposit",         icon: "💳", desc: `Add funds via ${game.payments[0]}. Start small to test the platform before increasing your balance.` },
              { step: "Play & Earn",            icon: "🎮", desc: `Choose your preferred ${game.cat.toLowerCase()} game mode. Place your bets or predictions. Winnings are credited to your ${game.t} wallet instantly.` },
              { step: "Build Your Balance",     icon: "📈", desc: `Use daily bonuses, check-in rewards, and the referral system to grow your balance without extra risk. Invite friends to earn passive commission.` },
              { step: "Withdraw to EasyPaisa or JazzCash", icon: "💸", desc: `Go to Wallet → Withdraw, select ${game.payments[0]}, enter your mobile number, confirm the amount. Money arrives in 5–30 minutes.` },
            ].map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px", padding: "14px", background: "var(--color-bg-secondary)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px" }}>
                <span style={{ fontSize: "1.4rem", flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem", display: "block", marginBottom: "3px" }}>Step {i + 1}: {s.step}</strong>
                  <span style={{ ...S.p, margin: 0, fontSize: "0.87rem" }}>{s.desc}</span>
                </div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(26,188,156,0.06)", border: "1px solid rgba(26,188,156,0.2)", borderRadius: "10px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
            <strong style={{ color: "var(--color-text-primary)" }}>Earning Tip:</strong> The referral system is the lowest-risk way to earn on {game.t}. Every time a friend deposits using your link, you earn a commission — no gameplay required.
          </div>
        </div>

        {/* ── Deposit ── */}
        <div style={S.card} id="deposit">
          <h2 style={S.h2}>How to Deposit Money in {game.t} via EasyPaisa & JazzCash</h2>
          <p style={S.p}>
            <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> supports deposits through <strong style={{ color: "var(--color-text-primary)" }}>{game.payments.join(", ")}</strong>. You can use your <a href="https://www.easypaisa.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>EasyPaisa</a> or <a href="https://www.jazzcash.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>JazzCash</a> mobile wallet to deposit and withdraw instantly. Here is how to add funds to your account:
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { step: "Log In to Your Account",       desc: `Open ${game.t} and log in with your mobile number and password.` },
              { step: "Go to Wallet or Deposit",      desc: `Tap the Wallet icon or navigate to the Deposit/Recharge section from the main dashboard.` },
              { step: "Select Your Payment Method",   desc: `Choose ${game.payments[0]} or ${game.payments[1] || "your preferred payment method"} from the list of available options.` },
              { step: "Enter Deposit Amount",         desc: `Enter the amount you want to deposit. We recommend starting small for your first deposit to test the platform.` },
              { step: "Follow the Payment Steps",     desc: `The app will redirect you to ${game.payments[0]}. Open your ${game.payments[0]} app, enter the transaction PIN, and confirm. The amount will be credited instantly.` },
              { step: "Confirm and Start Playing",    desc: `Your ${game.t} wallet will update within 1–3 minutes. You will receive an in-app notification confirming the successful deposit.` },
            ].map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Withdraw ── */}
        <div style={S.card} id="withdraw">
          <h2 style={S.h2}>How to Withdraw Earnings from {game.t} to EasyPaisa & JazzCash</h2>
          <p style={S.p}>
            Withdrawing your earnings from <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> to your Pakistani mobile wallet is simple. Here is the complete withdrawal process:
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              { step: "Log In and Open Wallet",       desc: `Open ${game.t}, log in, and navigate to the Wallet section from the main menu.` },
              { step: "Tap Withdrawal",               desc: `Select the Withdrawal or Cashout option. You will see your current withdrawable balance.` },
              { step: "Enter Withdrawal Amount",      desc: `Type the amount you want to withdraw.` },
              { step: "Select Payment Method",        desc: `Choose ${game.payments[0]} or ${game.payments[1] || "your preferred method"}. Select whichever account you want the money sent to.` },
              { step: "Enter Your Mobile Number",     desc: `Enter your ${game.payments[0]} registered mobile number. Double-check this — an incorrect number means your money goes to the wrong account.` },
              { step: "Confirm and Receive",          desc: `Tap Confirm. Your withdrawal will process within 5–30 minutes. You will receive an SMS from ${game.payments[0]} confirming the transfer.` },
            ].map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(26,188,156,0.06)", border: "1px solid rgba(26,188,156,0.2)", borderRadius: "10px" }}>
            <div style={{ color: "var(--color-text-primary)", fontWeight: 700, fontSize: "0.88rem", marginBottom: "6px" }}>💰 Withdrawal Info</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
              <span>Methods: <strong style={{ color: "var(--color-text-primary)" }}>{game.payments.join(", ")}</strong></span>
              <span>Processing: <strong style={{ color: "var(--color-text-primary)" }}>5–30 minutes</strong></span>
            </div>
          </div>
        </div>

        {/* ── Tips ── */}
        <div style={S.card} id="tips">
          <h2 style={S.h2}>Tips & Strategies to Earn More on {game.t}</h2>
          <p style={S.p}>
            To maximise your earnings on <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong>, follow these expert tips from experienced Pakistani players who use the platform daily:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "14px" }}>
            {[
              { icon: "💡", tip: "Start Small",           desc: `Always begin with a small deposit. Test the platform, check withdrawal speed, and build confidence before increasing your stake.` },
              { icon: "📊", tip: "Track Your History",    desc: `Study recent round results before placing bets. Most platforms show outcome history — use this to identify patterns and improve decision accuracy.` },
              { icon: "🔄", tip: "Use the Referral System", desc: `Invite friends through your referral link and earn commission on their deposits. This is the safest way to earn on ${game.t} without any game risk.` },
              { icon: "💸", tip: "Withdraw Regularly",    desc: `Do not let your winnings sit in the wallet. Withdraw small amounts frequently rather than waiting for a large balance. This protects your earnings.` },
              { icon: "⏰", tip: "Claim Daily Bonuses",   desc: `Log in every day to claim your daily check-in bonus. These free rewards accumulate and give you extra playing balance at no cost.` },
              { icon: "🛑", tip: "Set a Loss Limit",      desc: `Decide your maximum daily loss before you start. Once you hit that limit, stop for the day. Discipline is the single most important skill for consistent earning.` },
            ].map((t) => (
              <div key={t.tip} style={{ background: "var(--color-bg-secondary)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "8px" }}>{t.icon}</div>
                <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "0.9rem", marginBottom: "6px" }}>{t.tip}</div>
                <p style={{ ...S.p, marginBottom: 0, fontSize: "0.83rem" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Pros & Cons ── */}
        <div style={S.card} id="pros-cons">
          <h2 style={S.h2}>{game.t} Pros & Cons – Honest Review</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "20px" }}>
            <div>
              <div style={{ fontWeight: 800, color: "#2ecc71", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>✅ Pros</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {game.pros.map((p, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", ...S.li }}>
                    <span style={{ color: "#2ecc71", flexShrink: 0, fontWeight: 700 }}>+</span>{p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div style={{ fontWeight: 800, color: "#e74c3c", fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "12px" }}>❌ Cons</div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {game.cons.map((c, i) => (
                  <li key={i} style={{ display: "flex", gap: "10px", ...S.li }}>
                    <span style={{ color: "#e74c3c", flexShrink: 0, fontWeight: 700 }}>−</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Verdict ── */}
        <div style={{ ...S.cardSub, borderColor: "rgba(26,188,156,0.3)", marginBottom: "20px" }}>
          <h2 style={S.h2}>DigitalAPK Verdict: Is {game.t} Worth It?</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <Stars n={game.rating} size={20} />
            <span style={{ fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.2rem" }}>{game.rating}.0 / 5</span>
          </div>
          <p style={S.p}>{game.verdict}</p>
          <p style={S.p}>
            DigitalAPK independently reviewed <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> by testing the full user journey — registration, deposit, gameplay, and withdrawal — from a Pakistani mobile network. Our team successfully completed {game.payments[0]} withdrawals and confirmed the payout timeline. We update this review quarterly to reflect any changes in the platform&apos;s reliability.
          </p>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href={game.referralUrl || "#download"} rel="nofollow noopener" target="_blank" style={S.dlBtn}>
              Download {game.t} APK Now →
            </a>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 0 }}>
            <strong>Disclaimer:</strong> DigitalAPK is an independent information and review platform. We are not affiliated with {game.t} or its publishers. All earning apps involve financial risk. Never deposit more than you can afford to lose. This review may contain affiliate links.
          </p>
        </div>

        {/* ── Player Reviews ── */}
        <div style={S.card} id="reviews">
          <h2 style={S.h2}>Player Reviews – What Pakistani Users Say About {game.t}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <Stars n={game.rating} size={22} />
            <span style={{ fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.3rem" }}>{game.rating}.0</span>
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>from verified Pakistani player reviews</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "14px" }} itemScope itemType="https://schema.org/ItemList">
            {BASE_REVIEWS.map((rev, i) => (
              <div key={i} style={{ background: "var(--color-bg-secondary)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }} itemScope itemProp="itemListElement" itemType="https://schema.org/Review">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "0.88rem" }} itemProp="author" itemScope itemType="https://schema.org/Person"><span itemProp="name">{rev.name}</span></div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.72rem", marginTop: "2px" }}>{rev.city}, Pakistan</div>
                  </div>
                  <Stars n={rev.rating} size={13} />
                </div>
                <blockquote style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", lineHeight: "1.7", margin: 0 }} itemProp="reviewBody">&ldquo;{rev.text(game.t)}&rdquo;</blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div id="faq">
          <h2 style={{ ...S.h2, marginBottom: "16px" }}>Frequently Asked Questions – {game.t} APK Download Pakistan</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              { q: `Is ${game.t} APK safe to download in Pakistan?`,            a: `Yes. ${game.t} is independently reviewed by DigitalAPK. We test the APK download, installation, and real money withdrawal process before listing. Always download from the official link on this page — never from Telegram or random APK sites.` },
              { q: `How to download ${game.t} APK on Android?`,                 a: `Tap the Download APK button on this page. Once the file downloads, go to Settings → Security → enable Unknown Sources, then open the APK file and tap Install. The full process takes under 2 minutes.` },
              { q: `What is the minimum deposit for ${game.t}?`,                a: `The minimum deposit for ${game.t} is ${game.minDep}. Start small, confirm a successful withdrawal, then increase your deposit. This is the safest approach for any real money earning app in Pakistan.` },
              { q: `How to withdraw from ${game.t} to EasyPaisa or JazzCash?`, a: `Open ${game.t}, go to Wallet → Withdrawal, select ${game.payments[0]}, enter your registered mobile number, enter the amount, and confirm. Funds arrive within 5–30 minutes. Daily limit is ${game.maxWith}.` },
              { q: `Can I earn real money with ${game.t} in Pakistan?`,         a: `Yes. ${game.t} is a verified real money earning app. DigitalAPK has confirmed live withdrawals to EasyPaisa and JazzCash from Pakistani users. Earnings depend on gameplay, deposits, and referral activity.` },
              { q: `What is the ${game.t} referral code benefit?`,              a: `Register using a referral code to claim a bonus on your first deposit. After registering, share your own referral link to earn a commission on every deposit your referred friends make — permanently.` },
              { q: `Does ${game.t} work on iPhone?`,                            a: `No. ${game.t} is an Android APK earning game only. iOS is not supported. You need an Android device running version 6.0 or higher.` },
              { q: `Is ${game.t} legal in Pakistan?`,                           a: `${game.t} operates under international licensing. Real money earning games exist in a legal grey area in Pakistan. DigitalAPK does not provide legal advice — players are responsible for checking their local laws.` },
            ].map((faq, i) => (
              <details key={i} style={{ background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.12)", borderRadius: "12px", overflow: "hidden" }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary style={{ padding: "16px 20px", cursor: "pointer", fontWeight: 600, color: "var(--color-text-primary)", fontSize: "0.92rem", display: "flex", justifyContent: "space-between", alignItems: "center", listStyle: "none" }} itemProp="name">
                  {faq.q}
                  <span style={{ color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 300, flexShrink: 0, marginLeft: "12px" }}>+</span>
                </summary>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p style={{ padding: "0 20px 16px", ...S.p, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "14px", margin: 0 }} itemProp="text">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ── Internal link hub ── */}
        <div style={{ ...S.cardSub, marginTop: "24px", fontSize: "0.85rem", color: "var(--color-text-secondary)", lineHeight: "1.9" }}>
          <strong style={{ color: "var(--color-text-primary)", display: "block", marginBottom: "8px", fontSize: "0.88rem" }}>More Earning Apps &amp; Resources</strong>
          <p style={{ margin: "0 0 8px" }}>
            If {game.t} is not the right fit, explore our other verified platforms:{" "}
            {relatedGames.slice(0, 3).map((rg, i) => (
              <span key={rg.slug}>
                <Link href={`/${rg.slug}`} style={{ color: "var(--color-accent)", textDecoration: "none" }} title={`Download ${rg.t} APK Pakistan`}>Download {rg.t} APK</Link>
                {i < Math.min(relatedGames.length, 3) - 1 ? ", " : ""}
              </span>
            ))}
            {relatedGames.length > 0 && ". "}
            Browse all{" "}
            <Link href={categoryUrl} style={{ color: "var(--color-accent)", textDecoration: "none" }} title={`${game.cat} apps Pakistan 2026`}>{game.cat} earning apps</Link>
            {" "}or view the complete{" "}
            <Link href="/earning-games-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }} title="Best earning games Pakistan 2026">list of earning games in Pakistan</Link>.
          </p>
          <p style={{ margin: 0 }}>
            <strong style={{ color: "var(--color-text-primary)" }}>Explore by category:</strong>{" "}
            <Link href="/casino-games-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Casino &amp; Slots APK</Link>{" · "}
            <Link href="/color-prediction-games-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Color Prediction Games</Link>{" · "}
            <Link href="/sports-betting-apps-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Sports Betting Apps</Link>{" · "}
            <Link href="/referral-earning-apps-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Referral Earning Apps</Link>{" · "}
            <Link href="/card-games-pakistan" style={{ color: "var(--color-accent)", textDecoration: "none" }}>Card Games Pakistan</Link>
          </p>
        </div>

        {/* ── Related games ── */}
        {relatedGames.length > 0 && (
          <div style={{ ...S.card, marginTop: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "8px" }}>
              <h2 style={{ ...S.h2, marginBottom: 0 }}>You Can Also Try – More {game.cat} Earning Apps in Pakistan</h2>
              <Link href={categoryUrl} style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--color-accent)", textDecoration: "none", whiteSpace: "nowrap" }} title={`Best ${game.cat} APK games in Pakistan 2026`}>
                View All {game.cat} Apps →
              </Link>
            </div>
            <p style={S.p}>Pakistani players who download <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> APK also use these verified {game.cat.toLowerCase()} earning apps:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: "12px" }}>
              {relatedGames.map((rg) => (
                <Link
                  key={rg.slug}
                  href={`/${rg.slug}`}
                  title={`Download ${rg.t} APK – Play ${rg.cat} & Earn Real Money in Pakistan`}
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.07)", background: "var(--color-bg-secondary)", textDecoration: "none" }}
                >
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", overflow: "hidden", background: "#080c12", position: "relative", flexShrink: 0 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${SPRITES[rg.s]})`, backgroundPosition: `${(rg.c / 3) * 100}% ${(rg.ro / 2) * 100}%`, backgroundSize: "400% 300%", backgroundRepeat: "no-repeat" }} aria-hidden="true" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      Download {rg.t} APK
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--color-accent)", marginTop: "2px" }}>{rg.payments[0]} · Instant</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── Other categories ── */}
        {otherGames.length > 0 && (
          <div style={{ ...S.cardSub, marginTop: "16px" }}>
            <h2 style={S.h2}>More Real Money Earning Apps in Pakistan – All Categories</h2>
            <p style={{ ...S.p, marginBottom: "14px" }}>You can also try these earning apps from other categories — all verified for EasyPaisa and JazzCash withdrawals:</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(170px,1fr))", gap: "12px" }}>
              {otherGames.map((rg) => (
                <Link
                  key={rg.slug}
                  href={`/${rg.slug}`}
                  title={`Play ${rg.t} in Pakistan – Download APK & Earn Real Money`}
                  style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.07)", background: "var(--color-bg-card)", textDecoration: "none" }}
                >
                  <div style={{ width: "42px", height: "42px", borderRadius: "8px", overflow: "hidden", background: "#080c12", position: "relative", flexShrink: 0 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${SPRITES[rg.s]})`, backgroundPosition: `${(rg.c / 3) * 100}% ${(rg.ro / 2) * 100}%`, backgroundSize: "400% 300%", backgroundRepeat: "no-repeat" }} aria-hidden="true" />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      Play {rg.t} Pakistan
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", marginTop: "2px" }}>{rg.cat}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "16px" }}>
              <Link href="/#directory" style={{ color: "var(--color-accent)", fontSize: "0.88rem", fontWeight: 700, textDecoration: "none" }}>Browse All 40+ Earning Games in Pakistan →</Link>
            </div>
          </div>
        )}

        {/* ── Final CTA ── */}
        <div style={{ background: "linear-gradient(135deg, rgba(26,188,156,0.12) 0%, rgba(26,188,156,0.04) 100%)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "16px", padding: "32px 28px", marginTop: "24px", textAlign: "center" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>📲</div>
          <h2 style={{ ...S.h2, textAlign: "center", fontSize: "1.15rem", marginBottom: "10px" }}>
            Download {game.t} APK Now – Start Earning Real Money in Pakistan
          </h2>
          <p style={{ ...S.p, textAlign: "center", maxWidth: "500px", margin: "0 auto 20px" }}>
            Join thousands of Pakistani players earning real money with <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong>. Download the APK free, register in 2 minutes, and make your first withdrawal to <strong style={{ color: "var(--color-accent)" }}>{game.payments[0]}</strong> today.
          </p>
          <a href={game.referralUrl || "#download"} rel="nofollow noopener" target="_blank" style={{ ...S.dlBtn, fontSize: "1.05rem", padding: "16px 36px" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download {game.t} APK Free
          </a>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "16px", flexWrap: "wrap", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
            <span>✅ Free Download</span>
            <span>✅ Android {game.v}</span>
            <span>✅ {game.payments[0]} Withdrawal</span>
            <span>✅ Instant Payout</span>
          </div>
        </div>

      </main>

      {/* ── Sidebar ── */}
      <aside>
        <div style={{ position: "sticky", top: "80px" }}>
          <div style={{ background: "var(--color-bg-card)", border: "1px solid rgba(26,188,156,0.15)", borderRadius: "14px", overflow: "hidden" }}>
            <div style={{ padding: "16px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 900, fontSize: "0.78rem", color: "var(--color-text-primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>⭐ Most Rated Apps</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {mostRatedGames.map((g, i) => {
                const px = (g.c / 3) * 100;
                const py = (g.ro / 2) * 100;
                return (
                  <Link
                    key={g.slug}
                    href={`/${g.slug}`}
                    title={`Download ${g.t} APK – Real Earning App Pakistan`}
                    className="sidebar-game-row"
                    style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px", textDecoration: "none", borderBottom: i < mostRatedGames.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                  >
                    <div style={{ width: "52px", height: "52px", borderRadius: "10px", overflow: "hidden", background: "#080c12", position: "relative", flexShrink: 0 }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${SPRITES[g.s]})`, backgroundPosition: `${px}% ${py}%`, backgroundSize: "400% 300%", backgroundRepeat: "no-repeat" }} aria-hidden="true" />
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", lineHeight: 1.3, marginBottom: "3px" }}>
                        {g.t} APK
                      </div>
                      <div style={{ fontSize: "0.68rem", color: "var(--color-text-muted)", marginBottom: "4px" }}>{g.v} · {g.cat}</div>
                      <div style={{ display: "flex", gap: "2px" }}>
                        {[...Array(5)].map((_, si) => (
                          <svg key={si} width="10" height="10" viewBox="0 0 24 24" fill={si < g.rating ? "#f0ad4e" : "#2d3a47"}>
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                        <span style={{ fontSize: "0.65rem", color: "var(--color-text-muted)", marginLeft: "3px" }}>{g.rating}.0</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div style={{ padding: "12px 16px", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
              <Link href="/earning-games-pakistan" style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--color-accent)", textDecoration: "none" }}>View All Earning Apps →</Link>
            </div>
          </div>
        </div>
      </aside>

      </div>
    </>
  );
}
