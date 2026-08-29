import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Award, BookOpen, BriefcaseBusiness, Cog, Handshake, Lightbulb, Mail, MessageCircle, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import FeatureStrip from "../components/FeatureStrip";
import SectionHeading from "../components/SectionHeading";
import heroPortrait from "../assets/images/home/hero-portrait.jpg";
import leadershipSession from "../assets/images/home/leadership-session.jpg";
import researchWork from "../assets/images/home/research-work.jpg";
import publicationData from "../assets/images/home/publication-data.jpg";
import projectPlanning from "../assets/images/home/project-planning.jpg";
import mediaPanel from "../assets/images/home/media-panel.jpg";
import mediaInterview from "../assets/images/home/media-interview.jpg";
import mediaConference from "../assets/images/home/media-conference.jpg";

const focusAreas = [
  { icon: Lightbulb, title: "Research & Innovation", text: "Advancing knowledge through rigorous inquiry and innovative thinking." },
  { icon: Target, title: "Organizational Strategy", text: "Designing strategies that align purpose with performance." },
  { icon: Handshake, title: "Knowledge Partnerships", text: "Building collaborations that create value and lasting impact." },
];

const selectedWork = [
  { image: researchWork, tag: "Research", title: "Strengthening Collaboration in Higher Education", text: "Exploring models that foster interdisciplinary research partnerships.", to: "/research", color: "bg-[var(--coral)]" },
  { image: publicationData, tag: "Publication", title: "Data-Informed Decision Making", text: "A framework for translating research insights into actionable strategy.", to: "/publication", color: "bg-[var(--sage)]" },
  { image: projectPlanning, tag: "Project", title: "Operational Transformation Initiative", text: "Streamlining processes to drive efficiency and sustainable growth.", to: "/projects", color: "bg-[var(--gold)]" },
];

