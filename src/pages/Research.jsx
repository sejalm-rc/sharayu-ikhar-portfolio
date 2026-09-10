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
  UsersRound,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";

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

import r11 from "../assets/images/img/r11.png";
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




const impactItems = [
  {
    icon: Lightbulb,
    title: "Insight",
    text: "We explore complex questions, challenge assumptions, and generate meaningful insights.",
  },
  {
    icon: Target,
    title: "Strategy",
    text: "We translate insights into strategies that align with goals and drive effective action.",
  },
  {
    icon: Sprout,
    title: "Sustainable Change",
    text: "We contribute to stronger systems, resilient organizations, and lasting societal impact.",
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
    iconBg: "#dce6e3",
    iconColor: "#506f73",
  },
  {
    icon: UsersRound,
    title: "Academic Collaboration",
    text: "Working with scholars and professionals across disciplines to advance knowledge.",
    iconBg: "#f0ded3",
    iconColor: "#8a6558",
  },
  {
    icon: BookOpen,
    title: "Knowledge Dissemination",
    text: "Sharing findings through publications, platforms, and conversations that inform practice.",
    iconBg: "#ead8ad",
    iconColor: "#5a6c72",
  },
  {
    icon: Rocket,
    title: "Innovation Support",
    text: "Supporting initiatives that turn ideas into practical solutions and new possibilities.",
    iconBg: "#0d3658",
    iconColor: "#ffffff",
  },
];

/* =========================================================
   RESEARCH NOTES
========================================================= */

