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



import simpleProcessBg from
  "../assets/images/img/contact2.png";

import stayConnectedBg from
  "../assets/images/img/contact3.png";

import contactCtaBg from
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
    color: "#d56f50",
  },
  {
    icon: Target,
    title: "Align on Purpose",
    text: "Clarify the opportunity, priorities, and next steps.",
    color: "#5e9188",
  },
  {
    icon: Send,
    title: "Begin the Conversation",
    text: "Connect around a thoughtful path forward.",
    color: "#c79652",
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

    {/* ==================== SIMPLE PROCESS ==================== */}

<AnimatedSection
  className="
    relative
    isolate
    overflow-hidden
    border-y
    border-[#eee7de]
    bg-[#fcfaf6]
    bg-cover
    bg-center
    bg-no-repeat
    py-12

    sm:py-14

    lg:bg-right
    lg:py-16
  "
  style={{
    backgroundImage: `url(${simpleProcessBg})`,
  }}
>
  

  <Container>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="
        relative
        min-h-[270px]

        sm:min-h-[285px]

        lg:min-h-[290px]
      "
    >
      {/* Section heading */}

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 18,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        className="
          max-w-[560px]

          lg:max-w-[620px]
        "
      >
        <p
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#5d8b82]

            sm:text-[11px]
          "
        >
          A Simple Process
        </p>

        <h2
          className="
            mt-2
            font-display
            text-[29px]
            font-medium
            leading-[1.12]
            text-[#173c50]

            sm:text-[34px]

            lg:text-[38px]
          "
        >
          From First Message to
          <br />
          Meaningful Conversation
        </h2>
      </motion.div>

      {/* Process cards */}

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.1,
            },
          },
        }}
        className="
          mt-7
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2

          lg:mt-8
          lg:max-w-[76%]
          lg:grid-cols-3
          lg:gap-7

          xl:max-w-[78%]
        "
      >
        {processSteps.map(
          ({ icon: Icon, title, text, color }, index) => (
            <motion.article
              key={title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -5,
                borderColor: `${color}80`,
                boxShadow:
                  "0 14px 30px rgba(23,60,80,0.09)",
              }}
              className="
                group
                relative
                flex
                min-h-[135px]
                items-center
                gap-4
                rounded-[10px]
                border
                border-[#e1d8ce]
                bg-[#fffdf9]/95
                p-5
                shadow-[0_5px_18px_rgba(25,55,72,0.035)]
                backdrop-blur-[2px]

                sm:min-h-[145px]

                lg:min-h-[140px]
                lg:p-5

                xl:p-6
              "
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
                  border
                  bg-white
                  transition-transform
                  duration-300
                  group-hover:-rotate-6
                  group-hover:scale-110
                "
                style={{
                  borderColor: `${color}70`,
                }}
              >
                <Icon
                  size={31}
                  strokeWidth={1.35}
                  style={{ color }}
                />
              </span>

              {/* Text */}

              <div className="min-w-0">
                <h3
                  className="
                    font-display
                    text-[17px]
                    font-medium
                    leading-tight
                    text-[#243f4e]

                    xl:text-[18px]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[11px]
                    leading-[1.55]
                    text-[#6e716e]

                    xl:text-[12px]
                  "
                >
                  {text}
                </p>
              </div>

              {/* Desktop connector */}

              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="
                    absolute
                    left-full
                    top-1/2
                    z-20
                    hidden
                    h-px
                    w-7
                    -translate-y-1/2
                    bg-[#d78465]

                    lg:block
                  "
                >
                  <span
                    className="
                      absolute
                      right-1/2
                      top-1/2
                      h-2.5
                      w-2.5
                      -translate-y-1/2
                      translate-x-1/2
                      rounded-full
                      bg-[#d47555]
                      shadow-[0_0_0_3px_rgba(212,117,85,0.1)]
                    "
                  />
                </span>
              )}
            </motion.article>
          )
        )}

        {/* Keeps final card centred at tablet width */}

        <div className="hidden sm:block lg:hidden" />
      </motion.div>
    </motion.div>
  </Container>
</AnimatedSection>

      

   {/* ==================== STAY CONNECTED ==================== */}

<section
  className="
    relative
    isolate
    overflow-hidden
    border-y
    border-white/10
    bg-[#103b59]
    bg-cover
    bg-center
    bg-no-repeat

    md:bg-right
  "
  style={{
    backgroundImage: `url(${stayConnectedBg})`,
  }}
>


  <Container>
    <motion.div
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="
        flex
        min-h-[330px]
        items-center
        py-10

        sm:min-h-[300px]
        sm:py-11

        md:min-h-[270px]
        md:py-10

        lg:min-h-[275px]
        lg:py-12
      "
    >
      <div
        className="
          w-full
          max-w-[650px]

          md:max-w-[62%]

          lg:max-w-[680px]
        "
      >
        <motion.h2
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            font-display
            text-[30px]
            font-medium
            leading-tight
            text-white

            sm:text-[34px]

            lg:text-[38px]
          "
        >
          Stay Connected
        </motion.h2>

        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 18,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            mt-2
            max-w-[475px]
            text-[12px]
            leading-[1.65]
            text-white/80

            sm:text-[13px]

            lg:text-[14px]
          "
        >
          Follow professional updates, research conversations,
          <br className="hidden sm:block" />
          and new collaborations.
        </motion.p>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 18,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            mt-6
            grid
            grid-cols-1
            gap-3

            min-[430px]:grid-cols-2

            md:flex
            md:flex-wrap
          "
        >
          {[
            {
              icon: LinkedInIcon,
              label: "LinkedIn",
              href: "https://www.linkedin.com/",
              external: true,
            },
            {
              icon: ResearchIcon,
              label: "Research Profile",
              href: "/research",
            },
            {
              icon: ResearchIcon,
              label: "Publications",
              href: "/publications",
            },
            {
              icon: MediaIcon,
              label: "Media",
              href: "/media",
            },
          ].map(
            ({
              icon: Icon,
              label,
              href,
              external = false,
            }) => (
              <motion.a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={
                  external
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={`Open ${label}`}
                whileHover={{
                  y: -3,
                  scale: 1.015,
                  backgroundColor:
                    "rgba(255,255,255,0.12)",
                  borderColor:
                    "rgba(255,255,255,0.75)",
                  boxShadow:
                    "0 9px 22px rgba(0,0,0,0.16)",
                }}
                whileTap={{ scale: 0.97 }}
                className="
                  group
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-[5px]
                  border
                  border-white/45
                  bg-white/[0.025]
                  px-4
                  text-[11px]
                  font-semibold
                  text-white
                  shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]
                  backdrop-blur-sm
                  outline-none
                  transition-colors
                  duration-200
                  focus-visible:ring-4
                  focus-visible:ring-white/20

                  min-[430px]:justify-start

                  md:w-auto
                  md:min-w-[130px]

                  lg:px-5
                  lg:text-[12px]
                "
              >
                <span
                  className="
                    grid
                    h-7
                    w-7
                    shrink-0
                    place-items-center
                    text-white
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon size={26} />
                </span>

                <span>{label}</span>
              </motion.a>
            )
          )}
        </motion.div>

        <motion.p
          variants={{
            hidden: {
              opacity: 0,
              y: 12,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="
            mt-5
            text-[11px]
            leading-5
            text-white/65

            sm:text-xs
          "
        >
          Verified profile links can be added here.
        </motion.p>
      </div>
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

    

   {/* ==================== CTA SECTION ==================== */}<section className="bg-[#fcfaf6] pb-10 sm:pb-12 lg:pb-14">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -3,
        boxShadow: "0 12px 30px rgba(23,60,80,0.08)",
      }}
      className="
        group
        relative
        min-h-[215px]
        overflow-hidden
        rounded-[10px]
        border
        border-[#d4dfd6]
        bg-[#edf3ee]
        bg-no-repeat
        shadow-[0_5px_18px_rgba(23,60,80,0.035)]

        sm:min-h-[190px]

        lg:min-h-[176px]
      "
      style={{
        backgroundImage: `url(${contactCtaBg})`,
        backgroundPosition: "right center",
        backgroundSize: "auto 100%",
      }}
    >
     

 

      <div
        className="
          relative
          z-10
          flex
          min-h-[215px]
          items-center
          px-5
          py-7

          sm:min-h-[190px]
          sm:px-8
          sm:py-6

          md:px-10

          lg:min-h-[176px]
          lg:px-12
          lg:py-5

          xl:px-14
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="
            w-full
            max-w-[560px]

            sm:max-w-[520px]

            lg:max-w-[540px]
          "
        >
          <p
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#5d8a81]

              sm:text-[10px]
            "
          >
            Let’s Begin
          </p>

          <h2
            className="
              mt-1.5
              font-display
              text-[25px]
              font-medium
              leading-[1.1]
              text-[#173c50]

              sm:text-[29px]

              lg:text-[31px]
            "
          >
            Have an Idea Worth Exploring?
          </h2>

          <p
            className="
              mt-2
              max-w-[360px]
              text-[11px]
              leading-[1.55]
              text-[#676e6b]

              sm:text-xs
            "
          >
            A meaningful collaboration often begins
            <br className="hidden sm:block" />
            with one thoughtful conversation.
          </p>

          <div
            className="
              mt-4
              flex
              flex-col
              items-stretch
              gap-3

              min-[420px]:flex-row
              min-[420px]:items-center
            "
          >
            <motion.a
              href="#contact-form"
              whileHover={{
                y: -2,
                scale: 1.02,
                boxShadow:
                  "0 9px 22px rgba(198,104,75,0.28)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex
                h-10
                items-center
                justify-center
                rounded-[5px]
                bg-[#c9684b]
                px-6
                text-[11px]
                font-semibold
                text-white
                shadow-[0_4px_12px_rgba(198,104,75,0.18)]
                transition-colors
                duration-200
                hover:bg-[#b95d42]
                focus:outline-none
                focus-visible:ring-4
                focus-visible:ring-[#c9684b]/25

                min-[420px]:w-auto
              "
            >
              Send an Enquiry
            </motion.a>

            <motion.a
              href="/projects"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex
                h-10
                items-center
                justify-center
                gap-3
                rounded-[5px]
                px-5
                text-[11px]
                font-semibold
                text-[#416e67]
                transition-colors
                duration-200
                hover:bg-white/40
                hover:text-[#315c55]
                focus:outline-none
                focus-visible:ring-4
                focus-visible:ring-[#5d8a81]/20

                min-[420px]:w-auto
              "
            >
              View Projects

              <motion.span
                aria-hidden="true"
                className="text-base"
                animate={{ x: [0, 3, 0] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </Container>
</section>
    </main>
  );
}