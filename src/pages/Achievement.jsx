import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  Award,
  BookOpen,
  Crown,
  Handshake,
  Heart,
  Medal,
  Network,
  Scale,
  Sprout,
  Star,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import {Link} from "react-router-dom";
import heroAwards from "../assets/images/img/bgachievments.png";
import featuredCertificate from "../assets/images/img/achievment2.png";
import bgkey from "../assets/images/img/achievment3.png";

import cta from "../assets/images/img/ctaAchievment.png"


const awards = [
  {
    icon: Medal,
    category: "Leadership",
    title: "Leadership Excellence Recognition",
    color: "#c9684b",
  },
  {
    icon: Award,
    category: "Research",
    title: "Research Contribution Honour",
    color: "#5f8f86",
  },
  {
    icon: Medal,
    category: "Impact",
    title: "Organizational Impact Appreciation",
    color: "#c59652",
  },
  {
    icon: Award,
    category: "Collaboration",
    title: "Collaborative Partnership Recognition",
    color: "#5f8f86",
  },
  {
    icon: BookOpen,
    category: "Knowledge",
    title: "Knowledge Advancement Certificate",
    color: "#c59652",
  },
  {
    icon: Star,
    category: "Service",
    title: "Professional Service Appreciation",
    color: "#c9684b",
  },
];

const recognitions = [
  {
    icon: BookOpen,
    title: "Research Contribution",
    text: "For verified recognition of research-led work.",
    color: "#c9684b",
  },
  {
    icon: TrendingUp,
    title: "Organizational Impact",
    text: "For acknowledged operational or strategic outcomes.",
    color: "#5f8f86",
  },
  {
    icon: Users,
    title: "Collaborative Excellence",
    text: "For honours shaped through partnership and teamwork.",
    color: "#5f8f86",
  },
];

const milestones = [
  {
    icon: Sprout,
    title: "Building Strong Foundations",
    text: "Developing the discipline, perspective, and collaborative habits behind sustained professional growth.",
  },
  {
    icon: Crown,
    title: "Strengthening Operations",
    text: "Creating clearer systems, resilient teams, and purposeful ways of working.",
  },
  {
    icon: Network,
    title: "Advancing Research Collaboration",
    text: "Connecting ideas, people, and practice to support thoughtful innovation.",
  },
  {
    icon: TrendingUp,
    title: "Creating Broader Impact",
    text: "Turning experience into contribution, mentorship, and lasting value.",
  },
];

const values = [
  {
    icon: Scale,
    title: "Integrity",
    text: "Leading with clarity and accountability.",
  },
  {
    icon: Star,
    title: "Excellence",
    text: "Raising the standard through thoughtful execution.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "Creating progress through shared purpose.",
  },
  {
    icon: Heart,
    title: "Impact",
    text: "Focusing effort where it matters most.",
  },
];

const certificates = [
  {
    image: featuredCertificate,
    title: "Leadership Recognition",
    alt: "Leadership recognition certificate",
  },
  {
    image: featuredCertificate,
    title: "Research Contribution",
    alt: "Research contribution certificate",
  },
  {
    image: featuredCertificate,
    title: "Professional Service",
    alt: "Professional service certificate",
  },
];

