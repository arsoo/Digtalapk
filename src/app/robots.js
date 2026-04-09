export default function robots() {
  return {
    rules: [
      {
        // Main search engine crawlers
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        // Block AI training crawlers to protect content
        userAgent: ["GPTBot", "ChatGPT-User", "CCBot", "anthropic-ai", "Claude-Web", "Omgilibot", "FacebookBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://digitalapk.com/sitemap.xml",
    host: "https://digitalapk.com",
  };
}
