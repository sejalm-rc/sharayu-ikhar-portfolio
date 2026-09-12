import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Lightbulb,
  Mic,
  Newspaper,
  Play,
  Presentation,
  Radio,
  Users,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

import heroMedia from "../assets/images/img/mediaBg.png";
import featuredInterview from "../assets/images/img/impact.png";
import appearanceInterview from "../assets/images/media/appearance-interview.jpg";
import appearancePodcast from "../assets/images/media/appearance-podcast.jpg";
import appearanceSpeaking from "../assets/images/media/appearance-speaking.jpg";
import appearancePress from "../assets/images/img/mediaFea.png";
import appearancePractice from "../assets/images/media/appearance-practice.jpg";
import appearanceOnline from "../assets/images/media/appearance-online.jpg";
import speakingPanel from "../assets/images/media/speaking-panel.jpg";
import speakingKeynote from "../assets/images/media/speaking-keynote.jpg";
import speakingWorkshop from "../assets/images/media/speaking-workshop.jpg";
import mediaCtaBg from "../assets/images/img/mediaCta.png";

const pageContainer = "mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8";
const heading =
  "text-center font-serif text-[25px] font-medium text-[#173c50] sm:text-[26px] lg:text-[28px]";

const appearances = [
  {
    image: appearanceInterview,
    type: "Interviews",
    label: "Interview",
    title: "Conversation on Purposeful Leadership",
    text: "Exploring how purpose-driven leadership creates strong and adaptive organizations.",
  },
  {
    image: appearancePodcast,
    type: "Podcasts",
    label: "Podcast",
    title: "Building Strong Research Communities",
    text: "Discussing ways to strengthen research ecosystems and foster collaboration.",
  },
  {
    image: appearanceSpeaking,
    type: "Speaking",
    label: "Speaking",
    title: "Innovation Through Collaboration",
    text: "How collaborative approaches enable innovation and deliver lasting impact.",
  },
  {
    image: appearancePress,
    type: "Press",
    label: "Press",
    title: "Turning Strategy Into Action",
    text: "Insights on turning strategy into measurable outcomes that drive meaningful change.",
  },
  {
    image: appearancePractice,
    type: "Interviews",
    label: "Interview",
    title: "Knowledge Exchange in Practice",
    text: "Conversations on bridging research, practice, and policy for greater impact.",
  },
  {
    image: appearanceOnline,
    type: "Podcasts",
    label: "Podcast",
    title: "Creating Sustainable Impact",
    text: "Exploring ideas that support organizations and communities for the long term.",
  },
];

const speaking = [
  {
    image: speakingPanel,
    title: "Panel Discussions",
    text: "Engaging in conversations that explore challenges, opportunities, and solutions.",
  },
  {
    image: speakingKeynote,
    title: "Keynote Conversations",
    text: "Sharing perspectives on leadership, innovation, and creating meaningful impact.",
  },
  {
    image: speakingWorkshop,
    title: "Research Workshops",
    text: "Facilitating sessions that build capacity and encourage practical collaboration.",
  },
];

const gallery = [
  { image: featuredInterview, title: "Interview Studio" },
  { image: speakingPanel, title: "Panel Stage" },
  { image: appearanceInterview, title: "Podcast Setup" },
  { image: speakingWorkshop, title: "Workshop Session" },
  { image: appearancePress, title: "Editorial Desk" },
];

const filters = ["All Media", "Interviews", "Podcasts", "Speaking", "Press"];

