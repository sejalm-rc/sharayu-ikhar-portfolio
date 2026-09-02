import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ClipboardList,
  GraduationCap,
  Handshake,
  Lightbulb,
  Microscope,
  Network,
  Rocket,
  Search,
  Sprout,
  Target,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

import AnimatedSection from "../components/AnimatedSection";

/* =========================================================
   IMAGES
========================================================= */

import heroResearch from "../assets/images/img/bgreaserch.png";

import areaInnovation from "../assets/images/img/r1.png";
import areaManagement from "../assets/images/img/r2.png";
import areaEducation from "../assets/images/img/r3.png";
import areaNetworks from "../assets/images/img/r4.png";

import initiativeEcosystems from "../assets/images/img/r5.png";
import initiativeData from "../assets/images/img/r6.png";
import initiativePlatforms from "../assets/images/img/r7.png";

import collaboration from "../assets/images/img/rbg.png";
import r8 from "../assets/images/img/r8.png";
import r9 from "../assets/images/img/r9.png";
import r10 from "../assets/images/img/r10.png";
import cta from "../assets/images/img/ctaResearch.png";

/* =========================================================
   SAME WIDTH / ALIGNMENT FOR EVERY SECTION
========================================================= */

const pageContainer =
  "mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8";

/* =========================================================
   CORE RESEARCH AREAS
========================================================= */

const areas = [
  {
    image: areaInnovation,
    icon: Lightbulb,
    title: "Organizational Innovation",
    text: "Exploring strategies and structures that enable organizations to innovate, adapt, and thrive in dynamic environments.",
  },
  {
    image: areaManagement,
    icon: Network,
    title: "Research Management",
    text: "Focusing on processes and practices that enhance research quality, efficiency, and impact across organizations.",
  },
  {
    image: areaEducation,
    icon: GraduationCap,
    title: "Higher Education Strategy",
    text: "Examining policies and models that strengthen institutions, advance learning, and expand societal impact.",
  },
  {
    image: areaNetworks,
    icon: Users,
    title: "Knowledge Networks",
    text: "Building and studying networks that facilitate knowledge exchange, learning, and collaborative problem-solving.",
  },
];

/* =========================================================
   RESEARCH APPROACH
========================================================= */

const approachItems = [
  {
    icon: Search,
    number: "01",
    title: "Identify",
    text: "Define meaningful questions and clarify research objectives.",
    color: "#729484",
  },
  {
    icon: Microscope,
    number: "02",
    title: "Investigate",
    text: "Gather and analyze evidence through rigorous inquiry.",
    color: "#C86F4E",
  },
  {
    icon: Users,
    number: "03",
    title: "Collaborate",
    text: "Engage stakeholders and co-create knowledge across perspectives.",
    color: "#D4A34B",
  },
  {
    icon: ClipboardList,
    number: "04",
    title: "Translate",
    text: "Convert insights into practical strategies and recommendations.",
    color: "#173C50",
  },
  {
    icon: BarChart3,
    number: "05",
    title: "Evaluate",
    text: "Assess outcomes and refine approaches for continuous improvement.",
    color: "#729484",
  },
];

/* =========================================================
   SELECTED INITIATIVES
========================================================= */

const initiatives = [
  {
    image: initiativeEcosystems,
    tag: "Systems",
    title: "Strengthening Research Ecosystems",
    text: "Designing approaches that build capacity, connect stakeholders, and enable sustainable research environments.",
  },
  {
    image: initiativeData,
    tag: "Analytics",
    title: "Data-Informed Organizational Decisions",
    text: "Using data and evidence to guide strategy, improve performance, and support smarter decision-making.",
  },
  {
    image: initiativePlatforms,
    tag: "Collaboration",
    title: "Collaborative Knowledge Platforms",
    text: "Developing practices that facilitate knowledge sharing, partnerships, and collective problem-solving.",
  },
];

/* =========================================================
   COLLABORATION POINTS
========================================================= */

