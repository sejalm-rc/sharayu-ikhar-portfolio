import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cog,
  Handshake,
  Info,
  Lightbulb,
  Network,
  Sprout,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";


import heroPlanning from "../assets/images/img/bgproject.png";
import rc from "../assets/images/img/RC Logo.png";

import initiativeNetwork from "../assets/images/projects/initiative-network.jpg";
import initiativeKnowledge from "../assets/images/projects/initiative-knowledge.jpg";
import initiativeGrowth from "../assets/images/projects/initiative-growth.jpg";
import collaborationCore from "../assets/images/projects/collaboration-core.jpg";

const pageContainer =
  "mx-auto w-[min(1120px,calc(100%-28px))] sm:w-[min(1120px,calc(100%-40px))] lg:w-[min(1120px,calc(100%-56px))]";

const ease = [0.22, 1, 0.36, 1];

const sectionReveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.62, ease },
};

const initiatives = [
  {
    image: initiativeNetwork,
    tag: "Collaboration",
    title: "Research Collaboration Network",
    text: "Connecting researchers and practitioners to co-create solutions for shared challenges.",
  },
  {
    image: initiativeKnowledge,
    tag: "Knowledge",
    title: "Knowledge Exchange Initiative",
    text: "Facilitating dialogue, learning, and exchange across communities and institutions.",
  },
  {
    image: initiativeGrowth,
    tag: "Growth",
    title: "Organizational Growth Program",
    text: "Strengthening systems, leadership, and capabilities for sustainable growth.",
  },
];

const organizationFeatures = [
  {
    icon: Network,
    title: "Researcher Network",
    text: "Connecting people and expertise across disciplines.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Solutions",
    text: "Transforming strong ideas into practical initiatives.",
  },
  {
    icon: Target,
    title: "Impact Projects",
    text: "Supporting work designed for meaningful outcomes.",
  },
  {
    icon: Handshake,
    title: "Industry Collaboration",
    text: "Building bridges between research and practice.",
  },
];

const contributions = [
  {
    icon: Sprout,
    title: "Shape the Direction",
    text: "Define purpose, priorities, and strategies that create meaningful impact.",
  },
  {
    icon: Users,
    title: "Align the Team",
    text: "Bring the right people together and build alignment around shared goals.",
  },
  {
    icon: Cog,
    title: "Enable Delivery",
    text: "Design processes and systems that help teams execute with focus and clarity.",
  },
  {
    icon: TrendingUp,
    title: "Strengthen Impact",
    text: "Measure progress, learn continuously, and amplify positive outcomes.",
  },
];

function SectionTitle({ eyebrow, children }) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <p className="mb-2 font-sans text-[11px] font-bold uppercase tracking-[0.22em] text-[#dc8c64] sm:text-[12px]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-[26px] font-normal leading-[1.2] tracking-[-0.3px] text-[#173c50] sm:text-[28px] lg:text-[30px]">
        {children}
      </h2>
    </div>
  );
}

function DecorativeTitle({ children }) {
  return (
    <div className="flex items-center justify-center gap-4 sm:gap-6">
      <span className="h-px min-w-0 flex-1 bg-[#d9c6a5]" />
      <h2 className="shrink-0 text-center font-['Georgia',serif] text-[20px] font-normal leading-none text-[#173c50] sm:text-[22px]">
        {children}
      </h2>
      <span className="h-px min-w-0 flex-1 bg-[#d9c6a5]" />
    </div>
  );
}

