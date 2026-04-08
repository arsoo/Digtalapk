"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "All Earning Games", path: "/earning-games-pakistan" },
  { name: "Casino APKs", path: "/casino-games-pakistan" },
  { name: "Color Prediction", path: "/color-prediction-games-pakistan" },
  { name: "Sports Betting", path: "/sports-betting-apps-pakistan" },
  { name: "Referral Apps", path: "/referral-earning-apps-pakistan" },
  { name: "Card Games", path: "/card-games-pakistan" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-[1000] bg-bg-header border-b border-white/5 shadow-header h-[64px]" id="header">
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-outfit font-black text-[1.4rem] text-text-primary tracking-tight shrink-0 group"
            aria-label="DigitalAPK Home"
          >
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-[1.2rem] text-bg-primary shadow-[0_0_20px_rgba(26,188,156,0.3)] group-hover:scale-105 transition-transform" aria-hidden="true">🎮</div>
            <span>Digital<span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-4">APK</span></span>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <nav
              className={`flex items-center gap-2 max-md:fixed max-md:top-[64px] max-md:-right-[280px] max-md:w-[260px] max-md:h-[calc(100vh-64px)] max-md:bg-bg-header max-md:flex-col max-md:p-6 max-md:transition-transform max-md:duration-300 max-md:shadow-[-10px_0_40px_rgba(0,0,0,0.5)] max-md:border-l max-md:border-white/5 max-md:z-[1001] ${isOpen ? "max-md:!right-0" : ""}`}
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-[0.82rem] font-bold uppercase tracking-widest px-4 py-2 rounded-lg transition-colors duration-200 whitespace-nowrap hover:text-accent hover:bg-accent/5 max-md:w-full max-md:p-4 max-md:text-[0.9rem] ${pathname === link.path ? "text-accent bg-accent/10 border border-accent/20" : "text-text-secondary"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Hamburger */}
            <button
              className="hidden flex-col gap-[6px] bg-transparent border-none p-2 cursor-pointer max-md:flex"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <span className={`block w-[24px] h-[2px] bg-text-primary rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`} />
              <span className={`block w-[24px] h-[2px] bg-text-primary rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-[24px] h-[2px] bg-text-primary rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-[998] transition-opacity duration-250 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
