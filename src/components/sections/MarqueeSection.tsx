"use client";

export default function MarqueeSection() {
  const items = [
    "🏆 Forbes — On every techy kid's wish list",
    "★ TechCrunch — Most eye-catching robotics kit in years",
    "🤖 TIME — STEM toy of the year",
    "★ Wired — Editor's Choice: Best Modular Robot",
    "🌟 50+ Pre-designed robot forms",
    "★ 104 countries shipped worldwide",
    "🏆 66,000+ community creations",
    "★ 11 module types, infinite possibilities",
  ];

  return (
    <section className="py-6 bg-clicbot-black overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="marquee-inner">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-8 text-clicbot-gray-300 text-sm font-mono"
            >
              {item}
              <span className="text-clicbot-accent opacity-40">—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
