import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Feather,
  FileText,
  GraduationCap,
  Handshake,
  Lightbulb,
  Presentation,
  Quote,
  Sprout,
  Target,
  Users,
} from "lucide-react";
import heroBg from "../assets/images/img/bgpublication.png";
import publicationOne from "../assets/images/img/p1.png";
import publicationTwo from "../assets/images/img/p2.png";
import publicationThree from "../assets/images/img/p3.png";
import publicationFour from "../assets/images/img/p4.png";
import feaWork from "../assets/images/img/feaWork.png";
import knowledgeExchangeBg from "../assets/images/img/pbg2.png";

const container =
  "mx-auto w-[min(1120px,calc(100%-32px))] sm:w-[min(1120px,calc(100%-48px))]";
const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.55, ease: "easeOut" },
};

const publicationTypes = [
  {
    image: publicationOne,
    title: "Peer-Reviewed Articles",
    text: "In-depth studies and empirical analyses published in peer-reviewed journals.",
  },
  {
    image: publicationTwo,
    title: "Books & Chapters",
    text: "Contributions to edited volumes and authored chapters that expand key ideas.",
  },
  {
    image: publicationThree,
    title: "Conference Contributions",
    text: "Papers and presentations shared at academic and professional conferences.",
  },
  {
    image: publicationFour,
    title: "Editorial Perspectives",
    text: "Short-form reflections and opinions on emerging themes and conversations.",
  },
];

const selectedPublications = [
  {
    title: "Publication Title Placeholder",
    type: "Articles",
    icon: FileText,
    color: "#557f9d",
  },
  {
    title: "Collaborative Research Publication",
    type: "Chapters",
    icon: BookOpen,
    color: "#65877d",
  },
  {
    title: "Conference Contribution Title",
    type: "Conference",
    icon: Presentation,
    color: "#bd6448",
  },
  {
    title: "Professional Insight Article",
    type: "Insights",
    icon: Feather,
    color: "#b2944f",
  },
];

const themes = [
  { icon: Target, title: "Leadership & Strategy" },
  { icon: Users, title: "Research Ecosystems" },
  { icon: Lightbulb, title: "Organizational Innovation" },
  { icon: Handshake, title: "Knowledge Collaboration" },
  { icon: Sprout, title: "Sustainable Impact" },
];

const process = [
  [
    "Develop the Idea",
    "Identify meaningful questions and potential for impact.",
  ],
  [
    "Build the Evidence",
    "Gather and analyze data to create solid foundations.",
  ],
  [
    "Shape the Manuscript",
    "Organize insights and craft a clear, compelling narrative.",
  ],
  [
    "Review & Refine",
    "Seek feedback and strengthen the work with rigor and clarity.",
  ],
  [
    "Share the Knowledge",
    "Publish and contribute to ongoing scholarly conversations.",
  ],
];

const profiles = [
  { mark: "G", title: "Google Scholar", color: "#557f9d" },
  { mark: "iD", title: "ORCID", color: "#9ac43b" },
  { mark: "S", title: "Scopus", color: "#e86f17" },
  { mark: "Rᵍ", title: "ResearchGate", color: "#16a59a" },
];

