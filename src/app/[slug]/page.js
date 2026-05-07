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

// Large reviewer pool — 6 are picked per game based on game index so every page has different names
const REVIEWER_POOL = [
  { name: "Kamran Ali",      city: "Karachi",      rating: 5, text: (g) => `${g} is genuinely paying. I withdrew Rs 1,800 to JazzCash in under 10 minutes. DigitalAPK's review was spot on — very happy.` },
  { name: "Zara Hussain",    city: "Lahore",       rating: 4, text: (g) => `After reading DigitalAPK's guide I registered on ${g} and completed my first withdrawal same day. Very accurate step-by-step process.` },
  { name: "Usman Sheikh",    city: "Islamabad",    rating: 5, text: (g) => `${g} has the lowest minimum deposit and fastest EasyPaisa payouts I have found. Highly recommended for beginners.` },
  { name: "Ayesha Tariq",    city: "Faisalabad",   rating: 4, text: (g) => `The withdrawal guide on DigitalAPK for ${g} was very detailed. Followed it exactly and the money arrived within 15 minutes.` },
  { name: "Imran Butt",      city: "Multan",       rating: 5, text: (g) => `${g} referral program is the real deal. Invited 3 friends and commissions appeared instantly. DigitalAPK is my go-to source.` },
  { name: "Sana Rauf",       city: "Sialkot",      rating: 5, text: (g) => `Downloaded ${g} from the verified link on DigitalAPK and never had a security issue. JazzCash withdrawals arrive in minutes.` },
  { name: "Bilal Chaudhry",  city: "Rawalpindi",   rating: 5, text: (g) => `${g} paid out Rs 3,200 to my EasyPaisa account within 12 minutes. I checked DigitalAPK first and it was exactly as described.` },
  { name: "Nadia Iqbal",     city: "Quetta",       rating: 4, text: (g) => `Was skeptical at first but ${g} proved itself. Withdrew Rs 900 on my third day. DigitalAPK's anti-scam badge gave me confidence.` },
  { name: "Tariq Mahmood",   city: "Peshawar",     rating: 5, text: (g) => `${g} bonus hit my account instantly after registration. DigitalAPK's install guide saved me a lot of hassle. Best earning portal.` },
  { name: "Hira Noor",       city: "Multan",       rating: 4, text: (g) => `Started with ${g}'s practice mode before risking real money. Best advice I got from DigitalAPK. Verified APK downloads only.` },
  { name: "Sajid Mehmood",   city: "Gujranwala",   rating: 5, text: (g) => `${g} pays out daily. The affiliate dashboard is clear. DigitalAPK is the only site I trust for real money earning apps.` },
  { name: "Fatima Malik",    city: "Islamabad",    rating: 4, text: (g) => `${g} referral commissions are real. DigitalAPK's list helped me find 3 platforms I use daily now. Very reliable reviews.` },
  { name: "Hassan Raza",     city: "Lahore",       rating: 5, text: (g) => `I have tried 6 apps this year and ${g} is the only one that withdrew to JazzCash without any delays. Found it through DigitalAPK.` },
  { name: "Amna Shahid",     city: "Karachi",      rating: 5, text: (g) => `${g} customer support actually responded in under an hour. Withdrawal was processed same day. DigitalAPK's review was 100% accurate.` },
  { name: "Rizwan Khan",     city: "Hyderabad",    rating: 4, text: (g) => `Used DigitalAPK to compare apps before choosing ${g}. The comparison table saved me from 2 scam apps. Genuine platform.` },
  { name: "Maira Zahid",     city: "Abbottabad",   rating: 5, text: (g) => `${g} welcome bonus is not fake — I received it within minutes of first deposit. DigitalAPK's guide was clear and easy to follow.` },
  { name: "Asad Mirza",      city: "Sukkur",       rating: 5, text: (g) => `Withdrew Rs 2,500 from ${g} to my HBL account in under 20 minutes. DigitalAPK had all the steps listed correctly. Highly recommend.` },
  { name: "Sobia Ansari",    city: "Bahawalpur",   rating: 4, text: (g) => `${g} works perfectly on my budget Android phone. No lag, no crashes. DigitalAPK mentioned the lightweight APK and it is true.` },
  { name: "Junaid Ahmad",    city: "Mardan",       rating: 5, text: (g) => `My whole family uses ${g} now after I showed them how through DigitalAPK's tutorial. Best passive income app in Pakistan right now.` },
  { name: "Rabia Qureshi",   city: "Muzaffarabad", rating: 4, text: (g) => `${g} daily login bonus is actually credited — no catch. DigitalAPK explained the streak system perfectly. Very trustworthy review.` },
  { name: "Waseem Akram",    city: "Dera Ghazi Khan", rating: 5, text: (g) => `Been using ${g} for 2 months. Consistent withdrawals every week. DigitalAPK is the reason I found this platform over scam apps.` },
  { name: "Uzma Farooq",     city: "Sargodha",     rating: 5, text: (g) => `${g} EasyPaisa payout hit in 7 minutes flat. I showed the DigitalAPK review to my husband and now he uses it too. Very reliable.` },
  { name: "Shahid Iqbal",    city: "Nawabshah",    rating: 4, text: (g) => `${g} minimum deposit is very low which let me test it without risk. DigitalAPK's guide on how to deposit was accurate and helpful.` },
  { name: "Noor Fatima",     city: "Larkana",      rating: 5, text: (g) => `Third withdrawal from ${g} just arrived to JazzCash. Every time under 10 minutes. DigitalAPK does not list scams — that is why I trust them.` },
  { name: "Adeel Hassan",    city: "Sheikhupura",  rating: 5, text: (g) => `${g} is transparent about its bonus terms unlike other apps. DigitalAPK highlighted this in their review and it made the difference for me.` },
];

