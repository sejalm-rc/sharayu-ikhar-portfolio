import { ArrowRight, BarChart3, BookOpen, Check, ClipboardList, GraduationCap, Handshake, Lightbulb, Microscope, Network, Rocket, Search, Sprout, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import heroResearch from "../assets/images/research/hero-research.jpg";
import areaInnovation from "../assets/images/research/area-innovation.jpg";
import areaManagement from "../assets/images/research/area-management.jpg";
import areaEducation from "../assets/images/research/area-education.jpg";
import areaNetworks from "../assets/images/research/area-networks.jpg";
import initiativeEcosystems from "../assets/images/research/initiative-ecosystems.jpg";
import initiativeData from "../assets/images/research/initiative-data.jpg";
import initiativePlatforms from "../assets/images/research/initiative-platforms.jpg";
import collaboration from "../assets/images/research/collaboration.jpg";

const areas = [
  { image: areaInnovation, icon: Lightbulb, title: "Organizational Innovation", text: "Exploring strategies and structures that enable organizations to innovate, adapt, and thrive in dynamic environments." },
  { image: areaManagement, icon: Network, title: "Research Management", text: "Focusing on processes and practices that enhance research quality, efficiency, and impact across organizations." },
  { image: areaEducation, icon: GraduationCap, title: "Higher Education Strategy", text: "Examining policies and models that strengthen institutions, advance learning, and expand societal impact." },
  { image: areaNetworks, icon: Users, title: "Knowledge Networks", text: "Building and studying networks that facilitate knowledge exchange, learning, and collaborative problem-solving." },
];

const initiatives = [
  { image: initiativeEcosystems, tag: "Systems", title: "Strengthening Research Ecosystems", text: "Designing approaches that build capacity, connect stakeholders, and enable sustainable research environments." },
  { image: initiativeData, tag: "Analytics", title: "Data-Informed Organizational Decisions", text: "Using data and evidence to guide strategy, improve performance, and support smarter decision-making." },
  { image: initiativePlatforms, tag: "Collaboration", title: "Collaborative Knowledge Platforms", text: "Developing practices that facilitate knowledge sharing, partnerships, and collective problem-solving." },
];

export default function Research() {
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <PageHero variant="research" eyebrow="Research & Innovation" title="Research That Moves Ideas Forward" description="Exploring practical ideas, collaborative inquiry, and evidence-led strategies that strengthen organizations and create lasting impact." image={heroResearch} imageAlt="A multidisciplinary research team discussing data and evidence" action="Explore Research Areas" actionTo="#areas" breadcrumb="Research" />

      {/* ==================== RESEARCH VISION ==================== */}
      <AnimatedSection className="py-14 sm:py-20">
        <Container><SectionHeading title="Research Vision" /><div className="mt-8 grid gap-8 md:grid-cols-[1fr_0.8fr_1fr]"><p className="body-copy">My research connects inquiry with leadership and organizational strategy. I explore how research can inform better decisions, strengthen systems, and support innovation in complex environments.</p><blockquote className="border-y border-[var(--gold)] py-5 text-center font-display text-2xl leading-relaxed text-[var(--navy)]">Research becomes meaningful when insight is transformed into action.</blockquote><p className="body-copy">I am committed to producing work that is rigorous, relevant, and actionable—bridging theory and practice to drive evidence-led strategies that create meaningful and sustainable impact.</p></div></Container>
      </AnimatedSection>

      {/* ==================== CORE RESEARCH AREAS ==================== */}
      <AnimatedSection id="areas" className="pb-16">
        <Container><SectionHeading title="Core Research Areas" /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{areas.map(({ image, icon: Icon, title, text }) => <article key={title} className="card overflow-hidden transition hover:-translate-y-1"><div className="relative h-40"><img src={image} alt="" className="image-cover" /><span className="absolute bottom-3 left-4 grid h-12 w-12 place-items-center rounded-full bg-white/90"><Icon size={25} strokeWidth={1.3} className="text-[var(--navy)]" /></span></div><div className="p-5"><h3 className="font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{text}</p></div></article>)}</div></Container>
      </AnimatedSection>

      {/* ==================== RESEARCH APPROACH ==================== */}
      <AnimatedSection className="bg-[#fcfaf6] py-14">
        <Container><SectionHeading title="Research Approach" /><div className="relative mt-9 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 before:absolute before:left-[8%] before:right-[8%] before:top-5 before:hidden before:border-t before:border-dashed before:border-[var(--sage)]/60 lg:before:block">{[
          [Search,"Identify","Define meaningful questions and clarify research objectives."],
          [Microscope,"Investigate","Gather and analyze evidence through rigorous inquiry."],
          [Users,"Collaborate","Engage stakeholders and co-create knowledge across perspectives."],
          [ClipboardList,"Translate","Convert insights into practical strategies and recommendations."],
          [BarChart3,"Evaluate","Assess outcomes and refine approaches for continuous improvement."],
        ].map(([Icon,title,text],index) => <div key={title} className="relative text-center"><span className={`relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white ${index%4===0?"bg-[var(--sage)]":index%4===1?"bg-[var(--coral)]":index%4===2?"bg-[var(--gold)]":"bg-[var(--navy)]"}`}>{String(index+1).padStart(2,"0")}</span><Icon className="mx-auto mt-4 text-[var(--navy)]" size={29} strokeWidth={1.2} /><h3 className="mt-3 font-display text-lg text-[var(--navy)]">{title}</h3><p className="mt-1 text-xs text-[var(--muted)]">{text}</p></div>)}</div></Container>
      </AnimatedSection>

      {/* ==================== SELECTED INITIATIVES ==================== */}
      <AnimatedSection className="py-14">
        <Container><SectionHeading title="Selected Research Initiatives" /><div className="mt-8 grid gap-6 md:grid-cols-3">{initiatives.map(item => <article key={item.title} className="card overflow-hidden"><img src={item.image} alt="" className="h-40 w-full object-cover" /><div className="p-5"><span className="rounded-full bg-[var(--sage-soft)] px-3 py-1 text-[11px] text-[var(--sage)]">{item.tag}</span><h3 className="mt-3 font-display text-xl text-[var(--navy)]">{item.title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{item.text}</p><Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[var(--navy)]">View Initiative <ArrowRight size={14} /></Link></div></article>)}</div></Container>
      </AnimatedSection>

      {/* ==================== COLLABORATION ==================== */}
      <AnimatedSection className="pb-14">
        <Container><div className="card grid overflow-hidden lg:grid-cols-[1fr_1.1fr]"><img src={collaboration} alt="Researchers participating in a collaborative roundtable" className="h-full min-h-80 w-full object-cover" /><div className="relative p-8 sm:p-10"><h2 className="section-title">Collaboration & Knowledge Exchange</h2><p className="body-copy mt-3">I bring together researchers, institutions, professionals, and decision-makers to co-create knowledge and drive meaningful change.</p><div className="mt-6 space-y-4">{[
          ["Interdisciplinary Dialogue","Encouraging diverse perspectives to deepen understanding and spark innovation."],
          ["Institutional Partnerships","Building strong collaborations that expand reach and strengthen impact."],
          ["Shared Learning","Creating spaces for exchange, reflection, and continuous growth."],
        ].map(([title,text]) => <div key={title} className="flex gap-3"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-[var(--sage)]"><Check size={14} className="text-[var(--sage)]" /></span><div><h3 className="font-display text-lg text-[var(--navy)]">{title}</h3><p className="text-xs text-[var(--muted)]">{text}</p></div></div>)}</div></div></div></Container>
      </AnimatedSection>

      {/* ==================== FROM INQUIRY TO IMPACT ==================== */}
      <AnimatedSection className="py-10">
        <Container><div className="soft-band p-7 sm:p-10"><SectionHeading title="From Inquiry to Impact" /><div className="mt-8 grid gap-5 md:grid-cols-3">{[
          { icon: Lightbulb, title: "Insight", text: "We explore complex questions, challenge assumptions, and generate meaningful insights." },
          { icon: Target, title: "Strategy", text: "We translate insights into strategies aligned with goals and effective action." },
          { icon: Sprout, title: "Sustainable Change", text: "We contribute to stronger systems, resilient organizations, and lasting societal impact." },
        ].map(({ icon: Icon,title,text },index) => <div key={title} className="relative rounded-xl bg-white p-6 text-center shadow-sm"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#d9d1c4]"><Icon size={31} strokeWidth={1.2} className="text-[var(--navy)]" /></div><h3 className="mt-4 font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p>{index<2 && <ArrowRight className="absolute -right-4 top-1/2 hidden text-[var(--sage)] md:block" />}</div>)}</div></div></Container>
      </AnimatedSection>

      {/* ==================== CONTRIBUTIONS ==================== */}
      <AnimatedSection className="py-14">
        <Container><SectionHeading title="Research Contributions" /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
          { icon: ClipboardList, title: "Research Coordination", text: "Planning and overseeing research activities to ensure quality and alignment." },
          { icon: Handshake, title: "Academic Collaboration", text: "Working with scholars and professionals across disciplines." },
          { icon: BookOpen, title: "Knowledge Dissemination", text: "Sharing findings through publications, platforms, and conversations." },
          { icon: Rocket, title: "Innovation Support", text: "Supporting initiatives that turn ideas into practical solutions." },
        ].map(({icon:Icon,title,text}) => <div key={title} className="card p-6 text-center"><Icon className="mx-auto text-[var(--navy)]" size={33} strokeWidth={1.2} /><h3 className="mt-3 font-display text-lg text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p></div>)}</div></Container>
      </AnimatedSection>

      <CTASection title="Interested in Research Collaboration?" text="Let’s connect to explore ideas, share perspectives, and create meaningful impact together." />
    </main>
  );
}
