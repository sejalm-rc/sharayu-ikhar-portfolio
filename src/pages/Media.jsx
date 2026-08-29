import { useMemo, useState } from "react";
import { ArrowRight, BriefcaseBusiness, Lightbulb, Mic, Newspaper, Play, Presentation, Radio, Users } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import FeatureStrip from "../components/FeatureStrip";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import heroMedia from "../assets/images/media/hero-media.jpg";
import featuredInterview from "../assets/images/media/featured-interview.jpg";
import appearanceInterview from "../assets/images/media/appearance-interview.jpg";
import appearancePodcast from "../assets/images/media/appearance-podcast.jpg";
import appearanceSpeaking from "../assets/images/media/appearance-speaking.jpg";
import appearancePress from "../assets/images/media/appearance-press.jpg";
import appearancePractice from "../assets/images/media/appearance-practice.jpg";
import appearanceOnline from "../assets/images/media/appearance-online.jpg";
import speakingPanel from "../assets/images/media/speaking-panel.jpg";
import speakingKeynote from "../assets/images/media/speaking-keynote.jpg";
import speakingWorkshop from "../assets/images/media/speaking-workshop.jpg";

const appearances = [
  { image: appearanceInterview, type: "Interviews", title: "Conversation on Purposeful Leadership", text: "Exploring how purpose-driven leadership creates strong and adaptive organizations." },
  { image: appearancePodcast, type: "Podcasts", title: "Building Strong Research Communities", text: "Discussing ways to strengthen research ecosystems and foster collaboration." },
  { image: appearanceSpeaking, type: "Speaking", title: "Innovation Through Collaboration", text: "How collaborative approaches enable innovation and deliver lasting impact." },
  { image: appearancePress, type: "Press", title: "Turning Strategy Into Action", text: "Insights on turning strategy into measurable outcomes that drive meaningful change." },
  { image: appearancePractice, type: "Interviews", title: "Knowledge Exchange in Practice", text: "Conversations on bridging research, practice, and policy for greater impact." },
  { image: appearanceOnline, type: "Podcasts", title: "Creating Sustainable Impact", text: "Exploring ideas that support organizations and communities for the long term." },
];

