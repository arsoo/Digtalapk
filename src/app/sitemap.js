import { TOP_GAMES } from "@/lib/games";

const BASE = "https://digitalapk.com";

export default function sitemap() {
  const staticPages = [
    { url: BASE,                                         lastModified: new Date(), changeFrequency: "daily",   priority: 1.0 },
    { url: `${BASE}/privacy-policy`,                     lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`,               lastModified: new Date(), changeFrequency: "yearly",  priority: 0.3 },
  ];

  const categoryPages = [
    { url: `${BASE}/earning-games-pakistan`,             lastModified: new Date(), changeFrequency: "weekly",  priority: 0.95 },
    { url: `${BASE}/casino-games-pakistan`,              lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/color-prediction-games-pakistan`,    lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/sports-betting-apps-pakistan`,       lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/referral-earning-apps-pakistan`,     lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/card-games-pakistan`,                lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
  ];

  const gamePages = TOP_GAMES.map((game) => ({
    url: `${BASE}/${game.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...gamePages];
}
