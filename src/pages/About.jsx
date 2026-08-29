import { ArrowRight, BarChart3, Ear, Heart, Medal, Microscope, Network, Route, ShieldCheck, Target, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import FeatureStrip from "../components/FeatureStrip";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import heroStrategy from "../assets/images/about/hero-strategy.jpg";
import strategicRoadmap from "../assets/images/about/strategic-roadmap.jpg";
import learningDesk from "../assets/images/about/learning-desk.jpg";

const bring = [
  { icon: Route, title: "Strategic Planning", text: "Developing clear strategies that align vision with action and drive meaningful outcomes." },
  { icon: Workflow, title: "Operational Leadership", text: "Leading day-to-day operations with focus on efficiency, quality, and continuous improvement." },
  { icon: Users, title: "Team Development", text: "Empowering teams to grow, collaborate, and perform at their highest potential." },
  { icon: Network, title: "Research Collaboration", text: "Partnering with researchers and institutions to support impactful and relevant work." },
  { icon: Target, title: "Process Excellence", text: "Designing and refining processes that enhance effectiveness and accountability." },
  { icon: Heart, title: "Partnership Building", text: "Building strong relationships that expand opportunity and create shared value." },
];

const journey = [
  ["01", "Building Strong Foundations", "Developed a solid grounding in operations, project management, and organizational systems."],
  ["02", "Leading Complex Operations", "Took on broader leadership responsibilities to streamline operations and support growth."],
  ["03", "Advancing Research Ecosystems", "Focused on enabling research initiatives, strengthening collaborations, and supporting knowledge advancement."],
  ["04", "Creating Collaborative Impact", "Bringing together people, ideas, and resources to deliver sustainable impact across communities and institutions."],
];

export default function About() {
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <PageHero eyebrow="About Sharayu Ikhar" title="Leadership Rooted in Purpose" description="Connecting people, strategy, research, and innovation to build organizations that create meaningful impact." image={heroStrategy} imageAlt="Research and strategy materials arranged on a collaborative work table" action="Discover My Journey" actionTo="#journey" breadcrumb="About" />

      {/* ==================== LEADERSHIP STORY ==================== */}
      <AnimatedSection id="journey" className="py-14 sm:py-20">
        <Container><SectionHeading title="A Journey of Leadership & Purpose" align="left" />
          <div className="mt-8 grid gap-9 md:grid-cols-[0.8fr_1.5fr]">
            <blockquote className="border-b border-[var(--gold)] pb-7 pl-12 font-display text-[clamp(1.5rem,2.6vw,2.3rem)] leading-snug text-[var(--navy)] before:-ml-11 before:mr-3 before:text-6xl before:text-[var(--gold)] before:content-['“']">Meaningful leadership begins with clarity, collaboration, and the courage to turn ideas into action.</blockquote>
            <div className="space-y-4 body-copy"><p>As a Chief Operating Officer, I focus on aligning teams, strengthening systems, and supporting research-led initiatives that drive progress. My work sits at the intersection of strategy and execution—turning ideas into actionable plans and creating the conditions for people and projects to thrive.</p><p>I believe sustainable growth is built through trust, clear communication, and a shared commitment to purpose. By fostering collaboration and operational excellence, I help organizations advance their missions and deliver lasting impact.</p></div>
          </div>
        </Container>
      </AnimatedSection>

      <FeatureStrip items={[
        { icon: Users, title: "People-Centered Leadership" }, { icon: Target, title: "Strategic Execution" },
        { icon: Microscope, title: "Research Advancement" }, { icon: Heart, title: "Sustainable Growth" },
      ]} />

      {/* ==================== CAPABILITIES ==================== */}
      <AnimatedSection className="py-14">
        <Container><SectionHeading title="What I Bring to the Table" align="left" /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{bring.map(({ icon: Icon, title, text }) => <article key={title} className="card flex gap-5 p-6 transition hover:-translate-y-1"><div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#f4f0e8]"><Icon size={28} strokeWidth={1.3} className="text-[var(--navy)]" /></div><div><h3 className="font-display text-lg text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{text}</p></div></article>)}</div></Container>
      </AnimatedSection>

      {/* ==================== PROFESSIONAL JOURNEY ==================== */}
      <AnimatedSection className="py-10 sm:py-16">
        <Container><SectionHeading title="My Professional Journey" align="left" /><div className="mt-8 grid items-center gap-10 lg:grid-cols-2"><div className="relative space-y-6 before:absolute before:bottom-5 before:left-5 before:top-5 before:w-px before:bg-[var(--coral)]/60">{journey.map(([number, title, text], index) => <div key={number} className="relative flex gap-5"><span className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-semibold text-white ${index === 0 ? "bg-[var(--coral)]" : index === 1 ? "bg-[var(--sage)]" : index === 2 ? "bg-[var(--gold)]" : "bg-[var(--navy)]"}`}>{number}</span><div><h3 className="font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-1 text-sm text-[var(--muted)]">{text}</p></div></div>)}</div><img src={strategicRoadmap} alt="Leadership presentation about a strategic roadmap" className="aspect-[1.55/1] w-full rounded-[16px] object-cover shadow-[var(--shadow)]" /></div></Container>
      </AnimatedSection>

      {/* ==================== VALUES ==================== */}
      <AnimatedSection className="py-10">
        <Container><div className="soft-band p-7"><SectionHeading title="Values That Guide My Work" /><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[
          { icon: ShieldCheck, title: "Integrity", text: "I lead with honesty, transparency, and a strong sense of accountability." },
          { icon: Users, title: "Collaboration", text: "I value diverse perspectives and believe great outcomes come from working together." },
          { icon: Medal, title: "Excellence", text: "I strive for excellence in everything I do, with attention to detail and quality." },
          { icon: Heart, title: "Impact", text: "I focus on creating meaningful, positive change that benefits people and society." },
        ].map(({ icon: Icon, title, text }) => <div key={title} className="text-center"><Icon className="mx-auto text-[var(--navy)]" size={40} strokeWidth={1.2} /><h3 className="mt-3 font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p></div>)}</div></div></Container>
      </AnimatedSection>

      {/* ==================== IMPACT PROCESS ==================== */}
      <AnimatedSection className="py-14">
        <Container><SectionHeading title="How I Create Impact" /><div className="relative mt-10 grid gap-7 md:grid-cols-4 before:absolute before:left-[12%] before:right-[12%] before:top-8 before:hidden before:h-px before:bg-[var(--coral)] md:before:block">{[
          { icon: Ear, title: "Listen & Understand", text: "I listen deeply to understand needs, challenges, and opportunities." },
          { icon: Target, title: "Align the Strategy", text: "I translate insights into clear strategies that align teams and resources." },
          { icon: Users, title: "Enable the Team", text: "I empower teams with the right tools, clarity, and support to succeed." },
          { icon: BarChart3, title: "Measure & Improve", text: "I measure outcomes, learn, and continuously refine for greater impact." },
        ].map(({ icon: Icon, title, text }) => <div key={title} className="relative text-center"><div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border border-[var(--gold)] bg-[var(--paper)]"><Icon size={30} strokeWidth={1.3} className="text-[var(--navy)]" /></div><h3 className="mt-4 font-display text-lg text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p></div>)}</div></Container>
      </AnimatedSection>

      {/* ==================== BEYOND THE ROLE ==================== */}
      <AnimatedSection className="pb-10">
        <Container><div className="card grid overflow-hidden lg:grid-cols-2"><div className="p-8 sm:p-10"><h2 className="section-title">Beyond the Role</h2><p className="body-copy mt-4">Beyond my core responsibilities, I am committed to mentoring emerging leaders, supporting knowledge exchange, and strengthening academic and professional communities. I believe in the power of continuous learning and investing time in initiatives that inspire growth and curiosity.</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--sage)]">Let&apos;s Connect <ArrowRight size={16} /></Link></div><img src={learningDesk} alt="Leadership and research books on a learning desk" className="h-full min-h-64 w-full object-cover" /></div></Container>
      </AnimatedSection>
      <CTASection title="Let’s Build Something Meaningful" />
    </main>
  );
}
