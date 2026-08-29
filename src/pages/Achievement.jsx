import { ArrowRight, Award, BookOpen, Crown, Handshake, Heart, Medal, Network, Scale, Sprout, Star, TrendingUp, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import heroAwards from "../assets/images/achievement/hero-awards.jpg";
import featuredCertificate from "../assets/images/achievement/featured-certificate.jpg";
import certificateLeadership from "../assets/images/achievement/certificate-leadership.jpg";
import certificateResearch from "../assets/images/achievement/certificate-research.jpg";
import certificateService from "../assets/images/achievement/certificate-service.jpg";

const awards = [
  { icon: Medal, category: "Leadership", title: "Leadership Excellence Recognition", color: "text-[var(--coral)]" },
  { icon: Award, category: "Research", title: "Research Contribution Honour", color: "text-[var(--sage)]" },
  { icon: Medal, category: "Impact", title: "Organizational Impact Appreciation", color: "text-[var(--gold)]" },
  { icon: Award, category: "Collaboration", title: "Collaborative Partnership Recognition", color: "text-[var(--sage)]" },
  { icon: BookOpen, category: "Knowledge", title: "Knowledge Advancement Certificate", color: "text-[var(--gold)]" },
  { icon: Star, category: "Service", title: "Professional Service Appreciation", color: "text-[var(--coral)]" },
];

export default function Achievement() {
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <PageHero eyebrow="Achievements & Recognition" title="Milestones That Reflect Meaningful Progress" description="A thoughtful record of professional growth, leadership contributions, and recognition shaped by purposeful work and collaboration." image={heroAwards} imageAlt="Professional awards, certificate, medal, and open notebook" action="Explore Highlights" actionTo="#recognition" secondary={{ to: "/about", label: "View Journey" }} breadcrumb="Achievements" />

      <AnimatedSection className="-mt-4 pb-10">
        <Container><div className="flex flex-wrap gap-3">{[
          [Users,"Leadership"],[BookOpen,"Research Contribution"],[TrendingUp,"Organizational Impact"],[Handshake,"Collaboration"],
        ].map(([Icon,title]) => <span key={title} className="inline-flex items-center gap-2 rounded-full bg-[#e9efea] px-4 py-2 text-xs text-[var(--sage)]"><Icon size={16} />{title}</span>)}</div></Container>
      </AnimatedSection>

      {/* ==================== SELECTED RECOGNITION ==================== */}
      <AnimatedSection id="recognition" className="py-14">
        <Container><SectionHeading eyebrow="Selected Recognition" title="Honoring Work That Creates Lasting Value" description="A flexible space for verified professional honours and acknowledgements." align="left" /><div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.8fr]"><div className="card grid items-center gap-7 p-7 sm:grid-cols-[0.75fr_1fr]"><img src={featuredCertificate} alt="Featured professional recognition certificate" className="h-64 w-full rounded-lg object-cover" /><div><p className="eyebrow text-[var(--gold)]">Featured Highlight</p><h3 className="mt-3 font-display text-3xl text-[var(--navy)]">Professional Leadership Recognition</h3><p className="body-copy mt-3">Reserved for a verified honour celebrating leadership, operational excellence, or meaningful organizational contribution.</p><button type="button" className="btn-outline mt-5">Details to be updated</button></div></div><div className="grid gap-4">{[
          { icon:BookOpen,title:"Research Contribution",text:"For verified recognition of research-led work." }, { icon:TrendingUp,title:"Organizational Impact",text:"For acknowledged operational or strategic outcomes." }, { icon:Users,title:"Collaborative Excellence",text:"For honours shaped through partnership and teamwork." },
        ].map(({icon:Icon,title,text}) => <div key={title} className="card flex items-center gap-5 p-5"><Icon size={42} strokeWidth={1.2} className="text-[var(--coral)]" /><div><h3 className="font-display text-xl text-[var(--navy)]">{title}</h3><p className="text-sm text-[var(--muted)]">{text}</p></div></div>)}</div></div></Container>
      </AnimatedSection>

      {/* ==================== AWARDS ==================== */}
      <AnimatedSection className="bg-[#edf3ee] py-16">
        <Container><SectionHeading eyebrow="Awards & Honours" title="Recognition Across Areas of Contribution" align="left" /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{awards.map(({icon:Icon,category,title,color}) => <article key={title} className="card flex items-center gap-5 p-6"><Icon size={48} strokeWidth={1.15} className={color} /><div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--sage)]">{category}</p><h3 className="mt-1 font-display text-xl leading-tight text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">Verified details to be added</p></div><ArrowRight className="ml-auto self-end text-[var(--muted)]" size={17} /></article>)}</div></Container>
      </AnimatedSection>

      {/* ==================== MILESTONES ==================== */}
      <AnimatedSection className="py-16">
        <Container><SectionHeading eyebrow="The Journey" title="Key Milestones" align="left" /><div className="relative mt-8 grid gap-5 lg:grid-cols-2 lg:gap-x-20 before:absolute before:bottom-5 before:left-1/2 before:top-5 before:hidden before:w-px before:bg-[var(--coral)]/60 lg:before:block">{[
          { icon:Sprout,title:"Building Strong Foundations",text:"Developing the discipline, perspective, and collaborative habits behind sustained professional growth." }, { icon:Crown,title:"Strengthening Operations",text:"Creating clearer systems, resilient teams, and purposeful ways of working." }, { icon:Network,title:"Advancing Research Collaboration",text:"Connecting ideas, people, and practice to support thoughtful innovation." }, { icon:TrendingUp,title:"Creating Broader Impact",text:"Turning experience into contribution, mentorship, and lasting value." },
        ].map(({icon:Icon,title,text},index) => <div key={title} className={`card relative flex gap-5 p-6 ${index%2 ? "lg:col-start-2" : ""}`}><Icon size={38} strokeWidth={1.2} className="text-[var(--sage)]" /><div><h3 className="font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p></div></div>)}</div></Container>
      </AnimatedSection>

      {/* ==================== VALUES ==================== */}
      <AnimatedSection className="bg-[var(--navy-deep)] py-16 text-white">
        <Container><p className="eyebrow text-[var(--gold)]">Beyond the Milestones</p><h2 className="mt-2 font-display text-3xl sm:text-4xl">The Values Behind Every Achievement</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
          {icon:Scale,title:"Integrity",text:"Leading with clarity and accountability."},{icon:Star,title:"Excellence",text:"Raising the standard through thoughtful execution."},{icon:Users,title:"Collaboration",text:"Creating progress through shared purpose."},{icon:Heart,title:"Impact",text:"Focusing effort where it matters most."},
        ].map(({icon:Icon,title,text}) => <div key={title} className="rounded-lg border border-white/30 p-7 text-center"><Icon className="mx-auto text-[var(--gold)]" size={42} strokeWidth={1.2} /><h3 className="mt-4 font-display text-2xl">{title}</h3><p className="mt-2 text-sm text-white/70">{text}</p></div>)}</div></Container>
      </AnimatedSection>

      {/* ==================== CERTIFICATES ==================== */}
      <AnimatedSection className="py-16">
        <Container><SectionHeading title="Certificates & Honours" align="left" /><div className="mt-8 grid gap-6 md:grid-cols-3">{[
          {image:certificateLeadership,title:"Leadership Recognition"},{image:certificateResearch,title:"Research Contribution"},{image:certificateService,title:"Professional Service"},
        ].map(item => <article key={item.title} className="card overflow-hidden"><img src={item.image} alt="" className="h-44 w-full object-cover" /><div className="p-5"><h3 className="font-display text-xl text-[var(--navy)]">{item.title}</h3><p className="text-xs text-[var(--muted)]">Details to be updated</p><button type="button" className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--sage)]">View Detail <ArrowRight size={15} /></button></div></article>)}</div></Container>
      </AnimatedSection>
      <CTASection title="Let’s Build Meaningful Impact Together" text="Open to conversations around leadership, collaboration, research, and purposeful growth." coral={false} />
    </main>
  );
}