const collaborationItems = [
  {
    title: "Interdisciplinary Dialogue",
    text: "Encouraging diverse perspectives to deepen understanding and spark innovation.",
  },
  {
    title: "Institutional Partnerships",
    text: "Building strong collaborations that expand reach and strengthen impact.",
  },
  {
    title: "Shared Learning",
    text: "Creating spaces for exchange, reflection, and continuous growth.",
  },
];

/* =========================================================
   CONTRIBUTIONS
========================================================= */

const contributionItems = [
  {
    icon: ClipboardList,
    title: "Research Coordination",
    text: "Planning and overseeing research activities to ensure quality and alignment.",
  },
  {
    icon: Handshake,
    title: "Academic Collaboration",
    text: "Working with scholars and professionals across disciplines.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Dissemination",
    text: "Sharing findings through publications, platforms, and conversations.",
  },
  {
    icon: Rocket,
    title: "Innovation Support",
    text: "Supporting initiatives that turn ideas into practical solutions.",
  },
];

/* =========================================================
   RESEARCH NOTES
========================================================= */

const noteItems = [
  {
    image: initiativeEcosystems,
    title: "Building a Culture of Inquiry",
    text: "How organizations can cultivate curiosity, critical thinking, and evidence-led practice.",
  },
  {
    image: collaboration,
    title: "Why Collaboration Improves Research",
    text: "Exploring the power of partnerships in strengthening research quality and relevance.",
  },
  {
    image: initiativeData,
    title: "Turning Evidence Into Better Decisions",
    text: "Practical approaches for translating research evidence into meaningful action.",
  },
  {
    image: initiativePlatforms,
    title: "Explore Publications & Scholarly Work",
    text: "Discover a collection of my publications, research outputs, and scholarly contributions.",
  },
];

