import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ClipboardCheck,
  Globe2,
  Handshake,
  Lightbulb,
  Network,
  Settings,
  Target,
  TrendingUp,
  Users,
  Mail,
  BookOpen,
  Award,
} from "lucide-react";
import homeBg from "../assets/images/img/homeBG.png";
import about from "../assets/images/img/home2.png"
import researchCollaborationImage from "../assets/images/img/work1.png"
import dataDecisionImage from "../assets/images/img/work2.png"
import operationalTransformationImage from "../assets/images/img/work3.png"
import featureImg from "../assets/images/img/pub.png"
import cta from "../assets/images/img/homeCta.png"

const leadershipAreas = [
  {
    icon: Network,
    title: "Operational Strategy",
    text: "Designing strategies that align resources, processes, and goals for sustainable impact.",
  },
  {
    icon: Users,
    title: "People & Culture",
    text: "Building inclusive, empowered teams that drive innovation and ownership.",
  },
  {
    icon: Handshake,
    title: "Partnerships",
    text: "Cultivating strong alliances that expand reach, knowledge, and opportunities.",
  },
  {
    icon: ClipboardCheck,
    title: "Program Delivery",
    text: "Ensuring seamless execution of programs with quality, agility, and accountability.",
  },
  {
    icon: Settings,
    title: "Process Excellence",
    text: "Optimizing systems and processes for efficiency, clarity, and scalability.",
  },
  {
    icon: TrendingUp,
    title: "Growth Enablement",
    text: "Identifying and unlocking opportunities for innovation-led growth.",
  },
];

// const workItems = [
//   {
//     image: "/images/home/collaborative-leadership-work.png",
//     tag: "Leadership",
//     title: "Building High-Performing Teams",
//     text: "Creating collaborative environments where people, purpose, and performance move together.",
//   },
//   {
//     image: "/images/home/research-innovation-network.png",
//     tag: "Innovation",
//     title: "Research Ecosystem Development",
//     text: "Connecting researchers, institutions, and ideas through innovation-led platforms.",
//   },
//   {
//     image: "/images/home/operational-planning-work.png",
//     tag: "Operations",
//     title: "From Strategy to Execution",
//     text: "Turning ambitious plans into clear processes, aligned teams, and measurable outcomes.",
//   },
// ];

const journey = [
  {
    icon: Building2,
    title: "Strategy & Operations",
    text: "Leading end-to-end operations and strategy to build strong, future-ready organizations.",
  },
  {
    icon: Users,
    title: "High-Performing Teams",
    text: "Developing empowered teams with collaboration, ownership, and continuous growth.",
  },
  {
    icon: Handshake,
    title: "Collaborative Ecosystems",
    text: "Partnering with diverse stakeholders to co-create innovations that drive impact.",
  },
  {
    icon: BarChart3,
    title: "Sustained Impact",
    text: "Focusing on meaningful outcomes that create lasting value for communities and organizations.",
  },
];

const focusItems = [
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    text: "Advancing knowledge through rigorous inquiry and innovative thinking.",
  },
  {
    icon: Target,
    title: "Organizational Strategy",
    text: "Designing strategies that align purpose with performance.",
  },
  {
    icon: Handshake,
    title: "Knowledge Partnerships",
    text: "Building collaborations that create value and lasting impact.",
  },
];

const workItems = [
  {
    image: researchCollaborationImage,
    tag: "Research",
    title: "Strengthening Collaboration in Higher Education",
    text: "Exploring models that foster interdisciplinary research partnerships.",
  },
  {
    image: dataDecisionImage,
    tag: "Publication",
    title: "Data-Informed Decision Making",
    text: "A framework for translating research insights into actionable strategy.",
  },
  {
    image: operationalTransformationImage,
    tag: "Project",
    title: "Operational Transformation Initiative",
    text: "Streamlining processes to drive efficiency and sustainable growth.",
  },
];

function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-5 sm:px-7 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.58, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#bf8926]">
          {eyebrow}
        </p>
      )}
      <span
        className={`mt-4 block h-px w-10 bg-[#d5a640] ${center ? "mx-auto" : ""}`}
      />
      <h2 className="mt-4 font-[Georgia,serif] text-[clamp(2rem,4vw,3.25rem)] font-normal leading-[1.12] tracking-[-0.035em] text-[#123047]">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#102d42]">
    {/* ==================== HERO SECTION ==================== */}
