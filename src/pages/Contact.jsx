import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Handshake,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Microscope,
  Phone,
  Search,
  Send,
  Settings,
  Target,
} from "lucide-react";

import AnimatedSection from "../components/AnimatedSection";
import Container from "../components/Container";
import SectionHeading from "../components/SectionHeading";

import heroContact from "../assets/images/img/bgcontact.png";



import processBackground from
  "../assets/images/img/contact2.png";

import connectedBackground from
  "../assets/images/img/contact3.png";

import ctaBackground from
  "../assets/images/img/ctaContact.png";


const initialForm = {
  name: "",
  email: "",
  organization: "",
  subject: "",
  message: "",
  consent: false,
};

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    required: true,
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    required: true,
    autoComplete: "email",
  },
  {
    name: "organization",
    label: "Organization",
    type: "text",
    required: false,
    autoComplete: "organization",
  },
  {
    name: "subject",
    label: "Subject",
    type: "text",
    required: true,
    autoComplete: "off",
  },
];

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: "Official email to be added",
    href: "mailto:your-email@example.com",
    color: "#d86f50",
    borderColor: "#e9b8a8",
  },
  {
    icon: Phone,
    title: "Phone",
    text: (
      <>
        Verified contact number
        <br />
        to be added
      </>
    ),
    href: "tel:+910000000000",
    color: "#67928b",
    borderColor: "#b7d0cb",
  },
  {
    icon: MapPin,
    title: "Location",
    text: (
      <>
        Professional location
        <br />
        to be added
      </>
    ),
    href: "#",
    color: "#d39a56",
    borderColor: "#e9c99f",
  },
];

const contactFadeUp = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const contactStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const collaborationItems = [
  {
    icon: Settings,
    title: "Leadership & Operations",
    text: "Conversations around strategy, systems, teams, and organizational growth.",
    color: "#c9684b",
  },
  {
    icon: Microscope,
    title: "Research Collaboration",
    text: "Thoughtful partnerships connecting research, innovation, and practice.",
    color: "#5f8f88",
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships",
    text: "Purpose-led opportunities built around shared goals and lasting value.",
    color: "#c79556",
  },
  {
    icon: Mic,
    title: "Speaking & Media",
    text: "Professional conversations, interviews, panels, and knowledge exchange.",
    color: "#284f68",
  },
];

const processSteps = [
  {
    icon: MessageCircle,
    title: "Share Your Enquiry",
    text: "Tell me what you would like to discuss.",
    color: "#c9684b",
  },
  {
    icon: Target,
    title: "Align on Purpose",
    text: "Clarify the opportunity, priorities, and next steps.",
    color: "#5f8f88",
  },
  {
    icon: Send,
    title: "Begin the Conversation",
    text: "Connect around a thoughtful path forward.",
    color: "#c79556",
  },
];

const faqs = [
  {
    question: "What kinds of enquiries are welcome?",
    answer:
      "Professional, research, partnership, media and new opportunity enquiries are welcome. Please include enough detail to help make the first conversation productive.",
  },
  {
    question: "Are speaking and media invitations considered?",
    answer:
      "Yes. Invitations for professional discussions, interviews, conferences, panels and knowledge-sharing sessions can be submitted through the form.",
  },
  {
    question: "Can I propose a research collaboration?",
    answer:
      "Yes. Please include the research topic, expected contribution, approximate timeline and the type of partnership you are proposing.",
  },
  {
    question: "Where can verified contact details be found?",
    answer:
      "Verified contact information will appear on this page once the official email address, phone number and professional location are confirmed.",
  },
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

function LinkedInIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M12 13.2a3 3 0 0 1 6 0V16" />
    </svg>
  );
}

function ResearchIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5z" />
    </svg>
  );
}

