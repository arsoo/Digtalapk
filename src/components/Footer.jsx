import Link from "next/link";

export default function Footer() {
  const commonLinkClass = "text-text-muted text-[0.85rem] font-medium transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block";
  const headingClass = "font-outfit font-black text-text-primary text-[0.95rem] uppercase tracking-[0.12em] mb-6";

  return (
    <footer className="bg-bg-header border-t border-white/5 py-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 font-outfit font-black text-[1.4rem] text-text-primary tracking-tight mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-[1.2rem] text-bg-primary shadow-[0_0_20px_rgba(26,188,156,0.3)]">🎮</div>
              <span>Digital<span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">APK</span></span>
            </div>
            <p className="text-text-muted text-[0.9rem] leading-relaxed max-w-[280px]">
              Pakistan&apos;s most trusted platform for verified earning games. We manually test every app for real EasyPaisa and JazzCash withdrawals.
            </p>
          </div>

          {/* Earning Games Column */}
          <div>
            <h3 className={headingClass}>Earning Game Categories</h3>
            <div className="flex flex-col gap-3.5">
              <Link href="/earning-games-pakistan" className={commonLinkClass} title="Best earning games in Pakistan 2026">All Earning Games Pakistan</Link>
              <Link href="/casino-games-pakistan" className={commonLinkClass} title="Casino APK games Pakistan">Casino &amp; Slots APK</Link>
              <Link href="/color-prediction-games-pakistan" className={commonLinkClass} title="Color prediction earning games">Color Prediction Games</Link>
              <Link href="/sports-betting-apps-pakistan" className={commonLinkClass} title="Sports betting apps Pakistan">Sports Betting Apps</Link>
              <Link href="/referral-earning-apps-pakistan" className={commonLinkClass} title="Referral earning apps Pakistan">Referral Earning Apps</Link>
              <Link href="/card-games-pakistan" className={commonLinkClass} title="Teen Patti card games Pakistan">Card Games Pakistan</Link>
            </div>
          </div>

          {/* Top Games Column */}
          <div>
            <h3 className={headingClass}>Top Earning Apps</h3>
            <div className="flex flex-col gap-3.5">
              <Link href="/done999" className={commonLinkClass} title="Download Done999 APK Pakistan">Download Done999 APK</Link>
              <Link href="/663bet" className={commonLinkClass} title="Download 663Bet APK Pakistan">Download 663Bet APK</Link>
              <Link href="/play7778" className={commonLinkClass} title="Download Play7778 APK Pakistan">Download Play7778 APK</Link>
              <Link href="/betrupees" className={commonLinkClass} title="Download BetRupees APK Pakistan">Download BetRupees APK</Link>
              <Link href="/pk888" className={commonLinkClass} title="Download PK888 APK Pakistan">Download PK888 APK</Link>
              <Link href="/#directory" className={commonLinkClass}>Browse All 40+ Games →</Link>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className={headingClass}>Legal</h3>
            <div className="flex flex-col gap-3.5">
              <Link href="/privacy-policy" className={commonLinkClass}>Privacy Policy</Link>
              <Link href="/terms-and-conditions" className={commonLinkClass}>Terms &amp; Conditions</Link>
            </div>
            <div className="mt-8">
              <p className="text-text-muted text-[0.78rem] leading-relaxed">
                DigitalAPK is an independent review platform. All earning apps involve financial risk. Never deposit more than you can afford to lose.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-text-muted text-[0.75rem] font-medium tracking-wide">
            &copy; 2026 DIGITALAPK. MANUALLY VERIFIED EARNING PORTAL. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-text-muted text-[0.75rem] font-black uppercase tracking-widest flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Secure Platform
            </span>
            <span className="text-text-muted text-[0.75rem] font-black uppercase tracking-widest flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Anti-Scam Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
