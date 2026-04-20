import { TOP_GAMES } from "@/lib/games";

const BASE = "https://digitalapkgames.com";

// Fixed dates — only update when content actually changes
const DATE_HOME      = new Date("2026-04-21");
const DATE_CATEGORY  = new Date("2026-04-21");
const DATE_GAMES     = new Date("2026-04-21");
const DATE_STATIC    = new Date("2026-04-09");

export default function sitemap() {
  const staticPages = [
    { url: BASE,                               lastModified: DATE_HOME,     changeFrequency: "daily",  priority: 1.0 },
    { url: `${BASE}/privacy-policy`,           lastModified: DATE_STATIC,   changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms-and-conditions`,     lastModified: DATE_STATIC,   changeFrequency: "yearly", priority: 0.2 },
  ];

  const categoryPages = [
    { url: `${BASE}/earning-games-pakistan`,            lastModified: DATE_CATEGORY, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/casino-games-pakistan`,             lastModified: DATE_CATEGORY, changeFrequency: "weekly", priority: 0.90 },
    { url: `${BASE}/color-prediction-games-pakistan`,   lastModified: DATE_CATEGORY, changeFrequency: "weekly", priority: 0.90 },
    { url: `${BASE}/sports-betting-apps-pakistan`,      lastModified: DATE_CATEGORY, changeFrequency: "weekly", priority: 0.90 },
    { url: `${BASE}/referral-earning-apps-pakistan`,    lastModified: DATE_CATEGORY, changeFrequency: "weekly", priority: 0.90 },
    { url: `${BASE}/card-games-pakistan`,               lastModified: DATE_CATEGORY, changeFrequency: "weekly", priority: 0.90 },
  ];

  const gamePages = TOP_GAMES.map((game) => ({
    url: `${BASE}/${game.slug}`,
    lastModified: DATE_GAMES,
    changeFrequency: "weekly",
    // 5-star games get slightly higher crawl priority
    priority: game.rating === 5 ? 0.85 : 0.80,
  }));

  return [...staticPages, ...categoryPages, ...gamePages];
}