function MediaIcon({ size = 16, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8 6 4-6 4z" />
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  function update(event) {
    const { name, value, type, checked } = event.target;

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));

    setSent(false);
  }

  function validateForm() {
    const next = {};

    if (!form.name.trim()) {
      next.name = "Please enter your full name.";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      next.email = "Please enter a valid email address.";
    }

    if (!form.subject.trim()) {
      next.subject = "Please enter a subject.";
    }

    if (form.message.trim().length < 10) {
      next.message = "Please add a little more detail.";
    }

    if (!form.consent) {
      next.consent =
        "Please confirm that these details may be used for this enquiry.";
    }

    return next;
  }

  function submit(event) {
    event.preventDefault();

    const next = validateForm();
    setErrors(next);
    setSent(false);

    if (Object.keys(next).length > 0) {
      const firstError = Object.keys(next)[0];

      document
        .querySelector(`[name="${firstError}"]`)
        ?.focus();

      return;
    }

    const enquiry = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim().toLowerCase(),
      organization: form.organization.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      const previousEnquiries = JSON.parse(
        localStorage.getItem("contact-enquiries") || "[]"
      );

      localStorage.setItem(
        "contact-enquiries",
        JSON.stringify([...previousEnquiries, enquiry])
      );
    } catch (error) {
      console.error("Unable to save enquiry:", error);
    }

    setSent(true);
    setForm(initialForm);
  }

  return (
    <main className="overflow-hidden bg-[#fbf8f3]">
      {/* ==================== HERO SECTION ==================== */}

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
          backgroundImage: `url(${heroContact})`,
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

              <span className="text-[#173c50]">Contact</span>
            </motion.div>

            {/* <motion.p
              variants={fadeUp}
              className="
                text-[12px]
                font-bold
                uppercase
                tracking-[0.12rem]
                text-[#6E8987]
              "
            >
              Get in Touch
            </motion.p> */}

              <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[540px]
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
             Let’s Connect and

              <span className="block">Create Meaningful Impact</span>
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
         Whether you would like to discuss leadership, research, collaboration, or a new opportunity, I would be glad to hear from you.
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
                href="#contact-form"
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
                Start a Conversation
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
              {["Leadership", "Research", "Partnerships"].map(
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

    

  {/* ==================== CONTACT FORM ==================== */}<AnimatedSection
  id="contact-form"
  className="
    scroll-mt-24
    bg-[#fcfaf6]
    py-12
   
  "
>
  <Container>
    <motion.div
      variants={contactStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="
        grid
        grid-cols-1
        items-start
        gap-9
        lg:grid-cols-[minmax(0,1.42fr)_minmax(315px,0.88fr)]
        lg:gap-12
        xl:grid-cols-[minmax(0,1.48fr)_minmax(350px,0.9fr)]
        xl:gap-16
      "
    >
      {/* LEFT CONTENT */}

      <motion.div variants={contactFadeUp} className="min-w-0">
        <div className="max-w-[620px]">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#5d9c91]
            "
          >
            Start a Conversation
          </p>

          <h2
            className="
              mt-2
              font-display
              text-[28px]
              font-medium
              leading-[1.1]
              text-[#173c50]
              sm:text-[32px]
              lg:text-[28px]
            "
          >
            How Can We Work Together?
          </h2>

      
        </div>

        <motion.form
          onSubmit={submit}
          noValidate
          variants={contactFadeUp}
          className="
            mt-4
            rounded-[10px]
            border
            border-[#ddd4ca]
            bg-[#fffdf9]
            p-5
            shadow-[0_2px_5px_rgba(35,55,65,0.06)]
            sm:p-6
          "
        >
          <div className="space-y-3">
            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="
                    mb-1.5
                    block
                    text-[12px]
                    font-medium
                    text-[#5f625f]
                  "
                >
                  {field.label}
                </label>

                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={update}
                  autoComplete={field.autoComplete}
                  aria-invalid={Boolean(errors[field.name])}
                  aria-describedby={
                    errors[field.name]
                      ? `${field.name}-error`
                      : undefined
                  }
                  className={`
                    h-[34px]
                    w-full
                    rounded-[4px]
                    border
                    bg-white
                    px-3
                    text-[12px]
                    text-[#303d42]
                    outline-none
                    transition-all
                    duration-200
                    hover:border-[#bcb5ad]
                    focus:ring-4
                    ${
                      errors[field.name]
                        ? "border-[#c9684b] focus:border-[#c9684b] focus:ring-[#c9684b]/10"
                        : "border-[#d8d1c9] focus:border-[#658e86] focus:ring-[#658e86]/10"
                    }
                  `}
                />

                {errors[field.name] && (
                  <motion.p
                    id={`${field.name}-error`}
                    initial={{ opacity: 0, y: -3 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-[10px] text-[#bd553c]"
                  >
                    {errors[field.name]}
                  </motion.p>
                )}
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="
                  mb-1.5
                  block
                  text-[12px]
                  font-medium
                  text-[#5f625f]
                "
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={update}
                rows={4}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "message-error" : undefined
                }
                className={`
                  min-h-[60px]
                  w-full
                  resize-y
                  rounded-[4px]
                  border
                  bg-white
                  px-3
                  py-2
                  text-[12px]
                  text-[#303d42]
                  outline-none
                  transition-all
                  duration-200
                  hover:border-[#bcb5ad]
                  focus:ring-4
                  ${
                    errors.message
                      ? "border-[#c9684b] focus:border-[#c9684b] focus:ring-[#c9684b]/10"
                      : "border-[#d8d1c9] focus:border-[#658e86] focus:ring-[#658e86]/10"
                  }
                `}
              />

              {errors.message && (
                <motion.p
                  id="message-error"
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-[10px] text-[#bd553c]"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
          </div>

          <div
            className="
              mt-5
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-start
              sm:justify-between
            "
          >
            <div className="min-w-0 flex-1">
              <label
                className="
                  flex
                  cursor-pointer
                  items-start
                  gap-2.5
                  text-[11px]
                  leading-4
                  text-[#585a58]
                "
              >
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={update}
                  className="
                    mt-[1px]
                    h-4
                    w-4
                    shrink-0
                    cursor-pointer
                    rounded
                    border-[#cdc5bc]
                    accent-[#c9684b]
                  "
                />

                <span>
                  I agree to share these details for the purpose of this
                  enquiry.
                </span>
              </label>

              {errors.consent && (
                <motion.p
                  initial={{ opacity: 0, y: -3 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-1 text-[10px] text-[#bd553c]"
                >
                  {errors.consent}
                </motion.p>
              )}

              <AnimatePresence>
                {sent && (
                  <motion.p
                    role="status"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="
                      mt-3
                      inline-flex
                      items-start
                      gap-2
                      text-[11px]
                      font-medium
                      text-[#568078]
                    "
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-px shrink-0"
                    />

                    Thank you. Your enquiry has been recorded.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              whileHover={{
                y: -2,
                backgroundColor: "#b85c42",
                boxShadow: "0 8px 20px rgba(198,104,75,0.23)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex
                h-10
                w-full
                shrink-0
                items-center
                justify-center
                rounded-[5px]
                bg-[#c9684b]
                px-6
                text-[11px]
                font-semibold
                text-white
                shadow-sm
                outline-none
                transition-colors
                focus-visible:ring-4
                focus-visible:ring-[#c9684b]/20
                sm:w-auto
              "
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </motion.div>

      {/* RIGHT CONTACT CARDS */}

      <motion.aside
        variants={contactStagger}
        className="
          grid
          min-w-0
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:grid-cols-1
        "
      >
        {contactCards.map(
          ({
            icon: Icon,
            title,
            text,
            href,
            color,
            borderColor,
          }) => (
            <motion.a
              key={title}
              variants={contactFadeUp}
              href={href}
              whileHover={{
                y: -4,
                x: 3,
                boxShadow: "0 12px 28px rgba(23,60,80,0.09)",
              }}
              whileTap={{ scale: 0.99 }}
              className="
                group
                flex
                min-h-[112px]
                items-center
                gap-5
                rounded-[9px]
                border
                border-[#dfd6cc]
                bg-[#fffdf9]
                p-5
                shadow-[0_2px_7px_rgba(23,60,80,0.025)]
                outline-none
                transition-colors
                hover:border-[#d3c7ba]
                focus-visible:ring-4
                focus-visible:ring-[#658e86]/15
                sm:p-6
              "
            >
              <span
                className="
                  grid
                  h-[58px]
                  w-[58px]
                  shrink-0
                  place-items-center
                  rounded-full
                  border
                  bg-white
                  transition-transform
                  duration-300
                  group-hover:-rotate-6
                  group-hover:scale-105
                "
                style={{ borderColor }}
              >
                <Icon
                  size={28}
                  strokeWidth={1.25}
                  style={{ color }}
                />
              </span>

              <span className="min-w-0">
                <span
                  className="
                    block
                    font-display
                    text-[20px]
                    leading-tight
                    text-[#173c50]
                  "
                >
                  {title}
                </span>

                <span
                  className="
                    mt-2
                    block
                    text-[12px]
                    leading-[1.55]
                    text-[#70736f]
                  "
                >
                  {text}
                </span>
              </span>
            </motion.a>
          )
        )}

        <motion.div
          variants={contactFadeUp}
          whileHover={{
            y: -3,
            boxShadow: "0 10px 25px rgba(23,60,80,0.07)",
          }}
          className="
            min-h-[166px]
            rounded-[9px]
            border
            border-[#d8e1da]
            bg-[#edf3ee]
            p-6
            sm:col-span-2
            sm:p-7
            lg:col-span-1
          "
        >
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#5d8a81]
            "
          >
            Preferred Enquiries
          </p>

          <p
            className="
              mt-5
              max-w-[290px]
              font-display
              text-[17px]
              leading-8
              text-[#263e4c]
              sm:text-[18px]
            "
          >
            Leadership&nbsp;&nbsp;·&nbsp;&nbsp;Research
            &nbsp;&nbsp;·&nbsp;&nbsp;Strategic
            Collaboration&nbsp;&nbsp;·&nbsp;&nbsp;Media
          </p>
        </motion.div>
      </motion.aside>
    </motion.div>
  </Container>
</AnimatedSection>

      {/* ==================== COLLABORATION ==================== */}

      <AnimatedSection
        id="collaboration"
        className="
          scroll-mt-20
          border-y
          border-[#dbe4dc]
          bg-[#edf3ee]
          py-14
          sm:py-16
        "
      >
        <Container>
          <SectionHeading
            eyebrow="Opportunities"
            title="Ways We Can Collaborate"
            align="left"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="
              mt-8
              grid
              gap-5
              min-[520px]:grid-cols-2
              lg:grid-cols-4
            "
          >
            {collaborationItems.map(
              ({ icon: Icon, title, text, color }) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="
                    group
                    rounded-[9px]
                    border
                    border-[#ddd7cf]
                    bg-[#fffdf9]
                    p-6
                    text-center
                    shadow-[0_6px_20px_rgba(25,55,72,0.03)]
                    transition-shadow
                    hover:shadow-[0_15px_32px_rgba(25,55,72,0.09)]
                  "
                >
                  <Icon
                    className="
                      mx-auto
                      transition-transform
                      duration-300
                      group-hover:-rotate-6
                      group-hover:scale-110
                    "
                    size={41}
                    strokeWidth={1.2}
                    style={{ color }}
                  />

                  <h3
                    className="
                      mt-4
                      font-display
                      text-lg
                      text-[var(--navy)]
                      sm:text-xl
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mx-auto
                      mt-3
                      max-w-[250px]
                      text-xs
                      leading-5
                      text-[var(--muted)]
                    "
                  >
                    {text}
                  </p>
                </motion.article>
              )
            )}
          </motion.div>
        </Container>
      </AnimatedSection>

      {/* ==================== SIMPLE PROCESS ==================== */}

      <AnimatedSection className="relative py-14 sm:py-16">
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            right-[-60px]
            top-1/2
            h-72
            w-72
            -translate-y-1/2
            rounded-full
            bg-[#edf3ee]
            opacity-80
            blur-sm
            sm:right-[-20px]
          "
        />

        <Container>
          <div className="relative max-w-[1000px]">
            <SectionHeading
              eyebrow="A Simple Process"
              title="From First Message to Meaningful Conversation"
              align="left"
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="
                mt-8
                grid
                gap-4
                md:grid-cols-3
              "
            >
              {processSteps.map(
                ({ icon: Icon, title, text, color }, index) => (
                  <motion.article
                    key={title}
                    variants={fadeUp}
                    whileHover={{ y: -5 }}
                    className="
                      group
                      relative
                      rounded-[9px]
                      border
                      border-[#e1d8ce]
                      bg-[#fffdf9]
                      p-5
                      shadow-[0_6px_20px_rgba(25,55,72,0.03)]
                    "
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className="
                          grid
                          h-12
                          w-12
                          shrink-0
                          place-items-center
                          rounded-full
                          border
                          border-[#e4d4c9]
                          bg-white
                          transition-transform
                          duration-300
                          group-hover:scale-110
                        "
                      >
                        <Icon
                          size={23}
                          strokeWidth={1.3}
                          style={{ color }}
                        />
                      </span>

                      <div>
                        <p
                          className="
                            text-[9px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-[#9a8173]
                          "
                        >
                          Step 0{index + 1}
                        </p>

                        <h3
                          className="
                            mt-1
                            font-display
                            text-lg
                            text-[var(--navy)]
                          "
                        >
                          {title}
                        </h3>
                      </div>
                    </div>

                    <p
                      className="
                        mt-3
                        text-xs
                        leading-5
                        text-[var(--muted)]
                      "
                    >
                      {text}
                    </p>

                    {index < processSteps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="
                          absolute
                          -right-3
                          top-1/2
                          z-10
                          hidden
                          -translate-y-1/2
                          text-[#c9684b]
                          md:block
                        "
                      >
                        →
                      </span>
                    )}
                  </motion.article>
                )
              )}
            </motion.div>
          </div>
        </Container>
      </AnimatedSection>

      {/* ==================== STAY CONNECTED ==================== */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-[#103954]
          py-14
          sm:py-16
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -right-24
            -top-32
            -z-10
            h-[430px]
            w-[430px]
            rounded-full
            border
            border-white/15
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -right-4
            -top-6
            -z-10
            h-[270px]
            w-[270px]
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
            viewport={{ once: true, amount: 0.15 }}
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[1fr_0.65fr]
            "
          >
            <div>
              <motion.h2
                variants={fadeUp}
                className="
                  font-display
                  text-3xl
                  text-white
                  sm:text-4xl
                "
              >
                Stay Connected
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mt-3
                  max-w-[500px]
                  text-xs
                  leading-5
                  text-white/75
                "
              >
                Follow professional updates, research conversations,
                and new collaborations.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-6 flex flex-wrap gap-3"
              >
                {[
                  {
                    icon: LinkedInIcon,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/",
                  },
                  {
                    icon: ResearchIcon,
                    label: "Research Profile",
                    href: "#",
                  },
                  {
                    icon: ResearchIcon,
                    label: "Publications",
                    href: "#",
                  },
                  {
                    icon: MediaIcon,
                    label: "Media",
                    href: "#",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={
                      href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      href.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="
                      inline-flex
                      min-h-9
                      items-center
                      gap-2
                      rounded-[4px]
                      border
                      border-white/25
                      bg-white/5
                      px-3
                      text-[10px]
                      font-medium
                      text-white
                      backdrop-blur-sm
                      transition-colors
                      hover:border-white/50
                      hover:bg-white/10
                    "
                  >
                    <Icon size={14} />
                    {label}
                  </motion.a>
                ))}
              </motion.div>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-[10px] text-white/55"
              >
                Verified profile links can be added here.
              </motion.p>
            </div>

            <motion.div
              variants={fadeUp}
              className="
                hidden
                items-center
                justify-center
                lg:flex
              "
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 35,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  relative
                  grid
                  h-44
                  w-44
                  place-items-center
                  rounded-full
                  border
                  border-white/25
                "
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map(
                  (degree) => (
                    <span
                      key={degree}
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-3
                        w-3
                        rounded-full
                        bg-[#d49a5a]
                        shadow-[0_0_10px_rgba(212,154,90,0.7)]
                      "
                      style={{
                        transform: `translate(-50%, -50%) rotate(${degree}deg) translateY(-86px)`,
                      }}
                    />
                  )
                )}

                <span
                  className="
                    grid
                    h-28
                    w-28
                    place-items-center
                    rounded-full
                    border
                    border-white/20
                    font-display
                    text-4xl
                    text-white
                  "
                  style={{
                    transform: "rotate(-360deg)",
                  }}
                >
                  SI
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ==================== FAQ ==================== */}

      <AnimatedSection className="py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Before You Write"
            title="Helpful Information"
            align="left"
          />

          <div
            className="
              mt-7
              grid
              items-start
              gap-4
              lg:grid-cols-2
            "
          >
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.article
                  key={faq.question}
                  layout
                  className="
                    overflow-hidden
                    rounded-[8px]
                    border
                    border-[#e1d8ce]
                    bg-[#fffdf9]
                  "
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-5
                      p-5
                      text-left
                      font-display
                      text-sm
                      text-[var(--navy)]
                      transition-colors
                      hover:bg-[#f7f2eb]
                      sm:text-base
                    "
                  >
                    <span>{faq.question}</span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={17} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{ duration: 0.25 }}
                      >
                        <p
                          className="
                            border-t
                            border-[#ebe3da]
                            px-5
                            py-4
                            text-xs
                            leading-6
                            text-[var(--muted)]
                          "
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </AnimatedSection>

      {/* ==================== CTA ==================== */}

      <section className="pb-14 sm:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -3 }}
            className="
              relative
              isolate
              overflow-hidden
              rounded-[10px]
              border
              border-[#d9e3db]
              bg-[#edf3ee]
              px-6
              py-9
              shadow-[0_7px_25px_rgba(25,55,72,0.04)]
              sm:px-9
              lg:px-12
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-20
                right-[-60px]
                -z-10
                h-72
                w-72
                rounded-full
                bg-[#dce7df]
                sm:right-[-20px]
              "
            />

            <div className="max-w-[640px]">
              <p
                className="
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#5d8a81]
                "
              >
                Let’s Begin
              </p>

              <h2
                className="
                  mt-2
                  font-display
                  text-3xl
                  text-[var(--navy)]
                  sm:text-4xl
                "
              >
                Have an Idea Worth Exploring?
              </h2>

              <p
                className="
                  mt-3
                  max-w-[550px]
                  text-xs
                  leading-6
                  text-[var(--muted)]
                "
              >
                A meaningful collaboration often begins with one
                thoughtful conversation.
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-3
                  min-[430px]:flex-row
                  min-[430px]:items-center
                "
              >
                <motion.a
                  href="#contact-form"
                  whileHover={{
                    y: -2,
                    boxShadow:
                      "0 10px 24px rgba(198, 104, 75, 0.25)",
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
                    text-xs
                    font-semibold
                    text-white
                    hover:bg-[#b95c40]
                  "
                >
                  Send an Enquiry
                </motion.a>

                <motion.a
                  href="/projects"
                  whileHover={{ x: 4 }}
                  className="
                    inline-flex
                    min-h-10
                    items-center
                    justify-center
                    gap-2
                    px-4
                    text-xs
                    font-semibold
                    text-[#5d8a81]
                  "
                >
                  View Projects
                  <span aria-hidden="true">→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}