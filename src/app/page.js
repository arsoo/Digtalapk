import Link from "next/link";
import ReviewSection from "@/components/ReviewSection";
import GamePageCard from "@/components/GamePageCard";
import { TOP_GAMES } from "@/lib/games";

export const metadata = {
  title: "Earning Games & Betting Apps Pakistan 2026 – Real Money APK",
  description: "Download 40+ real money earning games in Pakistan. Casino, sports betting & color prediction APKs. EasyPaisa & JazzCash withdrawal. Free APK 2026.",
  keywords: [
    "earning games Pakistan 2026",
    "real money earning apps Pakistan",
    "online earning",
    "game money earning app",
    "money earn game",
    "real money earning games",
    "real earning app in pakistan",
    "money earning games app download",
    "casino APK download Pakistan",
    "color prediction games Pakistan",
    "EasyPaisa withdrawal games",
    "JazzCash earning apps",
    "APK download Pakistan",
    "online earning apps Pakistan",
    "sports betting APK Pakistan",
    "betting app in pakistan",
    "top 10 betting app in pakistan",
    "best betting app in pakistan",
    "777 game download",
    "referral earning apps Pakistan",
    "card games earning app Pakistan",
    "Teen Patti real money Pakistan",
    "cricket betting APK Pakistan",
    "online casino Pakistan 2026",
    "best earning app Pakistan",
    "free APK games Pakistan",
    "real paise kamane wali game",
    "JazzCash se paise kamao",
    "EasyPaisa se paise kamao",
    "verified earning apps Pakistan",
  ],
  alternates: { canonical: "https://digitalapk.com/" },
  openGraph: {
    title: "Best Real Money Earning Apps & APK Games Pakistan 2026",
    description: "Pakistan's most trusted source for 40+ verified earning games and casino APK downloads. Real payouts to EasyPaisa & JazzCash. Tested by DigitalAPK.",
    url: "https://digitalapk.com/",
    siteName: "DigitalAPK",
    type: "website",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "DigitalAPK",
  "url": "https://digitalapk.com",
  "description": "Pakistan's most trusted platform for verified earning games and real money app APKs. 40+ casino, color prediction, sports betting, and referral earning apps with EasyPaisa & JazzCash support.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://digitalapk.com/?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "DigitalAPK",
  "url": "https://digitalapk.com",
  "description": "Independent review and download platform for earning game APKs in Pakistan. We verify real money payouts via EasyPaisa and JazzCash.",
  "areaServed": { "@type": "Country", "name": "Pakistan" },
  "knowsAbout": ["Earning Apps", "Casino APK Games", "Color Prediction Apps", "Sports Betting Pakistan", "EasyPaisa Withdrawal", "JazzCash Earning"],
};

const CATEGORIES = [
  {
    key: "Casino & Slots",
    href: "/casino-games-pakistan",
    icon: "🎰",
    label: "Casino & Slots",
    desc: "Pakistan's best casino APK games for real money earning in 2026. These verified casino apps support instant EasyPaisa and JazzCash withdrawals with minimum deposits from Rs 100. Each app is independently tested by DigitalAPK for safe payouts.",
    seoDesc: "Browse the top casino & slot APK games in Pakistan. All platforms are independently verified for real withdrawals to EasyPaisa and JazzCash. Features include live casino, slots, and daily bonus rewards.",
  },
  {
    key: "Color Prediction",
    href: "/color-prediction-games-pakistan",
    icon: "🎯",
    label: "Color Prediction",
    desc: "Top-rated color prediction earning games in Pakistan 2026. Predict the next outcome and multiply your stake. These apps offer transparent result history, instant payouts, and referral income — all verified by DigitalAPK.",
    seoDesc: "Color prediction APK games are the most popular earning apps in Pakistan. Predict red, green, or violet to win real money. Instant JazzCash and EasyPaisa withdrawals. Minimum deposit from Rs 100.",
  },
  {
    key: "Sports Betting",
    href: "/sports-betting-apps-pakistan",
    icon: "🏏",
    label: "Sports Betting",
    desc: "Genuine sports betting APKs for cricket and football fans in Pakistan. Place bets on PSL, international cricket, and football leagues. Real-time odds with same-day EasyPaisa and JazzCash withdrawals.",
    seoDesc: "Best sports betting APK apps for Pakistani users in 2026. Bet on cricket, football, and kabaddi with real money. Fast withdrawals to mobile wallets. All apps verified and tested by DigitalAPK.",
  },
  {
    key: "Referral & Earning",
    href: "/referral-earning-apps-pakistan",
    icon: "💸",
    label: "Referral & Earning",
    desc: "Earn passive income in Pakistan by inviting friends to these verified referral apps. Multi-level commission systems let you earn from your entire network. No deposit required to start — just share your referral link.",
    seoDesc: "Referral earning apps in Pakistan that pay real money through EasyPaisa and JazzCash. Build a team of players and earn commission on every deposit they make. Best passive income apps for Pakistanis 2026.",
  },
  {
    key: "Card Games",
    href: "/card-games-pakistan",
    icon: "🃏",
    label: "Card Games",
    desc: "Real money card games including Teen Patti, Rummy, and Andar Bahar — now available as APK downloads in Pakistan. Compete in multiplayer tables and withdraw your winnings directly to your mobile wallet.",
    seoDesc: "Teen Patti and other card game APKs for earning real money in Pakistan. Play against other players and win cash prizes. EasyPaisa and JazzCash withdrawals supported. Download verified APKs only from DigitalAPK.",
  },
];

const heroFeatured = TOP_GAMES.filter((g) => g.rating >= 4).slice(0, 5);
const trendingGames = TOP_GAMES.filter((g) => g.rating === 5 || g.slug === '588win' || g.slug === 'done999').slice(0, 10);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      
      {/* ─── 1. HERO SECTION ──────────────────────────── */}
      <section
        className="relative pt-24 pb-20 px-6 overflow-hidden bg-[#0c1219]"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%]" style={{background:"radial-gradient(circle,rgba(26,188,156,0.15) 0%,transparent 70%)"}} />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%]" style={{background:"radial-gradient(circle,rgba(26,188,156,0.10) 0%,transparent 70%)"}} />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <div className="max-w-[860px]">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-8">
              ✅ 40+ Verified Real Money Earning Apps – Pakistan 2026
            </span>

            <h1
              id="hero-heading"
              className="font-outfit font-black text-text-primary leading-[1.05] tracking-tight mb-6 text-[clamp(2.4rem,6.5vw,4.2rem)]"
            >
              Best <span className="text-accent">Earning Games</span> in Pakistan – Download Real Money APK Apps
            </h1>

            <p className="text-text-secondary leading-relaxed mb-5 text-[clamp(1rem,2.2vw,1.2rem)] max-w-[700px] mx-auto">
              Pakistan&apos;s most trusted directory of <strong className="text-text-primary">real money earning apps</strong>. Download verified <strong className="text-text-primary">APK games in Pakistan</strong> with instant <strong className="text-accent">EasyPaisa</strong> and <strong className="text-accent">JazzCash</strong> withdrawal support — all manually tested by our team.
            </p>

            <p className="text-text-muted text-sm leading-relaxed mb-10 max-w-[620px] mx-auto">
              Casino slots, color prediction, sports betting, referral earning, and card games — one platform for every Pakistani player looking for <strong className="text-text-secondary">legitimate earning games</strong> in 2026.
            </p>

            {/* Trust stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
              {[
                { label: "40+", sub: "Verified Apps" },
                { label: "5 Min", sub: "Avg. Withdrawal" },
                { label: "Fast", sub: "EasyPaisa/JazzCash" },
                { label: "2026", sub: "Updated" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-0.5 px-4 py-3 rounded-xl bg-bg-card border border-border-subtle min-w-[80px]">
                  <span className="font-outfit font-black text-accent text-xl leading-none">{s.label}</span>
                  <span className="text-text-muted text-[0.68rem] uppercase tracking-wider">{s.sub}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5 justify-center mb-16">
              <Link
                href="#directory"
                className="bg-accent hover:bg-accent-hover text-white font-black py-4 px-10 rounded-xl transition-all shadow-[0_10px_40px_-10px_rgba(26,188,156,0.5)] hover:-translate-y-1"
              >
                ⬇ Download Earning APKs – Free
              </Link>
              <Link
                href="/earning-games-pakistan"
                className="bg-bg-secondary border border-border-subtle text-text-primary font-bold py-4 px-10 rounded-xl transition-all hover:bg-bg-card"
                title="Best earning games in Pakistan 2026"
              >
                Browse All Categories →
              </Link>
            </div>
          </div>

          {/* ─── 2. TRUSTED PLATFORMS (Internal Linking) ──── */}
          <div className="w-full max-w-[1200px] mt-4">
            <p className="font-outfit font-bold text-text-muted uppercase tracking-[0.12em] text-[0.72rem] mb-6 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-border-subtle" />
              Top-Rated APK Earning Platforms in Pakistan – Click to Download
              <span className="h-px w-8 bg-border-subtle" />
            </p>
            <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
              {heroFeatured.map((game) => (
                <GamePageCard key={game.slug} game={game} size="small" />
              ))}
            </div>
            <p className="text-text-muted text-[0.65rem] mt-5 italic text-center">
              All platforms independently verified for <strong className="text-text-muted not-italic">real money payouts</strong> in Pakistan. Download APK → Register → Earn → Withdraw.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY NAVIGATION ──────────────────────── */}
      <nav className="sticky top-[60px] z-[90] bg-bg-primary border-b border-white/5 py-1">
        <div className="max-w-[1400px] mx-auto px-6 overflow-x-auto scrollbar-hide">
          <div className="flex justify-center gap-8 min-w-max py-3">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.key}
                href={`#${cat.key.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="flex items-center gap-2 group text-[0.82rem] font-bold text-text-muted hover:text-accent transition-all"
                title={`${cat.label} APK Games Pakistan`}
              >
                <span className="text-lg opacity-70 group-hover:opacity-100">{cat.icon}</span>
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto px-6 py-12">
        
        {/* ─── 3. CATEGORY SECTIONS ─────────────────────── */}
        {CATEGORIES.map((cat) => {
          const games = TOP_GAMES.filter((g) => g.cat === cat.key);
          if (!games.length) return null;
          const sectionId = cat.key.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");
          const topGame = [...games].sort((a, b) => b.rating - a.rating)[0];

          return (
            <section
              key={cat.key}
              id={sectionId}
              className="py-20 first:pt-8 scroll-mt-[120px]"
              aria-labelledby={`${sectionId}-heading`}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-white/5 pb-8 gap-6">
                <div className="max-w-[720px]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <h2 id={`${sectionId}-heading`} className="font-outfit font-black text-text-primary text-3xl tracking-tight">
                      {cat.label} APK Games Pakistan 2026
                    </h2>
                  </div>
                  <p className="text-text-muted text-base leading-relaxed">{cat.desc}</p>
                  {cat.seoDesc && (
                    <p className="text-text-muted/60 text-sm leading-relaxed mt-2">{cat.seoDesc}</p>
                  )}
                </div>
                <div className="flex flex-col gap-2 shrink-0">
                  {cat.href && (
                    <Link
                      href={cat.href}
                      className="flex items-center gap-2 text-accent text-sm font-black uppercase tracking-widest whitespace-nowrap hover:translate-x-1 transition-transform"
                      title={`Best ${cat.label} APK Games Pakistan 2026`}
                    >
                      View All {cat.label} Apps →
                    </Link>
                  )}
                  {topGame && (
                    <Link
                      href={`/${topGame.slug}`}
                      className="flex items-center gap-2 text-text-muted text-xs font-bold whitespace-nowrap hover:text-accent hover:translate-x-1 transition-all"
                      title={`Download ${topGame.t} APK – Top ${cat.label} App Pakistan`}
                    >
                      Top Pick: {topGame.t} →
                    </Link>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {games.map((game) => (
                  <GamePageCard
                    key={game.slug}
                    game={game}
                    seoAnchor={`Download ${game.t} APK Pakistan – Play ${cat.label} & Earn Real Money`}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* ─── 5. TRENDING SECTION ──────────────────────── */}
        <section id="trending" className="py-20 border-y border-white/5 bg-bg-secondary/20 -mx-6 px-6 scroll-mt-[120px]">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-10 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[0.72rem] font-bold uppercase tracking-[0.12em] mb-5">
                🔥 Most Downloaded This Week
              </span>
              <h2 className="font-outfit font-black text-text-primary text-[clamp(1.8rem,4vw,2.5rem)] tracking-tight mb-3">
                Trending Earning Games in Pakistan 2026
              </h2>
              <p className="text-text-muted text-base max-w-[580px] mx-auto">
                These <strong className="text-text-secondary">real money APK games</strong> are the most downloaded earning apps in Pakistan right now. All verified for instant <strong className="text-text-secondary">EasyPaisa</strong> and <strong className="text-text-secondary">JazzCash</strong> payouts.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {trendingGames.map((game) => (
                <GamePageCard
                  key={game.slug}
                  game={game}
                  showCta={true}
                  seoAnchor={`Download ${game.t} APK – Start Earning Today in Pakistan`}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link
                href="#directory"
                className="inline-flex items-center gap-2 text-accent text-sm font-black uppercase tracking-widest hover:translate-x-1 transition-transform"
              >
                Browse All 40+ Earning Games in Pakistan →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── 4. GLOBAL DIRECTORY ──────────────────────── */}
        <section id="directory" className="py-24 scroll-mt-[120px]">
          <div className="bg-bg-secondary rounded-[2.5rem] p-12 max-md:p-8 border border-white/5 relative">
            <div className="mb-10 text-center md:text-left">
              <h2 className="font-outfit font-black text-text-primary text-[clamp(1.8rem,4vw,2.5rem)] tracking-tight mb-3">
                All Verified Earning Games in Pakistan – Complete APK Directory
              </h2>
              <p className="text-text-muted text-base max-w-[700px]">
                Browse all <strong className="text-text-secondary">40+ verified earning games</strong> in Pakistan. Every app on this list has been independently tested for real payouts via <strong className="text-text-secondary">EasyPaisa</strong> and <strong className="text-text-secondary">JazzCash</strong>. Updated regularly with new APK apps in 2026.
              </p>
              <p className="text-text-muted/70 text-sm mt-2 max-w-[700px]">
                Click any game to view the full download guide, step-by-step installation, deposit instructions, and withdrawal walkthrough for Pakistani users.
              </p>
            </div>

            {/* All 40+ games linked to their landing pages */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {TOP_GAMES.map((game) => (
                <GamePageCard
                  key={game.slug}
                  game={game}
                  showCta={true}
                  seoAnchor={`Download ${game.t} APK – Real Money Earning App Pakistan`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── INTERNAL LINKS SECTION ───────────────────── */}
        <section className="py-12 max-w-[1100px] mx-auto">
          <div className="bg-bg-secondary rounded-2xl p-8 border border-white/5">
            <h2 className="font-outfit font-black text-text-primary text-lg mb-2">Popular Earning Games in Pakistan</h2>
            <p className="text-text-muted text-sm mb-6">Quick links to the most downloaded real money APK apps in Pakistan:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 text-sm mb-8">
              {[
                { slug: "done999",     label: "Download Done999 APK" },
                { slug: "663bet",      label: "Download 663Bet APK" },
                { slug: "play7778",    label: "Download Play7778 APK" },
                { slug: "betrupees",   label: "Download BetRupees APK" },
                { slug: "588win",      label: "Play 588Win in Pakistan" },
                { slug: "win55",       label: "Download Win55 APK" },
                { slug: "pk888",       label: "Download PK888 APK" },
                { slug: "pkrvip",      label: "Download Pkrvip APK" },
                { slug: "288win",      label: "Play 288Win in Pakistan" },
                { slug: "j199",        label: "Download J199 APK" },
                { slug: "gamespk",     label: "Download GamesPk APK" },
                { slug: "3rr777",      label: "Play 3RR777 in Pakistan" },
                { slug: "jj77",        label: "Download JJ77 APK" },
                { slug: "pkr-spin",    label: "Download Pkr Spin APK" },
                { slug: "noob-win",    label: "Play Noob Win in Pakistan" },
                { slug: "ct999",       label: "Download CT999 APK" },
                { slug: "betpkr",      label: "Download BetPkr APK" },
                { slug: "877bet",      label: "Play 877Bet in Pakistan" },
                { slug: "gk777",       label: "Download GK777 APK" },
                { slug: "388win",      label: "Download 388Win APK" },
              ].map((g) => (
                <Link key={g.slug} href={`/${g.slug}`} className="text-text-link hover:text-accent-hover transition-colors" title={`${g.label} – Real Money Earning App Pakistan`}>
                  {g.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-white/5 pt-6">
              <p className="text-text-muted text-sm mb-4 font-semibold">Browse by Category:</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {[
                  { href: "/earning-games-pakistan",           label: "Best Earning Games in Pakistan" },
                  { href: "/casino-games-pakistan",            label: "Casino APK Games Pakistan" },
                  { href: "/color-prediction-games-pakistan",  label: "Color Prediction Games Pakistan" },
                  { href: "/sports-betting-apps-pakistan",     label: "Sports Betting Apps Pakistan" },
                  { href: "/referral-earning-apps-pakistan",   label: "Referral Earning Apps Pakistan" },
                  { href: "/card-games-pakistan",              label: "Card Games Pakistan" },
                ].map((c) => (
                  <Link key={c.href} href={c.href} className="text-accent hover:text-accent-hover font-semibold transition-colors" title={c.label}>
                    {c.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 7. TRUST SECTION ─────────────────────────── */}
        <section className="py-20 max-w-[1100px] mx-auto">
          <article className="bg-bg-card border border-white/5 rounded-[2rem] p-12 max-md:p-8">
            <h2 className="font-outfit font-black text-text-primary text-[clamp(1.6rem,3.5vw,2.2rem)] mb-4 leading-tight">
              Verified Earning Apps – Safe APK Downloads in Pakistan
            </h2>
            <p className="text-text-muted text-base leading-relaxed mb-8">
              DigitalAPK is Pakistan&apos;s most trusted source for <strong className="text-text-secondary">verified earning apps</strong> and <strong className="text-text-secondary">safe APK downloads</strong>. Unlike app stores that list unvetted software, every platform on DigitalAPK has been manually tested end-to-end — from registration to real withdrawal — by our Pakistan-based team.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { icon: "🔍", title: "Manual Payout Testing", body: "We deposit, play, and withdraw on every app before listing it. Only platforms that pay out to EasyPaisa or JazzCash within 30 minutes earn a spot." },
                { icon: "🛡️", title: "Anti-Scam Screening", body: "Apps with fake withdrawal screenshots, delayed payouts, or unresponsive support are permanently removed. We monitor listed platforms every 90 days." },
                { icon: "📱", title: "APK Safety Scan", body: "Every APK file is checked for malware, spyware, and unauthorized permissions before we link it. All files are verified through official publisher signatures." },
                { icon: "💳", title: "EasyPaisa & JazzCash Verified", body: "We only list earning apps that support real Pakistani mobile wallet withdrawals. Bank transfers and crypto-only apps are excluded from our directory." },
              ].map((card) => (
                <div key={card.title} className="bg-bg-primary/40 p-6 rounded-2xl border border-white/5">
                  <div className="text-2xl mb-3">{card.icon}</div>
                  <h4 className="font-bold text-text-primary text-sm mb-2">{card.title}</h4>
                  <p className="text-text-muted text-xs leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>

            <h3 className="font-outfit font-bold text-text-primary text-xl mb-4">How to Start Earning with Real Money APK Apps in Pakistan</h3>
            <ol className="space-y-3 mb-8">
              {[
                { n: "1", t: "Choose a Verified App", d: "Select any earning game from our directory. Look for 5-star ratings and EasyPaisa/JazzCash support." },
                { n: "2", t: "Download the APK Safely", d: "Tap the Download button on the game's page. Enable Unknown Sources once in Android Settings, then install." },
                { n: "3", t: "Register with Your Mobile Number", d: "Sign up using your Pakistani number (Telenor, Jazz, Ufone, or Zong). Most apps verify via OTP." },
                { n: "4", t: "Start Small – Test the Withdrawal", d: "Deposit the minimum amount (usually Rs 100–300), earn, then withdraw before adding more funds." },
                { n: "5", t: "Refer Friends for Passive Income", d: "Most apps pay a commission on every deposit your referrals make. Build a network to earn without playing." },
              ].map((step) => (
                <li key={step.n} className="flex gap-4 items-start">
                  <span className="w-7 h-7 rounded-full bg-accent/15 border border-accent/30 text-accent font-black text-xs flex items-center justify-center shrink-0 mt-0.5">{step.n}</span>
                  <div>
                    <strong className="text-text-primary text-sm">{step.t}:</strong>
                    <span className="text-text-muted text-sm"> {step.d}</span>
                  </div>
                </li>
              ))}
            </ol>

            <p className="text-text-muted/60 text-xs leading-relaxed border-t border-white/5 pt-6">
              <strong className="text-text-muted/80">Disclaimer:</strong> DigitalAPK is an independent review and information platform. We do not operate any earning apps. All earning apps carry financial risk — never deposit more than you can afford to lose. This page may contain affiliate links. Gambling and real-money apps may be restricted in some regions of Pakistan.
            </p>
          </article>
        </section>

        {/* ─── 6. REVIEWS SECTION ───────────────────────── */}
        <ReviewSection />

        {/* ─── 8. FAQ SECTION ───────────────────────────── */}
        <section className="py-20 bg-bg-secondary/40 rounded-[3rem] px-12 max-md:px-8" aria-labelledby="faq-heading">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="font-outfit font-black text-text-primary text-[clamp(1.7rem,4vw,2.5rem)] tracking-tight mb-3">
              Earning Games in Pakistan – Frequently Asked Questions
            </h2>
            <p className="text-text-muted text-base mt-2 max-w-[540px] mx-auto">
              Verified answers about <strong className="text-text-secondary">real money earning apps</strong>, <strong className="text-text-secondary">APK downloads</strong>, and <strong className="text-text-secondary">EasyPaisa/JazzCash withdrawals</strong> in Pakistan.
            </p>
          </div>

          <div className="max-w-[850px] mx-auto divide-y divide-white/5">
            {[
              {
                q: "Are earning APK games safe in Pakistan?",
                a: "Yes — if downloaded from a verified source like DigitalAPK. We manually scan every APK for malware, check publisher legitimacy, and confirm real payouts before listing. Never download earning game APKs from random Telegram groups or unknown websites. All apps listed here have been tested from a Pakistani mobile network.",
              },
              {
                q: "Which APK games give real money in Pakistan?",
                a: "The most consistently paying earning games in Pakistan in 2026 include Done999 (color prediction), 663Bet (casino), Play7778 (slots), BetRupees (referral), and Win55 (color prediction). Each has a detailed review page on DigitalAPK with withdrawal proof and step-by-step guides.",
              },
              {
                q: "How to withdraw earnings from APK games using EasyPaisa?",
                a: "Open the earning app, go to Wallet → Withdraw, select EasyPaisa as payment method, enter your registered EasyPaisa mobile number, enter the amount, and confirm. Most apps process withdrawals in 5–30 minutes. Make sure your EasyPaisa account is Level 1 or higher (CNIC verified) to receive large amounts.",
              },
              {
                q: "How to withdraw using JazzCash from earning apps?",
                a: "The process is identical to EasyPaisa. Go to Wallet → Withdrawal, select JazzCash, enter your JazzCash-registered number, and confirm the amount. Withdrawals typically arrive within 10–20 minutes. Ensure the mobile number in the app matches your JazzCash account exactly.",
              },
              {
                q: "What is the minimum deposit for earning games in Pakistan?",
                a: "Most earning games in Pakistan have a minimum deposit of Rs 100 to Rs 300. Done999 and Win55 accept as low as Rs 100. Casino apps like 663Bet and Play7778 typically require Rs 200–Rs 300. Always start with the minimum to test payout speed before increasing your deposit.",
              },
              {
                q: "Do earning APK games work on iPhone (iOS)?",
                a: "No. Earning game APKs in Pakistan are Android-only. APK files cannot be installed on iPhones. You need an Android device running version 6.0 or higher. A few platforms offer mobile web access on iOS, but full functionality including withdrawals requires Android.",
              },
              {
                q: "How do referral earning apps work in Pakistan?",
                a: "Referral earning apps pay you a commission — usually 10–30% — on every deposit made by someone who registered using your referral link or code. Apps like BetRupees and Pkrvip have multi-level systems where you also earn from your referrals' referrals. It is entirely passive once you build a network.",
              },
              {
                q: "Is color prediction legal in Pakistan?",
                a: "Color prediction apps exist in a legal grey area in Pakistan. DigitalAPK does not provide legal advice. Players should review local laws before participating. These apps operate outside Google Play under international licensing. Use responsibly and never deposit more than you can afford to lose.",
              },
            ].map((faq, i) => (
              <details key={i} className="group py-7 first:pt-0 last:pb-0">
                <summary className="cursor-pointer font-bold text-base text-text-primary list-none flex justify-between items-center hover:text-accent transition-colors gap-4">
                  {faq.q}
                  <span className="text-accent text-2xl font-light group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="text-text-secondary text-sm leading-relaxed mt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
