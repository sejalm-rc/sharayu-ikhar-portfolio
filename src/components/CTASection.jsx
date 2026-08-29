import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import Container from "./Container";

export default function CTASection({ title = "Let’s Create Meaningful Impact Together", text = "Open to conversations around leadership, research, partnerships, and purposeful growth.", button = "Start a Conversation", coral = true }) {
  return (
    <AnimatedSection className="py-6 sm:py-8">
      <Container>
        <div className={`leaf-corner relative overflow-hidden rounded-[10px] px-6 py-7 sm:px-10 ${coral ? "bg-gradient-to-r from-[#ce6849] to-[#e18a68] text-white" : "soft-band text-[var(--navy)]"}`}>
          <div className="relative z-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <div><h2 className="font-display text-2xl sm:text-3xl">{title}</h2><p className={`mt-1 text-sm ${coral ? "text-white/80" : "text-[var(--muted)]"}`}>{text}</p></div>
            <Link to="/contact" className={coral ? "btn-outline shrink-0 border-white text-[var(--navy)]" : "btn-primary shrink-0"}>{button}<ArrowRight size={16} className="ml-2" /></Link>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
