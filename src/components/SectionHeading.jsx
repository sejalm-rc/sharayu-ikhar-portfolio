export default function SectionHeading({ eyebrow, title, description, align = "center", className = "" }) {
  const alignment = align === "left" ? "text-left" : "text-center mx-auto";
  return (
    <div className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="body-copy mt-3">{description}</p>}
      {align !== "left" && <div className="gold-rule" />}
    </div>
  );
}
