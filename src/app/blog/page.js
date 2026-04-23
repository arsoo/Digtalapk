import Link from "next/link";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata = {
  title: "Blog — Earning Game Reviews & APK Guides Pakistan 2026",
  description: "Expert reviews, APK download guides, and earning tips for Pakistani players. Honest analysis of color prediction, casino, and sports betting apps in Pakistan.",
  openGraph: {
    title: "DigitalAPK Blog — Earning Game Reviews Pakistan 2026",
    description: "Expert reviews, APK download guides, and earning tips for Pakistani players.",
    url: "https://digitalapkgames.com/blog",
  },
  alternates: { canonical: "https://digitalapkgames.com/blog" },
};

const BASE = "https://digitalapkgames.com";

const schema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "DigitalAPK Blog",
  "url": `${BASE}/blog`,
  "description": "Expert reviews, APK download guides, and earning tips for Pakistani players.",
  "publisher": {
    "@type": "Organization",
    "name": "DigitalAPK",
    "url": BASE,
  },
  "blogPost": BLOG_POSTS.map((p) => ({
    "@type": "BlogPosting",
    "headline": p.title,
    "url": `${BASE}/blog/${p.slug}`,
    "datePublished": p.date,
    "image": `${BASE}${p.image}`,
    "author": { "@type": "Organization", "name": "DigitalAPK" },
  })),
};

const CATEGORY_COLORS = {
  "App Review": "bg-accent/10 text-accent border border-accent/20",
  "Beginner Guide": "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-bg-primary">
        {/* Hero */}
        <section className="bg-bg-secondary border-b border-border-subtle py-16 px-5">
          <div className="max-w-[900px] mx-auto text-center">
            <div className="inline-block text-[0.72rem] font-black uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full mb-4">
              DigitalAPK Blog
            </div>
            <h1 className="font-outfit font-extrabold text-text-primary text-[clamp(1.6rem,4vw,2.4rem)] leading-tight mb-4">
              Earning Game Reviews &amp; APK Guides for Pakistan
            </h1>
            <p className="text-text-secondary text-[1rem] max-w-[620px] mx-auto leading-relaxed">
              Honest, tested reviews of color prediction, casino, and sports betting apps.
              We play with real PKR so you know what to expect before you deposit.
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="max-w-[1100px] mx-auto px-5 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-bg-card border border-border-card rounded-2xl overflow-hidden hover:border-accent hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                <Link href={`/blog/${post.slug}`} className="block relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 367px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className={`text-[0.65rem] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${CATEGORY_COLORS[post.category] || "bg-accent/10 text-accent"}`}>
                      {post.category}
                    </span>
                    <span className="text-text-muted text-[0.72rem]">{post.readTime}</span>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="no-underline group">
                    <h2 className="font-outfit font-extrabold text-text-primary text-[1.05rem] leading-snug mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-text-secondary text-[0.85rem] leading-relaxed line-clamp-3 flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle">
                    <span className="text-text-muted text-[0.72rem]">
                      {new Date(post.date).toLocaleDateString("en-PK", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-accent text-[0.8rem] font-bold hover:text-accent-hover transition-colors no-underline flex items-center gap-1"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
