import { TOP_GAMES } from "@/lib/games";
import { BLOG_POSTS } from "@/lib/blog";

const BASE = "https://digitalapkgames.com";

// Fixed dates — only update when content actually changes
// Use plain date strings (YYYY-MM-DD) — GSC prefers this over full ISO timestamps
const DATE_HOME      = "2026-04-24";
const DATE_CATEGORY  = "2026-04-21";
const DATE_GAMES     = "2026-04-21";
const DATE_STATIC    = "2026-04-09";
const DATE_BLOG      = "2026-04-24";

export default function sitemap() {
  const staticPages = [
    { url: BASE,                               lastModified: DATE_HOME,     changeFrequency: "daily",  priority: 1.0 },
    { url: `${BASE}/about`,                    lastModified: DATE_HOME,     changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/disclaimer`,               lastModified: DATE_HOME,     changeFrequency: "yearly", priority: 0.4 },
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

  const blogPages = [
    { url: `${BASE}/blog`, lastModified: DATE_BLOG, changeFrequency: "weekly", priority: 0.85 },
    ...BLOG_POSTS.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: DATE_BLOG,
      changeFrequency: "monthly",
      priority: 0.80,
    })),
  ];

  return [...staticPages, ...categoryPages, ...gamePages, ...blogPages];
}
