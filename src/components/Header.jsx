import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../assets/images/img/logo.png";

const navigation = [
  // ["Home", "/"],
  ["About", "/about"],
  ["Research", "/research"],
  ["Publication", "/publication"],
  ["Projects", "/projects"],
  ["Media", "/media"],
  ["Achievement", "/achievement"],
  // ["Contact", "/contact"],
];

function activeRoute(pathname, target) {
  if (target === "/") return pathname === "/";

  if (target === "/publication") {
    return pathname === "/publication" || pathname === "/publications";
  }

  if (target === "/achievement") {
    return pathname === "/achievement" || pathname === "/achievements";
  }

  return pathname === target;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menu after route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent page scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

// Close mobile navigation when switching to desktop view
useEffect(() => {
  function handleResize() {
    if (window.innerWidth >= 1280) {
      setOpen(false);
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee8df] bg-[var(--paper)]/95 shadow-[0_4px_18px_rgba(18,43,57,0.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1380px] items-center justify-between gap-5 px-4 sm:h-[78px] sm:px-6 lg:px-8 xl:h-[84px]">
        {/* ==================== LOGO ==================== */}
        <Link
          to="/"
          aria-label="Sharyu Ikhar home"
          className="group flex min-w-0 shrink-0 items-center"
        >
          <motion.img
            src={logo}
            alt="Sharyu Ikhar - Chief Operating Officer"
            className="h-[42px] w-auto max-w-[180px] object-contain transition-all duration-300 group-hover:brightness-105 sm:h-[48px] sm:max-w-[215px] xl:h-[54px] xl:max-w-[240px]"
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </Link>

        {/* ==================== DESKTOP NAVIGATION ==================== */}
        <nav
          className="hidden items-center gap-4 xl:flex 2xl:gap-6"
          aria-label="Primary navigation"
        >
          {navigation.map(([label, to]) => {
            const isActive = activeRoute(pathname, to);

            return (
              <NavLink
                key={to}
                to={to}
                className={`group/nav relative whitespace-nowrap px-0.5 py-2 text-[14.5px] font-medium tracking-[0.01em] transition-colors duration-300 2xl:text-[15px] ${
                  isActive
                    ? "text-[var(--navy-deep)]"
                    : "text-[#47515a] hover:text-[var(--coral)]"
                }`}
              >
                {label}

                {/* Hover underline */}
                {!isActive && (
                  <span className="absolute inset-x-1 bottom-1 h-[2px] origin-center scale-x-0 rounded-full bg-[var(--coral)] transition-transform duration-300 group-hover/nav:scale-x-100" />
                )}

                {/* Active underline */}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-1 bottom-1 h-[2px] rounded-full bg-[var(--coral)]"
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* ==================== HEADER ACTIONS ==================== */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <motion.div
            className="hidden sm:block"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/contact"
              className="inline-flex min-h-[42px] items-center justify-center rounded-[5px] border border-[var(--navy-deep)] px-4 py-2 text-[13px] font-semibold text-[var(--navy-deep)] transition-all duration-300 hover:border-[var(--coral)] hover:bg-[var(--coral)] hover:text-white hover:shadow-[0_8px_20px_rgba(202,104,72,0.22)] lg:px-5 lg:text-[14px]"
            >
              Let&apos;s Connect
            </Link>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileTap={{ scale: 0.92 }}
            className="grid h-11 w-11 place-items-center rounded-md border border-[#d9d2c8] text-[var(--navy-deep)] transition-all duration-300 hover:border-[var(--coral)] hover:bg-[var(--coral)] hover:text-white hover:shadow-md xl:hidden"
            aria-label="Open navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <Menu size={23} strokeWidth={1.8} />
          </motion.button>
        </div>
      </div>

     {/* ==================== MOBILE NAVIGATION ==================== */}
<AnimatePresence>
  {open && (
    <>
      {/* Overlay */}
      <motion.button
        type="button"
        aria-label="Close navigation menu"
        className="fixed inset-0 z-[60] bg-[#031d31]/45 backdrop-blur-[2px] xl:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <motion.nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className="
          fixed right-0 top-0 z-[70]
          flex h-[100dvh]
          w-[min(84vw,350px)]
          flex-col overflow-hidden
          bg-[var(--paper)]
          px-4 py-4
          shadow-[-16px_0_40px_rgba(3,29,49,0.18)]
          sm:px-5 sm:py-5
          xl:hidden
        "
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          duration: 0.32,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Logo and close button */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center"
            aria-label="Sharyu Ikhar home"
          >
            <img
              src={logo}
              alt="Sharyu Ikhar - Chief Operating Officer"
              className="h-[40px] w-auto max-w-[175px] object-contain sm:h-[44px] sm:max-w-[195px]"
            />
          </Link>

          <motion.button
            type="button"
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="
              grid h-10 w-10 shrink-0 place-items-center
              rounded-full border border-[#d9d2c8]
              bg-white text-[var(--navy-deep)]
              shadow-[0_4px_12px_rgba(3,29,49,0.05)]
              transition-colors duration-300
              hover:border-[var(--coral)]
              hover:bg-[var(--coral)]
              hover:text-white
            "
            onClick={() => setOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} strokeWidth={1.8} />
          </motion.button>
        </div>

        {/* Small heading */}
        <div className="mb-3 px-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--coral)]">
            Navigation
          </p>
        </div>

        {/* Mobile links */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {navigation.map(([label, to], index) => {
              const isActive = activeRoute(pathname, to);

              return (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.035,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    to={to}
                    onClick={() => setOpen(false)}
                    className={`
                      group relative flex min-h-[46px]
                      items-center justify-between
                      overflow-hidden rounded-[6px]
                      px-3 py-2
                      text-[15px] font-medium
                      tracking-[0.01em]
                      transition-all duration-300
                      ${
                        isActive
                          ? "bg-[#d97655]/10 pl-5 text-[var(--coral)]"
                          : "text-[#47515a] hover:bg-[#f4eee7] hover:pl-5 hover:text-[var(--navy-deep)]"
                      }
                    `}
                  >
                    {/* Active and hover indicator */}
                    <span
                      className={`
                        absolute bottom-2 left-0 top-2
                        w-[3px] rounded-r-full
                        bg-[var(--coral)]
                        transition-all duration-300
                        ${
                          isActive
                            ? "scale-y-100 opacity-100"
                            : "scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100"
                        }
                      `}
                    />

                    <span>{label}</span>

                    <span
                      className={`
                        h-[6px] w-[6px] rounded-full
                        bg-[var(--coral)]
                        transition-all duration-300
                        ${
                          isActive
                            ? "scale-100 opacity-100"
                            : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                        }
                      `}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          className="pt-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: 0.28,
          }}
        >
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                inline-flex min-h-[44px] w-full
                items-center justify-center
                rounded-[5px]
                bg-[var(--navy-deep)]
                px-4 py-2.5
                text-[14px] font-semibold text-white
                shadow-[0_8px_20px_rgba(3,29,49,0.14)]
                transition-all duration-300
                hover:bg-[var(--coral)]
                hover:shadow-[0_10px_24px_rgba(202,104,72,0.24)]
              "
            >
              Get in Touch
            </Link>
          </motion.div>

          <p className="mt-2.5 text-center text-[10px] tracking-[0.08em] text-[#7b8085]">
            CHIEF OPERATING OFFICER
          </p>
        </motion.div>
      </motion.nav>
    </>
  )}
</AnimatePresence>
    </header>
  );
}