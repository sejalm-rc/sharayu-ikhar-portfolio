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

import collaborationBg from "../assets/images/img/rbg.png";
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
    title: "Data Organizational Decisions",
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
    image: collaborationBg,
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
                  backgroundImage: `url(${heroResearch})`,
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
      
                    <span className="text-[#173c50]">Research</span>
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
                  Research & Innovation
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
                    Research That

                    <span className="block">Moves Ideas Forward</span>
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
                   Exploring practical ideas, collaborative inquiry, and evidence-led strategies that strengthen organizations and create lasting impact.
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
                      <span>  Explore Research Areas</span>
      
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

    

      {/* =====================================================
          RESEARCH VISION
      ====================================================== */}

   <AnimatedSection
  className="
    bg-[#fffdf9]
    py-[34px]
    sm:py-[38px]
    lg:py-[44px]
  "
>
  <div
    className="
      mx-auto
      w-[calc(100%-40px)]
      max-w-[1260px]

      sm:w-[calc(100%-64px)]
      lg:w-[calc(100%-140px)]
      xl:w-[calc(100%-150px)]
    "
  >
    {/* ================= HEADING ================= */}
    <h2
      className="
        text-center
        font-serif
        text-[26px]
        font-medium
        leading-none
        text-[#17384d]

        sm:text-[28px]
        lg:text-[31px]
      "
    >
      Research Vision
    </h2>

    {/* ================= CONTENT ================= */}
    <div
      className="
        mt-[30px]
        grid
        grid-cols-1
        gap-8

        md:grid-cols-[1.12fr_0.82fr_1.12fr]
        md:items-start
        md:gap-[44px]

        lg:mt-[32px]
        lg:gap-[58px]

        xl:gap-[66px]
      "
    >
      {/* LEFT TEXT */}
      <div className="md:pt-[2px]">
        <p
          className="
            m-0
            text-[13px]
            font-normal
            leading-[1.85]
            text-[#58656b]

            sm:text-[13px]
            lg:text-[14px]
          "
        >
          My research connects inquiry with leadership and organizational
          strategy. I explore how research can inform better decisions,
          strengthen systems, and support innovation in complex environments.
        </p>
      </div>

      {/* CENTER QUOTE */}
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[310px]
          pb-[22px]

          md:-mt-[1px]
        "
      >
        <span
          aria-hidden="true"
          className="
            absolute
            -left-[23px]
            -top-[13px]
            font-serif
            text-[52px]
            font-bold
            leading-none
            text-[#c99748]

            lg:-left-[28px]
            lg:text-[56px]
          "
        >
          “
        </span>

        <blockquote
          className="
            m-0
            px-[5px]
            text-center
            font-serif
            text-[18px]
            font-medium
            leading-[1.5]
            text-[#17384d]

            sm:text-[19px]
            lg:text-[20px]
          "
        >
          Research becomes meaningful when insight is transformed into action.
        </blockquote>

        {/* Gold line */}
        <div
          className="
            absolute
            bottom-0
            left-1/2
            h-[1.5px]
            w-[94%]
            -translate-x-1/2
            bg-[#d8b77a]
          "
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="md:pt-[2px]">
        <p
          className="
            m-0
            text-[13px]
            font-normal
            leading-[1.85]
            text-[#58656b]

          sm:text-[13px]
            lg:text-[14px]
          "
        >
          I am committed to producing work that is rigorous, relevant, and
          actionable—bridging theory and practice to drive evidence-led
          strategies that create meaningful and sustainable impact.
        </p>
      </div>
    </div>
  </div>
</AnimatedSection>

      {/* =====================================================
          CORE RESEARCH AREAS
      ====================================================== */}

      <AnimatedSection
        id="areas"
        className="mt-2 pb-12 sm:pb-14"
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
              mt-8
              grid
              grid-cols-1
              gap-4

              sm:grid-cols-2

              lg:grid-cols-4
              lg:gap-3
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
                      text-[16.5px]
                      font-semibold
                      text-[#173c50]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[12px]
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

      <AnimatedSection className="bg-[#fcfaf6] py-4">
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

                      text-[12px]
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
                      mt-1
                      max-w-[195px]

                      text-[11.5px]
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

      <AnimatedSection className="py-10 ">
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

                      text-[11px]
                      font-semibold
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

                      text-[12.5px]
                      leading-[1.6]
                      text-[#677579]
                    "
                  >
                    {item.text}
                  </p>

            
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* =====================================================
          COLLABORATION & KNOWLEDGE EXCHANGE
      ====================================================== */}

    <AnimatedSection className="pb-10 sm:pb-12 lg:pb-14">
  <div className={pageContainer}>
    <div
      className="
        group
        grid
        w-full
        overflow-hidden
        rounded-[9px]
        border
        border-[#dedbd3]
        bg-[#fbfaf6]
        shadow-[0_5px_18px_rgba(23,60,80,0.035)]

        lg:grid-cols-[45.7%_54.3%]

        transition-all
        duration-500
        ease-out

        hover:shadow-[0_10px_30px_rgba(23,60,80,0.07)]
      "
    >
      {/* ================= LEFT IMAGE ================= */}
      <div
        className="
          relative
          min-h-[220px]
          overflow-hidden

          sm:min-h-[270px]
          md:min-h-[310px]
          lg:min-h-[255px]
        "
      >
        <img
          src={collaborationBg}
          alt="Researchers participating in a collaborative roundtable"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            object-center

            transition-transform
            duration-[1200ms]
            ease-out

            group-hover:scale-[1.025]
          "
        />
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div
        className="
          relative
          isolate
          overflow-hidden

          px-5
          py-6

          sm:px-7
          sm:py-7

          md:px-9
          md:py-8

          lg:flex
          lg:min-h-[255px]
          lg:items-center
          lg:px-[38px]
          lg:py-[18px]
        "
      >
        {/* BACKGROUND IMAGE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            z-0

            bg-right-bottom
            bg-no-repeat

            opacity-100

            [background-size:145px_auto]

            sm:[background-size:170px_auto]
            lg:[background-size:175px_auto]
          "
          style={{
            backgroundImage: `url(${collaborationBg})`,
          }}
        />

        {/* optional soft overlay to keep text clear */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-gradient-to-r
            from-[#fbfaf6]
            via-[#fbfaf6]/95
            to-[#fbfaf6]/45
          "
        />

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-[570px]
          "
        >
          {/* HEADING */}
          <h2
            className="
              font-['Georgia']
              text-[20px]
              font-normal
              leading-[1.25]
              tracking-[-0.25px]
              text-[#173c50]

              sm:text-[22px]
              md:text-[23px]

              lg:text-[22px]
            "
          >
            Collaboration &amp; Knowledge Exchange
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-[7px]
              max-w-[520px]

              font-sans
              text-[11px]
              font-normal
              leading-[1.6]
              text-[#667477]

              sm:text-[11.5px]

              lg:text-[10.5px]
              lg:leading-[1.55]
            "
          >
            I bring together researchers, institutions, professionals, and
            decision-makers to co-create knowledge and drive meaningful change.
          </p>

          {/* ITEMS */}
          <div
            className="
              mt-5
              space-y-[13px]

              sm:mt-[20px]
              sm:space-y-[14px]

              lg:mt-[17px]
              lg:space-y-[11px]
            "
          >
            {collaborationItems.map((item, index) => (
              <div
                key={item.title}
                className="
                  group/item
                  flex
                  items-start
                  gap-[11px]

                  transition-all
                  duration-300

                  hover:translate-x-[3px]
                "
                style={{
                  transitionDelay: `${index * 40}ms`,
                }}
              >
                {/* CHECK CIRCLE */}
                <div
                  className="
                    mt-[1px]
                    flex
                    h-[21px]
                    w-[21px]
                    shrink-0
                    items-center
                    justify-center

                    rounded-full
                    border
                    border-[#88a49e]

                    bg-[#fbfaf6]/80

                    transition-all
                    duration-300

                    group-hover/item:border-[#6f958b]
                    group-hover/item:bg-[#eef4f1]
                  "
                >
                  <Check
                    strokeWidth={1.8}
                    className="
                      h-[10px]
                      w-[10px]
                      text-[#779a91]
                    "
                  />
                </div>

                {/* ITEM TEXT */}
                <div className="min-w-0 pt-0">
                  <h3
                    className="
                      font-['Georgia']
                      text-[12px]
                      font-normal
                      leading-[1.25]
                      text-[#183b4e]

                      transition-colors
                      duration-300

                      group-hover/item:text-[#b86e51]

                      sm:text-[12.5px]

                      lg:text-[11.5px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-[2px]
                      max-w-[460px]

                      font-sans
                      text-[9.5px]
                      font-normal
                      leading-[1.5]
                      text-[#6c777a]

                      sm:text-[10px]

                      lg:text-[9px]
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
          CTA SECTION
      ====================================================== */}
<AnimatedSection className="bg-[#fffefd] pb-6 pt-2 sm:pb-5">
  <div className={pageContainer}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="
        group
        relative
        overflow-hidden
        rounded-[8px]

        min-h-[155px]

        shadow-[0_5px_18px_rgba(80,47,32,0.08)]

        transition-all
        duration-300

        hover:shadow-[0_14px_32px_rgba(80,47,32,0.15)]

        sm:min-h-[145px]
        lg:min-h-[128px]
      "
    >
      {/* ===================================================
          FULL CTA BACKGROUND IMAGE
      ==================================================== */}

      <motion.div
        initial={{ scale: 1.015 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0

          h-full
          w-full

          bg-cover
          bg-center
          bg-no-repeat

          transition-transform
          duration-700

          group-hover:scale-[1.015]
        "
        style={{
          backgroundImage: `url(${cta})`,
        }}
      />

      {/* very light overlay only for text readability */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#c96f4f]/[0.04]
        "
      />

      {/* ===================================================
          CTA CONTENT
      ==================================================== */}

      <div
        className="
          relative
          z-10

          flex
          min-h-[155px]
          flex-col
          items-center
          justify-center
          gap-5

          px-5
          py-6

          text-center

          sm:min-h-[145px]
          sm:px-8

          md:flex-row
          md:justify-between
          md:text-left

          lg:min-h-[128px]
          lg:px-[64px]
          lg:py-[18px]

          xl:px-[76px]
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.08,
          }}
          className="
            flex
            flex-col
            items-center
            gap-4

            sm:flex-row
            sm:text-left
ml-0  sm:ml-28
            md:items-center

            lg:gap-[22px]
          "
        >
         

          {/* TEXT */}
          <div>
            <h2
              className="
                font-serif

                text-[24px]
                font-medium
                leading-[1.1]
                tracking-[-0.015em]

                text-white

                sm:text-[27px]
                lg:text-[30px]
              "
            >
           Interested in Research Collaboration?
            </h2>

            <p
              className="
                mx-auto
                mt-[7px]
                max-w-[440px]

                text-[12px]
                font-normal
                leading-[1.55]

                text-white/90

                sm:mx-0
                sm:text-[12.5px]

                lg:text-[13.5px]
              "
            >
             Let's connect to explore ideas, share perspectives, 
              <span className="hidden sm:inline"> </span>
              <br className="hidden lg:block" />
             and create meaningful impact together.
            </p>
          </div>
        </motion.div>

        {/* =================================================
            CTA BUTTON
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.14,
          }}
          className="shrink-0"
          
        >
          <Link
  to="/contact"
  className="
    group/button

    inline-flex
    min-h-[42px]
    items-center
    justify-center
    gap-2
mr-6
    rounded-[4px]

    border
    border-white/80

    bg-gradient-to-r
    from-[#fffdf9]
    via-[#f8f1e9]
    to-[#f3e5da]

    px-6
    py-[11px]

    text-[13.5px]
    font-semibold
    text-[#173c50]

    shadow-[0_4px_14px_rgba(72,38,25,0.12)]

    transition-all
    duration-300
    ease-out

    hover:-translate-y-[3px]

   

  


    hover:shadow-[0_10px_24px_rgba(23,60,80,0.24)]

    active:translate-y-0
    active:scale-[0.98]

    sm:px-7
    lg:min-w-[210px]
  "
>
  <span>Start a Conversation</span>

  <ArrowRight
    size={14}
    strokeWidth={1.8}
    className="
      transition-transform
      duration-300

      group-hover/button:translate-x-[5px]
    "
  />
</Link>
        </motion.div>
      </div>
    </motion.div>
  </div>
</AnimatedSection>

      

    </main>
  );
}