const mediaItems = [
  { image: mediaPanel, label: "Panel Discussion", title: "Future of Higher Education Leadership" },
  { image: mediaInterview, label: "Interview", title: "Driving Impact Through Collaboration" },
  { image: mediaConference, label: "Conference Highlight", title: "Research, Innovation & Societal Impact" },
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(120deg,#fbf7f0_0%,#fffdfa_62%,#eef2ee_100%)]">
        <Container className="grid min-h-[630px] items-center gap-10 py-14 md:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .65 }}>
            <p className="eyebrow mb-4">Leadership&nbsp;&nbsp;•&nbsp;&nbsp;Research&nbsp;&nbsp;•&nbsp;&nbsp;Impact</p>
            <h1 className="page-title max-w-[620px]">Shaping Ideas Into Meaningful Impact</h1>
            <p className="body-copy mt-5 max-w-[540px]">I&apos;m Sharayu Ikhar, a Chief Operating Officer focused on strategic leadership, research excellence, and innovation-driven growth.</p>
            <div className="mt-8 flex flex-wrap gap-4"><Link to="/projects" className="btn-primary">Explore My Work</Link><Link to="/publication" className="btn-outline">View Publications</Link></div>
            <div className="mt-8 flex gap-5 text-[var(--navy)]"><BriefcaseBusiness size={19} /><MessageCircle size={19} /><Mail size={19} /></div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .08 }} className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-7 bottom-8 h-48 w-14 bg-[var(--sage)]/55" />
            <div className="absolute -right-8 top-32 h-40 w-40 rounded-full bg-[var(--coral)]" />
            <div className="absolute -right-14 bottom-2 h-40 w-40 rounded-br-[95%] border-b border-r border-[var(--gold)]/70" />
            <img src={heroPortrait} alt="Sharayu Ikhar in a professional portrait" className="relative z-10 aspect-[0.88/1] w-full rounded-[46%_46%_12px_12px] object-cover object-top shadow-[var(--shadow)]" />
          </motion.div>
        </Container>
      </section>

      <FeatureStrip items={[
        { icon: Target, title: "Strategic Leadership" }, { icon: Users, title: "Research Collaboration" },
        { icon: Cog, title: "Operational Excellence" }, { icon: BookOpen, title: "Academic Outreach" },
      ]} />

      {/* ==================== ABOUT SHARAYU ==================== */}
      <AnimatedSection className="py-12 sm:py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[14px]"><img src={leadershipSession} alt="Leadership team reviewing research and strategy" className="aspect-[1.75/1] w-full object-cover transition duration-500 hover:scale-[1.03]" /></div>
          <div><p className="eyebrow">About Sharayu</p><h2 className="section-title mt-2">Leadership with Purpose</h2><p className="body-copy mt-4">I believe meaningful impact begins with connecting people, clarifying strategy, and enabling ideas to grow. As a Chief Operating Officer, I work at the intersection of research, operations, and partnerships to turn vision into measurable results.</p><p className="body-copy mt-3">My approach is collaborative, thoughtful, and rooted in a commitment to build systems that empower individuals and institutions alike.</p><Link to="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--sage)]">Discover My Journey <ArrowRight size={16} /></Link></div>
        </Container>
      </AnimatedSection>

      {/* ==================== AREAS OF FOCUS ==================== */}
      <AnimatedSection className="border-y border-[#eee8df] bg-[#fcfaf6] py-14 sm:py-16">
        <Container><SectionHeading title="Areas of Focus" />
          <div className="mt-9 grid gap-5 md:grid-cols-3">{focusAreas.map(({ icon: Icon, title, text }) => <motion.article whileHover={{ y: -5 }} key={title} className="card flex gap-5 p-6"><div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-[#f4f0e8]"><Icon size={30} strokeWidth={1.3} className="text-[var(--navy)]" /></div><div><h3 className="font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p></div></motion.article>)}</div>
        </Container>
      </AnimatedSection>

      {/* ==================== SELECTED WORK ==================== */}
      <AnimatedSection className="py-14 sm:py-16">
        <Container><div className="flex items-end justify-between gap-5"><SectionHeading title="Selected Work" align="left" /><Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[var(--sage)]">View All Work <ArrowRight size={16} /></Link></div>
          <div className="mt-7 grid gap-6 md:grid-cols-3">{selectedWork.map(item => <motion.article whileHover={{ y: -6 }} key={item.title} className="card overflow-hidden"><div className="relative h-44"><img src={item.image} alt="" className="image-cover" /><span className={`absolute bottom-0 left-4 rounded-full px-4 py-1 text-xs text-white ${item.color}`}>{item.tag}</span></div><div className="p-5"><h3 className="font-display text-xl text-[var(--navy)]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.text}</p><Link to={item.to} className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--sage)]">Explore <ArrowRight size={15} /></Link></div></motion.article>)}</div>
        </Container>
      </AnimatedSection>

      {/* ==================== FEATURED PUBLICATION & RECOGNITION ==================== */}
      <AnimatedSection className="pb-16">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="card p-7"><h2 className="font-display text-2xl text-[var(--navy)]">Featured Publication</h2><div className="mt-5 flex min-h-56 items-center gap-6 rounded-lg border border-[#e5ded3] bg-[#f3f0e8] p-6"><BookOpen size={76} strokeWidth={1} className="text-[var(--sage)]" /><div><h3 className="font-display text-2xl text-[var(--navy)]">Building Better Systems Through Research</h3><p className="mt-2 text-sm text-[var(--muted)]">An exploration of how research-led approaches can create resilient systems and long-term value.</p><Link to="/publication" className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--sage)]">Read Publication <ArrowRight size={15} /></Link></div></div></div>
          <div className="card p-7"><h2 className="font-display text-2xl text-[var(--navy)]">Achievements & Recognition</h2><div className="mt-5 grid gap-3">{["Leadership Recognition", "Research Contribution", "Collaborative Impact"].map(title => <div key={title} className="flex items-center gap-4 rounded-lg border border-[#e5ded3] p-4"><Award className="text-[var(--gold)]" size={32} /><div><h3 className="font-display text-lg text-[var(--navy)]">{title}</h3><p className="text-xs text-[var(--muted)]">Recognition details can be updated with verified information.</p></div></div>)}</div><Link to="/achievement" className="mt-5 inline-flex items-center gap-2 text-sm text-[var(--sage)]">View Achievements <ArrowRight size={15} /></Link></div>
        </Container>
      </AnimatedSection>

      {/* ==================== MEDIA ==================== */}
      <AnimatedSection className="border-t border-[#eee8df] py-14">
        <Container><div className="flex items-end justify-between gap-5"><SectionHeading title="In the Media" align="left" /><Link to="/media" className="inline-flex items-center gap-2 text-sm text-[var(--sage)]">Explore Media <ArrowRight size={16} /></Link></div><div className="mt-7 grid gap-5 md:grid-cols-3">{mediaItems.map(item => <motion.article whileHover={{ y: -5 }} key={item.title} className="card overflow-hidden"><div className="relative h-40"><img src={item.image} alt="" className="image-cover" /><span className="absolute bottom-2 left-3 rounded-full bg-[var(--coral)] px-3 py-1 text-[11px] text-white">{item.label}</span></div><div className="p-4"><h3 className="font-display text-lg text-[var(--navy)]">{item.title}</h3><p className="mt-1 text-xs text-[var(--muted)]">Insights on the evolving role of leadership in research and impact.</p></div></motion.article>)}</div></Container>
      </AnimatedSection>
      <CTASection />
    </main>
  );
}