function SectionTitle({ children, description }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-[19px] font-[550] leading-tight text-[#0B3D61] sm:text-[22px]">
        {children}
      </h2>
      {description && (
        <p className="mx-auto mt-2 max-w-[550px] text-[12px] leading-6 text-[#5c6670] sm:text-[13px]">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Publication() {
  return (
    <main className="overflow-hidden bg-[#fcfbf8] text-[#243949]">
      {/* HERO */}
      <section
        className="relative min-h-[380px] bg-cover bg-[67%_center] bg-no-repeat sm:min-h-[420px] lg:bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f3] via-[#fbf8f3]/92 to-transparent sm:via-[#fbf8f3]/60 lg:via-transparent" />
        <div
          className={`${container} relative flex min-h-[380px] items-center py-8 sm:min-h-[420px]`}
        >
          <motion.div {...reveal} className="max-w-[485px]">
            <p className="mb-6 text-[13px] text-[#576471]">
              Home <span className="px-2 text-[#9ba2a7]">/</span> Publications
            </p>
            <p className="text-[12px] font-[550] uppercase tracking-[0.2em] text-[#bd6448]">
              Publications &amp; Scholarly Work
            </p>
            <h1 className="mt-4 font-serif text-[38px] leading-[1.04] text-[#0B3D61] sm:text-[40px]">
              Ideas Shared
              <br />
              Through Knowledge
            </h1>
            <p className="mt-5 max-w-[350px]  text-[14] sm:text-[15px] leading- 6text-[#52606c]">
              A curated space for scholarly contributions, collaborative
              writing, and research-led perspectives that connect insight with
              practice.
            </p>
            <a
              href="#publication-types"
              className="group mt-7 inline-flex h-11 items-center gap-3 rounded-[5px] border border-[#0B3D61] bg-white/70 px-6 text-[13px] font-semibold text-[#0B3D61] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0B3D61] hover:text-white hover:shadow-lg"
            >
              Browse Publications{" "}
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ==================== PUBLICATION FEATURE BAR ==================== */}
<div className={`${container} relative z-10 -mt-8`}>
  <motion.div
    {...reveal}
    className="
      grid
      overflow-hidden
      rounded-[14px]
      border
      border-[#dedbd5]
      bg-white
      shadow-[0_10px_30px_rgba(11,61,97,0.06)]

      sm:grid-cols-2
      lg:grid-cols-4
    "
  >
    {[
      [FileText, "Journal Articles"],
      [BookOpen, "Book Chapters"],
      [Presentation, "Conference Papers"],
      [Feather, "Professional Insights"],
    ].map(([Icon, title], index) => (
      <div
        key={title}
        className={`
          group
          relative
          flex
          min-h-[112px]
          items-center
          justify-center
          gap-4
          px-5
          py-5
          transition-colors
          duration-300
          hover:bg-[#f7f8f6]

          sm:flex-col
          sm:gap-2

          ${
            index > 1
              ? "border-t border-[#e4e1dc] lg:border-t-0"
              : ""
          }

          ${
            index % 2 !== 0
              ? "sm:before:absolute sm:before:left-0 sm:before:top-1/2 sm:before:h-[64px] sm:before:w-px sm:before:-translate-y-1/2 sm:before:bg-[#dedbd5] lg:before:hidden"
              : ""
          }

          ${
            index !== 3
              ? "lg:after:absolute lg:after:right-0 lg:after:top-1/2 lg:after:h-[64px] lg:after:w-px lg:after:-translate-y-1/2 lg:after:bg-[#dedbd5]"
              : ""
          }
        `}
      >
        <Icon
          size={33}
          strokeWidth={1.25}
          className="
            text-[#454b4e]
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:text-[#bd6448]
          "
        />

        <p
          className="
            whitespace-nowrap
            font-serif
            text-[13px]
            font-medium
            text-[#315575]
            sm:text-[14px]
          "
        >
          {title}
        </p>
      </div>
    ))}
  </motion.div>
</div>

 
    {/* ==================== OVERVIEW ==================== */}
<motion.section
  {...reveal}
  className={`${container} py-8 sm:py-10`}
>
  <SectionTitle description="Documenting ideas, sharing evidence, supporting research communities, and encouraging knowledge exchange that drives meaningful impact.">
    Publication Overview
  </SectionTitle>

  <div className="relative mx-auto mt-5 max-w-[590px] px-10 sm:px-[54px]">
    {/* Opening Quote */}
    <Quote
      size={28}
      strokeWidth={1.8}
      fill="currentColor"
      className="
        absolute
        left-0
        top-1
        text-[#c4a051]
        sm:left-1
        sm:top-2
      "
    />

    {/* Quote Text */}
    <blockquote
      className="
        border-y
        border-[#c7a450]
        py-3
        text-center
        font-serif
        text-[15.5px]
        font-[550]
        leading-[1.55]
        text-[#0B3D61]

        sm:px-5
        sm:text-[16.5px]
        sm:leading-[1.55]
      "
    >
      Knowledge creates value when it is shared
      <br className="hidden min-[430px]:block" />
      clearly, responsibly, and with purpose.
    </blockquote>

    {/* Closing Quote */}
    <Quote
      size={28}
      strokeWidth={1.8}
      fill="currentColor"
      className="
        absolute
        bottom-1
        right-0
        rotate-180
        text-[#c4a051]
        sm:bottom-2
        sm:right-1
      "
    />
  </div>
</motion.section>

      {/* PUBLICATION TYPES */}
      <section
        id="publication-types"
        className={`${container} scroll-mt-20 pb-14`}
      >
        <SectionTitle>Browse by Publication Type</SectionTitle>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {publicationTypes.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -7 }}
              className="group rounded-[10px] border border-[#dedbd5] bg-white p-2 shadow-[0_5px_15px_rgba(11,61,97,0.03)]"
            >
              <div className="overflow-hidden rounded-[8px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 pb-4">
                <h3 className="font-serif text-[17px] text-[#0B3D61]">
                  {item.title}
                </h3>
                <p className="mt-2 min-h-[62px] text-[13.5px] leading-5 text-[#596570]">
                  {item.text}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ==================== FEATURED WORK ==================== */}
<motion.section {...reveal} className={`${container} pb-8`}>
  <div
    className="
      grid
      overflow-hidden
      rounded-[16px]
      border
      border-[#dedbd5]
      bg-[#fcfbf8]
      shadow-[0_8px_25px_rgba(11,61,97,0.04)]

      md:grid-cols-[42%_58%]
      md:items-stretch
    "
  >
    {/* Left Image */}
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4 }}
      className="
        flex
        min-h-[300px]
        items-center
        justify-center
        overflow-hidden
        bg-[#f4f1eb]
        p-6

        sm:min-h-[340px]
        sm:p-8

        md:min-h-[365px]
        md:p-5

        lg:p-6
      "
    >
      <img
        src={feaWork}
        alt="Building Better Systems Through Research featured publication"
        className="
          h-[270px]
          w-auto
          max-w-full
          object-contain
          drop-shadow-[0_12px_12px_rgba(30,35,35,0.18)]

          sm:h-[310px]
          md:h-[330px]
        "
      />
    </motion.div>

    {/* Right Content */}
    <div
      className="
        flex
        items-center
        bg-[#fffefa]
        px-6
        py-8

        sm:px-9
        sm:py-10

        md:px-10
        md:py-9

        lg:px-12
      "
    >
      <div className="w-full max-w-[560px]">
        <p
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#bd6448]

            sm:text-[12px]
          "
        >
          Featured Work
        </p>

        <h2
          className="
            mt-3
            font-serif
            text-[22px]
            font-semibold
            leading-tight
            text-[#0B3D61]

            sm:text-[25px]
            lg:text-[28px]
          "
        >
          Building Better Systems Through Research
        </h2>

        <p
          className="
            mt-4
            text-[12px]
            leading-6
            text-[#596570]

            sm:text-[13px]
          "
        >
          This work explores how evidence-based insights can be translated
          into organizational strategies that strengthen systems, support
          innovation, and create sustainable impact.
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {["Leadership", "Research", "Innovation"].map((tag) => (
            <span
              key={tag}
              className="
                rounded-[5px]
                border
                border-[#d4cbc0]
                bg-white
                px-4
                py-1.5
                text-[11px]
                text-[#596570]
                transition-colors
                duration-300
                hover:border-[#bd6448]
                hover:text-[#bd6448]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            className="
              rounded-[5px]
              bg-[#0B3D61]
              px-6
              py-2.5
              text-[12px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#bd6448]
              hover:shadow-lg
            "
          >
            Read Abstract
          </button>

          <button
            type="button"
            className="
              rounded-[5px]
              border
              border-[#0B3D61]
              bg-white
              px-6
              py-2.5
              text-[12px]
              font-semibold
              text-[#0B3D61]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0B3D61]
              hover:text-white
              hover:shadow-lg
            "
          >
            View Details
          </button>
        </div>

        <p className="mt-5 text-[10px] leading-5 text-[#7a848c]">
          Sample content — publication details to be updated.
        </p>
      </div>
    </div>
  </div>
</motion.section>

      {/* SELECTED PUBLICATIONS */}
      <motion.section
        {...reveal}
        id="selected-publications"
        className={`${container} scroll-mt-20 pb-14`}
      >
        <SectionTitle>Selected Publications</SectionTitle>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["All", "Articles", "Chapters", "Conference", "Insights"].map(
            (item, index) => (
              <span
                key={item}
                className={`rounded-full border px-6 py-1.5 text-[11px] ${index === 0 ? "border-[#0B3D61] bg-[#0B3D61] text-white" : "border-[#aebbc5] bg-white text-[#0B3D61]"}`}
              >
                {item}
              </span>
            ),
          )}
        </div>
        <div className="mt-6 overflow-hidden rounded-[12px] border border-[#dedbd5] bg-white">
          {selectedPublications.map(({ title, type, icon: Icon, color }) => (
            <div
              key={title}
              className="grid gap-3 border-b border-[#e5e1dc] p-4 last:border-0 sm:grid-cols-[1.35fr_1fr] sm:items-center lg:grid-cols-[1.45fr_1.15fr_.55fr_auto]"
            >
              <div className="flex items-center gap-4">
                <span
                  className="grid size-10 shrink-0 place-items-center rounded-full text-white"
                  style={{ backgroundColor: color }}
                >
                  <Icon size={20} />
                </span>
                <h3 className="font-serif text-[16px] text-[#0B3D61]">
                  {title}
                </h3>
              </div>
              <p className="text-[11px] text-[#777f86]">
                Publication details to be updated
              </p>
              <span className="w-fit rounded bg-[#eff1ef] px-4 py-1.5 text-[10px] text-[#66716c]">
                {type}
              </span>
              <button className="w-fit rounded-[4px] border border-[#0B3D61] px-7 py-1.5 text-[11px] text-[#0B3D61] transition hover:bg-[#0B3D61] hover:text-white">
                View
              </button>
            </div>
          ))}
        </div>
      </motion.section>

      {/* THEMES */}
      <motion.section {...reveal} className={`${container} pb-14`}>
        <div className="rounded-[14px] bg-gradient-to-r from-[#e8efeb] via-[#f1f4f0] to-[#e5ece8] px-5 py-6 sm:px-8">
          <SectionTitle>Themes Across My Work</SectionTitle>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {themes.map(({ icon: Icon, title }) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={title}
                className="rounded-[8px] border border-[#d4dcd7] bg-white p-5 text-center shadow-sm"
              >
                <Icon
                  className="mx-auto text-[#303c43]"
                  size={34}
                  strokeWidth={1.2}
                />
                <p className="mt-3 font-serif text-[14px] text-[#0B3D61]">
                  {title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROCESS */}
      <motion.section {...reveal} className={`${container} pb-14`}>
        <SectionTitle>From Research to Publication</SectionTitle>
        <div className="relative mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          <div className="absolute left-[10%] right-[10%] top-5 hidden border-t border-dashed border-[#aeb8b2] lg:block" />
          {process.map(([title, text], index) => (
            <div key={title} className="relative text-center">
              <span
                className="relative z-10 mx-auto grid size-10 place-items-center rounded-full text-[12px] text-white"
                style={{
                  backgroundColor: [
                    "#0B3D61",
                    "#63837a",
                    "#bd6448",
                    "#b2944f",
                    "#507d74",
                  ][index],
                }}
              >
                {index + 1}
              </span>
              <h3 className="mt-4 font-serif text-[15px] text-[#0B3D61]">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[175px] text-[10.5px] leading-4 text-[#626c74]">
                {text}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 h-[110px] overflow-hidden rounded-[12px] sm:h-[150px]">
          <img
            src={heroBg}
            alt="Research documents and scholarly publication materials"
            className="h-full w-full object-cover object-bottom transition duration-700 hover:scale-[1.02]"
          />
        </div>
      </motion.section>

      {/* PROFILES */}
      <motion.section {...reveal} className={`${container} pb-14`}>
        <SectionTitle>Publication Profiles</SectionTitle>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((profile) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={profile.title}
              className="flex items-center gap-4 rounded-[9px] border border-[#dedbd5] bg-white p-4"
            >
              <span
                className="grid size-12 shrink-0 place-items-center rounded-full font-serif text-[20px] text-white"
                style={{ backgroundColor: profile.color }}
              >
                {profile.title === "Google Scholar" ? (
                  <GraduationCap size={25} />
                ) : (
                  profile.mark
                )}
              </span>
              <div>
                <h3 className="font-serif text-[15px] text-[#0B3D61]">
                  {profile.title}
                </h3>
                <p className="mt-1 text-[10px] text-[#777f86]">
                  Profile link to be added
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WRITING & KNOWLEDGE EXCHANGE */}
      <motion.section {...reveal} className={`${container} pb-4`}>
        <div
          className="relative min-h-[265px] overflow-hidden rounded-[14px] border border-[#dedbd5] bg-cover bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${knowledgeExchangeBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#fcfbf8]/75 to-[#fcfbf8]" />
          <div className="relative ml-auto flex min-h-[265px] w-full items-center p-6 sm:p-8 lg:w-1/2">
            <div className="rounded-lg bg-[#fcfbf8]/90 p-5 lg:bg-transparent lg:p-0">
              <h2 className="font-serif text-[25px] text-[#0B3D61] sm:text-[29px]">
                Writing &amp; Knowledge Exchange
              </h2>
              <p className="mt-3 text-[12px] leading-5 text-[#596570]">
                Strong writing turns insight into influence. I value
                collaborative authorship, editorial clarity, and responsible
                scholarship that make knowledge accessible and actionable.
              </p>
              <div className="mt-4 space-y-2">
                {[
                  "Evidence-Led Writing",
                  "Collaborative Authorship",
                  "Responsible Communication",
                ].map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-2 text-[11px] text-[#596570]"
                  >
                    <Check size={15} className="text-[#63877b]" /> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className={`${container} pb-8`}>
        <motion.div
          {...reveal}
          className="relative overflow-hidden rounded-[12px] border border-[#dfd2c7] bg-cover bg-left bg-no-repeat"
          style={{ backgroundImage: `url(${knowledgeExchangeBg})` }}
        >
          <div className="absolute inset-0 bg-[#fbf7f1]/90" />
          <div className="relative flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div className="flex items-center gap-5">
              <span className="grid size-14 shrink-0 place-items-center rounded-full border border-[#d9bda9] bg-white text-[#0B3D61]">
                <Users size={29} strokeWidth={1.3} />
              </span>
              <div>
                <h2 className="font-serif text-[20px] text-[#0B3D61] sm:text-[23px]">
                  Interested in Writing or Research Collaboration?
                </h2>
                <p className="mt-1 text-[11px] text-[#667079]">
                  Let’s connect to co-create knowledge that drives meaningful
                  change.
                </p>
              </div>
            </div>
            <a
              href="/contact"
              className="group inline-flex min-h-10 shrink-0 items-center justify-center gap-3 rounded-[5px] bg-[#0B3D61] px-7 text-[12px] font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#bd6448] hover:shadow-lg"
            >
              Start a Conversation{" "}
              <ArrowRight
                size={15}
                className="transition group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
