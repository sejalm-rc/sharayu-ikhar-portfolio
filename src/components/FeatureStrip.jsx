import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function FeatureStrip({ items, className = "" }) {
  return (
    <AnimatedSection className={`py-7 ${className}`}>
      <Container>
        <div className="soft-band grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, index) => (
            <div key={title} className={`flex items-center gap-4 px-6 py-5 ${index ? "border-t border-[#d7ded9] sm:border-l sm:border-t-0" : ""} ${index === 2 ? "sm:border-t lg:border-t-0" : ""}`}>
              <Icon className="shrink-0 text-[var(--navy)]" strokeWidth={1.25} size={36} />
              <div><h3 className="font-display text-lg text-[var(--navy)]">{title}</h3>{text && <p className="mt-1 text-xs text-[var(--muted)]">{text}</p>}</div>
            </div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
