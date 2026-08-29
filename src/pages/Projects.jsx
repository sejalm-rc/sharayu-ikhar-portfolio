import { ArrowRight, Check, Cog, Handshake, Lightbulb, Network, Sprout, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import heroPlanning from "../assets/images/projects/hero-planning.jpg";
import initiativeNetwork from "../assets/images/projects/initiative-network.jpg";
import initiativeKnowledge from "../assets/images/projects/initiative-knowledge.jpg";
import initiativeGrowth from "../assets/images/projects/initiative-growth.jpg";
import collaborationCore from "../assets/images/projects/collaboration-core.jpg";

const initiatives = [
  { image: initiativeNetwork, tag: "Collaboration", title: "Research Collaboration Network", text: "Connecting researchers and practitioners to co-create solutions for shared challenges." },
  { image: initiativeKnowledge, tag: "Knowledge", title: "Knowledge Exchange Initiative", text: "Facilitating dialogue, learning, and exchange across communities and institutions." },
  { image: initiativeGrowth, tag: "Growth", title: "Organizational Growth Program", text: "Strengthening systems, leadership, and capabilities for sustainable growth." },
];

export default function Projects() {
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <PageHero eyebrow="Projects & Organizations" title="Building Organizations. Driving Impact." description="Through research, innovation, and collaboration, meaningful initiatives can connect people, strengthen systems, and create sustainable value." image={heroPlanning} imageAlt="Team planning an organizational initiative with notes and schedules" action="Explore Initiatives" actionTo="#initiatives" breadcrumb="Projects" />

      {/* ==================== ORGANIZATION ==================== */}
      <AnimatedSection className="py-16 sm:py-20">
        <Container><SectionHeading eyebrow="My Companies" title="Organizations Built Around Purpose" description="I build and support organizations that align research, industry, institutions, and society to solve meaningful problems and create long-term impact." /><div className="card mt-10 p-7 sm:p-10"><div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.4fr]"><div className="mx-auto grid h-52 w-52 place-items-center rounded-full border border-[var(--gold)]/60 bg-[#f2f1ea] shadow-inner"><span className="font-display text-7xl tracking-[-0.12em] text-[var(--navy)]">RC</span></div><div><h2 className="section-title">Researcher Connect</h2><p className="mt-1 text-sm uppercase tracking-[0.14em] text-[var(--gold)]">Innovation and Impact Private Limited</p><p className="body-copy mt-4 max-w-2xl">A collaborative platform designed to connect researchers, institutions, and professionals while supporting innovation and practical impact.</p><p className="mt-4 text-xs text-[var(--muted)]">Organization details and links can be updated with verified information.</p></div></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
          { icon: Network, title: "Researcher Network", text: "Connecting people and expertise across disciplines." }, { icon: Lightbulb, title: "Innovation Solutions", text: "Transforming strong ideas into practical initiatives." }, { icon: Target, title: "Impact Projects", text: "Supporting work designed for meaningful outcomes." }, { icon: Handshake, title: "Industry Collaboration", text: "Building bridges between research and practice." },
        ].map(({icon:Icon,title,text}) => <div key={title} className="rounded-lg border border-[#e3ddd4] p-5 text-center"><Icon className="mx-auto text-[var(--navy)]" size={35} strokeWidth={1.2} /><h3 className="mt-4 font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p></div>)}</div></div></Container>
      </AnimatedSection>

      {/* ==================== VISION ==================== */}
      <AnimatedSection className="pb-14">
        <Container><div className="soft-band flex flex-col items-start justify-between gap-7 p-8 sm:p-10 md:flex-row md:items-center"><div className="flex items-center gap-6"><span className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-white/60"><Sprout size={48} strokeWidth={1.2} className="text-[var(--sage)]" /></span><div><p className="eyebrow text-[var(--gold)]">Vision</p><p className="mt-2 max-w-2xl font-display text-2xl leading-relaxed text-[var(--navy)]">To strengthen a collaborative ecosystem where research, leadership, and innovation contribute to sustainable progress.</p></div></div><button type="button" className="btn-outline shrink-0">Visit Website</button></div></Container>
      </AnimatedSection>

      {/* ==================== INITIATIVES ==================== */}
      <AnimatedSection id="initiatives" className="py-10">
        <Container><SectionHeading title="Selected Initiatives" /><div className="mt-8 grid gap-6 md:grid-cols-3">{initiatives.map(item => <article key={item.title} className="card overflow-hidden transition hover:-translate-y-1"><img src={item.image} alt="" className="h-44 w-full object-cover" /><div className="p-5"><span className="rounded-full bg-[#edf2ed] px-3 py-1 text-[11px] text-[var(--sage)]">{item.tag}</span><h3 className="mt-3 font-display text-xl text-[var(--navy)]">{item.title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{item.text}</p><Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--navy)]">View Initiative <ArrowRight size={15} /></Link></div></article>)}</div><p className="mt-5 text-center text-xs text-[var(--muted)]">Sample initiative content — verified details can be added later.</p></Container>
      </AnimatedSection>

      {/* ==================== CONTRIBUTION ==================== */}
      <AnimatedSection className="py-14">
        <Container><SectionHeading title="How I Contribute" /><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[
          { icon: Sprout, title: "Shape the Direction", text: "Define purpose, priorities, and strategies that create meaningful impact." }, { icon: Users, title: "Align the Team", text: "Bring the right people together and build alignment around shared goals." }, { icon: Cog, title: "Enable Delivery", text: "Design processes and systems that help teams execute with focus and clarity." }, { icon: TrendingUp, title: "Strengthen Impact", text: "Measure progress, learn continuously, and amplify positive outcomes." },
        ].map(({icon:Icon,title,text}) => <div key={title} className="border-r border-dashed border-[#d5cbc0] px-5 text-center last:border-0"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[var(--sage)]"><Icon size={28} strokeWidth={1.2} className="text-[var(--sage)]" /></span><h3 className="mt-4 font-display text-lg text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p></div>)}</div></Container>
      </AnimatedSection>

      {/* ==================== COLLABORATION ==================== */}
      <AnimatedSection className="pb-12">
        <Container><div className="card grid overflow-hidden lg:grid-cols-[0.9fr_1.1fr]"><div className="p-8 sm:p-10"><h2 className="section-title">Collaboration at the Core</h2><p className="body-copy mt-4">Great initiatives are built together. I believe in aligning researchers, institutions, professionals, and partners around common goals to design solutions that are inclusive, practical, and impactful.</p><div className="mt-6 space-y-3">{["Shared Objectives","Clear Communication","Collective Ownership"].map(item => <p key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]"><Check size={18} className="text-[var(--sage)]" />{item}</p>)}</div></div><img src={collaborationCore} alt="Collaborative team organizing project ideas on a board" className="h-full min-h-72 w-full object-cover" /></div></Container>
      </AnimatedSection>
      <CTASection title="Let’s Build Meaningful Initiatives Together" text="Connect research, strategy, and people to create purposeful impact." coral={false} />
    </main>
  );
}
