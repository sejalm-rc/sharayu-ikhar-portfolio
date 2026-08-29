import {
  ArrowRight,
  BarChart3,
  Ear,
  Globe2,
  Heart,
  Leaf,
  Medal,
  Microscope,
  Network,
  Route,
  ShieldCheck,
  Target,
  UsersRound,
  Workflow,
  Users,
  ClipboardList,
  Cog,
  Handshake,
  SlidersHorizontal,
  ChartNoAxesColumnIncreasing,
  ShieldUser,
  Badge,
  Star,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import aboutHeroBg from "../assets/images/img/bgabout.png";
import cta from "../assets/images/img/ctaAbout.png";

import strategicRoadmap from "../assets/images/img/about2.png";
import learningDesk from "../assets/images/img/about3.png";

/* =========================================================
   WHAT I BRING
========================================================= */

const bringItems = [
  {
    icon: ClipboardList,
    title: "Strategic Planning",
    text: "Developing clear strategies that align vision with action and drive meaningful outcomes.",
  },
  {
    icon: Cog,
    title: "Operational Leadership",
    text: "Leading day-to-day operations with focus on efficiency, quality, and continuous improvement.",
  },
  {
    icon: UsersRound,
    title: "Team Development",
    text: "Empowering teams to grow, collaborate, and perform at their highest potential.",
  },
  {
    icon: Handshake,
    title: "Research Collaboration",
    text: "Partnering with researchers and institutions to support impactful and relevant work.",
  },
  {
    icon: SlidersHorizontal,
    title: "Process Excellence",
    text: "Designing and refining processes that enhance effectiveness and accountability.",
  },
  {
    icon: Network,
    title: "Partnership Building",
    text: "Building strong relationships that expand opportunities and create shared value.",
  },
];

/* =========================================================
   PROFESSIONAL JOURNEY
========================================================= */

const journeyItems = [
  {
    number: "01",
    title: "Building Strong Foundations",
    text: "Developed a solid grounding in operations, project management, and organizational systems.",
    color: "#C86F4E",
  },
  {
    number: "02",
    title: "Leading Complex Operations",
    text: "Took on broader leadership responsibilities to streamline operations and support organizational growth.",
    color: "#729484",
  },
  {
    number: "03",
    title: "Advancing Research Ecosystems",
    text: "Focused on enabling research initiatives, strengthening collaborations, and supporting knowledge advancement.",
    color: "#D4A34B",
  },
  {
    number: "04",
    title: "Creating Collaborative Impact",
    text: "Bringing together people, ideas, and resources to deliver sustainable impact across communities and institutions.",
    color: "#173C50",
  },
];

/* =========================================================
   VALUES
========================================================= */

const valueItems = [
  {
    type: "integrity",
    title: "Integrity",
    text: "I lead with honesty, transparency, and a strong sense of accountability.",
  },
  {
    type: "collaboration",
    title: "Collaboration",
    text: "I value diverse perspectives and believe great outcomes come from working together.",
  },
  {
    type: "excellence",
    title: "Excellence",
    text: "I strive for excellence in everything I do, with attention to detail and commitment to quality.",
  },
  {
    type: "impact",
    title: "Impact",
    text: "I focus on creating meaningful, positive change that benefits people and society.",
  },
];

/* =========================================================
   IMPACT
========================================================= */

const impactItems = [
  {
    icon: Ear,
    title: "Listen & Understand",
    text: "I listen deeply to understand needs, challenges, and opportunities.",
  },
  {
    icon: Target,
    title: "Align the Strategy",
    text: "I translate insights into clear strategies that align teams and resources.",
  },
  {
    icon: UsersRound,
    title: "Enable the Team",
    text: "I empower teams with the right tools, clarity, and support to succeed.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Measure & Improve",
    text: "I measure outcomes, learn, and continuously refine for greater impact.",
  },
];

const pageContainer =
  "w-full px-[40px] sm:px-[48px] md:px-[60px] lg:px-[76px] xl:px-[80px] 2xl:px-[80px]";

export default function About() {
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
    <main className="overflow-x-hidden bg-[#fbfaf7]">
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
            backgroundImage: `url(${aboutHeroBg})`,
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

              <span className="text-[#173c50]">About</span>
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
              About ME
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
                       text-[42px]
                       font-medium
                       leading-[1.04]
                       tracking-[-0.025em]
                       text-[#173c50]

                       min-[420px]:text-[46px]

                       sm:text-[50px]
                       sm:leading-[1.01]

                       md:text-[50px]

                       lg:text-[50px]

                       xl:text-[50px]"
            >
              Leadership Rooted
              <span className="block">in Purpose</span>
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
              Connecting people, strategy, research, and innovation to build
              organizations that create meaningful impact.
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
                <span>Discover My Journey</span>

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
    JOURNEY OF LEADERSHIP + FEATURE STRIP
====================================================== */}

      <section
        id="journey"
        className="relative overflow-hidden bg-[#fffefd] py-10 sm:py-12 lg:py-[36px]"
      >
       <div className={pageContainer}>
          {/* =====================================================
        SECTION HEADING
    ====================================================== */}

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        font-serif
        text-[29px]
        font-medium
        leading-[1.15]
        tracking-[-0.02em]
        text-[#173c50]

        sm:text-[29px]
        lg:text-[30px]
      "
          >
            A Journey of Leadership &amp; Purpose
          </motion.h2>

          {/* =====================================================
        QUOTE + DESCRIPTION
    ====================================================== */}

          <div
            className="
        mt-7
        grid
        gap-9

        md:grid-cols-[0.78fr_1.45fr]
        md:items-start
        md:gap-14

        lg:mt-8
        lg:grid-cols-[0.76fr_1.55fr]
        lg:gap-[78px]
      "
          >
            {/* ===================================================
          LEFT QUOTE
      ==================================================== */}

            <motion.div
              initial={{ opacity: 0, x: -22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative flex items-start">
                {/* GOLD QUOTE MARK */}
                <span
                  aria-hidden="true"
                  className="
              absolute
              -left-1
              -top-4
              font-serif
              text-[67px]
              font-bold
              leading-none
              text-[#c79946]

              sm:-left-2
              sm:text-[72px]

              lg:-left-[3px]
            "
                >
                  “
                </span>

                <blockquote
                  className="
              ml-[58px]
              max-w-[285px]
              pb-[22px]

              font-serif
              text-[22px]
              font-medium
              leading-[1.38]
              tracking-[-0.015em]
              text-[#173c50]

              sm:text-[24px]

              lg:ml-[62px]
              lg:text-[22px]
            "
                >
                  “Meaningful leadership
                  <span className="block">begins with clarity,</span>
                  <span className="block">collaboration, and the</span>
                  <span className="block">courage to turn ideas</span>
                  <span className="block">into action.”</span>
                  {/* GOLD LINE */}
                  <span
                    className="
                mt-[22px]
                block
                h-px
                w-[198px]
                bg-[#d6ad68]

                sm:w-[205px]
              "
                  />
                </blockquote>
              </div>
            </motion.div>

            {/* ===================================================
          RIGHT TEXT
      ==================================================== */}

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
          max-w-[650px]
          space-y-[18px]
text-justify
          text-[13px]
          font-normal
          leading-[1.75]
          text-[#323b3e]

          sm:text-[14px]
          sm:leading-[1.72]

          lg:pt-[4px]
        "
            >
              <p>
                As a Chief Operating Officer, I focus on aligning teams,
                strengthening systems, and supporting research-led initiatives
                that drive progress. My work sits at the intersection of
                strategy and execution—turning ideas into actionable plans and
                creating the conditions for people and projects to thrive.
              </p>

              <p>
                I believe sustainable growth is built through trust, clear
                communication, and a shared commitment to purpose. By fostering
                collaboration and operational excellence, I help organizations
                advance their missions and deliver lasting impact.
              </p>
            </motion.div>
          </div>

          {/* =====================================================
        FEATURE STRIP
    ====================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        mt-6
        overflow-hidden
        rounded-[8px]
        border
        border-[#dde2dc]
        bg-[#f3f5f2]

        shadow-[0_2px_8px_rgba(24,60,80,0.035)]

        sm:mt-5
        lg:mt-5
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
              {[
                {
                  icon: UsersRound,
                  title: "People-Centered",
                  second: "Leadership",
                },
                {
                  icon: Target,
                  title: "Strategic",
                  second: "Execution",
                },
                {
                  icon: Microscope,
                  title: "Research",
                  second: "Advancement",
                },
                {
                  icon: Leaf,
                  title: "Sustainable",
                  second: "Growth",
                },
              ].map(({ icon: Icon, title, second }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: 0.12 + index * 0.08,
                  }}
                  whileHover={{
                    y: -3,
                  }}
                  className={`
              group
              relative
              flex
              min-h-[94px]
              cursor-default
              items-center
              justify-start
              gap-[18px]

              px-6
              py-5

              transition-all
              duration-300

              hover:bg-[#fffefd]
              hover:shadow-[0_8px_20px_rgba(23,60,80,0.07)]

              sm:min-h-[98px]
              sm:px-7

              lg:min-h-[96px]
              lg:justify-center
              lg:px-[27px]
              lg:py-4

              ${
                index === 0
                  ? "border-b border-[#ddd8cf] sm:border-r lg:border-b-0"
                  : ""
              }

              ${
                index === 1
                  ? "border-b border-[#ddd8cf] lg:border-b-0 lg:border-r"
                  : ""
              }

              ${
                index === 2
                  ? "border-b border-[#ddd8cf] sm:border-r sm:border-b-0 lg:border-r"
                  : ""
              }
            `}
                >
                  {/* ICON */}
                  <div
                    className="
                flex
                h-[52px]
                w-[52px]
                shrink-0
                items-center
                justify-center

                transition-transform
                duration-300

                group-hover:scale-110
              "
                  >
                    <Icon
                      size={46}
                      strokeWidth={1.25}
                      className="
                  text-[#37484f]
                  transition-all
                  duration-300

                  group-hover:text-[#c66f4e]
                "
                    />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <p
                      className="
                 
                  text-[14px]
                  font-medium
                  leading-[1.35]
                  text-[#173c50]

                  sm:text-[14.5px]
                "
                    >
                      {title}

                      <span className="mt-[2px] block">{second}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

  {/* =====================================================
    WHAT I BRING TO THE TABLE
====================================================== */}

<AnimatedSection className="bg-[#fffefd] pb-12 pt-2 sm:pb-14 lg:pb-14">
  <div className={pageContainer}>

    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        font-serif
        text-[29px]
        font-medium
        leading-[1.1]
        tracking-[-0.02em]
        text-[#173c50]

        sm:text-[29px]
        md:text-[30px]
        lg:text-[30px]
      "
    >
      What I Bring to the Table
    </motion.h2>

    {/* CARDS */}
    <div
      className="
        sm:mt-8
        mt-5
        grid
        grid-cols-1
        gap-[14px]

        sm:grid-cols-2
        sm:gap-4

        lg:grid-cols-3
        lg:gap-x-[20px]
        lg:gap-y-[16px]
      "
    >
      {bringItems.map(({ icon: Icon, title, text }, index) => (
        <motion.article
          key={title}
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -4,
          }}
          className="
            group
            relative
            flex
            min-h-[124px]
            items-center
            gap-[18px]

            overflow-hidden
            rounded-[8px]
            border
            border-[#e4d8ca]
            bg-[#fffefd]

            px-[18px]
            py-[16px]

            shadow-[0_2px_6px_rgba(27,55,69,0.02)]

            transition-all
            duration-300

            hover:border-[#d5bdab]
            hover:bg-white
            hover:shadow-[0_10px_26px_rgba(27,55,69,0.08)]

            sm:min-h-[128px]

            lg:min-h-[125px]
            lg:px-[20px]
            lg:py-[17px]

            xl:min-h-[126px]
          "
        >
          {/* SOFT HOVER BACKGROUND */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-r
              from-[#f8f3eb]/0
              via-transparent
              to-transparent

              opacity-0
              transition-opacity
              duration-300

              group-hover:opacity-100
            "
          />

          {/* ICON CIRCLE */}
          <motion.div
            whileHover={{
              rotate: index === 1 ? 12 : 0,
              scale: 1.08,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              relative z-10
              flex
              h-[62px]
              w-[62px]
              shrink-0
              items-center
              justify-center

              rounded-full
              border
              border-[#eee5da]
              bg-[#f5f0e8]

              transition-all
              duration-300

              group-hover:border-[#dfc9b6]
              group-hover:bg-[#faf5ee]

              sm:h-[64px]
              sm:w-[64px]

              lg:h-[66px]
              lg:w-[66px]
            "
          >
            <Icon
              size={36}
              strokeWidth={1.25}
              className="
                text-[#4e6268]
                transition-all
                duration-300

                group-hover:scale-105
                group-hover:text-[#c66f4e]
              "
            />
          </motion.div>

          {/* TEXT */}
          <div className="relative z-10 min-w-0 flex-1">

            <h3
              className="
                font-serif
                text-[15px]
                font-semibold
                leading-[1.25]
                text-[#173c50]

                transition-colors
                duration-300

                group-hover:text-[#c66f4e]

                sm:text-[15px]
                lg:text-[16px]
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-[9px]
                max-w-[250px]

                text-[12px]
                font-normal
                leading-[1.55]
                text-[#68767a]

                sm:text-[12px]

                lg:text-[12.5px]
                lg:leading-[1.55]
              "
            >
              {text}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</AnimatedSection>

     {/* =====================================================
    MY PROFESSIONAL JOURNEY
====================================================== */}

<AnimatedSection className="bg-[#fffefd] pb-12 sm:pb-14 lg:pb-14">
  <div className={pageContainer}>
    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        font-serif
        text-[29px]
        font-medium
        leading-[1.1]
        tracking-[-0.02em]
        text-[#173c50]

        sm:text-[29px]
        md:text-[30px]
        lg:text-[30px]
      "
    >
      My Professional Journey
    </motion.h2>

    {/* CONTENT */}
    <div
      className="
        mt-5
        grid
        items-center
        gap-8

        md:mt-6
        md:grid-cols-[0.95fr_1.05fr]
        md:gap-10

        lg:grid-cols-[0.9fr_1.08fr]
        lg:gap-[56px]

        xl:grid-cols-[0.88fr_1.05fr]
        xl:gap-[70px]
      "
    >
      {/* ===================================================
          TIMELINE
      ==================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative"
      >
        {/* VERTICAL LINE */}
        <div
          className="
            absolute
            bottom-[28px]
            left-[20px]
            top-[25px]
            w-px
            bg-[#cdbda8]

            sm:left-[21px]
          "
        />

        <div className="space-y-[17px] sm:space-y-[18px] lg:space-y-[19px]">
          {journeyItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.09,
              }}
              className="
                group
                relative
                flex
                items-start
                gap-[18px]
              "
            >
              {/* NUMBER CIRCLE */}
              <motion.div
                whileHover={{
                  scale: 1.12,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  relative z-10
                  flex
                  h-[41px]
                  w-[41px]
                  shrink-0
                  items-center
                  justify-center

                  rounded-full
                  text-[11px]
                  font-bold
                  text-white

                  shadow-[0_3px_8px_rgba(23,60,80,0.12)]

                  transition-shadow
                  duration-300

                  group-hover:shadow-[0_7px_15px_rgba(23,60,80,0.18)]

                  sm:h-[43px]
                  sm:w-[43px]
                "
                style={{
                  backgroundColor: item.color,
                }}
              >
                {item.number}
              </motion.div>

              {/* TEXT */}
              <div className="min-w-0 flex-1 pt-[1px]">
                <h3
                  className="
                    font-serif
                    text-[15px]
                    font-semibold
                    leading-[1.25]
                    text-[#173c50]

                    transition-colors
                    duration-300

                    group-hover:text-[#c66f4e]

                    sm:text-[16px]
                    lg:text-[16.5px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-[6px]
                    max-w-[480px]
                    text-[12px]
                    leading-[1.55]
                    text-[#4c565a]

                    sm:text-[12px]
                    lg:text-[12.5px]
                  "
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===================================================
          IMAGE
      ==================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.75,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -4 }}
        className="
          group
          relative
          overflow-hidden
          rounded-[10px]

          border
          border-[#e2ded7]

          bg-[#f7f4ee]

          shadow-[0_8px_24px_rgba(23,60,80,0.08)]

          transition-all
          duration-300

          hover:shadow-[0_16px_38px_rgba(23,60,80,0.14)]
        "
      >
        <div
          className="
            relative
            aspect-[1.58/1]
            w-full
            overflow-hidden

            sm:aspect-[1.62/1]
            md:aspect-[1.55/1]
            lg:aspect-[1.62/1]
          "
        >
          <img
            src={strategicRoadmap}
            alt="Strategic roadmap leadership presentation"
            className="
              h-full
              w-full
              object-cover
              object-center

              transition-transform
              duration-700
              ease-out

              group-hover:scale-[1.035]
            "
          />

          {/* VERY LIGHT IMAGE OVERLAY */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              bg-gradient-to-tr
              from-[#173c50]/[0.02]
              via-transparent
              to-white/[0.03]
            "
          />
        </div>
      </motion.div>
    </div>
  </div>
</AnimatedSection>

 {/* =====================================================
    VALUES THAT GUIDE MY WORK
====================================================== */}

<AnimatedSection className="bg-[#fffefd] pb-10 sm:pb-12 lg:pb-[50px]">
  <div className={pageContainer}>
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        overflow-hidden
        rounded-[8px]
        border
        border-[#dfe5df]
        bg-[#f2f5f2]

        px-5
        pb-6
        pt-5

        shadow-[0_3px_10px_rgba(23,60,80,0.035)]

        sm:px-7
        sm:pb-7
        sm:pt-6

        lg:px-[26px]
        lg:pb-[24px]
        lg:pt-[18px]
      "
    >
      {/* =========================
          HEADING
      ========================== */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.55,
          delay: 0.08,
        }}
        className="
          text-center
          font-serif
          text-[29px]
          font-medium
          leading-[1.1]
          tracking-[-0.02em]
          text-[#173c50]

          sm:text-[30px]
          lg:text-[30px]
        "
      >
        Values That Guide My Work
      </motion.h2>

      {/* =========================
          VALUES GRID
      ========================== */}
      <div
        className="
          mt-6
          grid
          grid-cols-1

          sm:grid-cols-2
          sm:gap-y-0

          lg:mt-[26px]
          lg:grid-cols-4
        "
      >
        {valueItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: 0.12 + index * 0.07,
            }}
            whileHover={{
              y: -3,
            }}
            className={`
              group
              relative
              flex
              min-h-[105px]
              items-center
              gap-[17px]

              px-2
              py-5

              transition-all
              duration-300

              hover:bg-white/60

              sm:px-5

              lg:min-h-[88px]
              lg:px-[10px]
              lg:py-[10px]

              ${
                index === 0
                  ? "border-b border-[#daddd8] sm:border-r lg:border-b-0"
                  : ""
              }

              ${
                index === 1
                  ? "border-b border-[#daddd8] lg:border-b-0 lg:border-r"
                  : ""
              }

              ${
                index === 2
                  ? "border-b border-[#daddd8] sm:border-r sm:border-b-0 lg:border-r"
                  : ""
              }
            `}
          >
            {/* =========================
                ICON
            ========================== */}
            <div
              className="
                relative
                flex
                h-[52px]
                w-[52px]
                shrink-0
                items-center
                justify-center

                text-[#668592]

                transition-all
                duration-300

                group-hover:scale-110
                group-hover:text-[#c66f4e]

                lg:h-[56px]
                lg:w-[56px]
              "
            >
              {/* INTEGRITY */}
              {item.type === "integrity" && (
                <ShieldUser
                  size={47}
                  strokeWidth={1.15}
                  className="h-full w-full"
                />
              )}

              {/* COLLABORATION */}
              {item.type === "collaboration" && (
                <UsersRound
                  size={47}
                  strokeWidth={1.15}
                  className="h-full w-full"
                />
              )}

              {/* EXCELLENCE - COMPOSITE ICON */}
              {item.type === "excellence" && (
                <>
                  <Badge
                    size={50}
                    strokeWidth={1.05}
                    className="absolute inset-0 h-full w-full"
                  />

                  <Star
                    size={28}
                    strokeWidth={1.15}
                    className="relative z-10"
                  />
                </>
              )}

              {/* IMPACT */}
              {item.type === "impact" && (
                <Heart
                  size={47}
                  strokeWidth={1.1}
                  className="h-full w-full"
                />
              )}
            </div>

            {/* =========================
                TEXT
            ========================== */}
            <div className="min-w-0 flex-1">
              <h3
                className="
                  font-serif
                  text-[15px]
                  font-semibold
                  leading-[1.2]
                  text-[#173c50]

                  transition-colors
                  duration-300

                  group-hover:text-[#c66f4e]

                  lg:text-[16px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-[7px]
                  max-w-[190px]

                  text-[11.5px]
                  font-normal
                  leading-[1.5]
                  text-[#647176]

                  sm:text-[10px]

                  lg:text-[12px]
                  lg:leading-[1.5]
                "
              >
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</AnimatedSection>

     {/* =====================================================
    HOW I CREATE IMPACT
====================================================== */}

<AnimatedSection className="bg-[#fffefd] py-4 sm:py-2 pb-10 sm:pb-12">
  <div className={pageContainer}>
    {/* HEADING */}
    <motion.h2
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        text-center
        font-serif
        text-[29px]
        font-medium
        leading-[1.1]
        tracking-[-0.02em]
        text-[#173c50]

        sm:text-[30px]
        lg:text-[30px]
      "
    >
      How I Create Impact
    </motion.h2>

    {/* PROCESS */}
    <div
      className="
        relative
        mt-6
        grid
        grid-cols-1
        gap-8

        sm:grid-cols-2
        sm:gap-x-6
        sm:gap-y-9

        lg:mt-[26px]
        lg:grid-cols-4
        lg:gap-0
      "
    >
      {/* DESKTOP CONNECTING LINE */}
      <div
        className="
          pointer-events-none
          absolute
          left-[12.5%]
          right-[12.5%]
          top-[29px]

          hidden
          h-px

          bg-[#d88362]

          lg:block
        "
      />

      {impactItems.map(({ icon: Icon, title, text }, index) => (
        <motion.div
          key={title}
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.08 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            flex
            flex-col
            items-center
            text-center
          "
        >
          {/* ICON CIRCLE */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.07,
            }}
            transition={{
              duration: 0.28,
            }}
            className="
              relative
              z-10

              flex
              h-[58px]
              w-[58px]
              items-center
              justify-center

              rounded-full
              border
              border-[#d3a36a]

              bg-[#fffefd]

              shadow-[0_2px_7px_rgba(23,60,80,0.035)]

              transition-all
              duration-300

              group-hover:border-[#c66f4e]
              group-hover:bg-[#fffaf5]
              group-hover:shadow-[0_8px_18px_rgba(198,111,78,0.12)]

              sm:h-[60px]
              sm:w-[60px]
            "
          >
            <Icon
              size={32}
              strokeWidth={1.25}
              className="
                text-[#3f545a]

                transition-all
                duration-300

                group-hover:text-[#c66f4e]
              "
            />
          </motion.div>

          {/* TITLE */}
          <h3
            className="
              mt-[14px]

              font-serif
              text-[16px]
              font-semibold
              leading-[1.2]
              text-[#173c50]

              transition-colors
              duration-300

              group-hover:text-[#c66f4e]

              sm:text-[16px]
              lg:text-[17px]
            "
          >
            {title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-[7px]
              max-w-[230px]

              text-[11px]
              font-normal
              leading-[1.5]
              text-[#667378]

              sm:text-[10.5px]

              lg:max-w-[215px]
              lg:text-[12px]
            "
          >
            {text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</AnimatedSection>

   {/* =====================================================
    BEYOND THE ROLE
====================================================== */}

<AnimatedSection className="bg-[#fffefd] pb-8 sm:pb-10 lg:pb-10">
  <div className={pageContainer}>
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -3 }}
      className="
        group
        grid
        overflow-hidden
        rounded-[10px]
        border
        border-[#e4dacd]
        bg-[#fbf8f2]

        shadow-[0_3px_12px_rgba(23,60,80,0.04)]

        transition-all
        duration-300

        hover:border-[#d9c5b3]
        hover:shadow-[0_14px_34px_rgba(23,60,80,0.09)]

        md:grid-cols-2
      "
    >
      {/* ===================================================
          LEFT CONTENT
      ==================================================== */}

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.65,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          flex
          min-h-[240px]
          flex-col
          justify-center

          px-6
          py-8

          sm:px-8
          sm:py-9

          md:min-h-[260px]

          lg:min-h-[270px]
          lg:px-[42px]
          lg:py-[30px]

          xl:px-[46px]
        "
      >
        {/* TITLE */}
        <h2
          className="
            font-serif
            text-[29px]
            font-medium
            leading-[1.1]
            tracking-[-0.02em]
            text-[#173c50]

            sm:text-[29px]

            lg:text-[30px]
          "
        >
          Beyond the Role
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mt-4
            max-w-[500px]

            text-[12.5px]
            font-normal
            leading-[1.72]
            text-[#313739]
text-justify
            sm:text-[11.5px]

            lg:mt-[16px]
            lg:text-[13.5px]
            lg:leading-[1.7]
          "
        >
          Beyond my core responsibilities, I am committed to mentoring emerging
          leaders, supporting knowledge exchange, and strengthening academic and
          professional communities. I believe in the power of continuous learning
          and investing time in initiatives that inspire growth and curiosity.
        </p>

        {/* LINK */}
        <Link
          to="/contact"
          className="
            group/link
            mt-5
            inline-flex
            w-fit
            items-center
            gap-[10px]

            text-[13px]
            font-semibold
            hover:text-[#618590]

            transition-all
            duration-300

            text-[#c66f4e]

            sm:text-[13.5px]
          "
        >
          <span>Let&apos;s Connect</span>

          <ArrowRight
            size={15}
            strokeWidth={1.5}
            className="
              transition-transform
              duration-300

              group-hover/link:translate-x-[5px]
            "
          />
        </Link>
      </motion.div>

      {/* ===================================================
          RIGHT IMAGE
      ==================================================== */}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.14,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          min-h-[250px]
          overflow-hidden

          sm:min-h-[290px]

          md:min-h-full
        "
      >
        <img
          src={learningDesk}
          alt="Leadership learning desk with books, notebook and research materials"
          className="
            absolute
            inset-0
            h-full
            w-full

            object-cover
            object-center

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.035]
          "
        />

        {/* subtle overlay */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-r
            from-[#173c50]/[0.025]
            via-transparent
            to-transparent
          "
        />
      </motion.div>
    </motion.div>
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
              Let&apos;s Build Something Meaningful
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
              Open to conversations around leadership, research,
              <span className="hidden sm:inline"> </span>
              <br className="hidden lg:block" />
              partnerships, and purposeful growth.
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

   

    hover:from-[#173c50]
    hover:via-[#244f60]
    hover:to-[#356a72]

    hover:text-white

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

      <div className="h-5" />
    </main>
  );
}
