export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://digitalapk.com/sitemap.xml",
    host: "https://digitalapk.com",
  };
}