const filters = [
  "All",
  "Leadership",
  "Research",
  "Impact",
 

  "Service",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export default function Achievement() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  const filteredAwards = useMemo(() => {
    if (activeFilter === "All") return awards;

    return awards.filter(
      (award) => award.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <main className="overflow-hidden bg-[#fcfaf6]">
      {/* ==================== HERO ==================== */}


  <section
        className="
          relative
          isolate
          min-h-[500px]
          overflow-hidden
          border-b
          border-[#e5ddd3]
          bg-cover
          bg-[64%_center]
          bg-no-repeat
          py-10
          sm:min-h-[550px]
          sm:bg-[68%_center]
          sm:py-12
          lg:flex
          lg:min-h-[460px]
          lg:items-center
          lg:bg-center
        "
        style={{
          backgroundImage: `url(${heroAwards})`,
        }}
      >
      

        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-[660px]"
          >
          <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mb-4 flex items-center gap-[7px]
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

              <span className="text-[#173c50]">Achievements</span>
            </motion.div>

           

              <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[460px]
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
            Milestones That 


              <span className="block"> Reflect Meaningful Progress</span>
            </motion.h1>

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

                       lg:max-w-[390px]
                       lg:text-[15px]"
            >
       A thoughtful record of professional growth, leadership contributions, and recognition shaped by purposeful work and collaboration.
            </motion.p>

       

            <motion.div
              variants={fadeUp}
              className="
                mt-7
                flex
                flex-col
                gap-3
                min-[430px]:flex-row
                min-[430px]:items-center
              "
            >
              <motion.a
              href="#recognition"
                whileHover={{
                  y: -2,
                  boxShadow: "0 12px 28px rgba(198, 104, 75, 0.28)",
                }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex
                  min-h-11
                  gap-2
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-[#c9684b]
                  px-6
                  text-[13px]
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-[#b85b40]
                "
              >
               Explore Highlights
                 <ArrowRight
                  strokeWidth={1.7}
                  className="h-[16px] w-[16px]
                           transition-transform duration-300
                           group-hover/button:translate-x-[3px]"
                />
              </motion.a>

              {/* <motion.a
                href="#collaboration"
                whileHover={{ x: 4 }}
                className="
                  inline-flex
                  min-h-11
                  items-center
                  justify-center
                  gap-2
                  px-4
                  text-xs
                  font-semibold
                  text-[#58877e]
                "
              >
                Explore Collaboration
                <span aria-hidden="true">→</span>
              </motion.a> */}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Leadership", "Research Contribution", "Collaboration"].map(
                (item) => (
                  <span
                    key={item}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-[#6d766e]
                      bg-[#edf3ee]/90
                      px-4
                      py-1.5
                      text-[11px]
                      font-medium
                      text-[#1d2d29]
                      backdrop-blur-sm
                    "
                  >
                    
                    {item}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>
        </Container>
      </section>

   

      {/* ================= SELECTED RECOGNITION ================= */}

      <AnimatedSection
        id="recognition"
        className="scroll-mt-24 py-10"
      >
        <Container>
          <motion.div variants={fadeUp}>
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#569588]
              "
            >
              Selected Recognition
            </p>

            <h2
              className="
                mt-2
                font-display
                text-[29px]
                font-medium
                leading-tight
                text-[#173c50]

                sm:text-[32px]
              "
            >
              Honoring Work That Creates Lasting Value
            </h2>

            <p
              className="
                mt-2
                max-w-[650px]
                text-xs
                leading-6
                text-[#575957]
              "
            >
              A flexible space for verified professional honours and
              acknowledgements.
            </p>
          </motion.div>

          <div
            className="
              mt-6
              grid
              items-stretch
              gap-4

              lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.75fr)]
            "
          >
            <motion.article
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55 }}
              whileHover={{
                y: -4,
                boxShadow:
                  "0 15px 34px rgba(23,60,80,0.08)",
              }}
              className="
                grid
                items-center
                gap-7
                rounded-[10px]
                border
                border-[#e0d8cf]
                bg-[#fffdf9]
                p-5
                shadow-[0_6px_22px_rgba(23,60,80,0.03)]

                sm:grid-cols-[minmax(210px,0.8fr)_minmax(0,1fr)]
                sm:p-7
              "
            >
              <div
                className="
                  relative
                  overflow-hidden
               
                  
                "
              >
               

                <img
                  src={featuredCertificate}
                  alt="Featured professional recognition certificate"
                  className="
                    h-[280px]
                    w-full
                    rounded-[5px]
                    object-cover
                    transition-transform
                    duration-500
                  
                  "
                />
              </div>

              <div>
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#b57f39]
                  "
                >
                  Featured Highlight
                </p>

                <h3
                  className="
                    mt-3
                    font-display
                    text-[27px]
                    leading-[1.08]
                    text-[#173c50]
                  "
                >
                  Professional Leadership Recognition
                </h3>

                <p
                  className="
                    mt-3
                    text-[13px]
                    leading-6
                    text-[#6e716e]
                  "
                >
                  Reserved for a verified honour celebrating
                  leadership, operational excellence, or meaningful
                  organizational contribution.
                </p>

                <motion.button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate({
                      image: featuredCertificate,
                      title: "Professional Leadership Recognition",
                      alt: "Featured professional recognition certificate",
                    })
                  }
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    mt-5
                    inline-flex
                    min-h-9
                    items-center
                    justify-center
                    rounded-[4px]
                    border
                    border-[#d8d0c6]
                    px-4
                    text-[11.5px]
                    font-semibold
                    text-[#536d69]
                    transition-colors
                    hover:border-[#5f8f86]
                    hover:bg-[#edf3ee]
                  "
                >
                  Details to be updated
                </motion.button>
              </div>
            </motion.article>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              className="grid gap-4"
            >
              {recognitions.map(
                ({ icon: Icon, title, text, color }) => (
                  <motion.article
                    key={title}
                    variants={fadeUp}
                    whileHover={{
                      x: 4,
                      y: -2,
                      boxShadow:
                        "0 11px 27px rgba(23,60,80,0.07)",
                    }}
                    className="
                      group
                      flex
                      min-h-[105px]
                      items-center
                      gap-5
                      rounded-[9px]
                      border
                      border-[#e0d8cf]
                      bg-[#fffdf9]
                      p-5
                    "
                  >
                    <Icon
                      size={38}
                      strokeWidth={1.2}
                      style={{ color }}
                      className="
                        shrink-0
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />

                    <div>
                      <h3
                        className="
                          font-display
                          text-lg
                          text-[#173c50]
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[11.5px]
                          leading-5
                          text-[#505250]
                        "
                      >
                        {text}
                      </p>
                    </div>
                  </motion.article>
                )
              )}
            </motion.div>
          </div>
        </Container>
      </AnimatedSection>

      {/* ==================== AWARDS ==================== */}

      <AnimatedSection
        className="
          border-y
          border-[#dae4dc]
          bg-[#edf3ee]
          py-10
        "
      >
        <Container>
          <div
            className="
              flex
              flex-col
              gap-6

              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <div>
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#469989]
                "
              >
                Awards &amp; Honours
              </p>

              <h2
                className="
                  mt-2
                  font-display
                  text-[29px]
                  leading-tight
                  text-[#173c50]

                  sm:text-[34px]
                "
              >
                Recognition Across Areas of Contribution
              </h2>
            </div>

            <div
              className="
                flex
                max-w-full
                gap-2
                overflow-x-auto
                pb-1
                scrollbar-none

                lg:flex-wrap
                lg:justify-end
                lg:overflow-visible
              "
              aria-label="Filter awards"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-4
                    py-2
                    text-[10px]
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      activeFilter === filter
                        ? "border-[#5d8a81] bg-[#5d8a81] text-white shadow-sm"
                        : "border-[#d1ddd4] bg-[#f8faf7] text-[#61756f] hover:border-[#5d8a81] hover:bg-white"
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="
              mt-8
              grid
              gap-3

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            <AnimatePresence mode="popLayout">
              {filteredAwards.map(
                ({
                  icon: Icon,
                  category,
                  title,
                  color,
                }) => (
                  <motion.article
                    layout
                    key={title}
                    initial={{ opacity: 0, scale: 0.96, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                      y: -6,
                      boxShadow:
                        "0 15px 32px rgba(23,60,80,0.09)",
                    }}
                    className="
                      group
                      flex
                      min-h-[145px]
                      items-center
                      gap-5
                      rounded-[9px]
                      border
                      border-[#ddd7cf]
                      bg-[#fffdf9]
                      p-5

                      sm:p-6
                    "
                  >
                    <span
                      className="
                        grid
                        h-16
                        w-16
                        shrink-0
                        place-items-center
                        rounded-full
                        border
                        border-current
                        bg-white
                        transition-transform
                        duration-300
                     
                      "
                      style={{
                        color,
                        borderColor: `${color}55`,
                      }}
                    >
                      <Icon
                        size={39}
                        strokeWidth={1.15}
                        style={{ color }}
                      />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.16em]
                          text-[#cb8a12]
                        "
                      >
                        {category}
                      </p>

                      <h3
                        className="
                          mt-1
                          font-display
                          text-lg
                          leading-tight
                          text-[#173c50]
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-2
                          text-[11px]
                          text-[#414341]
                        "
                      >
                        Verified details to be added
                      </p>
                    </div>

                
                  </motion.article>
                )
              )}
            </AnimatePresence>
          </motion.div>
        </Container>
      </AnimatedSection>

     

 {/* ==================== KEY MILESTONES ==================== */}<AnimatedSection
  className="
    relative
    isolate
    overflow-hidden
    border-y
    border-[#eee7de]
    bg-[#fcfaf6]
    py-10
  "
>
  {/* Full section background image */}

  <motion.div
    aria-hidden="true"
    initial={{
      opacity: 0,
      x: 50,
      scale: 1.04,
    }}
    whileInView={{
      opacity: 1,
      x: 0,
      scale: 1,
    }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="
      pointer-events-none
      absolute
      inset-0
      -z-30
      bg-cover
      bg-[70%_center]
      bg-no-repeat

      sm:bg-[75%_center]

      lg:bg-right
    "
    style={{
      backgroundImage: `url(${bgkey})`,
    }}
  />



 

  {/* Subtle mobile decoration */}

  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      -right-24
      bottom-[-80px]
      -z-10
      h-72
      w-72
      rounded-full
      bg-[#e8eee6]/50
      blur-2xl

      sm:h-96
      sm:w-96

      lg:hidden
    "
  />

  <Container>
    <div className="relative">
      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: 18,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#5d998d]

            sm:text-[11px]
          "
        >
          The Journey
        </p>

        <h2
          className="
            
            font-display
            text-[29px]
            font-medium
            leading-tight
            text-[#173c50]

            sm:text-[34px]

            lg:text-[38px]
          "
        >
          Key Milestones
        </h2>
      </motion.div>

      {/* Timeline */}

      <div
        className="
          relative
          mt-4
          grid
          grid-cols-1
          gap-5

          sm:mt-6

          lg:w-[72%]
          lg:grid-cols-2
          lg:gap-x-24
          lg:gap-y-5

          xl:w-[70%]
          xl:gap-x-20
        "
      >
        {/* Desktop centre line */}

        <motion.div
          aria-hidden="true"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            absolute
            bottom-5
            left-1/2
            top-1
            hidden
            w-px
            -translate-x-1/2
            origin-top
            bg-[#ce805f]/70

            lg:block
          "
        >
          {/* Top outlined circle */}

          <span
            className="
              absolute
              -top-1
              left-1/2
              h-4
              w-4
              -translate-x-1/2
              rounded-full
              border-2
              border-[#c9684b]
              bg-[#fcfaf6]
            "
          />

          {/* Bottom line ending */}

          <span
            className="
              absolute
              -bottom-1
              left-1/2
              h-2
              w-2
              -translate-x-1/2
              rounded-full
              bg-[#c9684b]
            "
          />
        </motion.div>

        {milestones.map(
          ({ icon: Icon, title, text }, index) => {
            const isRight = index % 2 !== 0;

            return (
              <motion.article
                key={title}
                initial={{
                  opacity: 0,
                  x: isRight ? 30 : -30,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(95,143,134,0.45)",
                  boxShadow:
                    "0 14px 32px rgba(23,60,80,0.09)",
                }}
                className={`
                  group
                  relative
                  flex
                  min-h-[125px]
                  items-center
                  gap-5
                  rounded-[9px]
                  border
                  border-[#e0d7cd]
                  bg-[#fffdf9]/95
                  p-5
                  shadow-[0_5px_18px_rgba(23,60,80,0.035)]
                  backdrop-blur-[2px]

                  sm:min-h-[130px]
                  sm:p-6

                  lg:min-h-[128px]

                  ${
                    isRight
                      ? "lg:col-start-2"
                      : "lg:col-start-1"
                  }
                `}
              >
                {/* Icon */}

                <span
                  className="
                    grid
                    h-[58px]
                    w-[58px]
                    shrink-0
                    place-items-center
                    rounded-full
                    text-[#5f9188]
                    transition-all
                    duration-300
                    group-hover:-rotate-6
                    group-hover:scale-110
                    group-hover:bg-[#edf3ee]
                  "
                >
                  <Icon
                    size={37}
                    strokeWidth={1.15}
                  />
                </span>

                {/* Content */}

                <div className="min-w-0">
                  <h3
                    className="
                      font-display
                      text-[17px]
                      font-medium
                      leading-tight
                      text-[#263f4d]

                      sm:text-[18px]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[11px]
                      leading-[1.55]
                      text-[#686f6c]

                      sm:text-[12px]
                    "
                  >
                    {text}
                  </p>
                </div>

                {/* Horizontal connector */}

                <span
                  aria-hidden="true"
                  className={`
                    absolute
                    top-1/2
                    z-10
                    hidden
                    h-px
                    w-12
                    -translate-y-1/2
                    bg-[#cf8a6e]/55

                    lg:block

                    ${
                      isRight
                        ? "-left-12"
                        : "-right-12"
                    }
                  `}
                />

                {/* Timeline dot */}

                <motion.span
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                  className={`
                    absolute
                    top-1/2
                    z-20
                    hidden
                    h-2.5
                    w-2.5
                    -translate-y-1/2
                    rounded-full
                    border-2
                    border-[#fcfaf6]
                    bg-[#c9684b]
                    shadow-[0_0_0_1px_rgba(201,104,75,0.65)]

                    lg:block

                    ${
                      isRight
                        ? "-left-[53px]"
                        : "-right-[53px]"
                    }
                  `}
                />
              </motion.article>
            );
          }
        )}
      </div>
    </div>
  </Container>
</AnimatedSection>

      {/* ==================== VALUES ==================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#103b59]
          py-14
          text-white

          sm:py-16
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -right-32
            -top-32
            h-80
            w-80
            rounded-full
            border
            border-white/10
          "
        />

        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            <motion.p
              variants={fadeUp}
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#d6a45e]
              "
            >
              Beyond the Milestones
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-2
                font-display
                text-[29px]

                sm:text-[35px]
              "
            >
              The Values Behind Every Achievement
            </motion.h2>

            <div
              className="
                mt-8
                grid
                gap-5

                min-[520px]:grid-cols-2

                lg:grid-cols-4
              "
            >
              {values.map(({ icon: Icon, title, text }) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    backgroundColor: "rgba(255,255,255,0.07)",
                    borderColor: "rgba(255,255,255,0.5)",
                  }}
                  className="
                    group
                    rounded-[8px]
                    border
                    border-white/25
                    bg-white/[0.025]
                    p-6
                    text-center
                    backdrop-blur-sm

                    sm:p-7
                  "
                >
                  <Icon
                    className="
                      mx-auto
                      text-[#d6a45e]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                    size={39}
                    strokeWidth={1.2}
                  />

                  <h3
                    className="
                      mt-4
                      font-display
                      text-xl
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-2
                      max-w-[210px]
                      text-[11px]
                      leading-5
                      text-white/70
                    "
                  >
                    {text}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ==================== CERTIFICATES ==================== */}

      <AnimatedSection className="py-14 sm:py-16">
        <Container>
          <h2
            className="
              font-display
              text-[29px]
              text-[#173c50]

              sm:text-[34px]
            "
          >
            Certificates &amp; Honours
          </h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            className="
              mt-8
              grid
              gap-6

              sm:grid-cols-2

              lg:grid-cols-3
            "
          >
            {certificates.map((certificate) => (
              <motion.article
                key={certificate.title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  boxShadow:
                    "0 15px 32px rgba(23,60,80,0.09)",
                }}
                className="
                  group
                  overflow-hidden
                  rounded-[9px]
                  border
                  border-[#e0d8cf]
                  bg-[#fffdf9]
                "
              >
                <div className="overflow-hidden bg-[#f6f1e8] p-3">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    className="
                      h-44
                      w-full
                      rounded-[4px]
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.035]
                    "
                  />
                </div>

                <div className="p-5">
                  <h3
                    className="
                      font-display
                      text-xl
                      text-[#173c50]
                    "
                  >
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-[10px] text-[#747773]">
                    Details to be updated
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedCertificate(certificate)
                    }
                    className="
                      mt-3
                      inline-flex
                      items-center
                      gap-2
                      text-[11px]
                      font-semibold
                      text-[#5d8a81]
                      transition-colors
                      hover:text-[#c9684b]
                    "
                  >
                    View Detail
                    <ArrowRight
                      size={14}
                      className="
                        transition-transform
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* ==================== CTA ==================== */}

      <section className="pb-12 sm:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              y: -3,
              boxShadow:
                "0 13px 30px rgba(23,60,80,0.08)",
            }}
            className="
              relative
              isolate
              min-h-[185px]
              overflow-hidden
              rounded-[10px]
              border
              border-[#d6e0d8]
              bg-[#edf3ee]
              bg-cover
              bg-center
              bg-no-repeat
              px-6
              py-8

              sm:px-9

              lg:bg-right
              lg:px-12
            "
            style={{
              backgroundImage: `url(${cta})`,
            }}
          >
            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                -z-10
                bg-[#edf3ee]/92

                sm:bg-gradient-to-r
                sm:from-[#edf3ee]
                sm:via-[#edf3ee]/94
                sm:to-[#edf3ee]/35

                lg:via-[#edf3ee]/82
                lg:to-transparent
              "
            />

            <div className="flex min-h-[120px] items-center">
              <div className="max-w-[660px]">
                <h2
                  className="
                    font-display
                    text-[27px]
                    leading-tight
                    text-[#173c50]

                    sm:text-[32px]
                  "
                >
                  Let’s Build Meaningful Impact Together
                </h2>

                <p
                  className="
                    mt-3
                    max-w-[550px]
                    text-xs
                    leading-6
                    text-[#6e716e]
                  "
                >
                  Open to conversations around leadership,
                  collaboration, research, and purposeful growth.
                </p>

                <div
                  className="
                    mt-5
                    flex
                    flex-col
                    gap-3

                    min-[430px]:flex-row
                  "
                >
                  <motion.a
                    href="/contact#contact-form"
                    whileHover={{
                      y: -2,
                      boxShadow:
                        "0 9px 22px rgba(198,104,75,0.24)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      inline-flex
                      min-h-10
                      items-center
                      justify-center
                      rounded-[5px]
                      bg-[#c9684b]
                      px-6
                      text-[11px]
                      font-semibold
                      text-white
                      hover:bg-[#b95d42]
                    "
                  >
                    Start a Conversation
                  </motion.a>

                
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ================= CERTIFICATE MODAL ================= */}

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="
              fixed
              inset-0
              z-[100]
              grid
              place-items-center
              bg-[#0b2638]/75
              p-4
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="
                relative
                w-full
                max-w-[760px]
                overflow-hidden
                rounded-[10px]
                bg-[#fffdf9]
                p-4
                shadow-2xl

                sm:p-6
              "
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate"
                className="
                  absolute
                  right-3
                  top-3
                  z-10
                  grid
                  h-9
                  w-9
                  place-items-center
                  rounded-full
                  bg-[#173c50]
                  text-white
                  transition-colors
                  hover:bg-[#c9684b]
                "
              >
                <X size={18} />
              </button>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.alt}
                className="
                  max-h-[70vh]
                  w-full
                  rounded-[6px]
                  object-contain
                "
              />

              <h3
                className="
                  mt-4
                  font-display
                  text-xl
                  text-[#173c50]
                "
              >
                {selectedCertificate.title}
              </h3>

              <p className="mt-1 text-xs text-[#747773]">
                Verified details will be added here.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}