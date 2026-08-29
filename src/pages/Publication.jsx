import { useMemo, useState } from "react";
import { ArrowRight, BookOpen, Check, Feather, FileText, GraduationCap, Handshake, Lightbulb, Presentation, Share2, Sprout, Target, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import FeatureStrip from "../components/FeatureStrip";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import heroPublication from "../assets/images/publication/hero-publication.jpg";
import typeArticles from "../assets/images/publication/type-articles.jpg";
import typeBooks from "../assets/images/publication/type-books.jpg";
import typeConference from "../assets/images/publication/type-conference.jpg";
import typeInsights from "../assets/images/publication/type-insights.jpg";
import featuredBook from "../assets/images/publication/featured-book.jpg";
import writingDesk from "../assets/images/publication/writing-desk.jpg";

const publicationTypes = [
  { image: typeArticles, title: "Peer-Reviewed Articles", text: "In-depth studies and empirical analyses published in peer-reviewed journals." },
  { image: typeBooks, title: "Books & Chapters", text: "Contributions to edited volumes and authored chapters that expand key ideas." },
  { image: typeConference, title: "Conference Contributions", text: "Papers and presentations shared at academic and professional conferences." },
  { image: typeInsights, title: "Editorial Perspectives", text: "Short-form reflections and opinions on emerging themes and conversations." },
];

const publications = [
  { title: "Publication Title Placeholder", detail: "Publication details to be updated", type: "Articles", icon: FileText, color: "bg-[#6e93aa]" },
  { title: "Collaborative Research Publication", detail: "Publication details to be updated", type: "Chapters", icon: BookOpen, color: "bg-[var(--sage)]" },
  { title: "Conference Contribution Title", detail: "Publication details to be updated", type: "Conference", icon: Presentation, color: "bg-[var(--coral)]" },
  { title: "Professional Insight Article", detail: "Publication details to be updated", type: "Insights", icon: Feather, color: "bg-[var(--gold)]" },
];

export default function Publication() {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => filter === "All" ? publications : publications.filter(item => item.type === filter), [filter]);
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <PageHero eyebrow="Publications & Scholarly Work" title="Ideas Shared Through Knowledge" description="A curated space for scholarly contributions, collaborative writing, and research-led perspectives that connect insight with practice." image={heroPublication} imageAlt="Books, an open journal, and a tablet displaying research graphics" action="Browse Publications" actionTo="#selected-publications" breadcrumb="Publications" />
      <FeatureStrip items={[
        { icon: FileText, title: "Journal Articles" }, { icon: BookOpen, title: "Book Chapters" },
        { icon: Presentation, title: "Conference Papers" }, { icon: Feather, title: "Professional Insights" },
      ]} />

      {/* ==================== PUBLICATION OVERVIEW ==================== */}
      <AnimatedSection className="py-12 sm:py-16">
        <Container><SectionHeading title="Publication Overview" description="Documenting ideas, sharing evidence, supporting research communities, and encouraging knowledge exchange that drives meaningful impact." /><blockquote className="mx-auto mt-8 max-w-2xl border-y border-[var(--gold)] py-5 text-center font-display text-2xl leading-relaxed text-[var(--navy)]">Knowledge creates value when it is shared clearly, responsibly, and with purpose.</blockquote></Container>
      </AnimatedSection>

      {/* ==================== PUBLICATION TYPES ==================== */}
      <AnimatedSection className="pb-16">
        <Container><SectionHeading title="Browse by Publication Type" /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{publicationTypes.map(item => <article key={item.title} className="card overflow-hidden transition hover:-translate-y-1"><img src={item.image} alt="" className="h-40 w-full object-cover" /><div className="p-5"><h3 className="font-display text-xl text-[var(--navy)]">{item.title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{item.text}</p><a href="#selected-publications" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--navy)]">Explore <ArrowRight size={15} /></a></div></article>)}</div></Container>
      </AnimatedSection>

      {/* ==================== FEATURED WORK ==================== */}
      <AnimatedSection className="pb-16">
        <Container><div className="card relative grid overflow-hidden lg:grid-cols-[0.85fr_1.35fr]"><div className="bg-[#f1efe8] p-8 sm:p-10"><img src={featuredBook} alt="Featured publication cover titled Building Better Systems Through Research" className="mx-auto h-[330px] w-auto rounded-sm object-cover shadow-xl" /></div><div className="p-8 sm:p-12"><p className="eyebrow">Featured Work</p><h2 className="section-title mt-3">Building Better Systems Through Research</h2><p className="body-copy mt-4">This work explores how evidence-based insights can be translated into organizational strategies that strengthen systems, support innovation, and create sustainable impact.</p><div className="mt-5 flex flex-wrap gap-2">{["Leadership","Research","Innovation"].map(tag => <span key={tag} className="rounded border border-[#d9d1c7] px-3 py-1 text-xs text-[var(--muted)]">{tag}</span>)}</div><div className="mt-7 flex flex-wrap gap-4"><button type="button" className="btn-primary">Read Abstract</button><button type="button" className="btn-outline">View Details</button></div><p className="mt-5 text-xs text-[var(--muted)]">Sample content — publication details to be updated.</p></div></div></Container>
      </AnimatedSection>

      {/* ==================== SELECTED PUBLICATIONS ==================== */}
      <AnimatedSection id="selected-publications" className="pb-16">
        <Container><SectionHeading title="Selected Publications" /><div className="mt-6 flex flex-wrap justify-center gap-3">{["All","Articles","Chapters","Conference","Insights"].map(item => <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-full border px-5 py-2 text-xs transition ${filter===item ? "border-[var(--navy)] bg-[var(--navy)] text-white" : "border-[#bdc7cf] bg-white text-[var(--navy)] hover:bg-[#f4f6f4]"}`}>{item}</button>)}</div><div className="card mt-6 overflow-hidden">{filtered.map(({ title,detail,type,icon:Icon,color }) => <div key={title} className="grid items-center gap-4 border-b border-[#e9e3db] p-5 last:border-0 md:grid-cols-[1.4fr_1.1fr_0.55fr_auto]"><div className="flex items-center gap-4"><span className={`grid h-11 w-11 place-items-center rounded-full text-white ${color}`}><Icon size={22} /></span><h3 className="font-display text-lg text-[var(--navy)]">{title}</h3></div><p className="text-xs text-[var(--muted)]">{detail}</p><span className="w-fit rounded bg-[#eef1ed] px-4 py-1 text-xs text-[var(--muted)]">{type}</span><button type="button" className="btn-outline min-h-9 px-5 py-1 text-xs">View</button></div>)}</div></Container>
      </AnimatedSection>

      {/* ==================== THEMES ==================== */}
      <AnimatedSection className="pb-14">
        <Container><div className="soft-band p-8"><SectionHeading title="Themes Across My Work" /><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{[
          { icon: Target, title: "Leadership & Strategy" }, { icon: Users, title: "Research Ecosystems" }, { icon: Lightbulb, title: "Organizational Innovation" }, { icon: Handshake, title: "Knowledge Collaboration" }, { icon: Sprout, title: "Sustainable Impact" },
        ].map(({icon:Icon,title}) => <div key={title} className="rounded-lg border border-[#d7ded9] bg-white p-5 text-center"><Icon className="mx-auto text-[var(--navy)]" size={30} strokeWidth={1.2} /><h3 className="mt-3 font-display text-base text-[var(--navy)]">{title}</h3></div>)}</div></div></Container>
      </AnimatedSection>

      {/* ==================== PUBLICATION PROCESS ==================== */}
      <AnimatedSection className="py-10">
        <Container><SectionHeading title="From Research to Publication" /><div className="relative mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 before:absolute before:left-[8%] before:right-[8%] before:top-5 before:hidden before:border-t before:border-dashed before:border-[#bfc9c2] lg:before:block">{[
          ["Develop the Idea","Identify meaningful questions and potential for impact."], ["Build the Evidence","Gather and analyze data to create solid foundations."], ["Shape the Manuscript","Organize insights and craft a clear narrative."], ["Review & Refine","Seek feedback and strengthen the work with rigor and clarity."], ["Share the Knowledge","Publish and contribute to ongoing scholarly conversations."],
        ].map(([title,text],index) => <div key={title} className="relative text-center"><span className={`relative z-10 mx-auto grid h-10 w-10 place-items-center rounded-full text-sm text-white ${index===0?"bg-[var(--navy)]":index===1?"bg-[var(--sage)]":index===2?"bg-[var(--coral)]":index===3?"bg-[var(--gold)]":"bg-[#4c8078]"}`}>{index+1}</span><h3 className="mt-4 font-display text-lg text-[var(--navy)]">{title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{text}</p></div>)}</div></Container>
      </AnimatedSection>

      {/* ==================== WRITING & EXCHANGE ==================== */}
      <AnimatedSection className="py-14">
        <Container><div className="card grid overflow-hidden lg:grid-cols-2"><img src={writingDesk} alt="Open books and notes prepared for scholarly writing" className="h-full min-h-72 w-full object-cover" /><div className="p-8 sm:p-10"><h2 className="section-title">Writing & Knowledge Exchange</h2><p className="body-copy mt-3">Strong writing turns insight into influence. I value collaborative authorship, editorial clarity, and responsible scholarship that make knowledge accessible and actionable.</p><div className="mt-5 space-y-3">{["Evidence-Led Writing","Collaborative Authorship","Responsible Communication"].map(item => <p key={item} className="flex items-center gap-2 text-sm text-[var(--muted)]"><Check size={18} className="text-[var(--sage)]" />{item}</p>)}</div></div></div></Container>
      </AnimatedSection>
      <CTASection title="Interested in Writing or Research Collaboration?" text="Let’s connect to co-create knowledge that drives meaningful change." coral={false} />
    </main>
  );
}
