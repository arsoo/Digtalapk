export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      { userAgent: "GPTBot",        disallow: "/" },
      { userAgent: "ChatGPT-User",  disallow: "/" },
      { userAgent: "CCBot",         disallow: "/" },
      { userAgent: "anthropic-ai",  disallow: "/" },
      { userAgent: "Claude-Web",    disallow: "/" },
      { userAgent: "Omgilibot",     disallow: "/" },
    ],
    sitemap: "https://digitalapkgames.com/sitemap.xml",
  };
}