function RCLogo() {
  return (
    <div
      aria-label="Researcher Connect"
      className="relative mx-auto h-[112px] w-[128px] sm:h-[122px] sm:w-[140px]"
    >
      <span className="absolute left-1/2 top-1/2 h-[95px] w-[95px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2px] border-[#819c96]" />
      <span className="absolute left-1/2 top-1/2 h-[78px] w-[105px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-[50%] border border-[#c4a05a]" />
      <span className="absolute left-1/2 top-1/2 h-[101px] w-[74px] -translate-x-1/2 -translate-y-1/2 -rotate-[24deg] rounded-[50%] border border-[#b96f50]/75" />

      <span className="absolute left-[16px] top-[29px] h-[7px] w-[7px] rounded-full bg-[#c4a05a]" />
      <span className="absolute right-[15px] top-[42px] h-[7px] w-[7px] rounded-full bg-[#7c9a92]" />
      <span className="absolute bottom-[21px] left-[31px] h-[6px] w-[6px] rounded-full bg-[#b96f50]" />
      <span className="absolute bottom-[13px] right-[35px] h-[6px] w-[6px] rounded-full bg-[#c4a05a]" />

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-['Georgia',serif] text-[50px] tracking-[-0.16em] text-[#315f6b] sm:text-[54px]">
          RC
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedInitiative, setSelectedInitiative] = useState(null);

  const scrollToInitiatives = () => {
    document
      .getElementById("initiatives")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="overflow-hidden bg-[#faf9f7] text-[#58656b]">


   <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="group relative w-full overflow-hidden bg-[#f7f3ec]"
            >
              {/* =====================================================
                FULL SECTION BACKGROUND IMAGE
                ===================================================== */}
              <motion.div
                initial={{ scale: 1.015 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full bg-cover bg-[72%_center] bg-no-repeat
                         transition-transform duration-[1200ms] ease-out
                         group-hover:scale-[1.008]
                         sm:bg-[68%_center]
                         md:bg-[64%_center]
                         lg:bg-center"
                style={{
                  backgroundImage: `url(${heroPlanning })`,
                }}
              />
      
              {/* =====================================================
                MOBILE / TABLET READABILITY GRADIENT
      
                On desktop this is almost transparent because
                the original background already contains its gradient.
                ===================================================== */}
              <div
                className="pointer-events-none absolute inset-0
                         bg-gradient-to-r
                         from-[#f8f4ed]/100
                         via-[#f8f4ed]/95
                         to-[#f8f4ed]/30
                         
                         sm:via-[#f8f4ed]/90
                         sm:to-transparent
      
                         lg:from-[#f8f4ed]/5
                         lg:via-transparent
                         lg:to-transparent"
              />
      
              {/* =====================================================
                CONTENT WIDTH
                Reference image ratio ≈ 1040 x 366
                ===================================================== */}
              <div
                className={`${pageContainer} relative z-10 flex
          min-h-[500px] items-center
          sm:min-h-[500px]
          md:min-h-[470px]
          lg:min-h-[490px]
          xl:min-h-[500px]`}
              >
                {/* ===================================================
                  LEFT TEXT CONTENT
                  =================================================== */}
                <div
                  className="w-full max-w-[550px]
                           py-8
                           sm:py-10
                           md:max-w-[500px]
                           lg:w-[45%]
                           lg:py-10"
                >
                  {/* Breadcrumb */}
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.12 }}
                    className="mb-5 flex items-center gap-[7px]
                             text-[13px] font-medium
                             tracking-[0.01em] text-[#757d80]
                             sm:mb-6"
                  >
                    <Link
                      to="/"
                      className="transition-colors duration-300
                               hover:text-[#c66f4e]"
                    >
                      Home
                    </Link>
      
                    <span className="text-[#9ca2a3]">/</span>
      
                    <span className="text-[#173c50]">Projects</span>
                  </motion.div>
      
                  {/* Small Heading */}
                  <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-[14px]
                             text-[13px] font-bold uppercase
                             tracking-[0.15em] text-[#c66f4e]
                             sm:text-[14px]"
                  >
                  Projects & Organizations
                  </motion.p>
      
                  {/* Main Heading */}
                  <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.28,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-[480px]
                             font-serif
                             text-[40px]
                             font-medium
                             leading-[1.04]
                             tracking-[-0.025em]
                             text-[#173c50]
      
                             min-[420px]:text-[46px]
      
                             sm:text-42px]
                             sm:leading-[1.01]
      
                             md:text-[44px]
      
                             lg:text-[44px]"
                  >
                   Building Organizations.

                    <span className="block">Driving Impact.</span>
                  </motion.h1>
      
                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.4 }}
                    className="mt-4 max-w-[400px]
                             text-[14px]
                             leading-[1.7]
                             text-[#252a2c]
      
                             sm:mt-5
                             sm:text-[14px]
                             sm:leading-[1.75]
      
                             lg:max-w-[350px]
                             lg:text-[15px]"
                  >
                   Through research, innovation, and collaboration, meaningful initiatives can connect people, strengthen systems, and create sustainable value.
                  </motion.p>
      
                  {/* CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="mt-7"
                  >
                    <motion.a
                      href="#journey"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                       type="button"
            onClick={scrollToInitiatives}
                      className="group/button inline-flex
                               min-h-[37px]
                               items-center justify-center
                               gap-2
                               rounded-[6px]
                               border hover:border-[#374e5c]
                               hover:bg-white/90
                               px-[21px]
                               py-[10px]
                               text-[13px]
                               font-semibold
                               hover:text-[#0b1c25]
                               shadow-[0_1px_2px_rgba(23,60,80,0.08)]
                               backdrop-blur-[2px]
                               transition-all
                               duration-300
      
                               border-[#c66f4e]
                               bg-[#c66f4e]
                               text-white
                               hover:shadow-[0_8px_20px_rgba(198,111,78,0.20)]
      
                               sm:px-6
                               sm:py-[9px]"
                    >
                      <span>  Explore Initiatives</span>
      
                      <ArrowRight
                        strokeWidth={1.7}
                        className="h-[13px] w-[13px]
                                 transition-transform duration-300
                                 group-hover/button:translate-x-[3px]"
                      />
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </motion.section>


      {/* ========================= ORGANIZATION ========================= */}
      <motion.section {...sectionReveal} className="pt-10 pb-5 sm:pt-12">
        <div className={pageContainer}>
          <SectionTitle eyebrow="My Companies">
            Organizations Built Around Purpose
          </SectionTitle>
          <p className="mx-auto mt-3 max-w-[710px] text-center font-sans text-[10px] leading-[1.7] text-[#484f51] sm:text-[13px]">
            I build and support organizations that align research, industry,
            institutions, and society
            <br className="hidden md:block" />
            to solve meaningful problems and create long-term impact.
          </p>

          <div className="mt-8 overflow-hidden rounded-[9px] border border-[#ded9d1] bg-[#fdfcf9] px-4 py-6 shadow-[0_5px_18px_rgba(23,60,80,0.025)] sm:px-6 sm:py-7 lg:px-8">
            <div className="grid items-center gap-4 sm:grid-cols-[180px_1fr] sm:gap-7 lg:grid-cols-[250px_1fr] lg:gap-9">
              <motion.div
                whileHover={{ scale: 1.035, rotate: -1.5 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center"
              >
              <img src={rc} alt="RC lOGO" className="sm:h-36 sm:w-36 h-28 w-28" />
              </motion.div>

              <div className="text-center sm:text-left">
                <h3 className="font-serif text-[26px] font-700 leading-tight text-[#173c50] sm:text-[28px] lg:text-[34px]">
                  Researcher Connect
                </h3>
                <p className="mt-1 font-sans text-[8.5px] font-bold uppercase tracking-[0.15em] text-[#dc8c64] sm:text-[11px]">
                  Innovation and Impact Private Limited
                </p>
                <p className="mt-2 max-w-[575px] font-sans text-[11.5px] leading-[1.65] text-[#353b3d] sm:text-[12px]">
                  A collaborative platform designed to connect researchers,
                  institutions, and professionals while supporting innovation and
                  practical impact.
                </p>
                <p className="mt-2 flex items-center justify-center gap-2 font-sans text-[8.5px] leading-4 text-[#414749] sm:justify-start sm:text-[11px]">
                  <Info size={12} strokeWidth={1.5} className="text-[#475354]" />
                  Organization details and links can be updated with verified
                  information.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4">
              {organizationFeatures.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.42, delay: index * 0.07, ease }}
                  whileHover={{ y: -4 }}
                  className="group rounded-[7px] border border-[#e3ddd5] bg-[#fffefa] px-4 py-5 text-center transition-shadow duration-300 hover:shadow-[0_9px_20px_rgba(23,60,80,0.06)]"
                >
                  <Icon
                    size={34}
                    strokeWidth={1.15}
                    className="mx-auto text-[#3d4d4c] transition-transform duration-300 group-hover:scale-110"
                  />
                  <h4 className="mt-2 font-serif text-[14px] font-medium text-[#0f2937] sm:text-[18px]">
                    {title}
                  </h4>
                  <p className="mx-auto mt-1 max-w-[170px] font-sans text-[11px] leading-[1.55] text-[#4f595d]">
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ========================= VISION ========================= */}
      <motion.section {...sectionReveal} className="py-4 sm:py-5">
        <div className={pageContainer}>
          <div className="relative overflow-hidden rounded-[8px] border border-[#d6ddd7] bg-gradient-to-r from-[#e4e9e3] via-[#e9ece7] to-[#dce2dc] px-5 py-5 sm:px-7 lg:px-10">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5 sm:gap-7">
                <motion.span
                  whileHover={{ rotate: -5, scale: 1.05 }}
                  className="grid h-[78px] w-[78px] shrink-0 place-items-center rounded-full bg-white/50 sm:h-[88px] sm:w-[88px]"
                >
                  <Sprout size={43} strokeWidth={1.05} className="text-[#76958a]" />
                </motion.span>

                <div>
                  <p className="font-sans text-[8.5px] font-semibold uppercase tracking-[0.2em] text-[#b99348]">
                    Vision
                  </p>
                  <p className="mt-2 max-w-[610px] font-['Georgia',serif] text-[17px] font-normal leading-[1.45] text-[#2f5b69] sm:text-[19px] lg:text-[20px]">
                    To strengthen a collaborative ecosystem
                    <br className="hidden sm:block" />
                    where research, leadership, and innovation
                    <br className="hidden lg:block" />
                    contribute to sustainable progress.
                  </p>
                </div>
              </div>

              <a
                href="https://www.researcherconnect.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[33px] shrink-0 items-center justify-center self-start rounded-[3px] border border-[#456c79] bg-white/20 px-[22px] font-sans text-[9.5px] font-medium text-[#315a68] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#173c50] hover:text-white hover:shadow-md md:self-auto"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ========================= INITIATIVES ========================= */}
      <motion.section
        {...sectionReveal}
        id="initiatives"
        className="scroll-mt-16 py-5 sm:py-6"
      >
        <div className={pageContainer}>
          <DecorativeTitle>Selected Initiatives</DecorativeTitle>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.48, delay: index * 0.08, ease }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-[7px] border border-[#e0dbd3] bg-[#fffefa] shadow-[0_4px_12px_rgba(23,60,80,0.025)]"
              >
                <div className="h-[145px] overflow-hidden sm:h-[155px] lg:h-[165px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />
                </div>

                <div className="p-4 sm:p-5">
                  <span className="inline-flex rounded-full bg-[#edf2ed] px-3 py-[4px] font-sans text-[8.5px] font-medium text-[#718d83]">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-['Georgia',serif] text-[15px] font-normal leading-[1.25] text-[#173c50] sm:text-[16px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 min-h-[42px] font-sans text-[9.5px] leading-[1.55] text-[#717c80] sm:text-[10px]">
                    {item.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedInitiative(item)}
                    className="group/link mt-3 inline-flex items-center gap-1.5 font-sans text-[9px] font-medium text-[#315a68] transition-colors hover:text-[#b86f51]"
                  >
                    View Initiative
                    <ArrowRight
                      size={11}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-center font-sans text-[8.5px] text-[#7b8588]">
            <Info size={11} strokeWidth={1.5} />
            Sample initiative content — verified details can be added later.
          </p>
        </div>
      </motion.section>

      {/* ========================= CONTRIBUTION ========================= */}
      <motion.section {...sectionReveal} className="py-5 sm:py-7">
        <div className={pageContainer}>
          <DecorativeTitle>How I Contribute</DecorativeTitle>

          <div className="mt-6 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
            {contributions.map(({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.44, delay: index * 0.06, ease }}
                whileHover={{ y: -4 }}
                className="relative px-5 text-center lg:px-7"
              >
                {index !== contributions.length - 1 ? (
                  <span className="absolute right-0 top-[7px] hidden h-[74px] border-r border-dashed border-[#d4cac0] lg:block" />
                ) : null}

                <span className="mx-auto grid h-[50px] w-[50px] place-items-center rounded-full border border-[#8ba49b] bg-[#fbfaf8] transition-all duration-300 group-hover:bg-white">
                  <Icon size={24} strokeWidth={1.15} className="text-[#78958c]" />
                </span>
                <h3 className="mt-3 font-['Georgia',serif] text-[13px] font-normal text-[#173c50] sm:text-[14px]">
                  {title}
                </h3>
                <p className="mx-auto mt-2 max-w-[185px] font-sans text-[8.7px] leading-[1.55] text-[#737e81] sm:text-[9px]">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ========================= COLLABORATION ========================= */}
      <motion.section {...sectionReveal} className="py-5 sm:py-7">
        <div className={pageContainer}>
          <div className="grid overflow-hidden rounded-[8px] border border-[#dedbd4] bg-[#fbfaf6] md:grid-cols-[45.5%_54.5%]">
            <div className="relative flex items-center px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9">
              <div
                aria-hidden="true"
                className="absolute bottom-[18px] right-[18px] h-[42px] w-[42px] opacity-50"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #7e9991 1px, transparent 1px)",
                  backgroundSize: "7px 7px",
                }}
              />

              <div className="relative z-10 max-w-[390px]">
                <h2 className="font-['Georgia',serif] text-[22px] font-normal leading-tight text-[#173c50] sm:text-[24px]">
                  Collaboration at the Core
                </h2>
                <p className="mt-4 font-sans text-[10px] leading-[1.65] text-[#6b777b] sm:text-[10.5px]">
                  Great initiatives are built together. I believe in aligning
                  researchers, institutions, professionals, and partners around
                  common goals to design solutions that are inclusive, practical,
                  and impactful.
                </p>

                <div className="mt-5 space-y-2.5">
                  {["Shared Objectives", "Clear Communication", "Collective Ownership"].map(
                    (item) => (
                      <p
                        key={item}
                        className="flex items-center gap-2 font-sans text-[9.5px] text-[#667377]"
                      >
                        <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full border border-[#89a29a]">
                          <Check size={9} strokeWidth={1.8} className="text-[#74938a]" />
                        </span>
                        {item}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="group relative min-h-[260px] overflow-hidden md:min-h-[305px]">
              <img
                src={collaborationCore}
                alt="Collaborative team organizing project ideas on a board"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-[1000ms] ease-out group-hover:scale-[1.035]"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ========================= CTA ========================= */}
      <motion.section {...sectionReveal} className="pt-1 pb-8 sm:pb-10">
        <div className={pageContainer}>
          <div className="relative overflow-hidden rounded-[8px] border border-[#e2d5c9] bg-gradient-to-r from-[#f3ddd0] via-[#fbf5ef] to-[#fbf7f2] px-5 py-4 sm:px-8 sm:py-5 lg:px-10">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-[128px] overflow-hidden">
              <span className="absolute -bottom-[32px] -left-[22px] h-[105px] w-[105px] rounded-full border border-[#c67a59]" />
              <span className="absolute -bottom-[20px] -left-[8px] h-[78px] w-[78px] rounded-full border border-[#c67a59]" />
              <span className="absolute -bottom-[7px] left-[7px] h-[51px] w-[51px] rounded-full border border-[#c67a59]" />
              <span
                className="absolute left-[87px] top-[10px] h-[60px] w-[32px] opacity-65"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #cf7657 1px, transparent 1px)",
                  backgroundSize: "7px 7px",
                }}
              />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
              <div className="md:pl-[110px]">
                <h2 className="font-['Georgia',serif] text-[18px] font-normal text-[#b66b4d] sm:text-[20px]">
                  Let’s Build Meaningful Initiatives Together
                </h2>
                <p className="mt-1.5 font-sans text-[9px] text-[#7c7774] sm:text-[9.5px]">
                  Connect research, strategy, and people to create purposeful impact.
                </p>
              </div>

              <Link
                to="/contact"
                className="group inline-flex min-h-[31px] shrink-0 items-center justify-center rounded-[3px] bg-[#173c50] px-6 font-sans text-[9px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b86f51] hover:shadow-[0_8px_16px_rgba(23,60,80,0.15)]"
              >
                Start a Conversation
                <ArrowRight
                  size={11}
                  className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ========================= INITIATIVE MODAL ========================= */}
      <AnimatePresence>
        {selectedInitiative ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#173c50]/45 p-4 backdrop-blur-[2px]"
            onMouseDown={() => setSelectedInitiative(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25, ease }}
              onMouseDown={(event) => event.stopPropagation()}
              className="relative w-full max-w-[520px] overflow-hidden rounded-[10px] border border-[#dedbd4] bg-[#fffefa] shadow-[0_20px_60px_rgba(23,60,80,0.22)]"
            >
              <button
                type="button"
                aria-label="Close initiative details"
                onClick={() => setSelectedInitiative(null)}
                className="absolute right-3 top-3 z-20 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-[#173c50] shadow-sm transition hover:rotate-90 hover:bg-[#173c50] hover:text-white"
              >
                <X size={16} />
              </button>

              <img
                src={selectedInitiative.image}
                alt={selectedInitiative.title}
                className="h-[210px] w-full object-cover"
              />

              <div className="p-6 sm:p-7">
                <span className="inline-flex rounded-full bg-[#edf2ed] px-3 py-1 text-[9px] text-[#718d83]">
                  {selectedInitiative.tag}
                </span>
                <h3 className="mt-3 font-['Georgia',serif] text-[23px] text-[#173c50]">
                  {selectedInitiative.title}
                </h3>
                <p className="mt-3 text-[11px] leading-6 text-[#6c777a]">
                  {selectedInitiative.text}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex min-h-[34px] items-center rounded-[3px] bg-[#173c50] px-5 text-[10px] font-semibold text-white transition hover:bg-[#b86f51]"
                  >
                    Discuss Initiative
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedInitiative(null)}
                    className="inline-flex min-h-[34px] items-center rounded-[3px] border border-[#456c79] px-5 text-[10px] font-medium text-[#315a68] transition hover:bg-[#173c50] hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}
