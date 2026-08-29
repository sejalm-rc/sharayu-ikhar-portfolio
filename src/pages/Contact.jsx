import { useState } from "react";
import { CheckCircle2, Handshake, Mail, MapPin, Mic, Microscope, Phone, Settings } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import CTASection from "../components/CTASection";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import heroContact from "../assets/images/contact/hero-contact.jpg";

const initialForm = { name: "", email: "", organization: "", subject: "", message: "", consent: false };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function update(event) {
    const { name, value, type, checked } = event.target;
    setForm(current => ({ ...current, [name]: type === "checkbox" ? checked : value }));
    setErrors(current => ({ ...current, [name]: "" }));
    setSent(false);
  }

  function submit(event) {
    event.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (form.message.trim().length < 10) next.message = "Please add a little more detail.";
    if (!form.consent) next.consent = "Please confirm that these details may be used for this enquiry.";
    setErrors(next);
    if (!Object.keys(next).length) { setSent(true); setForm(initialForm); }
  }

  const fields = [
    { name:"name",label:"Full Name",type:"text",required:true }, { name:"email",label:"Email Address",type:"email",required:true },
    { name:"organization",label:"Organization",type:"text" }, { name:"subject",label:"Subject",type:"text",required:true },
  ];

  return (
    <main>
      {/* ==================== HERO SECTION ==================== */}
      <PageHero eyebrow="Get in Touch" title="Let’s Connect and Create Meaningful Impact" description="Whether you would like to discuss leadership, research, collaboration, or a new opportunity, I would be glad to hear from you." image={heroContact} imageAlt="Open correspondence with a phone and professional desk accessories" action="Start a Conversation" actionTo="#contact-form" secondary={{ to: "/projects", label: "Explore Collaboration" }} breadcrumb="Contact" />

      {/* ==================== CONTACT FORM ==================== */}
      <AnimatedSection id="contact-form" className="py-16 sm:py-20">
        <Container><div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]"><div><SectionHeading eyebrow="Start a Conversation" title="How Can We Work Together?" description="Share a little about your idea, enquiry, or opportunity. The form is designed to make the first conversation simple." align="left" />
          <form onSubmit={submit} noValidate className="card mt-7 space-y-5 p-6 sm:p-8">
            {fields.map(field => <div key={field.name}><label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-[var(--ink)]">{field.label}{field.required && <span className="text-[var(--coral)]"> *</span>}</label><input id={field.name} name={field.name} type={field.type} value={form[field.name]} onChange={update} aria-invalid={Boolean(errors[field.name])} aria-describedby={errors[field.name] ? `${field.name}-error` : undefined} className="h-12 w-full rounded-md border border-[#d9d2c9] bg-white px-4 text-[var(--ink)] focus:border-[var(--sage)] focus:outline-none" />{errors[field.name] && <p id={`${field.name}-error`} className="mt-1 text-xs text-[var(--coral)]">{errors[field.name]}</p>}</div>)}
            <div><label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--ink)]">Your Message <span className="text-[var(--coral)]">*</span></label><textarea id="message" name="message" value={form.message} onChange={update} rows="5" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className="w-full resize-y rounded-md border border-[#d9d2c9] bg-white px-4 py-3 focus:border-[var(--sage)] focus:outline-none" />{errors.message && <p id="message-error" className="mt-1 text-xs text-[var(--coral)]">{errors.message}</p>}</div>
            <div><label className="flex items-start gap-3 text-xs text-[var(--muted)]"><input type="checkbox" name="consent" checked={form.consent} onChange={update} className="mt-1 h-4 w-4 accent-[var(--coral)]" />I agree to share these details for the purpose of this enquiry.</label>{errors.consent && <p className="mt-1 text-xs text-[var(--coral)]">{errors.consent}</p>}</div>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">{sent ? <p role="status" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--sage)]"><CheckCircle2 size={19} />Thank you. Your enquiry has been recorded in this browser.</p> : <span />}<button type="submit" className="btn-coral sm:ml-auto">Send Message</button></div>
          </form>
        </div><aside className="space-y-5 lg:pt-24">{[
          { icon:Mail,title:"Email",text:"Official email to be added" }, { icon:Phone,title:"Phone",text:"Verified contact number to be added" }, { icon:MapPin,title:"Location",text:"Professional location to be added" },
        ].map(({icon:Icon,title,text}) => <div key={title} className="card flex items-center gap-5 p-6"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[var(--coral)]/50"><Icon className="text-[var(--coral)]" size={27} strokeWidth={1.3} /></span><div><h3 className="font-display text-xl text-[var(--navy)]">{title}</h3><p className="text-sm text-[var(--muted)]">{text}</p></div></div>)}<div className="soft-band p-7"><p className="eyebrow text-[var(--sage)]">Preferred Enquiries</p><p className="mt-4 font-display text-xl leading-relaxed text-[var(--navy)]">Leadership&nbsp;&nbsp;·&nbsp;&nbsp;Research&nbsp;&nbsp;·&nbsp;&nbsp;Strategic Collaboration&nbsp;&nbsp;·&nbsp;&nbsp;Media</p></div></aside></div></Container>
      </AnimatedSection>

      {/* ==================== COLLABORATION OPPORTUNITIES ==================== */}
      <AnimatedSection className="bg-[#edf3ee] py-16">
        <Container><SectionHeading eyebrow="Opportunities" title="Ways We Can Collaborate" align="left" /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[
          {icon:Settings,title:"Leadership & Operations",text:"Conversations around strategy, systems, teams, and organizational growth."},{icon:Microscope,title:"Research Collaboration",text:"Thoughtful partnerships connecting research, innovation, and practice."},{icon:Handshake,title:"Strategic Partnerships",text:"Purpose-led opportunities built around shared goals and lasting value."},{icon:Mic,title:"Speaking & Media",text:"Professional conversations, interviews, panels, and knowledge exchange."},
        ].map(({icon:Icon,title,text}) => <article key={title} className="card p-6 text-center"><Icon className="mx-auto text-[var(--coral)]" size={42} strokeWidth={1.2} /><h3 className="mt-4 font-display text-xl text-[var(--navy)]">{title}</h3><p className="mt-3 text-sm text-[var(--muted)]">{text}</p></article>)}</div></Container>
      </AnimatedSection>
      <CTASection title="Have an Idea Worth Exploring?" text="A meaningful collaboration often begins with one thoughtful conversation." button="Send an Enquiry" coral={false} />
    </main>
  );
}
