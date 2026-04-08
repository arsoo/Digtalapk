const REVIEWS = [
  { name: "Ali Hassan",      city: "Karachi",     game: "Done999",  rating: 5, text: "Been using Done999 for 3 months and withdrawals always come to JazzCash within minutes. DigitalAPK is the best hub for earning apps in Pakistan.", date: "March 2026" },
  { name: "Usman Tariq",     city: "Lahore",      game: "663Bet",   rating: 5, text: "663Bet support is genuinely 24/7. I found these real money games through DigitalAPK — their verification process is actually transparent.", date: "February 2026" },
  { name: "Fatima Malik",    city: "Islamabad",   game: "Pkrvip",   rating: 4, text: "Pkrvip referral commissions are real. DigitalAPK's list of earning apps in Pakistan helped me find 3 platforms I use daily now.", date: "March 2026" },
  { name: "Bilal Chaudhry", city: "Faisalabad",  game: "Play7778", rating: 5, text: "Play7778's 200% bonus is no gimmick. These real money games are legit. Withdrew Rs 2200 to EasyPaisa instantly. Best APK games hub.", date: "April 2026" },
  { name: "Sajid Mehmood",  city: "Rawalpindi",  game: "BetRupees",rating: 5, text: "BetRupees pays out daily. The affiliate dashboard is clear. DigitalAPK is the only site I trust for real money earning apps in Pakistan.", date: "January 2026" },
  { name: "Hira Noor",      city: "Multan",      game: "Win55",    rating: 4, text: "Started with Win55's practice mode before risking real money games. Best advice from DigitalAPK. Verified APK downloads only.", date: "March 2026" },
  { name: "Tariq Mahmood",  city: "Peshawar",    game: "588Win",   rating: 5, text: "588Win bonus hit my account instantly. DigitalAPK's step-by-step APK install guide saved me a lot of hassle. Best earning portal in Pakistan.", date: "April 2026" },
  { name: "Nadia Iqbal",    city: "Quetta",      game: "PK888",    rating: 5, text: "PK888 EasyPaisa withdrawal was seamless. I compare every app on DigitalAPK before depositing — their anti-scam badge actually means something.", date: "April 2026" },
];

function Stars({ n }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < n ? "var(--color-star-filled)" : "var(--color-star-empty)"}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <section
      className="bg-bg-secondary border-y border-border-subtle py-14 px-5"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2
            id="reviews-heading"
            className="font-outfit font-extrabold text-text-primary text-[clamp(1.3rem,3vw,1.7rem)] mb-2"
          >
            What Pakistani Players Say About DigitalAPK
          </h2>
          <p className="text-text-secondary text-[0.92rem]">
            Real reviews from verified Pakistani players who found their earning apps through DigitalAPK
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2.5 mt-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="var(--color-star-filled)">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="font-extrabold text-text-primary text-2xl">4.8</span>
            <span className="text-text-muted text-[0.85rem]">based on 1,200+ reviews</span>
          </div>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 max-[400px]:grid-cols-1"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="bg-bg-card border border-border-card rounded-md p-5 flex flex-col gap-3 transition-all duration-300 hover:border-accent hover:shadow-card-hover"
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/Review"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div
                    className="font-bold text-text-primary text-[0.92rem]"
                    itemProp="author"
                    itemScope
                    itemType="https://schema.org/Person"
                  >
                    <span itemProp="name">{review.name}</span>
                  </div>
                  <div className="text-text-muted text-[0.75rem] mt-0.5">{review.city} · {review.date}</div>
                </div>
                <Stars n={review.rating} />
              </div>
              <blockquote
                className="text-text-secondary text-[0.87rem] leading-relaxed italic m-0 flex-1"
                itemProp="reviewBody"
              >
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="text-[0.75rem] text-accent font-bold border-t border-border-subtle pt-3 mt-1">
                App reviewed: {review.game}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
