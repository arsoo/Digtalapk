import { SPRITES } from "@/lib/data";

function StarSvg({ filled }) {
  return (
    <svg 
      className={filled ? "text-[#f0ad4e]" : "text-[#2d3a47]"} 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function GameCard({ game, idx, isSlider = false, isHorizontal = false }) {
  // Base classes for the card container
  let containerClasses = "bg-bg-card border border-border-card rounded-md overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-card-hover hover:border-accent group";
  
  if (isSlider) {
    containerClasses += " flex-[0_0_220px] snap-start mb-2";
  } else if (isHorizontal) {
    containerClasses += " flex-[0_0_280px] snap-start flex items-center p-3 gap-3";
  } else {
    // Grid item
    containerClasses += " relative animate-fade-in-card opacity-0";
  }

  const bodyClasses = (isSlider || isHorizontal) ? "p-0 flex-1 min-w-0" : "px-2.5 pt-2.5 pb-3";
  const titleClasses = "font-semibold text-text-primary whitespace-nowrap overflow-hidden text-ellipsis mb-1 text-xs leading-snug";
  const versionClasses = "text-[0.68rem] text-text-muted mb-1.5";
  
  let imgContainerClass = "aspect-square overflow-hidden bg-[#080c12] relative group shrink-0";
  if (isHorizontal) imgContainerClass = "w-16 h-16 rounded-sm overflow-hidden bg-[#0a0e14] relative shrink-0";

  const spriteUrl = SPRITES[game.s];
  const bgPosX = (game.c / 3) * 100;
  const bgPosY = (game.ro / 2) * 100;

  return (
    <div 
      className={containerClasses} 
      style={(!isSlider && !isHorizontal) ? { animationDelay: `${Math.min((idx || 0) * 0.03, 0.8)}s`} : undefined}
    >
      <div className={imgContainerClass}>
        <div 
          className="absolute inset-0 bg-no-repeat w-full h-full group-hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${spriteUrl})`,
            backgroundPosition: `${bgPosX}% ${bgPosY}%`,
            backgroundSize: '400% 300%',
            borderRadius: isHorizontal ? '4px' : '8px',
          }}
          aria-label={`${game.t} icon`}
        />
        <img 
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" 
          alt={`${game.t} APK`} 
          loading="lazy" 
          width="200" 
          height="200" 
          className="opacity-0 relative z-1 object-cover w-full h-full pointer-events-none"
        />
      </div>
      <div className={bodyClasses}>
        <div className={titleClasses}>{game.t}</div>
        <div className={versionClasses}>{game.v}</div>
        {(!isSlider || isHorizontal) && (
          <div className="flex gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-[13px] h-[13px]">
                <StarSvg filled={i < game.r} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
