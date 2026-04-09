import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Outfit } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  metadataBase: new URL("https://digitalapkgames.com"),
  title: {
    default: "DigitalAPK – Download Top Earning Games & Casino APKs in Pakistan 2026",
    template: "%s | DigitalAPK",
  },
  description: "DigitalAPK is Pakistan's most trusted platform for real money earning game APKs. Browse 40+ verified casino, color prediction & sports betting apps with EasyPaisa & JazzCash support.",
  keywords: ["earning games Pakistan", "casino APK download", "color prediction apps Pakistan", "EasyPaisa withdrawal games", "JazzCash games", "real money apps Pakistan 2026", "APK download Pakistan"],
  authors: [{ name: "DigitalAPK", url: "https://digitalapkgames.com" }],
  creator: "DigitalAPK",
  publisher: "DigitalAPK",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://digitalapkgames.com",
    siteName: "DigitalAPK",
    title: "DigitalAPK – Top Earning Games & Casino APKs Pakistan 2026",
    description: "Pakistan's most trusted earning game APK download platform. Verified apps, expert reviews, EasyPaisa & JazzCash withdrawals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitalAPK – Earning Games & Casino APKs Pakistan",
    description: "Pakistan's most trusted earning game APK download platform.",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Preload sprite sheets — icons1 is above-the-fold, prioritise it */}
        <link rel="preload" as="image" href="/images/icons1.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/icons2.png" />
        <link rel="preload" as="image" href="/images/icons3.png" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
