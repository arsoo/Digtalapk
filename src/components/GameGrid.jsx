"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import { ALL_GAMES } from "@/lib/data";

const ITEMS_PER_PAGE = 40;

const SLUG_MAP = {
  "588win game download": "588win",
  "done999 game download": "done999",
  "288win game download": "288win",
  "388win game download": "388win",
  "pk888 game download": "pk888",
  "ct999 game download": "ct999",
  "win55 game download": "win55",
  "pkrvip game download": "pkrvip",
  "663bet game download": "663bet",
  "betrupees game download": "betrupees",
  "gamespk game download": "gamespk",
  "betpkr game download": "betpkr",
  "gk777 game download": "gk777",
  "3rr777 game download": "3rr777",
  "3rr 777 game download": "3rr777",
  "777sx game download": "777sx",
  "j199 game download": "j199",
  "y999 game download": "y999",
  "win388 game download": "win388",
  "win588 game download": "win588",
  "488win game download": "488win",
  "betaa game download": "betaa",
  "play7778 game download": "play7778",
  "play 7778 game download": "play7778",
  "bb98 game download": "bb98",
  "pkace game download": "pkace",
  "pkr spin game download": "pkr-spin",
  "666d game download": "666d",
  "666w game download": "666w",
  "666w game download apk": "666w",
  "8jjbet game download": "8jjbet",
  "877bet game download": "877bet",
  "pk8888 game download": "pk8888",
  "bet877 game download": "bet877",
  "masti 365 game download": "masti-365",
  "sc999 game download": "sc999",
  "88fd game download": "88fd",
  "jj77 game download": "jj77",
  "noob win game download": "noob-win",
  "cd22 game download": "cd22",
  "zd22 game download": "zd22",
  "jz777 game download": "jz777",
  "1jj download – earning...": "1jj",
};

function getSlug(title) {
  return SLUG_MAP[title.toLowerCase()] || null;
}

export default function GameGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return ALL_GAMES;
    const q = searchQuery.toLowerCase().trim();
    return ALL_GAMES.filter((g) => g.t.toLowerCase().includes(q));
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const displayed = searchQuery.trim()
    ? filtered
    : filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("all-games")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full">
      {/* Game grid */}
      <div
        className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3.5 max-[400px]:grid-cols-2"
        role="list"
        aria-label="Game listings"
      >
        {displayed.map((game, i) => {
          const slug = getSlug(game.t);
          const card = <GameCard key={`${game.t}-${i}`} game={game} idx={i} />;
          if (slug) {
            return (
              <Link 
                key={`${game.t}-${i}`} 
                href={`/${slug}`} 
                className="block no-underline" 
                aria-label={`View ${game.t} details`} 
                role="listitem"
              >
                {card}
              </Link>
            );
          }
          return <div key={`${game.t}-${i}`} role="listitem" className="block">{card}</div>;
        })}
      </div>

      {displayed.length === 0 && (
        <div className="col-span-full text-center py-12 px-4 bg-bg-secondary rounded-md border border-border-subtle">
          <p className="text-text-muted text-lg">
            No games found matching &quot;{searchQuery}&quot;. Try a different search term.
          </p>
        </div>
      )}

      {/* Pagination */}
      {!searchQuery.trim() && totalPages > 1 && (
        <nav
          className="flex justify-center items-center gap-2 mt-12 flex-wrap"
          aria-label="Page navigation"
        >
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              aria-current={currentPage === i + 1 ? "page" : undefined}
              className={`w-10 h-10 rounded-sm font-bold text-sm transition-all duration-200 flex items-center justify-center border ${
                currentPage === i + 1 
                  ? "bg-accent border-accent text-white shadow-lg" 
                  : "bg-bg-card border-border-card text-text-secondary hover:border-accent hover:text-accent"
              }`}
            >
              {i + 1}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="h-10 px-4 rounded-sm bg-bg-card border border-border-card text-text-secondary font-bold text-sm transition-all duration-200 hover:border-accent hover:text-accent flex items-center justify-center"
            >
              Next »
            </button>
          )}
        </nav>
      )}
    </div>
  );
}