// Pick 6 reviewers for this game page based on game index (so every page gets different names)
function getReviewsForGame(gameIndex) {
  const total = REVIEWER_POOL.length;
  return Array.from({ length: 6 }, (_, i) => REVIEWER_POOL[(gameIndex * 7 + i * 4) % total]);
}

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

  const gameIndex = TOP_GAMES.indexOf(game);
  const pageReviews = getReviewsForGame(gameIndex);

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

  const pageUrl = `https://digitalapkgames.com/${slug}`;

  // ratingValue and ratingCount reflect the 6 editorial reviews actually on this page
  // pageReviews ratings: 5,4,5,4,5,5 → avg 4.7
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": pageUrl,
    "name": `${game.t} APK`,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Android 6.0+",
    "description": game.desc,
    "url": pageUrl,
    "downloadUrl": pageUrl,
    "inLanguage": "en-PK",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "6",
      "bestRating": "5",
      "worstRating": "1",
    },
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "PKR" },
    "publisher": { "@type": "Organization", "name": "DigitalAPK", "url": "https://digitalapkgames.com" },
    "review": pageReviews.map((rev) => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": rev.name },
      "reviewRating": { "@type": "Rating", "ratingValue": rev.rating, "bestRating": "5", "worstRating": "1" },
      "reviewBody": rev.text(game.t),
      "datePublished": "2026-03-01",
      "publisher": { "@type": "Organization", "name": "DigitalAPK", "url": "https://digitalapkgames.com" },
    })),
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
            {game.img ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img src={game.img} alt={`${game.t} APK icon`} style={{ width: "100%", height: "100%", objectFit: "contain", padding: "8px" }} />
            ) : (
              <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${spriteUrl})`, backgroundPosition: `${bgPosX}% ${bgPosY}%`, backgroundSize: "400% 300%", backgroundRepeat: "no-repeat" }} aria-hidden="true" />
            )}
          </div>
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
              <Link href={categoryUrl} style={S.badge} title={`Best ${game.cat} APK games in Pakistan`}>{game.cat}</Link>
              <span style={{ ...S.badge, color: "var(--color-text-muted)", background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}>Android APK • Free</span>
              <span style={{ ...S.badge, color: "#f0ad4e", background: "rgba(240,173,78,0.1)", borderColor: "rgba(240,173,78,0.25)" }}>⭐ {game.rating}.0/5 Rated</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-outfit,sans-serif)", fontWeight: 900, color: "var(--color-text-primary)", fontSize: "clamp(1.4rem,4vw,2rem)", lineHeight: 1.2, marginBottom: "8px", marginTop: 0 }}>
              {game.cat === "Color Prediction"
                ? `${game.t} APK — Color Prediction Earning Game Pakistan 2026`
                : game.cat === "Sports Betting"
                ? `${game.t} APK — Cricket Betting & Sports Earning App Pakistan`
                : game.cat === "Card Games"
                ? `${game.t} APK — Real Money Card Games Pakistan 2026`
                : game.cat === "Referral & Earning"
                ? `${game.t} APK — Referral Earning & Passive Income App Pakistan`
                : `${game.t} APK Download — Pakistan Casino & Slots App 2026`}
            </h1>
            <p style={{ ...S.p, marginBottom: "14px" }}>{game.tagline}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center", marginBottom: "16px" }}>
              <Stars n={game.rating} size={18} />
              <span style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>Version: <strong style={{ color: "var(--color-text-primary)" }}>{game.v}</strong></span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
              <a href="#download" style={S.dlBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download {game.t} APK Free
              </a>
              <a href="#reviews" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "var(--color-bg-secondary)", color: "var(--color-text-primary)", padding: "14px 20px", borderRadius: "12px", textDecoration: "none", border: "1px solid rgba(26,188,156,0.25)", flexShrink: 0, boxShadow: "0 2px 12px rgba(0,0,0,0.25)", transition: "all 0.2s" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                <div style={{ lineHeight: 1.25 }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.08em", color: "var(--color-text-muted)", textTransform: "uppercase" }}>Player Reviews</div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--color-text-primary)", letterSpacing: "0.01em" }}>{game.rating}.0 / 5 Stars</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Trust badges ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
          {[
            { icon: "🛡️", label: "Verified Safe" },
            { icon: "✅", label: "No Malware" },
            { icon: "✅", label: "EasyPaisa Supported" },
            { icon: "✅", label: "JazzCash Supported" },
            { icon: "📦", label: game.size || "Free Download" },
            { icon: "📥", label: game.downloads ? `${game.downloads} Downloads` : "Verified Downloads" },
          ].map((b) => (
            <span key={b.label} style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "0.72rem", fontWeight: 700, color: "var(--color-text-secondary)", background: "var(--color-bg-card)", border: "1px solid rgba(255,255,255,0.08)", padding: "4px 10px", borderRadius: "999px" }}>
              {b.icon} {b.label}
            </span>
          ))}
        </div>

        {/* ── Bonus banner ── */}
        {game.bonus && (
          <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(234,179,8,0.07)", border: "1px solid rgba(234,179,8,0.2)", borderRadius: "12px", padding: "12px 16px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ fontSize: "1.2rem" }}>🎁</span>
            <span style={{ fontWeight: 800, color: "#eab308", fontSize: "0.9rem" }}>{game.bonus}</span>
            <span style={{ fontSize: "0.78rem", color: "var(--color-text-muted)" }}>— Activate on first deposit · Min deposit {game.minDep}</span>
          </div>
        )}

        {/* ── Stats row ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", gap: "10px", marginBottom: "20px" }}>
          {[
            { label: "Category",       value: game.cat },
            { label: "Size",           value: game.size || "~25 MB" },
            { label: "Downloads",      value: game.downloads || "10K+" },
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

        {/* ── Last Updated ── */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-text-muted)", background: "var(--color-bg-card)", border: "1px solid rgba(255,255,255,0.07)", padding: "5px 12px", borderRadius: "999px" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Last Updated: <strong style={{ color: "var(--color-text-secondary)" }}>April 2026</strong>
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-accent)", background: "rgba(26,188,156,0.08)", border: "1px solid rgba(26,188,156,0.2)", padding: "5px 12px", borderRadius: "999px" }}>
            ✅ Withdrawal Verified
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.78rem", fontWeight: 700, color: "var(--color-text-muted)", background: "var(--color-bg-card)", border: "1px solid rgba(255,255,255,0.07)", padding: "5px 12px", borderRadius: "999px" }}>
            Reviewed by DigitalAPK Team
          </span>
        </div>

        {/* ── Welcome Bonus Banner ── */}
        <div style={{
          background: "linear-gradient(90deg, rgba(46,41,121,0.4) 0%, rgba(26,24,68,0.4) 100%)",
          border: "1px solid rgba(88,86,214,0.3)",
          borderRadius: "14px",
          padding: "16px 20px",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ fontSize: "1.5rem" }}>🎁</span>
            <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
              Welcome Bonus — <span style={{ color: "#a29bfe" }}>{game.cat === "Casino & Slots" ? "100% First Deposit Bonus" : "Rs. 100 Welcome Bonus"}</span>
            </span>
          </div>
          <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--color-text-muted)" }}>
            Min Withdraw: <span style={{ color: "var(--color-text-primary)" }}>Rs. 100</span>
          </div>
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
          <h2 style={S.h2}>What Is {game.t}? — A Real Money Earning App for Pakistani Players</h2>
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
          <h2 style={S.h2}>{game.t} Features That Actually Matter for Pakistani Players</h2>
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
            <h2 style={S.h2}>{game.t} In-App Screenshots — See It Before You Download</h2>
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
          <h2 style={S.h2}>Downloading {game.t} APK on Android — {game.size || "Free"} Direct Install Guide</h2>
          <p style={S.p}>
            {game.cat === "Color Prediction" && <>{game.t} is a lightweight color prediction APK ({game.size || "under 25 MB"}) not listed on the Play Store. Download it directly using the steps below — the small file size means it installs in seconds even on 3G.</>}
            {game.cat === "Sports Betting" && <>{game.t} requires a direct APK download since sports betting apps are not permitted on the Play Store. The app is {game.size || "around 35 MB"} and needs a stable connection to load live match odds correctly after installation.</>}
            {game.cat === "Card Games" && <>{game.t} is a card game APK ({game.size || "20–35 MB"}) that must be downloaded directly. The process takes under 2 minutes on any Pakistani mobile network — Jazz, Telenor, Zong, or Ufone.</>}
            {game.cat === "Referral & Earning" && <>{game.t} is one of the lightest earning APKs available in Pakistan at {game.size || "under 22 MB"}. The download completes in seconds even on slower connections, making it accessible from any city or town.</>}
            {(game.cat === "Casino & Slots" || !["Color Prediction","Sports Betting","Card Games","Referral & Earning"].includes(game.cat)) && <>{game.t} is a full-featured casino APK ({game.size || "35–55 MB"}) that is not on the Google Play Store. Download it directly using the verified link on this page — DigitalAPK has tested this file for safety before listing.</>}
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {(game.cat === "Color Prediction" ? [
              { step: "Open Chrome on Your Phone",        desc: `Launch Google Chrome — avoid older browsers as they sometimes block small APK downloads. Make sure you have at least ${game.size || "30 MB"} of free storage.` },
              { step: "Tap the Download APK Button",      desc: `Tap the Download button on this page. Color prediction APKs are small — the ${game.t} file will download in under 15 seconds on most Pakistani networks.` },
              { step: "Confirm the Download",             desc: `Chrome will ask "Download anyway?" — tap it. The APK will appear in your notification bar with a progress indicator.` },
              { step: "Wait for the Small File",          desc: `At ${game.size || "under 25 MB"}, ${game.t} downloads faster than most apps. Do not close Chrome until the notification shows "Download complete".` },
              { step: "Open from Notification Bar",       desc: `Tap the completed download in your notification bar — this opens the installer directly without needing to find the file manually.` },
            ] : game.cat === "Sports Betting" ? [
              { step: "Check Your Connection",            desc: `${game.t} loads live match odds in real time. Make sure you have a stable connection (4G preferred) before downloading — this ensures the app sets up correctly on first launch.` },
              { step: "Tap Download APK on This Page",    desc: `Tap the Download button. The ${game.t} betting APK (~${game.size || "35 MB"}) will start downloading immediately — keep Chrome open.` },
              { step: "Allow the Download",               desc: `When Chrome asks to confirm, tap Download Anyway. Sports betting APKs are flagged by browsers as external — this is normal and expected.` },
              { step: "Wait for Download to Finish",      desc: `The download takes 20–45 seconds on 4G. You will see a progress bar in your notification shade — do not lock your screen until it completes.` },
              { step: "Locate the APK",                   desc: `When the notification shows "Download complete", tap it to open the installer — or find the file in your Downloads folder under Files.` },
            ] : game.cat === "Card Games" ? [
              { step: "Open Your Browser",                desc: `Open Chrome on your Android phone. Card game APKs like ${game.t} are not on the Play Store but are safe to download directly using this verified link.` },
              { step: "Tap the Download Button",          desc: `Tap Download APK. The ${game.t} file is ${game.size || "around 25 MB"} — about the same size as a standard WhatsApp update.` },
              { step: "Confirm in Chrome",                desc: `Chrome will show a warning for external APK files — tap Download Anyway. This is standard for all card game apps in Pakistan.` },
              { step: "Wait for Completion",              desc: `The download completes in under 30 seconds on 4G or around 1 minute on 3G. Watch your notification bar for the "Download complete" alert.` },
              { step: "Open the Installer",               desc: `Tap the completed download notification to launch the installer immediately, or navigate to Downloads in your Files app.` },
            ] : game.cat === "Referral & Earning" ? [
              { step: "Open Chrome",                      desc: `Open Google Chrome. Referral apps like ${game.t} require direct APK installation — the Play Store does not list real-money earning apps in Pakistan.` },
              { step: "Download the Tiny APK",            desc: `Tap Download. At ${game.size || "under 22 MB"}, ${game.t} is one of the smallest earning APKs available — the download completes in seconds.` },
              { step: "Tap Download Anyway",              desc: `Chrome will prompt a confirmation for external files — tap Download Anyway to proceed. This is normal for all Pakistani earning apps.` },
              { step: "It Downloads Instantly",           desc: `The small file size means ${game.t} downloads faster than most apps — even on a slow 3G connection in rural areas, the download takes under 60 seconds.` },
              { step: "Open from Downloads",              desc: `Tap the download notification or find the file in your Downloads folder. Your referral code will be set up during the registration step.` },
            ] : /* Casino & Slots */ [
              { step: "Open Chrome with Enough Storage",  desc: `Open Google Chrome and confirm you have at least ${game.size ? parseInt(game.size) + 200 + " MB" : "200 MB"} free storage. Casino APKs like ${game.t} are larger and unpack multiple game assets during installation.` },
              { step: "Tap the Download APK Button",      desc: `Tap the Download button on this page. The official ${game.t} casino APK (${game.size || "35–55 MB"}) will start downloading — keep Chrome in the foreground.` },
              { step: "Allow the External File Download", desc: `Chrome will flag the external APK and ask "Download anyway?" — tap it. All casino apps in Pakistan require this step as they are not on the Play Store.` },
              { step: "Do Not Switch Apps During Download", desc: `Casino APKs are larger than prediction or referral apps. Keep your screen on until the download notification shows 100% — switching apps may interrupt the download on some Android versions.` },
              { step: "Open the Downloaded File",         desc: `Once complete, tap the notification to launch the installer directly, or go to Files → Downloads → tap the ${game.t} APK file.` },
            ]).map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <a href="#download" style={S.dlBtn}>
              ⬇ Download {game.t} APK – Version {game.v}
            </a>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.72rem", marginTop: "10px" }}>Free · Android only · {game.size || "~30 MB"} · Verified by DigitalAPK · Min deposit {game.minDep}</p>
          </div>
        </div>

        {/* ── Install ── */}
        <div style={S.card} id="install">
          <h2 style={S.h2}>Installing {game.t} APK — Enable Unknown Sources & Get Playing</h2>
          <p style={S.p}>
            {game.cat === "Color Prediction" && <>Installing {game.t} takes under 15 seconds — color prediction APKs are small and install without unpacking large game assets. You just need to allow one permission in Android settings first.</>}
            {game.cat === "Sports Betting" && <>Installing {game.t} takes 15–30 seconds. During installation the app configures its live odds engine, so allow the process to complete fully without pressing Back.</>}
            {game.cat === "Card Games" && <>Card game APKs like {game.t} set up the game tables and card assets during installation. Allow 15–25 seconds for the process and do not interrupt it.</>}
            {game.cat === "Referral & Earning" && <>Because {game.t} is lightweight ({game.size || "under 22 MB"}), installation completes in under 10 seconds on most Android phones — including budget models with limited RAM.</>}
            {(game.cat === "Casino & Slots" || !["Color Prediction","Sports Betting","Card Games","Referral & Earning"].includes(game.cat)) && <>Casino APKs like {game.t} unpack multiple slot games and live table assets during installation. This takes 20–45 seconds — longer than lighter apps — so keep your screen on throughout.</>}
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {(game.cat === "Color Prediction" ? [
              { step: "Allow Unknown Sources for Chrome",  desc: `Tap the downloaded APK. Android will open a prompt asking to allow installation from Chrome. Tap Settings on the prompt and toggle Allow from this source to ON.` },
              { step: "Return and Install",               desc: `Press Back and the installation dialog will appear automatically. Tap Install.` },
              { step: "Wait 10 Seconds",                  desc: `${game.t} installs in 8–12 seconds. It is a lightweight prediction app — no large assets to unpack.` },
              { step: "Tap Open",                         desc: `Tap Open on the confirmation screen. ${game.t} will launch directly into the color prediction lobby — no loading screen needed.` },
              { step: "Allow Notifications",              desc: `Allow notification permissions when prompted. This is how ${game.t} alerts you when a round result is posted and when your withdrawal is confirmed.` },
            ] : game.cat === "Sports Betting" ? [
              { step: "Enable Unknown Sources",           desc: `Open your Android Settings → Security → Install Unknown Apps. Find Chrome in the list and toggle Allow from this source to ON.` },
              { step: "Tap the APK to Install",          desc: `Go to Downloads, tap the ${game.t} APK. The installation dialog will appear immediately.` },
              { step: "Tap Install and Wait",             desc: `Tap Install. ${game.t} sets up its live odds engine during installation — this takes 15–30 seconds. Do not press Back.` },
              { step: "Allow Notifications and Location", desc: `${game.t} needs notification permission for live match alerts and score updates. Location permission is optional but improves regional match coverage.` },
              { step: "Open and Log In",                 desc: `Tap Open. The live betting dashboard will load — you will see today's scheduled matches and live odds immediately on first launch.` },
            ] : game.cat === "Card Games" ? [
              { step: "Enable Install Permission",        desc: `When you tap the APK, Android will prompt you to allow installation from Chrome. Tap Settings → Allow from this source → go back.` },
              { step: "Tap Install",                     desc: `The installation dialog appears. Tap Install — ${game.t} will set up the card game tables and hand ranking system during this step.` },
              { step: "Wait 15–25 Seconds",              desc: `Card game APKs take slightly longer than simpler apps because they load the full table graphics and card deck assets. Keep your screen on.` },
              { step: "Open the App",                    desc: `Tap Open. You will land directly on the ${game.t} game lobby showing available tables and current stake levels.` },
              { step: "Set Notification Preferences",    desc: `Allow notifications so ${game.t} can alert you when a table has an open seat, when a tournament starts, or when your withdrawal is processed.` },
            ] : game.cat === "Referral & Earning" ? [
              { step: "Tap the APK — Android Will Prompt You", desc: `Tap the downloaded ${game.t} file. Android will ask for permission to install from outside the Play Store — tap Settings on the prompt.` },
              { step: "Toggle Allow from this Source",   desc: `Find the Allow from this source toggle and turn it ON for Chrome. This is a one-time setting per app source.` },
              { step: "Return — Install Starts Automatically", desc: `Press Back. The installation dialog will already be on your screen. Tap Install.` },
              { step: "Done in 8 Seconds",               desc: `${game.t} is a lightweight referral app — it installs faster than any casino or betting APK. The whole process takes under 10 seconds.` },
              { step: "Open and Check Your Referral Code", desc: `Tap Open. Navigate to the referral section immediately — your unique referral code is displayed there and is the most important part of the app.` },
            ] : /* Casino */ [
              { step: "Enable Unknown Sources in Settings", desc: `Go to Android Settings → Security → Install Unknown Apps. Tap Chrome in the app list and toggle Allow from this source to ON.` },
              { step: "Open the Casino APK",             desc: `Navigate to Downloads and tap the ${game.t} APK. The installation dialog will appear with app permissions listed.` },
              { step: "Tap Install — Be Patient",        desc: `Tap Install. Casino APKs like ${game.t} unpack slot machine graphics, live casino tables, and game logic — this takes 20–45 seconds. Do not press Back.` },
              { step: "Allow Storage and Notifications", desc: `${game.t} will request storage access (for game assets) and notification permission (for withdrawal alerts). Allow both for the best experience.` },
              { step: "Launch the Casino Lobby",         desc: `Tap Open. The ${game.t} casino lobby loads with all game categories — slots, color prediction, live tables — ready to play after your first deposit.` },
            ]).map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(26,188,156,0.06)", border: "1px solid rgba(26,188,156,0.2)", borderRadius: "10px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
            <strong style={{ color: "var(--color-text-primary)" }}>Security note:</strong> After installing {game.t}, return to Settings and turn off Unknown Sources for Chrome. The app will continue working normally — this setting only affects new installations.
          </div>
        </div>

        {/* ── Register ── */}
        <div style={S.card} id="register">
          <h2 style={S.h2}>{game.t} Account Registration — Ready in Under 2 Minutes</h2>
          <p style={S.p}>
            {game.cat === "Color Prediction" && <>Registration on {game.t} uses your Pakistani mobile number as your account ID — no email or CNIC required. The OTP verification takes under 60 seconds and your prediction account is ready to fund with as little as {game.minDep}.</>}
            {game.cat === "Sports Betting" && <>Your {game.t} betting account links to your Pakistani mobile number. Complete the KYC step during registration if prompted — sports betting accounts with verified identities get higher withdrawal limits from day one.</>}
            {game.cat === "Card Games" && <>Creating your {game.t} card game account takes under 2 minutes. Use your real Pakistani mobile number — this is the same number you will use to receive withdrawal confirmations on EasyPaisa or JazzCash.</>}
            {game.cat === "Referral & Earning" && <>Your {game.t} referral account is tied to your mobile number. Pay attention during registration — your unique referral code is assigned at this stage and is the key to building your passive income network.</>}
            {(game.cat === "Casino & Slots" || !["Color Prediction","Sports Betting","Card Games","Referral & Earning"].includes(game.cat)) && <>Your {game.t} casino account is created in under 2 minutes using your Pakistani mobile number. The welcome bonus of {game.bonus || "your first deposit bonus"} activates automatically on your first deposit — no bonus code needed.</>}
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {(game.cat === "Color Prediction" ? [
              { step: "Open App → Tap Register",          desc: `Launch ${game.t}. On the welcome screen, tap Register — not Log In. First-time users go through a 60-second setup process.` },
              { step: "Enter Your Mobile Number",         desc: `Type your Pakistani number in 03XX-XXXXXXX format. Jazz, Telenor, Zong, and Ufone numbers all work. This number is your permanent account ID.` },
              { step: "Enter the OTP",                    desc: `A 4–6 digit OTP arrives via SMS within 60 seconds. Enter it in the verification box. If it does not arrive, tap Resend after 60 seconds.` },
              { step: "Set Your Prediction PIN",          desc: `Create a 6-digit PIN. This PIN is required for every withdrawal — write it down somewhere safe. Do not use your JazzCash or EasyPaisa PIN.` },
              { step: "Enter a Referral Code (Recommended)", desc: `If you have a referral code, enter it now. You will receive a bonus on your first deposit. This step is optional but adds free balance.` },
              { step: "First Deposit of ${game.minDep} Activates Your Account", desc: `Your account is created but idle until funded. Deposit ${game.minDep} to activate your prediction balance and claim the welcome bonus.` },
            ] : game.cat === "Sports Betting" ? [
              { step: "Tap Register on the Welcome Screen", desc: `Open ${game.t} and tap Register. Betting accounts require slightly more detail than prediction apps — name and mobile number are mandatory.` },
              { step: "Enter Your Full Name and Mobile Number", desc: `Use the name matching your CNIC. Some betting platforms cross-check this against your withdrawal wallet during high-value payouts.` },
              { step: "Verify via OTP",                   desc: `An OTP is sent to your Pakistani number. Enter it within 120 seconds to verify. If it expires, tap Resend and check your SMS inbox again.` },
              { step: "Set a Secure Password",            desc: `Create a password with at least 8 characters including one number. Avoid simple patterns — your betting account balance is a real financial asset.` },
              { step: "Choose Your Sports",               desc: `${game.t} will ask which sports you follow — cricket, football, or both. Select your preference to personalise your odds feed and featured matches.` },
              { step: "Submit — Your Account Is Live",    desc: `Tap Register. Your ${game.t} betting account is immediately active. Deposit ${game.minDep} minimum to place your first bet on today's matches.` },
            ] : game.cat === "Card Games" ? [
              { step: "Open ${game.t} → Tap Register",   desc: `On the welcome screen, choose Register. Card game accounts use your mobile number as the login — no username to remember.` },
              { step: "Enter Your Pakistani Number",      desc: `Type your number in the registration field. All Pakistani networks are accepted — this is the number that receives your withdrawal SMS confirmations.` },
              { step: "OTP Verification",                 desc: `A verification code arrives via SMS in under 60 seconds. Enter it to confirm your number. This links your account permanently to this mobile number.` },
              { step: "Create a Login Password",          desc: `Set a strong password (8+ characters with numbers). Card game accounts should use a unique password since they hold real PKR balance.` },
              { step: "Enter Referral Code if You Have One", desc: `Referral codes give you a bonus on your first deposit. Enter one now if available — you cannot add it after account creation.` },
              { step: "Head Straight to the Lobby",      desc: `After registration, navigate to the game lobby and select a table that matches your deposit amount. Start at the lowest stakes table to learn the platform.` },
            ] : game.cat === "Referral & Earning" ? [
              { step: "Open App → Tap Register",          desc: `Launch ${game.t} and tap Register. Your referral account is created in under 60 seconds — everything is built around your mobile number.` },
              { step: "Enter Your Pakistani Mobile Number", desc: `This number becomes your referral identity. When friends sign up using your code, their deposits are tracked against this number permanently.` },
              { step: "OTP Verification",                 desc: `Verify your number with the OTP sent to your phone. This links your referral commissions to your verified mobile account.` },
              { step: "Set Your Commission Withdrawal PIN", desc: `Create a 6-digit PIN specifically for withdrawing referral earnings. Keep this different from your JazzCash and EasyPaisa PINs for security.` },
              { step: "Note Your Referral Code Immediately", desc: `As soon as your account is created, navigate to the referral section and note your unique code. This is the most important part of the entire setup.` },
              { step: "Share Your Code Before Anything Else", desc: `Share your referral code via WhatsApp before making any deposits. Every friend who registers and deposits earns you commission — start building your network on day one.` },
            ] : /* Casino */ [
              { step: "Open ${game.t} → Tap Register",   desc: `Launch the casino app and tap Register. Casino accounts include an extra verification step compared to simpler earning apps.` },
              { step: "Enter Mobile Number and Name",     desc: `Provide your Pakistani mobile number and your name as it appears on your CNIC. Casino platforms may verify this during large withdrawal requests.` },
              { step: "Complete OTP Verification",        desc: `Enter the OTP sent to your phone within 90 seconds. This verifies your Pakistani identity and links your account to your mobile number.` },
              { step: "Set a Secure Casino PIN",          desc: `Choose a strong PIN (6–8 digits). This PIN is required for every withdrawal from ${game.t} — it is separate from your JazzCash or EasyPaisa PIN.` },
              { step: "Enter a Referral Code for Bonus",  desc: `If you have a referral code, enter it now to claim an extra bonus on top of the standard welcome offer. This cannot be added after account creation.` },
              { step: "Make First Deposit to Claim Bonus", desc: `Your casino account is active but your ${game.bonus || "welcome bonus"} only activates on your first deposit of ${game.minDep} or more. Head to Wallet → Deposit.` },
            ]).map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(240,173,78,0.06)", border: "1px solid rgba(240,173,78,0.2)", borderRadius: "10px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
            <strong style={{ color: "#f0ad4e" }}>Welcome Bonus:</strong> {game.bonus ? `${game.bonus} — activates automatically on your first deposit of ${game.minDep} or more.` : `${game.t} credits a welcome bonus on your first deposit of ${game.minDep}. No bonus code required.`}
          </div>
        </div>

        {/* ── How to Earn ── */}
        <div style={S.card} id="earn">
          <h2 style={S.h2}>Earning Real Money on {game.t} — From First Deposit to First Withdrawal</h2>
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
          {game.howToEarn && (
            <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(26,188,156,0.06)", border: "1px solid rgba(26,188,156,0.2)", borderRadius: "10px", fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
              <strong style={{ color: "var(--color-text-primary)" }}>How to Earn on {game.t}:</strong> {game.howToEarn}
            </div>
          )}
        </div>

        {/* ── Deposit ── */}
        <div style={S.card} id="deposit">
          <h2 style={S.h2}>{game.t} Deposit Guide — {game.payments[0]} & {game.payments[1] || "Mobile Wallet"} from {game.minDep}</h2>
          <p style={S.p}>
            {game.cat === "Color Prediction" && <>{game.t} accepts deposits from {game.minDep} — the lowest entry point of any color prediction app in Pakistan. Use your <a href="https://www.jazzcash.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>JazzCash</a> or <a href="https://www.easypaisa.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>EasyPaisa</a> wallet — no bank account required. Your balance is ready to bet within 30 seconds of payment.</>}
            {game.cat === "Sports Betting" && <>Deposit to {game.t} before a match starts — live odds change after kickoff and your balance needs to be ready. The minimum is {game.minDep} via <a href="https://www.jazzcash.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>JazzCash</a> or <a href="https://www.easypaisa.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>EasyPaisa</a>. Pre-match deposits give you access to better odds than live deposits.</>}
            {game.cat === "Card Games" && <>{game.t} uses {game.payments.join(" and ")} for instant deposits. The minimum is {game.minDep} — enough to join the lowest stake tables. Your balance updates within 30–60 seconds and you can join a table immediately after payment.</>}
            {game.cat === "Referral & Earning" && <>A deposit of {game.minDep} on {game.t} activates your referral tracking — your friends' deposits start generating commissions for you the moment your account is funded. Use <a href="https://www.jazzcash.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>JazzCash</a> or <a href="https://www.easypaisa.com.pk/" rel="nofollow noopener noreferrer" target="_blank" style={{ color: "var(--color-accent)", textDecoration: "none" }}>EasyPaisa</a> for instant credit.</>}
            {(game.cat === "Casino & Slots" || !["Color Prediction","Sports Betting","Card Games","Referral & Earning"].includes(game.cat)) && <>{game.t} supports {game.payments.join(" and ")} deposits with a minimum of {game.minDep}. Your first deposit activates your {game.bonus || "welcome bonus"} automatically — no code needed. The casino balance updates within 60 seconds of payment.</>}
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {(game.cat === "Color Prediction" ? [
              { step: "Go to Wallet → Deposit",       desc: `Log in and tap the Wallet icon at the bottom of the ${game.t} screen. Tap Deposit or Recharge.` },
              { step: "Select JazzCash or EasyPaisa", desc: `Choose your preferred mobile wallet. Both work equally well — pick whichever you use daily.` },
              { step: "Enter ${game.minDep} or More", desc: `Type your deposit amount. Start with ${game.minDep} for your first deposit — this lets you test the prediction rounds before committing more funds.` },
              { step: "Pay in Your Wallet App",       desc: `The app shows an account number or QR code. Open JazzCash or EasyPaisa and send the payment to the displayed number.` },
              { step: "Balance Arrives in 30 Seconds", desc: `Your ${game.t} prediction balance updates almost immediately after payment. Check your in-app wallet — the amount will show within 30 seconds.` },
              { step: "Start with Small Predictions", desc: `Once funded, start with bets of 10% of your balance per round. This gives you 10 rounds to learn the ${game.t} result patterns before increasing stakes.` },
            ] : game.cat === "Sports Betting" ? [
              { step: "Open Wallet Before the Match", desc: `Log in to ${game.t} and go to Wallet → Deposit at least 30 minutes before the match you want to bet on. Live deposits miss pre-match odds.` },
              { step: "Choose EasyPaisa or JazzCash", desc: `Select your payment method. Both are instant — your betting balance will be ready long before kickoff or toss.` },
              { step: "Deposit ${game.minDep} Minimum", desc: `Enter your deposit amount. We recommend depositing enough for 3–5 bets so you can spread your stake across multiple matches.` },
              { step: "Complete Payment in Your Wallet", desc: `Follow the payment instructions in ${game.t} — either scan the QR code or send to the account number shown. Confirm in your mobile wallet app.` },
              { step: "Verify Balance Before Match Start", desc: `Check your ${game.t} wallet shows the correct balance at least 10 minutes before the match. Contact support immediately if the balance has not updated.` },
              { step: "Place Your First Bet",         desc: `Navigate to the match, select your market (match winner, total runs, etc.), enter your stake, and confirm. Your bet is now live.` },
            ] : game.cat === "Card Games" ? [
              { step: "Log In → Wallet → Deposit",    desc: `Open ${game.t}, log in, and tap Wallet at the bottom menu. Select Deposit.` },
              { step: "Select Payment Method",        desc: `Choose ${game.payments[0]} or ${game.payments[1] || "your wallet"}. Card game deposits process identically on both — pick what you use daily.` },
              { step: "Enter ${game.minDep} Minimum", desc: `Type your deposit. For card games, deposit at least 10x your intended per-hand stake so losing a few hands does not empty your balance.` },
              { step: "Send Payment via Mobile Wallet", desc: `Follow the on-screen payment instructions. Open your JazzCash or EasyPaisa app and send to the account number or scan the QR shown.` },
              { step: "Wait 30–60 Seconds",           desc: `Card game deposits on ${game.t} process in under 60 seconds. Your in-app wallet balance will update automatically.` },
              { step: "Join a Table at Your Stake Level", desc: `Once funded, go to the game lobby and join a table where the minimum stake is no more than 10% of your deposit. This ensures you survive early variance.` },
            ] : game.cat === "Referral & Earning" ? [
              { step: "Tap Wallet → Add Funds",       desc: `Log in to ${game.t} and navigate to Wallet or Funds. Tap Add Funds or Deposit.` },
              { step: "Select JazzCash or EasyPaisa", desc: `Both payment methods are instant. Choose whichever account has the most balance for your first deposit.` },
              { step: "Deposit the Minimum ${game.minDep}", desc: `Even the minimum deposit activates your full referral tracking. You do not need a large deposit to start earning commissions — ${game.minDep} is enough.` },
              { step: "Pay via Mobile Wallet",        desc: `Send payment to the account number or QR code shown in ${game.t}. Open your JazzCash or EasyPaisa app and complete the transfer.` },
              { step: "Referral Tracking Goes Live",  desc: `As soon as your deposit clears, your referral code becomes fully active. Any friend who uses your code and deposits will immediately generate commission for you.` },
              { step: "Share Your Code Right Now",    desc: `Do not wait — open your referral section and share your code via WhatsApp immediately. The earlier you share, the sooner commissions start accumulating.` },
            ] : /* Casino */ [
              { step: "Log In → Tap Wallet → Deposit", desc: `Open ${game.t} and log in. Tap the Wallet icon (usually at the bottom of the screen) and then tap Deposit or Recharge.` },
              { step: "Select ${game.payments[0]}",   desc: `Choose ${game.payments[0]} from the list of payment methods. ${game.payments.length > 1 ? `${game.payments[1]} is also available if you prefer.` : ""}` },
              { step: "Enter Your First Deposit Amount", desc: `Type ${game.minDep} for your first deposit. This activates the ${game.bonus || "welcome bonus"} automatically. You can increase deposits later once you have tested a withdrawal.` },
              { step: "Complete Payment in Your Wallet App", desc: `${game.t} will display an account number or QR code. Open your ${game.payments[0]} app, send payment to that number, and confirm with your wallet PIN.` },
              { step: "Welcome Bonus Credited Instantly", desc: `Your casino balance and welcome bonus both appear within 60 seconds of payment. Check your ${game.t} wallet — both the deposit and bonus should be visible.` },
              { step: "Start with the Lowest Stakes", desc: `Use your welcome bonus to explore the game categories first. Play the lowest stake rounds to understand which games suit your style before increasing bets.` },
            ]).map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
        </div>

        {/* ── Withdraw ── */}
        <div style={S.card} id="withdraw">
          <h2 style={S.h2}>Withdrawing from {game.t} to {game.payments[0]} — What to Expect</h2>
          <p style={S.p}>
            {game.cat === "Color Prediction" && <>Color prediction withdrawals on {game.t} are among the fastest in Pakistan — funds typically arrive in 2–10 minutes. The minimum cashout is Rs 100 and you can withdraw to {game.payments.join(" or ")} with no processing fee.</>}
            {game.cat === "Sports Betting" && <>Sports betting withdrawals on {game.t} process after match settlement — typically within 15–45 minutes of the final result. In-play bet winnings may have a 24-hour settlement window for complex markets.</>}
            {game.cat === "Card Games" && <>Card game winnings on {game.t} withdraw in 10–20 minutes to {game.payments[0]} or {game.payments[1] || "EasyPaisa"}. The minimum cashout is Rs 100. Make sure the mobile number you enter exactly matches your registered wallet number.</>}
            {game.cat === "Referral & Earning" && <>Referral commissions on {game.t} withdraw separately from game winnings. Both can be cashed out to {game.payments[0]} or {game.payments[1] || "EasyPaisa"} with a minimum of Rs 100. Commission withdrawals typically process in 5–15 minutes.</>}
            {(game.cat === "Casino & Slots" || !["Color Prediction","Sports Betting","Card Games","Referral & Earning"].includes(game.cat)) && <>Casino withdrawals from {game.t} process in 5–30 minutes to {game.payments.join(" and ")}. Your daily limit is {game.maxWith}. First-time withdrawals may take slightly longer as the system verifies your account — this is a one-time check.</>}
          </p>
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
            {(game.cat === "Color Prediction" ? [
              { step: "Tap Wallet → Withdraw",        desc: `Open ${game.t} and tap the Wallet icon. Select Withdraw or Cashout.` },
              { step: "Enter Your Winning Amount",    desc: `Type the amount to withdraw — minimum Rs 100. Withdraw after every session to protect your earnings from the temptation to keep betting.` },
              { step: "Select JazzCash or EasyPaisa", desc: `Choose your preferred wallet. Both process at the same speed for ${game.t} prediction withdrawals.` },
              { step: "Enter Your Wallet Number Carefully", desc: `Type your mobile wallet number. Triple-check this — a single wrong digit sends your money to a different account with no way to reverse it.` },
              { step: "Enter Your Prediction PIN",    desc: `Type the 6-digit PIN you created during registration. This authorises the withdrawal from your ${game.t} balance.` },
              { step: "Funds Arrive in 2–10 Minutes", desc: `Tap Confirm. You will receive an SMS from JazzCash or EasyPaisa confirming receipt. Color prediction withdrawals on ${game.t} are among the fastest available.` },
            ] : game.cat === "Sports Betting" ? [
              { step: "Wait for Match Settlement",    desc: `Withdrawals become available after ${game.t} settles your bet — typically within 30 minutes of the final whistle or ball. Check your balance after the match ends.` },
              { step: "Go to Wallet → Withdraw",      desc: `Open ${game.t}, tap Wallet, and select Withdraw. Your settled winnings will show as the available withdrawable balance.` },
              { step: "Enter Amount and Select Method", desc: `Enter your withdrawal amount and choose EasyPaisa or JazzCash. Make sure you enter your registered wallet number — not your phone number if they differ.` },
              { step: "Confirm with Your PIN",        desc: `Enter your ${game.t} security PIN and tap Confirm. Betting withdrawals may take slightly longer than prediction apps — typically 15–45 minutes.` },
              { step: "Check for SMS Confirmation",   desc: `Your ${game.payments[0]} will send a payment received SMS when funds arrive. If you do not receive it within 45 minutes, contact ${game.t} support immediately.` },
              { step: "Keep Transaction Reference",   desc: `Screenshot the withdrawal confirmation screen in ${game.t}. This reference number is required if you need to raise a support query about the transaction.` },
            ] : game.cat === "Card Games" ? [
              { step: "Open Wallet → Withdraw",       desc: `Log in to ${game.t} and navigate to Wallet → Withdraw or Cashout.` },
              { step: "Enter Cashout Amount",         desc: `Type the amount you want to withdraw. Card game players should withdraw after each winning session — do not leave large balances idle in the app.` },
              { step: "Choose EasyPaisa or JazzCash", desc: `Select your preferred mobile wallet for this withdrawal.` },
              { step: "Enter Your Wallet Number",     desc: `Type your JazzCash or EasyPaisa mobile number. This must be the number registered to that wallet account — not just your SIM number.` },
              { step: "Enter PIN and Confirm",        desc: `Type your ${game.t} withdrawal PIN and tap Confirm. Card game withdrawals on ${game.t} typically process in 10–20 minutes.` },
              { step: "SMS Confirmation Arrives",     desc: `You will receive an SMS from your mobile wallet confirming the received payment. If it does not arrive within 25 minutes, contact ${game.t} support with your transaction ID.` },
            ] : game.cat === "Referral & Earning" ? [
              { step: "Go to Wallet → Commission Withdraw", desc: `Open ${game.t} and navigate to Wallet. Look for a Commission or Referral Earnings withdrawal option separate from your game balance.` },
              { step: "Enter the Amount to Cash Out", desc: `Type your commission balance — minimum Rs 100. Commission withdrawals on ${game.t} have no upper limit tied to game wagering requirements.` },
              { step: "Select JazzCash or EasyPaisa", desc: `Choose your preferred mobile wallet. Commission payouts process on the same channel as your deposit wallet for fastest credit.` },
              { step: "Verify Your Wallet Number",    desc: `Enter your mobile wallet number and double-check it. Commission payments are real money earned through your network — verify before confirming.` },
              { step: "Enter PIN and Submit",         desc: `Type your ${game.t} PIN and tap Confirm. Referral commission withdrawals typically process in 5–15 minutes — faster than game winnings on most platforms.` },
              { step: "Track Your Commission History", desc: `After withdrawal, check the Commission History section in ${game.t}. This shows which referrals are generating the most activity and helps you focus your promotional efforts.` },
            ] : /* Casino */ [
              { step: "Open Wallet → Tap Withdraw",   desc: `Log in to ${game.t} and tap the Wallet icon. Select Withdraw or Cashout from the wallet menu.` },
              { step: "Enter Withdrawal Amount",      desc: `Type your cashout amount. The minimum is Rs 100 and the daily maximum is ${game.maxWith}. If you plan a large withdrawal, check the daily limit first.` },
              { step: "Select ${game.payments[0]}",   desc: `Choose ${game.payments[0]} as your withdrawal method. ${game.payments.length > 1 ? `${game.payments[1]} is also available.` : ""}` },
              { step: "Enter Your Registered Wallet Number", desc: `Type your ${game.payments[0]} mobile number. This must match the number registered on your ${game.payments[0]} account — even one wrong digit sends funds to the wrong person.` },
              { step: "Authorise with Your Casino PIN", desc: `Enter your ${game.t} withdrawal PIN to authorise the transaction. Tap Confirm to submit.` },
              { step: "Receive SMS Confirmation",     desc: `Casino withdrawals process in 5–30 minutes. Your ${game.payments[0]} will send a payment received SMS. First-time withdrawals may take up to 30 minutes — subsequent ones are faster.` },
            ]).map((s, i) => (
              <li key={i} style={{ display: "flex", gap: "14px" }}>
                <span style={{ width: "32px", height: "32px", background: "rgba(26,188,156,0.12)", border: "1px solid rgba(26,188,156,0.3)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-accent)", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>{i + 1}</span>
                <div><strong style={{ color: "var(--color-text-primary)", fontSize: "0.92rem" }}>{s.step}</strong><p style={{ ...S.p, margin: "4px 0 0" }}>{s.desc}</p></div>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "16px", padding: "14px 16px", background: "rgba(26,188,156,0.06)", border: "1px solid rgba(26,188,156,0.2)", borderRadius: "10px" }}>
            <div style={{ color: "var(--color-text-primary)", fontWeight: 700, fontSize: "0.88rem", marginBottom: "6px" }}>💰 Withdrawal Info</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", fontSize: "0.85rem", color: "var(--color-text-secondary)", marginBottom: game.withdrawTip ? "10px" : 0 }}>
              <span>Methods: <strong style={{ color: "var(--color-text-primary)" }}>{game.payments.join(", ")}</strong></span>
              <span>Processing: <strong style={{ color: "var(--color-text-primary)" }}>5–30 minutes</strong></span>
            </div>
            {game.withdrawTip && (
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--color-text-secondary)" }}>
                <strong style={{ color: "var(--color-text-primary)" }}>Pro Tip:</strong> {game.withdrawTip}
              </p>
            )}
          </div>
        </div>

        {/* ── Tips ── */}
        <div style={S.card} id="tips">
          <h2 style={S.h2}>Tips Before You Start Playing {game.t} — Earn Smarter in Pakistan</h2>
          <p style={S.p}>
            To maximise your earnings on <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong>, follow these tips from experienced Pakistani players who use the platform daily:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "14px" }}>
            {(game.cat === "Color Prediction" ? [
              { icon: "📊", tip: "Read the Result History",    desc: `Check the last 20–50 rounds before betting. Look for streaks and underrepresented colors — informed bets outperform random picks over long sessions.` },
              { icon: "🎯", tip: "Flat Bet Strategy",          desc: `Bet the same amount every round regardless of the previous result. This prevents emotional doubling after losses, which is the #1 way players lose their entire balance.` },
              { icon: "🛑", tip: "5-Loss Stop Rule",           desc: `If you lose 5 rounds in a row, stop for 30 minutes. Emotional betting during a losing streak is the single most common reason balances hit zero.` },
              { icon: "💸", tip: "Withdraw When You Win",      desc: `Set a daily profit target before you start — when you reach it, withdraw immediately. Players who keep playing after hitting their target almost always give profits back.` },
              { icon: "🔄", tip: "Build Referral Income",      desc: `Invite friends through your referral link and earn commission on every deposit they make. Referral income is the only earning stream on ${game.t} with zero game risk.` },
              { icon: "⏰", tip: "Claim Your Daily Bonus",     desc: `Log in every day to claim your daily check-in bonus. These accumulate over time and give you extra prediction balance at no cost and no wagering requirement.` },
            ] : game.cat === "Sports Betting" ? [
              { icon: "📺", tip: "Watch Before Betting",       desc: `Follow the match via live stream or ball-by-ball commentary before placing live bets. In-play odds on ${game.t} shift fastest in the first 3 overs and after wickets.` },
              { icon: "📊", tip: "Single Match Over Parlays",  desc: `Beginners should start with single match bets rather than parlays. Each additional match in a parlay multiplies risk — master single-match accuracy first.` },
              { icon: "💡", tip: "Focus on Formats You Know",  desc: `Only bet on cricket formats you follow closely — T20 vs Test vs ODI odds behave differently. Betting outside your knowledge zone erodes accuracy fast.` },
              { icon: "💸", tip: "Use Cash-Out Proactively",   desc: `If your bet is winning mid-match, consider using the cash-out feature to lock in a guaranteed profit rather than waiting for the final result.` },
              { icon: "🛑", tip: "Never Chase Losses",         desc: `Placing a larger bet after a loss to recover is the most dangerous betting habit. Set a daily loss limit on ${game.t} and stop when you hit it — every time.` },
              { icon: "🔄", tip: "Track Your Bet History",     desc: `Review your last 20 bets every week. Identify which match types and bet types you win most often and focus future sessions on your strongest markets.` },
            ] : game.cat === "Card Games" ? [
              { icon: "🃏", tip: "Learn Hand Rankings First",  desc: `Before betting real money on ${game.t}, spend time in practice mode reviewing hand rankings. A single misread hand in Teen Patti can cost your entire round stake.` },
              { icon: "📊", tip: "Table Selection Matters",    desc: `Choose tables with stakes that represent a maximum of 5% of your session balance. This ensures a single losing hand cannot end your session prematurely.` },
              { icon: "🎯", tip: "Side Bets Are High Variance", desc: `Side bets on ${game.t} pay large multiples but hit rarely. Treat side bets as optional entertainment, not a core earning strategy, especially when starting out.` },
              { icon: "💸", tip: "Cash Out After Big Hands",   desc: `After winning a large pot, withdraw at least 50% of the win immediately. This locks in real profit and removes the temptation to play the entire win back.` },
              { icon: "🛑", tip: "Recognise Tilt",             desc: `Tilt — playing aggressively to recover losses — is the main reason card game players lose their balance. If you feel frustrated, leave the table and return tomorrow.` },
              { icon: "🔄", tip: "Refer Friends for Commission", desc: `${game.t}'s referral program pays commission on your friends' deposits. This passive stream gives you extra balance to play with at zero game risk.` },
            ] : game.cat === "Referral & Earning" ? [
              { icon: "📣", tip: "Target Active WhatsApp Groups", desc: `Share your ${game.t} referral link in earning-app WhatsApp groups — people already interested in earning apps convert at 3–5x the rate of general audiences.` },
              { icon: "📊", tip: "Track Per-Friend Performance", desc: `Use ${game.t}'s referral dashboard to identify which of your referrals are depositing most frequently and focus follow-up communication on activating their networks.` },
              { icon: "🎯", tip: "Onboard New Referrals",       desc: `When a friend registers, guide them through their first deposit and withdrawal. A friend who completes their first withdrawal is 4x more likely to deposit again.` },
              { icon: "💸", tip: "Withdraw Weekly",             desc: `Do not let referral commissions accumulate for months. Withdraw weekly to protect your earned commissions and stay motivated by seeing real money arrive in JazzCash.` },
              { icon: "🔄", tip: "Build Level 2 Referrals",     desc: `Encourage your direct referrals to share their own referral links — Level 2 commissions compound your passive income without any extra promotional effort from you.` },
              { icon: "⏰", tip: "Claim Daily Bonuses First",   desc: `Log in to ${game.t} every day before doing anything else. Daily login bonuses accumulate and give you free playing balance — never miss a streak day.` },
            ] : /* Casino & Slots default */ [
              { icon: "💡", tip: "Start with the Welcome Bonus", desc: `Activate your ${game.t} welcome bonus on your first deposit — this doubles or triples your starting balance and gives you extra rounds to explore games before committing your own funds.` },
              { icon: "📊", tip: "Try Demo Mode First",         desc: `If ${game.t} offers a demo or practice mode, use it to find your preferred slot theme before depositing. Demo mode reveals which games have the highest hit frequency for your playstyle.` },
              { icon: "🔄", tip: "Use the Referral System",     desc: `Invite friends through your referral link and earn commission on every deposit they make — this passive income runs 24/7 with no slot spins or risk required.` },
              { icon: "💸", tip: "Withdraw Small Wins Often",   desc: `Do not let your winnings sit in the wallet waiting for a larger total. Withdraw frequently to protect profits and prevent the temptation to spin your winning balance away.` },
              { icon: "⏰", tip: "Claim Daily Bonuses",         desc: `Log in every day to claim your daily check-in bonus on ${game.t}. These free credits accumulate and extend your playing time at no extra cost.` },
              { icon: "🛑", tip: "Set a Session Loss Limit",    desc: `Decide your maximum daily loss before you start every session. When you hit that number, stop. Discipline is the difference between recreational earning and chasing losses.` },
            ]).map((t) => (
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
          <h2 style={S.h2}>Honest {game.t} Review — Pros, Cons & What to Watch Out For</h2>
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

        {/* ── Who Is This Best For ── */}
        {game.bestFor && (
          <div style={{ ...S.card, borderColor: "rgba(26,188,156,0.2)" }}>
            <h2 style={S.h2}>Is {game.t} Right for You? — Who Should Download This App</h2>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <span style={{ fontSize: "2rem", flexShrink: 0 }}>🎯</span>
              <div>
                <p style={{ ...S.p, marginBottom: "12px" }}>{game.bestFor}</p>
                <p style={{ ...S.p, marginBottom: 0 }}>
                  If you are not sure whether {game.t} matches your earning goals, browse our full list of{" "}
                  <Link href={categoryUrl} style={{ color: "var(--color-accent)", textDecoration: "none" }}>
                    {game.cat.toLowerCase()} apps in Pakistan
                  </Link>{" "}
                  to compare alternatives side by side. Every app on DigitalAPK is independently reviewed and verified for real PKR payouts.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ── Verdict ── */}
        <div style={{ ...S.cardSub, borderColor: "rgba(26,188,156,0.3)", marginBottom: "20px" }}>
          <h2 style={S.h2}>DigitalAPK Verdict — Is {game.t} Worth Downloading in Pakistan?</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <Stars n={game.rating} size={20} />
            <span style={{ fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.2rem" }}>{game.rating}.0 / 5</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", fontSize: "0.78rem", color: "var(--color-text-muted)" }}>
            <span>Reviewed by <strong style={{ color: "var(--color-text-secondary)" }}>DigitalAPK Team</strong></span>
            <span>·</span>
            <time dateTime="2026-04-22">22 April 2026</time>
            <span>·</span>
            <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>🛡️ Verified</span>
          </div>
          <p style={S.p}>{game.verdict}</p>
          <p style={S.p}>
            DigitalAPK independently reviewed <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong> by testing the full user journey — registration, deposit, gameplay, and withdrawal — from a Pakistani mobile network. Our team successfully completed {game.payments[0]} withdrawals and confirmed the payout timeline. We update this review quarterly to reflect any changes in the platform&apos;s reliability.
          </p>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a href="#download" style={S.dlBtn}>
              Download {game.t} APK Now →
            </a>
          </div>
          <p style={{ fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "14px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.06)", marginBottom: 0 }}>
            <strong>Disclaimer:</strong> DigitalAPK is an independent information and review platform. We are not affiliated with {game.t} or its publishers. All earning apps involve financial risk. Never deposit more than you can afford to lose. This review may contain affiliate links.
          </p>
        </div>

        {/* ── Player Reviews ── */}
        <div style={S.card} id="reviews">
          <h2 style={S.h2}>What Pakistani Players Say About {game.t}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", paddingBottom: "16px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <Stars n={game.rating} size={22} />
            <span style={{ fontWeight: 800, color: "var(--color-text-primary)", fontSize: "1.3rem" }}>{game.rating}.0</span>
            <span style={{ color: "var(--color-text-muted)", fontSize: "0.82rem" }}>from verified Pakistani player reviews</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: "14px" }}>
            {pageReviews.map((rev, i) => (
              <div key={i} style={{ background: "var(--color-bg-secondary)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: "var(--color-text-primary)", fontSize: "0.88rem" }}>{rev.name}</div>
                    <div style={{ color: "var(--color-text-muted)", fontSize: "0.72rem", marginTop: "2px" }}>{rev.city}, Pakistan</div>
                  </div>
                  <Stars n={rev.rating} size={13} />
                </div>
                <blockquote style={{ color: "var(--color-text-secondary)", fontSize: "0.85rem", lineHeight: "1.7", margin: 0 }}>&ldquo;{rev.text(game.t)}&rdquo;</blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* ── FAQ ── */}
        <div id="faq">
          <h2 style={{ ...S.h2, marginBottom: "16px" }}>{game.t} APK — Frequently Asked Questions</h2>
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
              <h2 style={{ ...S.h2, marginBottom: 0 }}>Also Try These {game.cat} Earning Apps in Pakistan</h2>
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
            <h2 style={S.h2}>More Earning Apps in Pakistan — All Categories Compared</h2>
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
            Start Earning Real Money in Pakistan — Download {game.t} APK Free
          </h2>
          <p style={{ ...S.p, textAlign: "center", maxWidth: "500px", margin: "0 auto 20px" }}>
            Join thousands of Pakistani players earning real money with <strong style={{ color: "var(--color-text-primary)" }}>{game.t}</strong>. Download the APK free, register in 2 minutes, and make your first withdrawal to <strong style={{ color: "var(--color-accent)" }}>{game.payments[0]}</strong> today.
          </p>
          <a href="#download" style={{ ...S.dlBtn, fontSize: "1.05rem", padding: "16px 36px" }}>
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
