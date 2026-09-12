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

import initiativeNetwork from "../assets/images/img/project3.png";
import initiativeKnowledge from "../assets/images/img/project4.png";
import initiativeGrowth from "../assets/images/img/project5.png";
import collaborationCore from "../assets/images/img/project2.png";
import cta from "../assets/images/img/ctaProject.png";


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
    <div className="flex items-center justify-center gap-4 sm:gap-6 sm:mb-8 mb-4">
      <span className="h-px min-w-0 flex-1 bg-[#d9c6a5]" />
      <h2 className="shrink-0 text-center font-serif text-[28px] font-normal leading-none text-[#173c50] sm:text-[30px]">
        {children}
      </h2>
      <span className="h-px min-w-0 flex-1 bg-[#d9c6a5]" />
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
          lg:min-h-[430px]
          xl:min-h-[450px]`}
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
      <motion.section {...sectionReveal} className="pt-6 pb-4">
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
                  <span className="inline-flex rounded-full bg-[#edf2ed] px-3 py-[3px] font-sans text-[11px] font-medium text-[#435851] border border-collapse border-[#d6eede]">
                    {item.tag}
                  </span>
                  <h3 className="mt-3 font-serif text-[15px] font-medium leading-[1.25] text-[#112b3a] sm:text-[20px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 min-h-[42px] font-sans text-[9.5px] leading-[1.55] text-[#3b4042] sm:text-[11.5px]">
                    {item.text}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedInitiative(item)}
                    className="group/link mt-3 inline-flex items-center gap-1.5 font-sans text-[13px] font-medium text-[#223f48] transition-colors hover:text-[#b86f51]"
                  >
                    View Initiative
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

        
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
                <h3 className="mt-3 font-['Georgia',serif] text-[16px] font-normal text-[#173c50] sm:text-[18px]">
                  {title}
                </h3>
                <p className="mx-auto mt-1 max-w-[210px] font-sans text-[10.7px] leading-[1.55] text-[#393e3f] sm:text-[11px]">
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
                <h2 className="font-serif text-[28px] font-normal leading-tight text-[#142e3c] sm:text-[30px]">
                  Collaboration at the Core
                </h2>
                <p className="mt-4 font-sans text-[10px] leading-[1.65] text-[#515a5d] sm:text-[12.5px]">
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
                        className="flex items-center gap-2 font-sans text-[11.5px] text-[#30383a]"
                      >
                        <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full border border-[#46544f]">
                          <Check size={9} strokeWidth={1.8} className="text-[#4d625c]" />
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
 <motion.section className="w-full py-6">
  <div className={pageContainer}>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="
        group
        relative
        w-full
        min-h-[200px]
        overflow-hidden
        rounded-[10px]
        border
        border-[#e3d8cb]
        bg-[#fbf7f1]

        shadow-[0_4px_16px_rgba(23,60,80,0.035)]
        transition-shadow
        duration-300

        hover:shadow-[0_10px_28px_rgba(23,60,80,0.08)]

        min-[480px]:min-h-[190px]
        sm:min-h-[180px]
        md:min-h-[165px]
        lg:min-h-[160px]
        xl:min-h-[155px]
      "
    >
      {/* Background Image */}
      <motion.div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-cover
          bg-center
          bg-no-repeat

          transition-transform
          duration-700

          sm:bg-center
          md:bg-left

          group-hover:scale-[1.005]
        "
        style={{
          backgroundImage: `url(${cta})`,
        }}
      />

      {/* Content */}
      <div
        className="
          relative
          z-10

          flex
          w-full
          min-h-[200px]
          items-center
          justify-center

          px-4
          py-6

          min-[480px]:min-h-[190px]
          min-[480px]:px-5

          sm:min-h-[180px]
          sm:px-6

          md:min-h-[165px]
          md:justify-end
          md:px-8

          lg:min-h-[160px]
          lg:px-10

          xl:min-h-[155px]
          xl:px-12

          2xl:px-14
        "
      >
        {/* Text Area */}
        <div
          className="
            w-full
            max-w-[620px]
            text-center

            md:mr-[1%]
            md:w-[62%]

            min-[900px]:mr-[2%]
            min-[900px]:w-[60%]

            lg:mr-[3%]
            lg:w-[58%]

            xl:mr-[4%]
            xl:w-[56%]

            2xl:mr-[5%]
            2xl:w-[54%]
          "
        >
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              mx-auto
              font-serif
              font-medium
              leading-[1.22]
              text-[#c66f4e]

              text-[20px]

              min-[400px]:text-[21px]

              sm:text-[23px]

              md:text-[24px]

              lg:text-[25px]

              xl:text-[26px]
            "
          >
            Let's Build a Meaningful Initiative Together
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="
              mx-auto
              mt-2
              w-full
              max-w-[480px]

              text-center
              text-[11px]
              leading-[1.65]
              text-[#68767a]

              min-[480px]:text-[11.5px]

              sm:text-[12px]
            "
          >
            Connect research, strategy, and people to create purposeful impact.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="
              mt-4
              flex
              w-full
              justify-center
            "
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex"
            >
              <Link
                to="/contact"
                className="
                  inline-flex
                  min-h-[36px]
                  min-w-[145px]
                  items-center
                  justify-center

                  rounded-[4px]
                  bg-[#0b3f70]

                  px-5
                  py-2

                  text-center
                  text-[11px]
                  font-semibold
                  text-white

                  shadow-[0_3px_10px_rgba(11,63,112,0.18)]

                  transition-all
                  duration-300

                  hover:bg-[#c66f4e]
                  hover:shadow-[0_6px_16px_rgba(198,111,78,0.22)]

                  sm:min-w-[150px]
                  sm:px-6
                "
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
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
