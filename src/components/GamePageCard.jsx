import Link from "next/link";
import { SPRITES } from "@/lib/games";

function Stars({ n }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} stars`}>
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill={i < n ? "var(--color-star-filled)" : "var(--color-star-empty)"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function GamePageCard({ game, size = "normal", seoAnchor, showCta = true }) {
  const bgPosX = (game.c / 3) * 100;
  const bgPosY = (game.ro / 2) * 100;
  const spriteUrl = SPRITES[game.s];

  if (size === "small") {
    return (
      <div className="flex items-center gap-3 bg-bg-card border border-border-card rounded-xl p-3 hover:border-accent hover:-translate-y-0.5 transition-[border-color,transform] duration-300 group w-full">
        <Link
          href={`/${game.slug}`}
          className="w-12 h-12 rounded-lg overflow-hidden bg-[#080c12] relative shrink-0"
          title={`Download ${game.t} APK – Real Money Earning App in Pakistan`}
        >
          <div
            className="absolute inset-0 bg-no-repeat w-full h-full group-hover:scale-105 transition-transform duration-300"
            style={{
              backgroundImage: `url(${spriteUrl})`,
              backgroundPosition: `${bgPosX}% ${bgPosY}%`,
              backgroundSize: "400% 300%",
            }}
            aria-hidden="true"
          />
        </Link>
        <Link href={`/${game.slug}`} className="min-w-0 flex-1 no-underline">
          <div className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors truncate leading-tight">
            {game.t}
          </div>
          <div className="text-[0.6rem] text-text-muted truncate mt-0.5 uppercase tracking-wider">
            <span>{game.cat}</span>
          </div>
          <div className="text-[0.6rem] text-text-muted/60 truncate mt-0.5">
            Download {game.t} APK Pakistan
          </div>
        </Link>
        {game.referralUrl && (
          <a
            href={game.referralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-1 bg-accent text-bg-primary text-[0.6rem] font-black px-2.5 py-1.5 rounded-lg no-underline hover:bg-accent-hover transition-colors"
>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download
          </a>
        )}
      </div>
    );
  }

  return (
    <div
      className="bg-bg-card border border-border-card rounded-2xl overflow-hidden hover:border-accent hover:-translate-y-1.5 hover:shadow-card-hover transition-[border-color,transform,box-shadow] duration-300 group flex flex-col relative"
    >
      <Link href={`/${game.slug}`} title={seoAnchor || `Download ${game.t} APK Pakistan`}>
        <div className="aspect-square overflow-hidden bg-[#080c12] relative">
          <div
            className="absolute inset-0 bg-no-repeat w-full h-full group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url(${spriteUrl})`,
              backgroundPosition: `${bgPosX}% ${bgPosY}%`,
              backgroundSize: "400% 300%",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-1">
        <Link href={`/${game.slug}`} className="no-underline">
          <div className="flex items-center justify-between mb-1">
            <div className="font-outfit font-black text-text-primary text-[1.1rem] leading-tight line-clamp-1 group-hover:text-accent transition-colors">
              {game.t}
            </div>
            <div className="text-[0.7rem] font-bold text-accent px-1.5 py-0.5 bg-accent/10 rounded-sm border border-accent/20">
              {game.rating}.0
            </div>
          </div>

          <div className="mb-3">
            <Stars n={game.rating} />
          </div>

          <p className="text-[0.75rem] text-text-secondary leading-relaxed line-clamp-2 italic mb-4">
            &ldquo;{game.tagline}&rdquo;
          </p>
        </Link>

        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between text-[0.7rem] font-bold text-text-muted border-t border-white/5 pt-3">
            <span className="flex items-center gap-1">⚡ Instant Withdrawal</span>
          </div>

          {showCta && game.referralUrl && (
            <a
              href={game.referralUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 bg-accent text-bg-primary text-[0.75rem] font-black py-2.5 rounded-lg text-center shadow-[0_4px_12px_rgba(26,188,156,0.25)] hover:bg-accent-hover hover:shadow-[0_6px_18px_rgba(26,188,156,0.35)] transition-[background-color,box-shadow] duration-200 no-underline"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download APK
            </a>
          )}

          {seoAnchor && (
            <span className="sr-only">{seoAnchor}</span>
          )}
        </div>
      </div>

      {/* Play & Earn Badge for SEO */}
      <div className="absolute top-3 left-3 bg-accent text-bg-primary text-[0.6rem] font-black px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        PLAY & EARN
      </div>
    </div>
  );
}