export default function Research() {
   useEffect(() => {
      const style = document.createElement("style");
  
      style.innerHTML = `
      html,
      body,
      #root,
      #root * {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
      }
  
      html::-webkit-scrollbar,
      body::-webkit-scrollbar,
      #root::-webkit-scrollbar,
      #root *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
    `;
  
      document.head.appendChild(style);
  
      return () => {
        document.head.removeChild(style);
      };
    }, []);
  return (
    <main className="overflow-x-hidden bg-[#fffefd]">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group
          relative
          w-full
          overflow-hidden
          bg-[#faf7f1]

          min-h-[560px]
          sm:min-h-[580px]
          md:min-h-[490px]
          lg:min-h-[460px]
          xl:min-h-[480px]
        "
      >
        {/* FULL HERO BACKGROUND IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 1.02,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            inset-0
            h-full
            w-full

            bg-cover
            bg-[70%_center]
            bg-no-repeat

            transition-transform
            duration-[1200ms]
            ease-out

            group-hover:scale-[1.008]

            sm:bg-[68%_center]
            md:bg-[64%_center]
            lg:bg-center
          "
          style={{
            backgroundImage: `url(${heroResearch})`,
          }}
        />

        {/* MOBILE READABILITY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-r
            from-[#faf7f1]
            via-[#faf7f1]/95
            to-[#faf7f1]/35

            sm:via-[#faf7f1]/88
            sm:to-transparent

            md:from-[#faf7f1]/65
            md:via-[#faf7f1]/30

            lg:from-transparent
            lg:via-transparent
            lg:to-transparent
          "
        />

        {/* SAME CONTAINER */}

        <div
          className={`
            ${pageContainer}

            relative
            z-10
            flex

            min-h-[560px]
            items-start

            pt-9

            sm:min-h-[580px]
            sm:pt-10

            md:min-h-[490px]
            md:items-center
            md:pt-0

            lg:min-h-[460px]

            xl:min-h-[480px]
          `}
        >
          {/* LEFT CONTENT */}

          <div
            className="
              w-full
              max-w-[470px]

              md:w-[47%]
              md:max-w-[440px]

              lg:w-[42%]
              lg:max-w-[430px]
            "
          >
            {/* BREADCRUMB */}

            <motion.div
              initial={{
                opacity: 0,
                y: -8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="
                mb-7
                flex
                items-center
                gap-2

                text-[10px]
                font-medium
                text-[#747e82]

                sm:text-[11px]
              "
            >
              <Link
                to="/"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#c66f4e]
                "
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-[#173c50]">
                Research
              </span>
            </motion.div>

            {/* EYEBROW */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.18,
              }}
              className="
                mb-3

                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]

                text-[#c66f4e]

                sm:text-[11px]
              "
            >
              Research &amp; Innovation
            </motion.p>

            {/* HEADING */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[440px]

                font-serif
                text-[39px]
                font-medium
                leading-[1.04]
                tracking-[-0.025em]

                text-[#173c50]

                sm:text-[46px]

                md:text-[43px]

                lg:text-[48px]
              "
            >
              Research That
              <span className="block">
                Moves Ideas Forward
              </span>
            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.36,
              }}
              className="
                mt-5
                max-w-[390px]

                text-[12px]
                leading-[1.7]

                text-[#536166]

                sm:text-[13px]

                lg:max-w-[360px]
              "
            >
              Exploring practical ideas, collaborative inquiry, and
              evidence-led strategies that strengthen organizations and
              create lasting impact.
            </motion.p>

            {/* BUTTON */}

            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.46,
              }}
              className="mt-6"
            >
              <motion.a
                href="#areas"
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  group/button

                  inline-flex
                  min-h-[40px]
                  items-center
                  justify-center
                  gap-2

                  rounded-[4px]

                  border
                  border-[#173c50]/60

                  bg-white/85

                  px-5
                  py-[10px]

                  text-[11px]
                  font-semibold
                  text-[#173c50]

                  shadow-[0_2px_7px_rgba(23,60,80,0.06)]

                  backdrop-blur-[2px]

                  transition-all
                  duration-300

                  hover:border-[#c66f4e]

                  hover:bg-gradient-to-r
                  hover:from-[#c56446]
                  hover:via-[#d07855]
                  hover:to-[#bb583d]

                  hover:text-white

                  hover:shadow-[0_9px_22px_rgba(198,111,78,0.22)]
                "
              >
                Explore Research Areas

                <ArrowRight
                  size={13}
                  className="
                    transition-transform
                    duration-300

                    group-hover/button:translate-x-1
                  "
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* =====================================================
          RESEARCH VISION
      ====================================================== */}

      <AnimatedSection className="py-10 sm:py-12 lg:py-[46px]">
        <div className={pageContainer}>
          <h2
            className="
              text-center
              font-serif
              text-[27px]
              font-medium
              text-[#173c50]

              sm:text-[30px]
              lg:text-[32px]
            "
          >
            Research Vision
          </h2>

          <div
            className="
              mt-7
              grid
              gap-8

              md:grid-cols-[1fr_0.75fr_1fr]
              md:items-center

              lg:gap-[55px]
            "
          >
            <p
              className="
                text-[11px]
                leading-[1.75]
                text-[#58676c]

                sm:text-[12px]
              "
            >
              My research connects inquiry with leadership and organizational
              strategy. I explore how research can inform better decisions,
              strengthen systems, and support innovation in complex
              environments.
            </p>

            <blockquote
              className="
                relative
                border-b
                border-[#d5aa69]

                pb-4
                text-center

                font-serif
                text-[18px]
                font-medium
                leading-[1.45]

                text-[#173c50]

                sm:text-[20px]
              "
            >
              <span
                className="
                  absolute
                  -left-1
                  -top-5

                  text-[44px]
                  text-[#c79445]
                "
              >
                “
              </span>

              Research becomes meaningful when insight is transformed into
              action.
            </blockquote>

            <p
              className="
                text-[11px]
                leading-[1.75]
                text-[#58676c]

                sm:text-[12px]
              "
            >
              I am committed to producing work that is rigorous, relevant,
              and actionable—bridging theory and practice to drive
              evidence-led strategies that create meaningful and sustainable
              impact.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          CORE RESEARCH AREAS
      ====================================================== */}

      <AnimatedSection
        id="areas"
        className="scroll-mt-24 pb-12 sm:pb-14"
      >
        <div className={pageContainer}>
          <h2
            className="
              text-center
              font-serif
              text-[27px]
              font-medium
              text-[#173c50]

              sm:text-[30px]
              lg:text-[32px]
            "
          >
            Core Research Areas
          </h2>

          <div
            className="
              mt-6
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
              lg:gap-5
            "
          >
            {areas.map(({ image, icon: Icon, title, text }) => (
              <article
                key={title}
                className="
                  group
                  overflow-hidden

                  rounded-[8px]

                  border
                  border-[#e5ddd2]

                  bg-[#fffefd]

                  shadow-[0_3px_12px_rgba(23,60,80,0.025)]

                  transition-all
                  duration-300

                  hover:-translate-y-1.5
                  hover:border-[#d7c2af]
                  hover:shadow-[0_12px_28px_rgba(23,60,80,0.1)]
                "
              >
                <div className="relative h-[150px] overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-[1.045]
                    "
                  />

            
                </div>

                <div className="p-5">
                  <h3
                    className="
                      font-serif
                      text-[17px]
                      font-semibold
                      text-[#173c50]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[10px]
                      leading-[1.6]
                      text-[#68767a]
                    "
                  >
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          RESEARCH APPROACH
      ====================================================== */}

      <AnimatedSection className="bg-[#fcfaf6] py-10 sm:py-12">
        <div className={pageContainer}>
          <h2
            className="
              text-center
              font-serif
              text-[27px]
              font-medium
              text-[#173c50]

              sm:text-[30px]
              lg:text-[32px]
            "
          >
            Research Approach
          </h2>

          <div
            className="
              relative
              mt-7

              grid
              grid-cols-1
              gap-8

              sm:grid-cols-2

              lg:grid-cols-5
              lg:gap-4
            "
          >
            {/* CONNECTING LINE */}

            <div
              className="
                pointer-events-none
                absolute
                left-[10%]
                right-[10%]
                top-[20px]

                hidden

                border-t
                border-dashed
                border-[#9fb6ac]

                lg:block
              "
            />

            {approachItems.map(
              ({ icon: Icon, number, title, text, color }) => (
                <div
                  key={title}
                  className="
                    group
                    relative
                    text-center
                  "
                >
                  <div
                    className="
                      relative
                      z-10

                      mx-auto
                      flex
                      h-[40px]
                      w-[40px]
                      items-center
                      justify-center

                      rounded-full

                      text-[10px]
                      font-bold
                      text-white

                      shadow-sm

                      transition-transform
                      duration-300

                      group-hover:scale-110
                    "
                    style={{
                      backgroundColor: color,
                    }}
                  >
                    {number}
                  </div>

                  <Icon
                    size={27}
                    strokeWidth={1.2}
                    className="
                      mx-auto
                      mt-3

                      text-[#173c50]

                      transition-all
                      duration-300

                      group-hover:-translate-y-1
                      group-hover:text-[#c66f4e]
                    "
                  />

                  <h3
                    className="
                      mt-2

                      font-serif
                      text-[15px]
                      font-semibold
                      text-[#173c50]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-1
                      max-w-[175px]

                      text-[9.5px]
                      leading-[1.55]
                      text-[#69767a]
                    "
                  >
                    {text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          SELECTED RESEARCH INITIATIVES
      ====================================================== */}

      <AnimatedSection className="py-10 sm:py-12">
        <div className={pageContainer}>
          <h2
            className="
              text-center
              font-serif
              text-[27px]
              font-medium
              text-[#173c50]

              sm:text-[30px]
              lg:text-[32px]
            "
          >
            Selected Research Initiatives
          </h2>

          <div
            className="
              mt-6
              grid
              gap-5

              md:grid-cols-3
            "
          >
            {initiatives.map((item) => (
              <article
                key={item.title}
                className="
                  group
                  overflow-hidden

                  rounded-[8px]

                  border
                  border-[#e7ded3]

                  bg-[#fffefd]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#d5bea9]
                  hover:shadow-[0_12px_30px_rgba(23,60,80,0.09)]
                "
              >
                <div className="h-[150px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-[1.045]
                    "
                  />
                </div>

                <div className="p-5">
                  <span
                    className="
                      inline-flex
                      rounded-full

                      bg-[#eaf0eb]

                      px-3
                      py-1

                      text-[9px]
                      font-medium
                      text-[#66887d]
                    "
                  >
                    {item.tag}
                  </span>

                  <h3
                    className="
                      mt-3

                      font-serif
                      text-[17px]
                      font-semibold
                      text-[#173c50]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-[10px]
                      leading-[1.6]
                      text-[#677579]
                    "
                  >
                    {item.text}
                  </p>

                  <Link
                    to="/contact"
                    className="
                      group/link
                      mt-4

                      inline-flex
                      items-center
                      gap-2

                      text-[10px]
                      font-semibold
                      text-[#5f897e]

                      transition-colors

                      hover:text-[#c66f4e]
                    "
                  >
                    View Initiative

                    <ArrowRight
                      size={13}
                      className="
                        transition-transform
                        duration-300

                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          COLLABORATION & KNOWLEDGE EXCHANGE
      ====================================================== */}

      <AnimatedSection className="pb-12">
        <div className={pageContainer}>
          <div
            className="
              grid
              overflow-hidden

              rounded-[9px]

              border
              border-[#e4ddd3]

              bg-[#fbf9f4]

              shadow-[0_6px_20px_rgba(23,60,80,0.04)]

              lg:grid-cols-[1fr_1.08fr]
            "
          >
            {/* IMAGE */}

            <div className="group min-h-[280px] overflow-hidden">
              <img
                src={collaboration}
                alt="Researchers participating in a collaborative roundtable"
                className="
                  h-full
                  min-h-[280px]
                  w-full
                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.035]
                "
              />
            </div>

            {/* CONTENT */}

            <div
              className="
                relative
                overflow-hidden

                px-6
                py-8

                sm:px-9
                sm:py-9

                lg:px-10
              "
            >
              {/* DECORATIVE LEAF */}

              <Sprout
                size={150}
                strokeWidth={0.55}
                className="
                  pointer-events-none

                  absolute
                  -bottom-8
                  -right-5

                  text-[#a6b4a6]/25
                "
              />

              <div className="relative z-10">
                <h2
                  className="
                    font-serif
                    text-[27px]
                    font-medium
                    text-[#173c50]

                    sm:text-[30px]
                  "
                >
                  Collaboration &amp; Knowledge Exchange
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[550px]

                    text-[11px]
                    leading-[1.7]
                    text-[#627176]

                    sm:text-[12px]
                  "
                >
                  I bring together researchers, institutions, professionals,
                  and decision-makers to co-create knowledge and drive
                  meaningful change.
                </p>

                <div className="mt-5 space-y-4">
                  {collaborationItems.map((item) => (
                    <div
                      key={item.title}
                      className="
                        group
                        flex
                        gap-3
                      "
                    >
                      <div
                        className="
                          mt-[2px]

                          flex
                          h-[23px]
                          w-[23px]
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          border
                          border-[#78988d]
                        "
                      >
                        <Check
                          size={12}
                          className="text-[#78988d]"
                        />
                      </div>

                      <div>
                        <h3
                          className="
                            font-serif
                            text-[14px]
                            font-semibold
                            text-[#173c50]

                            transition-colors

                            group-hover:text-[#c66f4e]
                          "
                        >
                          {item.title}
                        </h3>

                        <p
                          className="
                            mt-[2px]
                            text-[9.5px]
                            leading-[1.5]
                            text-[#6c787c]
                          "
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          FROM INQUIRY TO IMPACT
      ====================================================== */}

      <AnimatedSection className="pb-12">
        <div className={pageContainer}>
          <div
            className="
              rounded-[8px]

              border
              border-[#e2e8e1]

              bg-[#f0f5f1]

              px-5
              py-7

              sm:px-7
            "
          >
            <h2
              className="
                text-center
                font-serif
                text-[27px]
                font-medium
                text-[#173c50]

                sm:text-[30px]
              "
            >
              From Inquiry to Impact
            </h2>

            <div
              className="
                mt-6
                grid
                gap-5

                md:grid-cols-3
              "
            >
              {[
                {
                  icon: Lightbulb,
                  title: "Insight",
                  text: "We explore complex questions, challenge assumptions, and generate meaningful insights.",
                },
                {
                  icon: Target,
                  title: "Strategy",
                  text: "We translate insights into strategies aligned with goals and effective action.",
                },
                {
                  icon: Sprout,
                  title: "Sustainable Change",
                  text: "We contribute to stronger systems, resilient organizations, and lasting societal impact.",
                },
              ].map(({ icon: Icon, title, text }, index) => (
                <div
                  key={title}
                  className="
                    group
                    relative

                    rounded-[8px]

                    border
                    border-[#e6e6df]

                    bg-white

                    px-5
                    py-5

                    text-center

                    shadow-[0_4px_14px_rgba(23,60,80,0.035)]

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_11px_25px_rgba(23,60,80,0.08)]
                  "
                >
                  <div
                    className="
                      mx-auto

                      flex
                      h-[55px]
                      w-[55px]
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#d7cdbc]

                      transition-all
                      duration-300

                      group-hover:border-[#c66f4e]
                    "
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.2}
                      className="
                        text-[#698a83]

                        transition-colors

                        group-hover:text-[#c66f4e]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-[16px]
                      font-semibold
                      text-[#173c50]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-2
                      max-w-[230px]

                      text-[9.5px]
                      leading-[1.55]
                      text-[#687579]
                    "
                  >
                    {text}
                  </p>

                  {index < 2 && (
                    <ArrowRight
                      size={18}
                      className="
                        absolute
                        -right-[14px]
                        top-1/2

                        hidden

                        -translate-y-1/2

                        text-[#829d93]

                        md:block
                      "
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          RESEARCH CONTRIBUTIONS
      ====================================================== */}

      <AnimatedSection className="pb-12">
        <div className={pageContainer}>
          <h2
            className="
              text-center
              font-serif
              text-[27px]
              font-medium
              text-[#173c50]

              sm:text-[30px]
            "
          >
            Research Contributions
          </h2>

          <div
            className="
              mt-6

              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {contributionItems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="
                  group
                  flex
                  items-center
                  gap-4

                  rounded-[8px]

                  border
                  border-[#e3e7e1]

                  bg-[#f6f8f5]

                  px-5
                  py-5

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-white
                  hover:shadow-[0_10px_24px_rgba(23,60,80,0.07)]
                "
              >
                <div
                  className="
                    flex
                    h-[46px]
                    w-[46px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full

                    bg-[#e8efea]
                  "
                >
                  <Icon
                    size={23}
                    strokeWidth={1.2}
                    className="
                      text-[#6c8c85]

                      transition-colors

                      group-hover:text-[#c66f4e]
                    "
                  />
                </div>

                <div>
                  <h3
                    className="
                      font-serif
                      text-[14px]
                      font-semibold
                      text-[#173c50]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[9px]
                      leading-[1.5]
                      text-[#6d797c]
                    "
                  >
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          RESEARCH NOTES & PERSPECTIVES
      ====================================================== */}

      <AnimatedSection className="pb-10">
        <div className={pageContainer}>
          <h2
            className="
              font-serif
              text-[27px]
              font-medium
              text-[#173c50]

              sm:text-[30px]
            "
          >
            Research Notes &amp; Perspectives
          </h2>

          <div
            className="
              mt-5
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {noteItems.map((item, index) => (
              <article
                key={item.title}
                className="
                  group
                  overflow-hidden

                  rounded-[7px]

                  border
                  border-[#e7ded4]

                  bg-[#fffefd]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#d8c3b1]
                  hover:shadow-[0_10px_26px_rgba(23,60,80,0.08)]
                "
              >
                <div className="h-[115px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-full
                      w-full
                      object-cover

                      transition-transform
                      duration-700

                      group-hover:scale-[1.05]
                    "
                  />
                </div>

                <div className="p-4">
                  <h3
                    className="
                      font-serif
                      text-[14px]
                      font-semibold
                      leading-[1.25]
                      text-[#173c50]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      text-[9px]
                      leading-[1.55]
                      text-[#6a777b]
                    "
                  >
                    {item.text}
                  </p>

                  <Link
                    to={index === 3 ? "/publication" : "/research"}
                    className="
                      group/link
                      mt-3

                      inline-flex
                      items-center
                      gap-1.5

                      text-[9.5px]
                      font-semibold
                      text-[#5f857d]

                      transition-colors

                      hover:text-[#c66f4e]
                    "
                  >
                    {index === 3 ? "View Publications" : "Read More"}

                    <ArrowRight
                      size={11}
                      className="
                        transition-transform
                        group-hover/link:translate-x-1
                      "
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <AnimatedSection className="pb-6">
        <div className={pageContainer}>
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="
              relative
              overflow-hidden

              rounded-[8px]

              bg-gradient-to-r
              from-[#b95f43]
              via-[#cf7554]
              to-[#c96949]

              px-6
              py-6

              text-white

              shadow-[0_7px_20px_rgba(109,55,37,0.12)]

              sm:px-8

              md:flex
              md:items-center
              md:justify-between
              md:gap-8

              lg:px-12
            "
          >
            {/* DECORATIONS */}

            <Sprout
              size={130}
              strokeWidth={0.55}
              className="
                pointer-events-none

                absolute
                -bottom-6
                -left-6

                rotate-[-25deg]

                text-white/30
              "
            />

            <Sprout
              size={120}
              strokeWidth={0.55}
              className="
                pointer-events-none

                absolute
                -bottom-5
                -right-4

                rotate-[28deg]

                text-white/25
              "
            />

            {/* CONTENT */}

            <div
              className="
                relative
                z-10

                text-center

                md:text-left
              "
            >
              <h2
                className="
                  font-serif
                  text-[25px]
                  font-medium

                  sm:text-[28px]
                "
              >
                Interested in Research Collaboration?
              </h2>

              <p
                className="
                  mt-1

                  text-[10px]
                  leading-[1.6]

                  text-white/85

                  sm:text-[11px]
                "
              >
                Let&apos;s connect to explore ideas, share perspectives, and
                create meaningful impact together.
              </p>
            </div>

            {/* BUTTON */}

            <Link
              to="/contact"
              className="
                group/button
                relative
                z-10

                mx-auto
                mt-5

                inline-flex
                min-h-[40px]
                items-center
                justify-center
                gap-2

                rounded-[4px]

                bg-white

                px-6
                py-[10px]

                text-[10.5px]
                font-semibold
                text-[#173c50]

                shadow-md

                transition-all
                duration-300

                hover:-translate-y-1

                hover:bg-gradient-to-r
                hover:from-[#173c50]
                hover:via-[#244f60]
                hover:to-[#356a72]

                hover:text-white

                md:mx-0
                md:mt-0
              "
            >
              Start a Conversation

              <ArrowRight
                size={13}
                className="
                  transition-transform
                  duration-300

                  group-hover/button:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

    </main>
  );
}