export default function Media() {
  const [filter, setFilter] = useState("All Media");
  const filtered = useMemo(() => filter === "All Media" ? appearances : appearances.filter(item => item.type === filter), [filter]);
  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <PageHero eyebrow="Media & Conversations" title="Ideas Shared Beyond the Page" description="A space for interviews, conversations, public engagement, and stories that bring leadership, research, and innovation to wider audiences." image={heroMedia} imageAlt="Professional audio recording and editorial media equipment" action="Explore Media" actionTo="#media-appearances" breadcrumb="Media" />
      <FeatureStrip items={[
        { icon: Radio, title: "Interviews" }, { icon: Mic, title: "Podcasts" },
        { icon: Presentation, title: "Speaking" }, { icon: Newspaper, title: "Press Features" },
      ]} />

      {/* ==================== MEDIA OVERVIEW ==================== */}
      <AnimatedSection className="py-12 sm:py-16">
        <Container><SectionHeading title="Media & Public Engagement" description="Sharing ideas through thoughtful conversations, accessible communication, and knowledge exchange to advance meaningful progress." /><p className="mx-auto mt-6 max-w-3xl text-center font-display text-xl italic text-[var(--sage)]">Ideas create greater impact when they reach, engage, and inspire people.</p></Container>
      </AnimatedSection>

      {/* ==================== FEATURED MEDIA ==================== */}
      <AnimatedSection className="pb-16">
        <Container><div className="card grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]"><div className="relative"><img src={featuredInterview} alt="Professional interview about leadership and research" className="h-full min-h-[360px] w-full object-cover" /><span className="absolute inset-0 grid place-items-center"><span className="grid h-16 w-16 place-items-center rounded-full border-2 border-white bg-[var(--navy)]/70 text-white backdrop-blur"><Play fill="currentColor" size={24} /></span></span></div><div className="p-8 sm:p-10"><p className="eyebrow">Featured Media</p><h2 className="section-title mt-3">Leadership, Research & Meaningful Impact</h2><p className="body-copy mt-4">A conversation on aligning research, leadership, and strategy to create meaningful and sustainable impact.</p><div className="mt-5 flex flex-wrap gap-2">{["Conversation","Leadership","Research"].map(item => <span key={item} className="rounded-full bg-[#eef2ed] px-3 py-1 text-xs text-[var(--sage)]">{item}</span>)}</div><div className="mt-7 flex flex-wrap gap-4"><button type="button" className="btn-primary">Watch Preview</button><button type="button" className="btn-outline">View Details</button></div><p className="mt-5 text-xs text-[var(--muted)]">Sample media content — verified details can be added later.</p></div></div></Container>
      </AnimatedSection>

      {/* ==================== MEDIA APPEARANCES ==================== */}
      <AnimatedSection id="media-appearances" className="pb-16">
        <Container><SectionHeading title="Media Appearances" /><div className="mt-6 flex flex-wrap justify-center gap-3">{["All Media","Interviews","Podcasts","Speaking","Press"].map(item => <button type="button" key={item} onClick={() => setFilter(item)} className={`rounded-full border px-5 py-2 text-xs transition ${filter===item?"border-[var(--sage)] bg-[var(--sage)] text-white":"border-[#bdc7cf] bg-white text-[var(--navy)]"}`}>{item}</button>)}</div><div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(item => <article key={item.title} className="card overflow-hidden transition hover:-translate-y-1"><div className="relative h-44"><img src={item.image} alt="" className="image-cover" /><span className="absolute bottom-2 left-3 rounded-full bg-[#f1f4ef] px-3 py-1 text-[11px] text-[var(--sage)]">{item.type}</span></div><div className="p-5"><h3 className="font-display text-xl text-[var(--navy)]">{item.title}</h3><p className="mt-2 text-xs leading-5 text-[var(--muted)]">{item.text}</p><button type="button" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--navy)]">View Media <ArrowRight size={15} /></button></div></article>)}</div></Container>
      </AnimatedSection>

      {/* ==================== SPEAKING ==================== */}
      <AnimatedSection className="py-10">
        <Container><SectionHeading title="Speaking & Conversations" /><div className="mt-8 grid gap-6 md:grid-cols-3">{[
          { image:speakingPanel,title:"Panel Discussions",text:"Engaging in conversations that explore challenges, opportunities, and solutions." },
          { image:speakingKeynote,title:"Keynote Conversations",text:"Sharing perspectives on leadership, innovation, and creating meaningful impact." },
          { image:speakingWorkshop,title:"Research Workshops",text:"Facilitating sessions that build capacity and encourage practical collaboration." },
        ].map(item => <article key={item.title} className="card overflow-hidden"><img src={item.image} alt="" className="h-40 w-full object-cover" /><div className="p-5"><h3 className="font-display text-xl text-[var(--navy)]">{item.title}</h3><p className="mt-2 text-xs text-[var(--muted)]">{item.text}</p></div></article>)}</div></Container>
      </AnimatedSection>

      {/* ==================== PRESS FEATURES ==================== */}
      <AnimatedSection className="py-14">
        <Container><div className="soft-band grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_0.9fr]"><div><SectionHeading title="Press & Features" align="left" /><div className="mt-6 space-y-3">{["Leadership Perspective","Research Collaboration Feature","Organizational Impact Story"].map((title,index) => <button type="button" key={title} className="flex w-full items-center justify-between rounded-lg border border-[#d6ddd8] bg-white p-4 text-left"><span className="flex items-center gap-4"><Newspaper size={22} className="text-[var(--sage)]" /><span><strong className="font-display font-medium text-[var(--navy)]">{title}</strong><small className="block text-[var(--muted)]">Publication details to be updated</small></span></span><ArrowRight size={16} /></button>)}</div></div><img src={appearancePress} alt="Editorial desk with publication materials" className="aspect-[1.45/1] w-full rounded-xl object-cover" /></div></Container>
      </AnimatedSection>

      {/* ==================== MEDIA TOPICS ==================== */}
      <AnimatedSection className="pb-12">
        <Container><SectionHeading title="Media Topics" /><div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{[
          { icon:BriefcaseBusiness,title:"Leadership" }, { icon:Users,title:"Research" }, { icon:Lightbulb,title:"Innovation" }, { icon:Users,title:"Collaboration" }, { icon:Presentation,title:"Organizational Growth" },
        ].map(({icon:Icon,title}) => <div key={title} className="rounded-lg border border-[#d9d2c9] bg-white p-4 text-center"><Icon className="mx-auto text-[var(--sage)]" size={26} /><p className="mt-2 text-sm text-[var(--navy)]">{title}</p></div>)}</div></Container>
      </AnimatedSection>
      <CTASection title="Interested in an Interview or Conversation?" text="Open to thoughtful discussions on leadership, research, innovation, and organizational impact." coral={false} button="Get in Touch" />
    </main>
  );
}
