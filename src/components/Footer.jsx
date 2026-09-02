import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

import logo from "../assets/images/img/foot.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubscribe = (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!normalizedEmail) return;

    const savedEmails = JSON.parse(
      localStorage.getItem("sharyuNewsletterSubscribers") || "[]",
    );

    const alreadySubscribed = savedEmails.includes(normalizedEmail);

    if (alreadySubscribed) {
      setSubscribeMessage("You are already subscribed.");
      setMessageType("already");
      return;
    }

    const updatedEmails = [...savedEmails, normalizedEmail];

    localStorage.setItem(
      "sharyuNewsletterSubscribers",
      JSON.stringify(updatedEmails),
    );

    setSubscribeMessage("Thank you for subscribing!");
    setMessageType("success");
    setEmail("");
  };

  const linkStyle =
    "w-fit text-[12px] text-white/70 transition duration-300 hover:translate-x-1 hover:text-[#e9a184]";

  return (
    <footer className="border-t border-white/15 bg-[#0B3D61] text-white">
      {/* ==================== MAIN FOOTER ==================== */}
      <div
        className="
          mx-auto
          grid
          w-[min(1120px,calc(100%-32px))]
          gap-8
          py-6

          sm:w-[min(1120px,calc(100%-48px))]
          sm:grid-cols-2
          sm:py-6

          lg:grid-cols-[1.45fr_0.85fr_1.15fr_1.35fr]
          lg:gap-0
        "
      >
        {/* ==================== LOGO AND INTRODUCTION ==================== */}
        <div className="lg:pr-9">
          <Link to="/" aria-label="Sharyu Ikhar home" className="inline-flex">
            <img
              src={logo}
              alt="Sharyu Ikhar Chief Operating Officer"
              className="
                h-auto
                w-[185px]
                object-contain
                object-left
                transition-transform
                duration-300
                hover:scale-[1.02]
                sm:w-[205px]
              "
            />
          </Link>

          <p className="mt-5 max-w-[290px] text-[12px] leading-[1.8] text-white/70">
            Committed to building meaningful partnerships, strengthening
            research ecosystems, and creating sustainable impact through
            leadership and innovation.
          </p>

          {/* ==================== SOCIAL LINKS ==================== */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="
      group
      grid
      h-9
      w-9
      place-items-center
      rounded-full
      border
      border-white/35
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#bd6448]
      hover:bg-[#bd6448]
      hover:shadow-[0_6px_15px_rgba(189,100,72,0.22)]
    "
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[17px] w-[17px] fill-current"
              >
                <path d="M6.5 8.3H3.2V19h3.3V8.3ZM4.85 3a1.92 1.92 0 1 0 0 3.84A1.92 1.92 0 0 0 4.85 3ZM20.8 12.87c0-3.22-1.72-4.72-4.02-4.72-1.85 0-2.68 1.02-3.14 1.73V8.3h-3.3V19h3.3v-5.3c0-1.4.27-2.76 2.01-2.76 1.71 0 1.73 1.61 1.73 2.85V19h3.3l.12-6.13Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="
      group
      grid
      h-9
      w-9
      place-items-center
      rounded-full
      border
      border-white/35
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#bd6448]
      hover:bg-[#bd6448]
      hover:shadow-[0_6px_15px_rgba(189,100,72,0.22)]
    "
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[18px] w-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />

                <circle cx="12" cy="12" r="4.1" />

                <circle
                  cx="17.4"
                  cy="6.7"
                  r="0.9"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="
      group
      grid
      h-9
      w-9
      place-items-center
      rounded-full
      border
      border-white/35
      text-white
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#bd6448]
      hover:bg-[#bd6448]
      hover:shadow-[0_6px_15px_rgba(189,100,72,0.22)]
    "
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-[18px] w-[18px] fill-current"
              >
                <path d="M13.6 21v-8h2.7l.4-3.1h-3.1V7.91c0-.9.25-1.51 1.56-1.51h1.66V3.62a22.2 22.2 0 0 0-2.42-.12c-2.4 0-4.04 1.46-4.04 4.15V9.9H7.65V13h2.71v8h3.24Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ==================== QUICK LINKS ==================== */}
        <div
          className="
            border-white/15
            sm:border-l
            sm:pl-7
            lg:px-9
          "
        >
          <h2 className="font-[Georgia,serif] text-[15px] font-semibold text-white">
            Quick Links
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            <Link to="/about" className={linkStyle}>
              About Me
            </Link>

            <Link to="/research" className={linkStyle}>
              Research
            </Link>

            <Link to="/publication" className={linkStyle}>
              Publications
            </Link>

            <Link to="/projects" className={linkStyle}>
              Projects
            </Link>

            <Link to="/media" className={linkStyle}>
              Media
            </Link>

            <Link to="/achievement" className={linkStyle}>
              Achievements
            </Link>
          </div>
        </div>

        {/* ==================== CONTACT INFORMATION ==================== */}
        <div
          className="
            border-white/15
            lg:border-l
            lg:px-9
          "
        >
          <h2 className="font-[Georgia,serif] text-[15px] font-semibold text-white">
            Contact Info
          </h2>

          <div className="mt-5 space-y-4">
            <a
              href="mailto:official-email@example.com"
              className="group flex items-start gap-3 text-[12px] text-white/70"
            >
              <Mail
                size={16}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-[#bd6448]"
              />

              <span className="break-all transition group-hover:text-[#bd6448]">
                Official email to be added
              </span>
            </a>

            <a
              href="tel:+910000000000"
              className="group flex items-center gap-3 text-[12px] text-white/70"
            >
              <Phone
                size={16}
                strokeWidth={1.8}
                className="shrink-0 text-[#bd6448]"
              />

              <span className="transition group-hover:text-[#bd6448]">
                Official number to be added
              </span>
            </a>

            <div className="flex items-center gap-3 text-[12px] text-white/70">
              <MapPin
                size={16}
                strokeWidth={1.8}
                className="shrink-0 text-[#ec6941]"
              />

              <span>Nagpur, Maharashtra, India</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="
              group
              mt-6
              inline-flex
              h-8
              items-center
              justify-center
              gap-3
              rounded-[4px]
              bg-[#d46d4d]
              px-5
              text-[12px]
              font-semibold
              text-white
              shadow-[0_5px_14px_rgba(189,100,72,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-white
              hover:text-[#0B3D61]
              hover:shadow-[0_8px_20px_rgba(9,36,59,0.2)]
            "
          >
            Let&apos;s Connect
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* ==================== NEWSLETTER ==================== */}
        <div
          className="
            border-white/15
            sm:border-l
            sm:pl-7
            lg:px-9
            lg:pr-0
          "
        >
          <h2 className="font-[Georgia,serif] text-[15px] font-semibold text-white">
            Stay Updated
          </h2>

          <p className="mt-5 max-w-[270px] text-[12px] leading-[1.75] text-white/70">
            Subscribe to receive the latest updates on leadership, research,
            publications, and professional initiatives.
          </p>

          <form onSubmit={handleSubscribe} className="mt-5" noValidate>
            <div
              className="
      flex
      h-10
      items-center
      rounded-[4px]
      border
      border-white/30
      bg-white
      px-4
      transition-colors
      duration-300
      focus-within:border-[#8faabd]
    "
            >
              <input
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubscribeMessage("");
                  setMessageType("");
                }}
                placeholder="Your email address"
                required
                aria-label="Email address"
                className="
        h-full
        min-w-0
        flex-1
        appearance-none
        border-0
        bg-transparent
        text-[12px]
        text-[#09243b]
        outline-none
        ring-0
        placeholder:text-[#8a9298]
        focus:border-0
        focus:outline-none
        focus:ring-0
        focus-visible:outline-none
        invalid:shadow-none
      "
              />

              <Mail
                size={15}
                strokeWidth={1.7}
                className="shrink-0 text-[#8a9298]"
              />
            </div>

            <button
              type="submit"
              className="
      group
      mt-4
      inline-flex
      h-8
      items-center
      justify-center
      gap-2
      rounded-[4px]
      bg-[#d46d4d]
      px-5
      text-[12px]
      font-semibold
      text-white
      transition-all
      duration-300
      hover:-translate-y-0.5
      hover:bg-white
      hover:text-[#0B3D61]
      hover:shadow-[0_7px_18px_rgba(9,36,59,0.18)]
    "
            >
              Subscribe
              <ExternalLink
                size={14}
                className="
        transition-transform
        duration-300
        group-hover:translate-x-0.5
        group-hover:-translate-y-0.5
      "
              />
            </button>

            {subscribeMessage && (
              <p
                role="status"
                className={`mt-3 text-[11px] font-medium ${
                  messageType === "success"
                    ? "text-[#b9e8c0]"
                    : "text-[#ffd5a6]"
                }`}
              >
                {subscribeMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* ==================== COPYRIGHT ==================== */}
      {/* <div className="border-t border-white/15">
        <div
          className="
            mx-auto
            flex
            w-[min(1120px,calc(100%-32px))]
            flex-col
            items-center
            justify-between
            gap-2
            py-4
            text-center
            text-[11px]
            text-white/60

            sm:w-[min(1120px,calc(100%-48px))]
            sm:flex-row
            sm:text-left
          "
        >
          <p>© 2026 Sharyu Ikhar. All rights reserved.</p>

          <p>Leadership · Research · Impact</p>
        </div>
      </div> */}
    </footer>
  );
}