const noteItems = [
  {
    image: r8,
    title: "Building a Culture of Inquiry",
    text: "How organizations can cultivate curiosity, critical thinking, and evidence-led mindsets.",
  },
  {
    image: r9,
    title: "Why Collaboration Improves Research",
    text: "Exploring the power of partnerships in generating deeper insights and impact.",
  },
  {
    image: r10,
    title: "Turning Evidence Into Better Decisions",
    text: "Practical approaches for embedding evidence in everyday decision-making.",
  },
  {
    image: r11,
    title: "Explore Publications & Scholarly Work",
    text: "Discover a collection of my publications, research papers, and scholarly contributions.",
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

  <AnimatedSection className="pb-10">
  <div className={pageContainer}>
    <div
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-[9px]
        border
        border-[#dedbd3]
        bg-[#fbfaf6]

        shadow-[0_5px_18px_rgba(23,60,80,0.035)]

        transition-all
        duration-500
        ease-out

        hover:-translate-y-[2px]
        hover:shadow-[0_10px_30px_rgba(23,60,80,0.07)]

        lg:min-h-[265px]
      "
    >
      {/* =========================================
          ONLY ONE BACKGROUND IMAGE
      ========================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0

          bg-no-repeat
          bg-top

          transition-transform
          duration-[1200ms]
          ease-out

          group-hover:scale-[1.01]

          max-lg:bg-[length:auto_270px]
          max-lg:bg-left-top

          lg:bg-center
          lg:bg-[length:100%_100%]
        "
        style={{
          backgroundImage: `url(${collaborationBg})`,
        }}
      />

      {/* =========================================
          MOBILE IMAGE SPACE
          Empty because image is already background
      ========================================== */}
      <div
        className="
          relative
          z-[1]
          h-[210px]

          sm:h-[250px]
          md:h-[290px]

          lg:hidden
        "
      />

      {/* =========================================
          DESKTOP GRID
      ========================================== */}
      <div
        className="
          relative
          z-[2]

          lg:grid
          lg:min-h-[265px]
          lg:grid-cols-[45.7%_54.3%]
        "
      >
        {/* LEFT SIDE
            No second image here */}
        <div className="hidden lg:block" />

        {/* =========================================
            RIGHT CONTENT
        ========================================== */}
        <div
          className="
            relative
            flex
            items-center

            bg-[#fbfaf6]

            px-5

            sm:px-7
          
            md:px-9
          

            lg:min-h-[265px]
            lg:bg-transparent
            lg:px-[28px]
           

            xl:px-[34px]
          "
        >
          {/* Mobile soft fade so content stays clean */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              -z-[1]
              bg-[#fbfaf6]

              lg:hidden
            "
          />

          <div
            className="
              w-full
              max-w-[540px]

              motion-safe:animate-[collaborationContent_.7s_ease-out_both]
            "
          >
            {/* HEADING */}
            <h2
              className="
                font-serif
                text-[20px]
                font-normal
                leading-[1.2]
                tracking-[-0.25px]
                text-[#173c50]

                sm:text-[21px]
                md:text-[22px]
                mt-2
           
                lg:text-[27px]
                xl:text-[29px]
              "
            >
              Collaboration &amp; Knowledge Exchange
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[6px]
                max-w-[500px]

                font-sans
                text-[10.5px]
                font-normal
                leading-[1.5]
                text-[#414b4d]

                sm:text-[11px]

                lg:max-w-[455px]
                lg:text-[12px]
                lg:leading-[1.5]

              "
            >
              I bring together researchers, institutions, professionals, and
              decision-makers to co-create knowledge and drive meaningful
              change.
            </p>

            {/* ITEMS */}
            <div
              className="
                mt-[14px]
                space-y-[3px]

                sm:mt-[20px]
                sm:space-y-[6px]

                lg:mt-[14px]
                lg:space-y-[6px]
              "
            >
              {collaborationItems.map((item, index) => (
                <div
                  key={item.title}
                  className="
                    group/item
                    flex
                    items-start
                    gap-[10px]

                    transition-all
                    duration-300
                    ease-out

                    hover:translate-x-[3px]
                  "
                  style={{
                    animationDelay: `${150 + index * 100}ms`,
                  }}
                >
                  {/* CHECK ICON */}
                  <div
                    className="
                      mt-[1px]
                      flex
                      h-[20px]
                      w-[20px]
                      shrink-0
                      items-center
                      justify-center

                      rounded-full
                      border
                      border-[#528579]

                      bg-[#fbfaf6]/80

                      transition-all
                      duration-300

                      group-hover/item:border-[#70968d]
                      group-hover/item:bg-[#eef4f1]

                      lg:h-[18px]
                      lg:w-[18px]
                    "
                  >
                    <Check
                      strokeWidth={1.7}
                      className="
                        h-[9px]
                        w-[9px]
                        text-[#257a23]

                        lg:h-[12px]
                        lg:w-[12px]
                      "
                    />
                  </div>

                  {/* ITEM CONTENT */}
                  <div className="min-w-0">
                    <h3
                      className="
                        font-serif
                        text-[13.5px]
                        font-normal
                        leading-[1.25]
                        text-[#183b4e]

                        transition-colors
                        duration-300

                        group-hover/item:text-[#ae684f]

                        sm:text-[13px]

                        lg:text-[13.5px]
                        xl:text-[14px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-[1px]
                        max-w-[455px]

                        font-sans
                        text-[10.5px]
                        font-normal
                        leading-[1.45]
                        text-[#6c777a]

                        sm:text-[11px]
pb-3
                        lg:max-w-[440px]
                        lg:text-[11.5px]

                      
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
  </div>
</AnimatedSection>

      {/* =====================================================
          FROM INQUIRY TO IMPACT
      ====================================================== */}

 <AnimatedSection className="pb-10 sm:pb-12">
  <div className={pageContainer}>
    <div
      className="
        relative
        overflow-hidden
        rounded-[9px]
        border
        border-[#e1e6e1]
        bg-[#ecefec]

        px-4
        pb-5
        pt-3

        shadow-[0_5px_18px_rgba(23,60,80,0.035)]

        sm:px-6
        sm:pb-6

        lg:px-[32px]
        lg:pb-[13px]
        lg:pt-[7px]
      "
    >
      {/* LEFT DOT PATTERN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[8px]
          top-[75px]

          hidden
          h-[82px]
          w-[22px]

          opacity-70

          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, #769b94 1.2px, transparent 1.4px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* RIGHT DOT PATTERN */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[8px]
          top-[75px]

          hidden
          h-[82px]
          w-[22px]

          opacity-70

          lg:block
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, #769b94 1.2px, transparent 1.4px)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* TITLE */}
      <h2
        className="
          relative
          z-10

          text-center

          font-['Serif']
          text-[27px]
          font-normal
          leading-[1.2]
          tracking-[-0.35px]
          text-[#173c50]

          sm:text-[29px]

          lg:text-[30px]
        "
      >
        From Inquiry to Impact
      </h2>

      {/* FLOW */}
      <div
        className="
          relative
          z-10

          mt-4

          flex
          flex-col
          items-stretch
          justify-center
          gap-3

          sm:mt-4

          lg:mt-6
          lg:grid
          lg:grid-cols-[1fr_52px_1fr_52px_1.06fr]
          lg:items-center
          lg:gap-0
        "
      >
        {impactItems.map(({ icon: Icon, title, text }, index) => (
          <Fragment key={title}>
            {/* CARD */}
            <div
              className="
                group

                flex
                min-h-[102px]
                items-center

                rounded-[14px]
                border
                border-[#eeeeea]

                bg-[#fbfbf8]

                px-4
                py-4

                shadow-[0_2px_8px_rgba(23,60,80,0.018)]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-[3px]
                hover:shadow-[0_10px_26px_rgba(23,60,80,0.07)]

                sm:px-5

                lg:min-h-[102px]
                lg:px-[12px]
                lg:py-[12px]
              "
              style={{
                animationDelay: `${index * 120}ms`,
              }}
            >
              {/* ICON CIRCLE */}
              <div
                className="
                  flex
                  h-[60px]
                  w-[60px]
                  shrink-0
                  items-center
                  justify-center

                  rounded-full
                  border
                  border-[#d5d3c9]

                  bg-[#faf9f5]

                  transition-all
                  duration-500

                  group-hover:scale-[1.05]
                  group-hover:border-[#829b94]

                  sm:h-[60px]
                  sm:w-[60px]

                  lg:h-[60px]
                  lg:w-[60px]
                "
              >
                <Icon
                  className="
                    h-[30px]
                    w-[30px]

                    text-[#526d70]

                    transition-all
                    duration-500

                    group-hover:scale-[1.07]
                    group-hover:text-[#173c50]
                  "
                  strokeWidth={1.15}
                />
              </div>

              {/* TEXT */}
              <div
                className="
                  min-w-0

                  pl-4

                  lg:pl-[15px]
                "
              >
                <h3
                  className="
                    font-['Serif']
                    text-[15px]
                    font-semibold
                    leading-[1.25]
                    text-[#203d4e]

                    transition-colors
                    duration-300

                    group-hover:text-[#173c50]

                    sm:text-[16px]

                    lg:text-[17px]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-[6px]

                    max-w-[220px]

                    text-[12px]
                    font-normal
                    leading-[1.7]
                    text-[#667276]

                    sm:text-[11.5px]

                    lg:mt-[5px]
                    lg:text-[12px]
                    lg:leading-[1.65]
                  "
                >
                  {text}
                </p>
              </div>
            </div>

            {/* ARROW */}
            {index < impactItems.length - 1 && (
              <div
                className="
                  flex
                  h-8
                  items-center
                  justify-center

                  lg:h-auto
                "
              >
                <ArrowRight
                  strokeWidth={1.3}
                  className="
                    h-[26px]
                    w-[26px]

                    rotate-90
                    text-[#648982]

                    transition-transform
                    duration-500

                    lg:h-[33px]
                    lg:w-[33px]
                    lg:rotate-0
                  "
                />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  </div>
</AnimatedSection>

      {/* =====================================================
          RESEARCH CONTRIBUTIONS
      ====================================================== */}
<AnimatedSection className="pb-10 sm:pb-12">
  <div className={pageContainer}>
    {/* TITLE */}
    <h2
      className="
        text-center
        font-['Serif']
        text-[27px]
        font-normal
        leading-[1.2]
        tracking-[-0.3px]
        text-[#173c50]

        sm:text-[29px]
        lg:text-[30px]
      "
    >
      Research Contributions
    </h2>

    {/* MAIN OUTER BOX */}
    <div
      className="
        mt-[18px]
        overflow-hidden

        rounded-[9px]
        border
        border-[#e3dfd7]

        bg-[#fcfbf8]

        shadow-[0_3px_12px_rgba(23,60,80,0.025)]
      "
    >
      <div
        className="
          grid
          grid-cols-1

          sm:grid-cols-2

          lg:grid-cols-4
        "
      >
        {contributionItems.map(
          ({ icon: Icon, title, text, iconBg, iconColor }, index) => (
            <div
              key={title}
              className={`
                group
                relative

                flex
                min-h-[104px]
                items-center

                px-5
                py-4

                transition-all
                duration-500
                ease-out

                hover:bg-white

                sm:min-h-[110px]
                sm:px-6

                lg:min-h-[92px]
                lg:px-[13px]
                lg:py-[10px]

                ${
                  index === 0
                    ? ""
                    : "border-t border-[#e5e1db] sm:border-t-0"
                }

                ${
                  index === 1
                    ? "sm:border-l sm:border-[#e5e1db]"
                    : ""
                }

                ${
                  index === 2
                    ? "sm:border-t sm:border-[#e5e1db] lg:border-t-0 lg:border-l"
                    : ""
                }

                ${
                  index === 3
                    ? "sm:border-l sm:border-t sm:border-[#e5e1db] lg:border-t-0"
                    : ""
                }
              `}
            >
              {/* ICON CIRCLE */}
              <div
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  transition-all
                  duration-500
                  ease-out

                  group-hover:scale-[1.06]

                  sm:h-[60px]
                  sm:w-[60px]

                  lg:h-[44px]
                  lg:w-[44px]
                "
                style={{
                  backgroundColor: iconBg,
                }}
              >
                <Icon
                  strokeWidth={1.25}
                  className="
                    h-[27px]
                    w-[27px]

                    transition-transform
                    duration-500

                    group-hover:scale-[1.08]

                    lg:h-[22px]
                    lg:w-[22px]
                  "
                  style={{
                    color: iconColor,
                  }}
                />
              </div>

              {/* TEXT */}
              <div
                className="
                  min-w-0
                  pl-4

                  lg:pl-[10px]
                "
              >
                <h3
                  className="
                    font-['Serif']
                    text-[15px]
                    font-medium
                    leading-[1.25]
                    text-[#1c3c4f]

                    sm:text-[16px]

                    lg:text-[17px]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-[6px]

                    max-w-[240px]

                    text-[10px]
                    font-normal
                    leading-[1.55]
                    text-[#667276]

                    sm:text-[10px]

                    lg:mt-[6px]
                    lg:max-w-[190px]
                    lg:text-[11px]
                    lg:leading-[1.55]
                  "
                >
                  {text}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  </div>
</AnimatedSection>

      {/* =====================================================
          RESEARCH NOTES & PERSPECTIVES
      ====================================================== */}
<AnimatedSection className="pb-10">
  <div className={pageContainer}>
    {/* ================= HEADING ================= */}
    <h2
      className="
        font-['Serif']
        text-[27px]
        font-normal
        leading-[1.2]
        tracking-[-0.3px]
        text-[#173c50]

        sm:text-[29px]
        lg:text-[30px]
      "
    >
      Research Notes &amp; Perspectives
    </h2>

    {/* ================= CARDS ================= */}
    <div
      className="
        mt-[9px]

        grid
        grid-cols-1
        gap-4

        sm:grid-cols-2

        lg:grid-cols-[1fr_1fr_1fr_1.18fr]
        lg:gap-[7px]
      "
    >
      {noteItems.map((item, index) => {
        const isPublication = index === 3;

        return (
          <article
            key={item.title}
            className="
              group
              flex
              min-w-0
              flex-col

              overflow-hidden

              rounded-[8px]

              border
              border-[#e7ded4]

              bg-[#fffdfa]

            
             

              shadow-[0_2px_7px_rgba(23,60,80,0.025)]

              transition-all
              duration-500
              ease-out

              hover:-translate-y-[3px]
              hover:border-[#d8cabd]
              hover:shadow-[0_9px_22px_rgba(23,60,80,0.07)]
            "
          >
            {/* ================= IMAGE ================= */}
            <div
              className={`
                relative
                w-full
                shrink-0
                overflow-hidden

               

                ${
                  isPublication
                    ? "h-[150px] sm:h-[125px] lg:h-[130px]"
                    : "h-[150px] sm:h-[125px] lg:h-[130px]"
                }
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`
                  block
                  h-full
                  w-full

                  object-cover

                  transition-transform
                  duration-[900ms]
                  ease-out

                  group-hover:scale-[1.035]

                  ${
                    isPublication
                      ? "object-center"
                      : "object-center"
                  }
                `}
              />
            </div>

            {/* ================= CONTENT ================= */}
            <div
              className="
                flex
                flex-1
                flex-col

                px-[3px]
                pt-[7px]

                sm:px-[4px]

                lg:px-[3px]
                lg:pt-[6px]
              "
            >
              {/* TITLE */}
              <h3
                className="
                  font-['Serif']
                  text-[15px]
                  mt-2
                  font-medium
                  leading-[1.25]
                  tracking-[-0.1px]
                  text-[#173c50]

                  transition-colors
                  duration-300

                  group-hover:text-[#315f68]

                  sm:text-[15px]
px-2
                  lg:text-[15px]
                  lg:leading-[1.2]
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-[5px]

                  text-[10px]
                  font-normal
                  leading-[1.55]
                  text-[#677377]

                  sm:text-[9.5px]

                  lg:mt-[6px]
                  lg:text-[11px]
                  lg:leading-[1.48]
                  pb-5
                  px-2
                "
              >
                {item.text}
              </p>

           
            </div>
          </article>
        );
      })}
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