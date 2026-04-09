import Link from "next/link";

export const metadata = {
  title: "Page Not Found | DigitalAPK",
  description: "The page you are looking for does not exist. Browse 40+ verified earning game APKs on DigitalAPK.",
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "40px 20px",
      background: "var(--color-bg-primary)",
    }}>
      {/* 404 number */}
      <div style={{
        fontSize: "clamp(5rem, 20vw, 9rem)",
        fontWeight: 900,
        fontFamily: "var(--font-outfit, sans-serif)",
        lineHeight: 1,
        background: "linear-gradient(135deg, #1abc9c 0%, #16a085 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "16px",
        userSelect: "none",
      }}>
        404
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: "clamp(1.3rem, 4vw, 1.8rem)",
        fontWeight: 800,
        fontFamily: "var(--font-outfit, sans-serif)",
        color: "var(--color-text-primary)",
        margin: "0 0 12px",
      }}>
        Page Not Found
      </h1>

      {/* Subtext */}
      <p style={{
        color: "var(--color-text-secondary)",
        fontSize: "0.97rem",
        lineHeight: 1.7,
        maxWidth: "420px",
        margin: "0 0 36px",
      }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Head back to browse 40+ verified earning game APKs.
      </p>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--color-accent)",
          color: "#fff",
          fontWeight: 800,
          fontSize: "0.95rem",
          padding: "13px 28px",
          borderRadius: "10px",
          textDecoration: "none",
          boxShadow: "0 4px 18px rgba(26,188,156,0.35)",
          transition: "opacity 0.2s",
        }}>
          ← Back to Home
        </Link>
        <Link href="/casino-games-pakistan" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "var(--color-bg-card)",
          color: "var(--color-text-primary)",
          fontWeight: 700,
          fontSize: "0.95rem",
          padding: "13px 28px",
          borderRadius: "10px",
          textDecoration: "none",
          border: "1px solid rgba(26,188,156,0.25)",
          transition: "border-color 0.2s",
        }}>
          Browse Games
        </Link>
      </div>

      {/* Quick links */}
      <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {[
          { label: "Casino Games", href: "/casino-games-pakistan" },
          { label: "Color Prediction", href: "/color-prediction-games-pakistan" },
          { label: "Sports Betting", href: "/sports-betting-apps-pakistan" },
          { label: "Referral Apps", href: "/referral-earning-apps-pakistan" },
          { label: "Card Games", href: "/card-games-pakistan" },
        ].map((link) => (
          <Link key={link.href} href={link.href} style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "var(--color-accent)",
            background: "rgba(26,188,156,0.08)",
            border: "1px solid rgba(26,188,156,0.2)",
            padding: "6px 14px",
            borderRadius: "999px",
            textDecoration: "none",
          }}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
