type MarqueeProps = {
  items: string[];
  label: string;
  tone?: "lime" | "forest" | "paper";
  reverse?: boolean;
};

export default function Marquee({ items, label, tone = "lime", reverse = false }: MarqueeProps) {
  const continuousItems = Array.from({ length: 4 }, () => items).flat();
  return (
    <div className={`premium-marquee marquee-${tone}${reverse ? " marquee-reverse" : ""}`} aria-label={label}>
      <div className="marquee-track">
        {[false, true].map((duplicate) => (
          <div className="marquee-group" aria-hidden={duplicate || undefined} key={String(duplicate)}>
            {continuousItems.map((item, index) => <span className="marquee-item" key={`${item}-${index}`}><b>{item}</b><i>+</i></span>)}
          </div>
        ))}
      </div>
    </div>
  );
}
