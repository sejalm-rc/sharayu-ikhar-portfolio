import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Container from "./Container";

export default function PageHero({ eyebrow, title, description, image, imageAlt, action = "Explore", actionTo = "#content", breadcrumb, variant = "split", secondary }) {
  const reduceMotion = useReducedMotion();
  if (variant === "research") {
    return (
      <section className="relative overflow-hidden bg-[#eef0ec]">
        <img src={image} alt={imageAlt} className="h-[560px] w-full object-cover object-center md:h-[600px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
        <Container className="absolute inset-x-0 top-0 flex h-full items-center">
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }} className="max-w-[530px] rounded-[18px] bg-[var(--paper)]/95 p-7 shadow-[var(--shadow)] backdrop-blur sm:p-10">
            {breadcrumb && <p className="mb-6 text-xs text-[var(--muted)]">Home&nbsp;&nbsp;/&nbsp;&nbsp;{breadcrumb}</p>}
            <p className="eyebrow mb-3">{eyebrow}</p><h1 className="page-title">{title}</h1><p className="body-copy mt-5 max-w-lg">{description}</p>
            <a href={actionTo} className="btn-outline mt-6">{action}</a>
          </motion.div>
        </Container>
      </section>
    );
  }
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#fbf7f0_0%,#fffdf9_60%,#edf1ec_100%)]">
      <Container className="grid min-h-[570px] items-center gap-8 py-12 md:grid-cols-[0.9fr_1.1fr] md:py-14 lg:min-h-[620px]">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .6 }} className="relative z-10">
          {breadcrumb && <p className="mb-7 text-xs text-[var(--muted)]">Home&nbsp;&nbsp;/&nbsp;&nbsp;{breadcrumb}</p>}
          <p className="eyebrow mb-3">{eyebrow}</p><h1 className="page-title max-w-[700px]">{title}</h1><p className="body-copy mt-5 max-w-[580px]">{description}</p>
          <div className="mt-7 flex flex-wrap gap-4"><a href={actionTo} className="btn-outline">{action}</a>{secondary && <Link to={secondary.to} className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-[var(--sage)]">{secondary.label}<ArrowRight size={16} /></Link>}</div>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .08 }} className="relative mx-auto w-full max-w-[650px]">
          <div className="absolute -left-6 bottom-8 h-32 w-16 rounded-l-full bg-[var(--sage)]/28" />
          <div className="absolute -right-5 top-4 h-28 w-28 rounded-tr-[80px] bg-[var(--coral)]/88" />
          <img src={image} alt={imageAlt} className="relative z-10 aspect-[1.36/1] w-full rounded-[100px_14px_100px_14px] object-cover shadow-[var(--shadow)]" />
        </motion.div>
      </Container>
    </section>
  );
}
