function Row({ items }: { items: string[] }) {
  return (
    <div className="flex gap-12 pr-12 text-[14px] tracking-[.12em] whitespace-nowrap text-canvas/75 uppercase">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-12">
          {item}
          <span className="text-brand">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden bg-ink py-[18px]">
      <div className="flex w-max animate-marquee gap-0">
        <Row items={items} />
        <Row items={items} />
      </div>
    </div>
  );
}