function MediaCard({ item }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[8px] border border-[#e5ddd2] bg-white shadow-[0_3px_12px_rgba(23,60,80,0.025)] hover:border-[#d7c2af] hover:shadow-[0_12px_28px_rgba(23,60,80,0.1)]"
    >
      <div className="relative h-[150px] overflow-hidden sm:h-[165px]">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
        />
        <span className="absolute bottom-2 left-3 rounded-full bg-[#f1f4ef] px-3 py-1 text-[10px] text-[#66887d]">
          {item.label}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-[16.5px] font-semibold text-[#173c50]">
          {item.title}
        </h3>
        <p className="mt-2 text-[12px] leading-[1.6] text-[#68767a]">
          {item.text}
        </p>
     
      </div>
    </motion.article>
  );
}

export default function Media() {
  const [filter, setFilter] = useState("All Media");
  const filtered =
    filter === "All Media"
      ? appearances
      : appearances.filter((item) => item.type === filter);

  return (
    <main className="overflow-x-hidden bg-[#fffefd]">
      {/* HERO - same measurements and motion as Research page */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="group relative w-full overflow-hidden bg-[#f7f3ec]"
      >
        <motion.div
          initial={{ scale: 1.015 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full bg-cover bg-[72%_center] bg-no-repeat transition-transform duration-[1200ms] group-hover:scale-[1.008] sm:bg-[68%_center] md:bg-[64%_center] lg:bg-center"
          style={{ backgroundImage: `url(${heroMedia})` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f8f4ed] via-[#f8f4ed]/95 to-[#f8f4ed]/30 sm:via-[#f8f4ed]/90 sm:to-transparent lg:from-[#f8f4ed]/5 lg:via-transparent lg:to-transparent" />

        <div
          className={`${pageContainer} relative z-10 flex min-h-[500px] items-center md:min-h-[470px] lg:min-h-[450px] xl:min-h-[500px]`}
        >
          <div className="w-full max-w-[550px] py-8 sm:py-10 md:max-w-[500px] lg:w-[45%]">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="mb-5 flex items-center gap-[7px] text-[13px] font-medium text-[#757d80] sm:mb-6"
            >
              <Link to="/" className="transition-colors hover:text-[#c66f4e]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#173c50]">Media</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-[14px] text-[13px] font-bold uppercase tracking-[0.15em] text-[#c66f4e] sm:text-[14px]"
            >
              Media &amp; Conversations
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="max-w-[480px] font-serif text-[40px] font-medium leading-[1.04] tracking-[-0.025em] text-[#173c50] min-[420px]:text-[46px] sm:text-[42px] md:text-[44px]"
            >
              Ideas Shared <span className="block">Beyond the Page</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 max-w-[400px] text-[14px] leading-[1.7] text-[#252a2c] sm:mt-5 lg:max-w-[350px] lg:text-[15px]"
            >
              A space for interviews, conversations, public engagement, and
              stories that bring leadership, research, and innovation to wider
              audiences.
            </motion.p>
            <motion.a
              href="#media-appearances"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="group/button mt-7 inline-flex min-h-[37px] items-center gap-2 rounded-[6px] border border-[#c66f4e] bg-[#c66f4e] px-[21px] py-[10px] text-[13px] font-semibold text-white hover:border-[#173c50] hover:bg-white hover:text-[#173c50]"
            >
              Explore Media{" "}
              <ArrowRight className="h-[13px] w-[13px] transition group-hover/button:translate-x-[3px]" />
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* MEDIA TYPES */}
      <AnimatedSection className="py-5 sm:py-5">
        <div className={pageContainer}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid overflow-hidden rounded-[10px] border border-[#e5ddd2] bg-white sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              { icon: Radio, title: "Interviews" },
              { icon: Mic, title: "Podcasts" },
              { icon: Presentation, title: "Speaking" },
              { icon: Newspaper, title: "Press Features" },
            ].map(({ icon: Icon, title }, index) => (
              <motion.div
                whileHover={{ y: -3 }}
                key={title}
                className={`flex min-h-[92px] items-center justify-center gap-3 p-5 text-[#173c50] hover:bg-[#f8f5ef] ${index < 3 ? "lg:border-r lg:border-[#e5ddd2]" : ""}`}
              >
                <Icon size={27} strokeWidth={1.4} />
                <span className="text-[14px] font-medium">{title}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

     {/* =====================================================
    MEDIA OVERVIEW
====================================================== */}

<AnimatedSection
  className="
    bg-[#fffdf9]
    py-[12px]
    sm:py-[13px]
    lg:py-[15px]
  "
>
  <div className={pageContainer}>
    <div className="mx-auto max-w-[760px] text-center">
      {/* Heading */}
      <h2
        className="
          font-serif
          text-[26px]
          font-medium
          leading-[1.15]
          tracking-[-0.015em]
          text-[#173c50]
          sm:text-[27px]
          lg:text-[28px]
        "
      >
        Media &amp; Public Engagement
      </h2>

      {/* Description */}
      <p
        className="
          mx-auto
          mt-[10px]
          max-w-[470px]

          text-[11.5px]
          font-normal
          leading-[1.6]
          text-[#68767a]

          sm:text-[12px]
          lg:text-[13px]
        "
      >
        Sharing ideas through thoughtful conversations, accessible
        communication,
        <span className="block sm:inline">
          {" "}
          and knowledge exchange to advance meaningful progress.
        </span>
      </p>

      {/* Quote */}
      <div
        className="
          relative
          mx-auto
          mt-[8px]
          flex
          max-w-[650px]
          items-center
          justify-center
          px-7

          sm:mt-[10px]
          sm:px-10
        "
      >
        <span
          aria-hidden="true"
          className="
            absolute
            left-0
            top-1/2
            -translate-y-[45%]

            font-serif
            text-[34px]
            font-bold
            leading-none
            text-[#d7a64f]

            sm:text-[39px]
          "
        >
          “
        </span>

        <p
          className="
            font-serif
            text-[14px]
            font-medium
            italic
            leading-[1.55]
            text-[#71817f]

            sm:text-[15px]
            lg:text-[16px]
          "
        >
          Ideas create greater impact when they reach, engage, and inspire
          people.
        </p>

        <span
          aria-hidden="true"
          className="
            absolute
            right-0
            top-1/2
            -translate-y-[45%]

            font-serif
            text-[34px]
            font-bold
            leading-none
            text-[#d7a64f]

            sm:text-[39px]
          "
        >
          ”
        </span>
      </div>
    </div>
  </div>
</AnimatedSection>

      {/* FEATURED MEDIA */}
      <AnimatedSection className="pt-3 sm:pt-4">
        <div className={pageContainer}>
          <motion.div
            whileHover={{ y: -2 }}
            className="group grid overflow-hidden rounded-[9px] border border-[#e5ddd2] bg-white p-3 shadow-[0_5px_18px_rgba(23,60,80,0.035)] lg:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative min-h-[220px] overflow-hidden rounded-[7px] sm:min-h-[230px] lg:min-h-[250px]">
              <img
                src={featuredInterview}
                alt="Professional interview"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />
              <button
                type="button"
                className="absolute inset-0 grid place-items-center"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-white bg-[#173c50]/65 text-white transition hover:scale-110">
                  <Play size={21} fill="currentColor" />
                </span>
              </button>
            </div>
            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-9">
              <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#c66f4e]">
                Featured Media
              </p>
              <h2 className="mt-3 font-serif text-[27px] font-medium leading-[1.08] text-[#173c50] sm:text-[30px]">
                Leadership, Research &amp; Meaningful Impact
              </h2>
              <p className="mt-4 text-[12.5px] leading-[1.7] text-[#68767a]">
                A conversation on aligning research, leadership, and strategy to
                create meaningful and sustainable impact.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Conversation", "Leadership", "Research"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#eaf0eb] px-3 py-1 text-[10.5px] font-semibold text-[#66887d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <motion.button
                  whileHover={{ y: -2 }}
                  className="rounded-[5px] bg-[#173c50] px-5 py-2.5 text-[12px] font-semibold text-white"
                >
                  Watch Preview
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  className="rounded-[5px] border border-[#173c50] px-5 py-2.5 text-[12px] font-semibold text-[#173c50]"
                >
                  View Details
                </motion.button>
              </div>
              <p className="mt-4 text-[10.5px] text-[#7b878b]">
                Sample media content — verified details can be added later.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* MEDIA APPEARANCES */}
      <AnimatedSection
        id="media-appearances"
        className=" pt-6"
      >
        <div className={pageContainer}>
          <h2 className={heading}>Media Appearances</h2>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {filters.map((item) => (
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                key={item}
                onClick={() => setFilter(item)}
                className={`min-w-[92px] rounded-full border px-4 py-2 text-[11px] ${filter === item ? "border-[#729484] bg-[#729484] text-white" : "border-[#bfc9c5] bg-white text-[#173c50]"}`}
              >
                {item}
              </motion.button>
            ))}
          </div>
          <motion.div
            layout
            className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <MediaCard key={item.title} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* SPEAKING */}
      <AnimatedSection className="pt-6">
        <div className={pageContainer}>
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-[#ded5c9]" />
            <h2 className={heading}>Speaking &amp; Conversations</h2>
            <span className="h-px flex-1 bg-[#ded5c9]" />
          </div>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {speaking.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group overflow-hidden rounded-[8px] border border-[#e5ddd2] bg-white"
              >
                <div className="h-[150px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[17px] font-semibold text-[#173c50]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.6] text-[#68767a]">
                    {item.text}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* PRESS */}
      <AnimatedSection className="pt-6">
        <div className={pageContainer}>
          <motion.div
            whileHover={{ y: -2 }}
            className="grid gap-7 overflow-hidden rounded-[9px] bg-[#edf2ed] p-4 sm:p-4 lg:grid-cols-[1fr_0.9fr] lg:items-center"
          >
            <div>
              <h2 className="font-serif text-[26px] font-medium text-[#173c50] sm:text-[28px]">
                Press &amp; Features
              </h2>
              <div className="mt-3 space-y-3">
                {[
                  "Leadership Perspective",
                  "Research Collaboration Feature",
                  "Organizational Impact Story",
                ].map((title) => (
                  <motion.button
                    whileHover={{ x: 3 }}
                    key={title}
                    className="flex w-full items-center justify-between rounded-[7px] border border-[#d4ddd5] bg-white p-2 text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-[5px] bg-[#eaf0eb]">
                        <Newspaper size={19} className="text-[#66887d]" />
                      </span>
                      <span>
                        <strong className="block font-serif text-[14px] text-[#173c50]">
                          {title}
                        </strong>
                        <small className="text-[10px] text-[#68767a]">
                          Publication details to be updated
                        </small>
                      </span>
                    </span>
                    <ArrowRight size={14} />
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="h-[260px] overflow-hidden rounded-[8px] lg:h-[280px]">
              <img
                src={appearancePress}
                alt="Editorial materials"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* GALLERY */}
      <AnimatedSection className="pt-6">
        <div className={pageContainer}>
          <h2 className={heading}>Media Gallery</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {gallery.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative h-[135px] overflow-hidden rounded-[8px]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-3 py-1 text-[10px] text-white">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* TOPICS */}
      <AnimatedSection className="pt-6">
        <div className={pageContainer}>
          <h2 className={heading}>Media Topics</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { icon: BriefcaseBusiness, title: "Leadership" },
              { icon: Users, title: "Research" },
              { icon: Lightbulb, title: "Innovation" },
              { icon: Users, title: "Collaboration" },
              { icon: BarChart3, title: "Organizational Growth" },
            ].map(({ icon: Icon, title }) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={title}
                className="flex min-h-[52px] items-center justify-center gap-3 rounded-[7px] border border-[#cdd5d0] bg-white px-4 py-2 hover:border-[#729484]"
              >
                <Icon size={22} className="text-[#729484]" />
                <p className="text-[12px] text-[#173c50]">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

     {/* =====================================================
    CTA SECTION
====================================================== */}

<AnimatedSection className="pb-6 pt-6">
  <div className={pageContainer}>
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="
        group
        relative
        min-h-[145px]
        w-full
        overflow-hidden
        rounded-[10px]
        border
        border-[#e3d8cb]
        bg-[#fbf7f1]

        shadow-[0_4px_16px_rgba(23,60,80,0.035)]
        transition-shadow
        duration-300

        hover:shadow-[0_10px_28px_rgba(23,60,80,0.08)]

        sm:min-h-[150px]
      "
    >
      {/* Background image */}
      <motion.div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-cover
          bg-left-center
          bg-no-repeat

          transition-transform
          duration-700

          group-hover:scale-[1.005]
        "
        style={{
          backgroundImage: `url(${mediaCtaBg})`,
        }}
      />

      {/* Content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[145px]
          items-center
          justify-center

          px-6
          py-5

          sm:min-h-[150px]
          sm:px-10
        "
      >
        <div
          className="
            ml-auto
            mr-auto
            w-full
            max-w-[650px]
            text-center
          "
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              font-serif
              text-[21px]
              font-medium
              leading-[1.2]
              text-[#c66f4e]

              sm:text-[24px]
              lg:text-[26px]
            "
          >
            Interested in an Interview or Conversation?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="
              mx-auto
              mt-2
              max-w-[470px]
              text-center
              text-[11px]
              leading-[1.65]
              text-[#68767a]

              sm:text-[12px]
            "
          >
            Open to thoughtful discussions on leadership, research,
            <span className="block sm:inline">
              {" "}
              innovation, and organizational impact.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-4 inline-block"
          >
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="
                  inline-flex
                  min-h-[34px]
                  min-w-[150px]
                  items-center
                  justify-center

                  rounded-[4px]
                  bg-[#0b3f70]

                  px-6
                  py-2

                  text-[11px]
                  font-semibold
                  text-white

                  shadow-[0_3px_10px_rgba(11,63,112,0.18)]

                  transition-all
                  duration-300

                  hover:bg-[#c66f4e]
                  hover:shadow-[0_6px_16px_rgba(198,111,78,0.22)]
                "
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
</AnimatedSection>
    </main>
  );
}