<section
  id="home"
  className="relative min-h-[520px] overflow-hidden bg-[#f8f5ef] bg-[length:auto_42%] bg-[position:72%_top] bg-no-repeat sm:min-h-[680px] sm:bg-[length:auto_48%] md:min-h-[520px] md:bg-cover md:bg-center lg:min-h-[550px]"
  style={{
    backgroundImage: homeBg ? `url(${homeBg})` : "none",
  }}
>
  <Container
    className="
      relative z-10 flex min-h-[620px] items-start
      pb-10 pt-[270px]
      sm:min-h-[680px] sm:pt-[320px]
      md:min-h-[520px] md:items-center md:py-10
      lg:min-h-[550px]
    "
  >
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.72, ease: "easeOut" }}
      className="w-full max-w-[600px] md:w-[49%]"
    >
      {/* Hero Eyebrow */}
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#bd6448] sm:text-[12px]">
        Leadership
        <span className="px-1.5 text-[#c98b72]">•</span>
        Research
        <span className="px-1.5 text-[#c98b72]">•</span>
        Impact
      </p>

      {/* Hero Heading */}
      <h1 className="mt-3 font-[Georgia,serif] text-[clamp(38px,4.2vw,76px)] font-normal leading-[1.02] tracking-[-0.035em] text-[#09243b] md:mt-4">
        Shaping Ideas Into
        <br />
        Meaningful Impact
      </h1>

      {/* Hero Description */}
      <p className="mt-4 max-w-[500px] text-[14px] leading-6 text-[#4f5c65] sm:text-[15px] sm:leading-7">
        I&apos;m Sharyu Ikhar, a Chief Operating Officer focused on
        strategic leadership, research excellence, and innovation-driven
        growth.
      </p>

      {/* Hero Buttons */}
      <div className="mt-6 flex flex-col gap-3 min-[420px]:flex-row sm:gap-4">
        <a
          href="#work"
          className="inline-flex min-h-11 items-center justify-center rounded-[3px] bg-[#062b49] px-7 text-[13px] font-medium text-white shadow-[0_8px_20px_rgba(6,43,73,.12)] transition duration-300 hover:-translate-y-1 hover:bg-[#0b3d61] hover:shadow-[0_12px_25px_rgba(6,43,73,.22)]"
        >
          Explore My Work
        </a>

        <a
          href="#publication"
          className="inline-flex min-h-11 items-center justify-center rounded-[3px] border border-[#173b58] bg-white/55 px-7 text-[13px] font-medium text-[#16334b] transition duration-300 hover:-translate-y-1 hover:bg-[#16334b] hover:text-white hover:shadow-[0_12px_25px_rgba(6,43,73,.14)]"
        >
          View Publications
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-6 flex items-center gap-6 text-[#082e4b] sm:mt-7">
        <a
          href="#"
          aria-label="LinkedIn"
          className="transition duration-300 hover:-translate-y-1 hover:text-[#c26545]"
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-5 w-5 fill-current"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .526 16 1.175v13.65C16 15.474 15.474 16 14.825 16H1.175C.526 16 0 15.474 0 14.825zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248S2.4 3.225 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.252c0-2.22-1.184-3.252-2.765-3.252-1.274 0-1.845.7-2.165 1.193V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>

        <a
          href="#"
          aria-label="Twitter"
          className="transition duration-300 hover:-translate-y-1 hover:text-[#c26545]"
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="h-5 w-5 fill-current"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q0-.211-.008-.423A6.68 6.68 0 0 0 16 3.542a6.66 6.66 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.28A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15" />
          </svg>
        </a>

        <a
          href="mailto:your-email@example.com"
          aria-label="Email"
          className="transition duration-300 hover:-translate-y-1 hover:text-[#c26545]"
        >
          <Mail size={20} strokeWidth={2} />
        </a>
      </div>
    </motion.div>
  </Container>
</section>

      {/* ==================== ABOUT SECTION ==================== */}
<section
  id="about"
  className="border-b border-[#e6e2db] bg-[#faf9f6] py-5 sm:py-6"
>
  <Container className="max-w-[1180px]">

    {/* ================= TOP FEATURE STRIP ================= */}
<Reveal>
  <div
    className="
      grid
      overflow-hidden
      rounded-[4px]
      border
      border-[#e2e5df]
      bg-[#eef1ec]
      grid-cols-2
      lg:grid-cols-4
    "
  >
    {/* Feature 1 */}
    <div
      className="
        group
        flex
        h-[75px]
        items-center
        justify-center
        gap-3
        px-4
        border-b
        border-[#d9ded8]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:bg-white
        hover:shadow-[0_8px_20px_rgba(18,45,62,0.10)]
        lg:h-[80px]
        lg:border-b-0
        lg:border-r
      "
    >
      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          text-[#50717a]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#0b707b]
        "
      >
        <Target
          size={32}
          strokeWidth={1.15}
        />
      </span>

      <span
        className="
          font-[Arial,sans-serif]
          text-[12px]
          font-medium
          leading-none
          text-[#243d4c]
          transition-colors
          duration-300
          group-hover:text-[#0b707b]
          sm:text-[13px]
        "
      >
        Strategic Leadership
      </span>
    </div>

    {/* Feature 2 */}
    <div
      className="
        group
        flex
        h-[75px]
        items-center
        justify-center
        gap-3
        px-4
        border-b
        border-[#d9ded8]
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:bg-white
        hover:shadow-[0_8px_20px_rgba(18,45,62,0.10)]
        lg:h-[80px]
        lg:border-b-0
        lg:border-r
      "
    >
      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          text-[#50717a]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#0b707b]
        "
      >
        <Users
          size={32}
          strokeWidth={1.15}
        />
      </span>

      <span
        className="
          font-[Arial,sans-serif]
          text-[12px]
          font-medium
          leading-none
          text-[#243d4c]
          transition-colors
          duration-300
          group-hover:text-[#0b707b]
          sm:text-[13px]
        "
      >
        Research Collaboration
      </span>
    </div>

    {/* Feature 3 */}
    <div
      className="
        group
        flex
        h-[75px]
        items-center
        justify-center
        gap-3
        px-4
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:bg-white
        hover:shadow-[0_8px_20px_rgba(18,45,62,0.10)]
        lg:h-[80px]
        lg:border-r
      "
    >
      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          text-[#50717a]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#0b707b]
        "
      >
        <Settings
          size={32}
          strokeWidth={1.15}
        />
      </span>

      <span
        className="
          font-[Arial,sans-serif]
          text-[12px]
          font-medium
          leading-none
          text-[#243d4c]
          transition-colors
          duration-300
          group-hover:text-[#0b707b]
          sm:text-[13px]
        "
      >
        Operational Excellence
      </span>
    </div>

    {/* Feature 4 */}
    <div
      className="
        group
        flex
        h-[75px]
        items-center
        justify-center
        gap-3
        px-4
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:bg-white
        hover:shadow-[0_8px_20px_rgba(18,45,62,0.10)]
        lg:h-[80px]
      "
    >
      <span
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          text-[#50717a]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:text-[#0b707b]
        "
      >
        <BookOpen
          size={32}
          strokeWidth={1.15}
        />
      </span>

      <span
        className="
          font-[Arial,sans-serif]
          text-[12px]
          font-medium
          leading-none
          text-[#243d4c]
          transition-colors
          duration-300
          group-hover:text-[#0b707b]
          sm:text-[13px]
        "
      >
        Academic Outreach
      </span>
    </div>
  </div>
</Reveal>


    {/* ================= ABOUT CONTENT ================= */}
    <div className="mt-7 grid items-center gap-5 md:grid-cols-[0.9fr_1.1fr] md:gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-9">

      {/* ================= IMAGE ================= */}
      <Reveal>
        <div className="group relative overflow-hidden rounded-[5px]">
          <img
            src={about}
            alt="Leadership and collaboration"
            className="
              h-[205px]
              w-full
              object-cover
              object-center
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.03]
              sm:h-[230px]
              md:h-[205px]
              lg:h-[260px]
            "
          />

          {/* subtle overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[#09243b]/[0.03] transition duration-500 group-hover:bg-[#09243b]/[0.08]" />
        </div>
      </Reveal>


      {/* ================= ABOUT TEXT ================= */}
      <Reveal delay={0.08}>
        <div className="max-w-[500px] -mt-12">

          {/* Eyebrow */}
          <p className="text-[10px] font-[550] uppercase tracking-[0.22em] text-[#bd6448] sm:text-[11px]">
            About Sharyu
          </p>

          {/* Small gold line */}
          <div className="mt-1 h-[2px] w-7 bg-[#c98b72]" />

          {/* Heading */}
          <h2
            className="
              mt-2
              font-[Georgia,serif]
              text-[25px]
              font-medium
              leading-[1.08]
              tracking-[-0.02em]
              text-[#09243b]
              sm:text-[29px]
              md:text-[27px]
              lg:text-[30px]
            "
          >
            Leadership with Purpose
          </h2>

          {/* Paragraph */}
          <p className="mt-2 max-w-[500px] text-[12.5px] leading-[1.6] text-[#53616d] sm:text-[13.5px] sm:leading-[1.7]">
            I believe meaningful impact begins with connecting people,
            clarifying strategy, and enabling ideas to grow. As a Chief
            Operating Officer, I work at the intersection of research,
            operations, and partnerships to turn vision into measurable
            results.
          </p>

          <p className="mt-2 max-w-[500px] text-[12.5px] leading-[1.6] text-[#53616d] sm:text-[13.5px] sm:leading-[1.7]">
            My approach is collaborative, thoughtful, and rooted in a
            commitment to build systems that empower individuals and
            institutions alike.
          </p>

        </div>
      </Reveal>
    </div>
  </Container>
</section>

     

     {/* ==================== AREAS OF FOCUS ==================== */}
<section
  id="focus"
  className="bg-[#faf9f6] py-4 sm:py-4 lg:py-4"
>
  <Container>
    {/* Section Heading */}
    <Reveal>
      <div className="text-center">
        <h2
          className="
            font-[Georgia,serif]
            text-[26px]
            font-medium
            leading-tight
            tracking-[-0.02em]
            text-[#09243b]
            sm:text-[29px]
            lg:text-[32px]
          "
        >
          Areas of Focus
        </h2>

        {/* Decorative line */}
        <div className="mx-auto mt-1 flex items-center justify-center">
          <span className="h-px w-7 bg-[#c98b72]" />

          <span className="mx-1.5 h-1.5 w-1.5 rounded-full border border-[#c98b72] bg-[#faf9f6]" />

          <span className="h-px w-7 bg-[#c98b72]" />
        </div>
      </div>
    </Reveal>

    {/* Focus Cards */}
    <div className="mt-4 grid gap-3 md:grid-cols-3 sm:mt-4">
      {focusItems.map((item, index) => {
        const FocusIcon = item.icon;

        return (
          <Reveal
            key={item.title}
            delay={index * 0.08}
          >
            <motion.article
              whileHover={{
                y: -5,
                transition: { duration: 0.25 },
              }}
              className="
                group
                flex
                min-h-[115px]
                items-center
                gap-4
                rounded-[6px]
                border
                border-[#ddd8cc]
                bg-[#fffefa]
                px-4
                py-4
                shadow-[0_4px_15px_rgba(18,45,62,0.025)]
                transition-all
                duration-300
                hover:border-[#c8b89b]
                hover:bg-white
                hover:shadow-[0_10px_25px_rgba(18,45,62,0.08)]
                sm:min-h-[128px]
                sm:px-5
              "
            >
              {/* Icon Circle */}
              <span
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#e8dfcf]
                  bg-[#f8f4eb]
                  text-[#56757d]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:border-[#c9b997]
                  group-hover:bg-[#f3eee3]
                  group-hover:text-[#0b707b]
                  sm:h-[62px]
                  sm:w-[62px]
                "
              >
                <FocusIcon
                  size={34}
                  strokeWidth={1.15}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </span>

              {/* Content */}
              <div className="min-w-0">
                <h3
                  className="
                    font-[Georgia,serif]
                    text-[14px]
                    font-medium
                    leading-[1.2]
                    text-[#1c3447]
                    sm:text-[15px]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[240px]
                    text-[11px]
                    leading-[1.55]
                    text-[#66727a]
                    sm:text-[12px]
                  "
                >
                  {item.text}
                </p>
              </div>
            </motion.article>
          </Reveal>
        );
      })}
    </div>
  </Container>
</section>


{/* ==================== SELECTED WORK SECTION ==================== */}
<section
  id="work"
  className="bg-[#faf9f6] pb-12 mt-6  sm:pb-16"
>
  <Container>

    {/* Section Header */}
    <Reveal>
      <div className=" justify-between border-b border-transparent">
        <div>
          <h2
            className="
              font-[Georgia,serif]
              text-[26px]
              font-medium
              leading-none
              tracking-[-0.02em]
              text-[#09243b]
              sm:text-[29px]
              lg:text-[30px]
            "
          >
            Selected Work
          </h2>
        </div>
        {/* Decorative line */}
        <div className="mx-auto mt-1 flex items-start justify-start">
          <span className="h-px w-9 bg-[#c98b72]" />

          <span className="mx-1.5 h-1.5 w-1.5 rounded-full border border-[#c98b72] bg-[#faf9f6]" />

          <span className="h-px w-9 bg-[#c98b72]" />
        </div>

      </div>
    </Reveal>


    {/* Work Cards */}
    <div className="mt-3 grid gap-4 md:grid-cols-3 sm:mt-4">
      {workItems.map((item, index) => (
        <Reveal
          key={item.title}
          delay={index * 0.07}
        >
          <motion.article
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
            className="
              group
              h-full
              overflow-hidden
              rounded-[5px]
              border
              border-[#dedbd4]
              bg-[#fffefa]
              shadow-[0_5px_18px_rgba(13,43,59,.035)]
              transition-all
              duration-300
              hover:border-[#c7c8c2]
              hover:shadow-[0_12px_28px_rgba(13,43,59,.10)]
            "
          >

            {/* ================= IMAGE ================= */}
            <div className="relative h-[158px] overflow-hidden sm:h-[168px]">
              <img
                src={item.image}
                alt={item.title}
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-[1.05]
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#09243b]/20
                  via-transparent
                  to-transparent
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                "
              />

              {/* ================= TAG ================= */}
              <span
                className={`
                  absolute
                  bottom-[0px]
                  left-4
                  rounded-full
                  px-4
                  py-[4px]
                  text-[12px]
                  font-medium
                  tracking-wide
                  text-white
                  shadow-sm
                  sm:text-[13px]
                  ${
                    item.tag === "Research"
                      ? "bg-[#c97b5d]"
                      : item.tag === "Publication"
                      ? "bg-[#41818a]"
                      : "bg-[#d2a23d]"
                  }
                `}
              >
                {item.tag}
              </span>
            </div>


            {/* ================= CARD CONTENT ================= */}
            <div className="relative p-4 sm:p-[17px]">

              <h3
                className="
                  pr-3
                  font-[Georgia,serif]
                  text-[15px]
                  font-medium
                  leading-[1.25]
                  text-[#17334a]
                  transition-colors
                  duration-300
                  group-hover:text-[#0b707b]
                  sm:text-[16px]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  max-w-[330px]
                  text-[12px]
                  leading-[1.6]
                  text-[#68747b]
                  sm:text-[13px]
                "
              >
                {item.text}
              </p>

            </div>
          </motion.article>
        </Reveal>
      ))}
    </div>
  </Container>
</section>

     {/* ==================== FEATURED PUBLICATION + ACHIEVEMENTS ==================== */}
<section
  id="publication"
  className="border-y border-[#e5e1da] bg-[#faf9f6] py-4 sm:py-4 lg:py-4"
>
  <Container>
    <div className="grid gap-4 lg:grid-cols-2">

      {/* =========================================================
          FEATURED PUBLICATION
      ========================================================= */}
      <Reveal>
        <div
          className="
            h-full
            rounded-[5px]
            border
            border-[#ddd8cc]
            bg-[#fffefa]
            px-3
            py-2
            shadow-[0_4px_15px_rgba(18,45,62,0.025)]
            transition-all
            duration-300
            hover:border-[#cfc5b3]
            hover:shadow-[0_10px_25px_rgba(18,45,62,0.08)]
            sm:px-3
            sm:py-2
          "
        >
          {/* Heading */}
          <h2
            className="
              font-[Georgia,serif]
              text-[19px]
              font-medium
              leading-tight
              text-[#09243b]
              sm:text-[21px]
              lg:text-[22px]
            "
          >
            Featured Publication
          </h2>

          {/* Publication inner card */}
          <div
            className="
              mt-2
              grid
              min-h-[200px]
              grid-cols-[148px_1fr]
              overflow-hidden
              border
              border-[#e1ddd5]
              bg-white
              sm:grid-cols-[148px_1fr]
              lg:grid-cols-[148px_1fr]
            "
          >

            {/* Publication Cover */}
            <div className="flex items-center justify-center p-1">
              <motion.img
                whileHover={{
                  y: -5,
                  rotate: -1,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                src={featureImg}
                alt="Journal of Research and Innovation Management cover"
                className="
                  h-[192px]
                  w-[142px]
                  rounded-[1px]
                  object-cover
                  shadow-[0_8px_18px_rgba(10,40,58,.14)]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_14px_28px_rgba(10,40,58,.20)]
                "
              />
            </div>

            {/* Publication Content */}
            <div
              className="
                flex
                flex-col
                justify-center
                px-4
                py-4
                sm:px-5
                lg:px-5
              "
            >
              <h3
                className="
                  font-[Georgia,serif]
                  text-[17px]
                  font-[530]
                  leading-[1.2]
                  text-[#17334a]
                  sm:text-[18px]
                "
              >
                Building Better Systems
                <br />
                Through Research
              </h3>

              <p
                className="
                  mt-3
                  max-w-[245px]
                  text-[11.5px]
                  leading-[1.5]
                  text-[#657179]
                  sm:text-[12.5px]
                "
              >
                An exploration of how research-led approaches can create
                resilient systems and long-term value.
              </p>
            </div>
          </div>
        </div>
      </Reveal>


      {/* =========================================================
          ACHIEVEMENTS & RECOGNITION
      ========================================================= */}
      <Reveal delay={0.08}>
        <div
          className="
            h-full
            rounded-[5px]
            border
            border-[#ddd8cc]
            bg-[#fffefa]
            px-4
            py-3
            shadow-[0_4px_15px_rgba(18,45,62,0.025)]
            transition-all
            duration-300
            hover:border-[#cfc5b3]
            hover:shadow-[0_10px_25px_rgba(18,45,62,0.08)]
            sm:px-3
            sm:py-2
          "
        >
          {/* Heading */}
          <h2
            className="
              font-[Georgia,serif]
              text-[19px]
              font-[530]
              leading-tight
              text-[#09243b]
              sm:text-[21px]
              lg:text-[22px]
            "
          >
            Achievements & Recognition
          </h2>

          {/* Recognition List */}
          <div className="mt-2 space-y-1.5">

            {/* Recognition 1 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="
                group
                flex
                min-h-[64px]
                items-center
                gap-4
                rounded-[5px]
                border
                border-[#e1ddd5]
                bg-white
                px-4
                py-2
                transition-all
                duration-300
                hover:border-[#d2bd8d]
                hover:bg-[#fffdf8]
                hover:shadow-[0_5px_14px_rgba(18,45,62,0.06)]
              "
            >
              {/* Medal */}
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d2a54d]
                  bg-[#f8f0dc]
                  text-[#c79738]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:bg-[#f4e8c9]
                "
              >
                <Award
                  size={24}
                  strokeWidth={1.3}
                />
              </span>

              {/* Text */}
              <div>
                <h3
                  className="
                    font-[Georgia,serif]
                    text-[12px]
                    font-medium
                    leading-tight
                    text-[#263d4d]
                    sm:text-[13px]
                  "
                >
                  Leadership Recognition
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-[1.45]
                    text-[#69747a]
                    sm:text-[11px]
                  "
                >
                  Honored for exemplary leadership and driving
                  organizational excellence.
                </p>
              </div>
            </motion.div>


            {/* Recognition 2 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="
                group
                flex
                min-h-[64px]
                items-center
                gap-4
                rounded-[5px]
                border
                border-[#e1ddd5]
                bg-white
                px-4
                py-2
                transition-all
                duration-300
                hover:border-[#d2bd8d]
                hover:bg-[#fffdf8]
                hover:shadow-[0_5px_14px_rgba(18,45,62,0.06)]
              "
            >
              {/* Medal */}
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d2a54d]
                  bg-[#f8f0dc]
                  text-[#c79738]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:bg-[#f4e8c9]
                "
              >
                <Award
                  size={24}
                  strokeWidth={1.3}
                />
              </span>

              {/* Text */}
              <div>
                <h3
                  className="
                    font-[Georgia,serif]
                    text-[12px]
                    font-medium
                    leading-tight
                    text-[#263d4d]
                    sm:text-[13px]
                  "
                >
                  Research Contribution
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-[1.45]
                    text-[#69747a]
                    sm:text-[11px]
                  "
                >
                  Recognized for impactful research and advancing
                  knowledge in the field.
                </p>
              </div>
            </motion.div>


            {/* Recognition 3 */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="
                group
                flex
                min-h-[64px]
                items-center
                gap-4
                rounded-[5px]
                border
                border-[#e1ddd5]
                bg-white
                px-4
                py-2
                transition-all
                duration-300
                hover:border-[#d2bd8d]
                hover:bg-[#fffdf8]
                hover:shadow-[0_5px_14px_rgba(18,45,62,0.06)]
              "
            >
              {/* Medal */}
              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#d2a54d]
                  bg-[#f8f0dc]
                  text-[#c79738]
                  transition-all
                  duration-300
                  group-hover:scale-105
                  group-hover:bg-[#f4e8c9]
                "
              >
                <Award
                  size={24}
                  strokeWidth={1.3}
                />
              </span>

              {/* Text */}
              <div>
                <h3
                  className="
                    font-[Georgia,serif]
                    text-[12px]
                    font-medium
                    leading-tight
                    text-[#263d4d]
                    sm:text-[13px]
                  "
                >
                  Collaborative Impact
                </h3>

                <p
                  className="
                    mt-1
                    text-[10px]
                    leading-[1.45]
                    text-[#69747a]
                    sm:text-[11px]
                  "
                >
                  Acknowledged for building partnerships that create
                  meaningful outcomes.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </Reveal>

    </div>
  </Container>
</section>


     {/* ==================== CTA SECTION ==================== */}
<section
  id="contact"
  className="group relative isolate overflow-hidden border-y border-white/20 bg-[#d57450] bg-cover bg-center bg-no-repeat text-white"
  style={{
    backgroundImage: `url(${cta})`,
  }}
>
  
  {/* Soft orange overlay */}
  <div className="absolute inset-0 -z-10 bg-[#c96543]/20 transition-colors duration-500 group-hover:bg-[#bd5c3c]/30" />

  {/* Subtle center gradient */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#c96646]/15 via-transparent to-[#c96646]/10" />

  <Container className="relative z-10 flex min-h-[88px] flex-col items-center justify-center gap-5 px-5 py-5 text-center sm:px-6 md:flex-row md:justify-between md:gap-10 md:py-0 md:text-left">
    <Reveal>
      <h2 className="font-[Georgia,serif] text-[25px] font-normal leading-[1.2] tracking-[-0.02em] text-white drop-shadow-[0_2px_2px_rgba(86,40,25,0.3)] sm:text-[28px] lg:text-[30px]">
        Let&apos;s Create Meaningful Impact Together
      </h2>
    </Reveal>

    <Reveal delay={0.08}>
      <a
        href="mailto:sharyu.ikhar@researcherconnect.co.in"
        className="group/button inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2.5 rounded-[4px] border border-white/70 bg-white px-7 py-3 text-[13px] font-medium text-[#34404d] shadow-[0_5px_12px_rgba(80,38,24,0.20)] transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-[#fffaf6] hover:text-[#bd603f] hover:shadow-[0_10px_22px_rgba(80,38,24,0.28)] focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-[#d57450]"
      >
        Start a Conversation

        <ArrowRight
          size={15}
          strokeWidth={1.8}
          className="transition-transform duration-300 group-hover/button:translate-x-1"
        />
      </a>
    </Reveal>
  </Container>
</section>
    </main>
  );
}
