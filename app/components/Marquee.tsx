type MarqueeProps = {
  items: string[];
  label: string;
  tone?: "lime" | "forest" | "paper";
  reverse?: boolean;
};

export default function Marquee({ items, label, tone = "lime", reverse = false }: MarqueeProps) {
  return (
    <div className={`premium-marquee marquee-${tone}${reverse ? " marquee-reverse" : ""}`} aria-label={label}>
      <div className="marquee-track">
        {[false, true].map((duplicate) => (
          <div className="marquee-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
            {items.map((item) => <span className="marquee-item" key={item}><b>{item}</b><i>✦</i></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
