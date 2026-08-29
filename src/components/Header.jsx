import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  ["Home", "/"], ["About", "/about"], ["Research", "/research"],
  ["Publication", "/publication"], ["Projects", "/projects"], ["Media", "/media"],
  ["Achievement", "/achievement"], ["Contact", "/contact"],
];

function activeRoute(pathname, target) {
  if (target === "/") return pathname === "/";
  if (target === "/publication") return pathname === "/publication" || pathname === "/publications";
  if (target === "/achievement") return pathname === "/achievement" || pathname === "/achievements";
  return pathname === target;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee8df] bg-[var(--paper)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Sharayu Ikhar home">
          <span className="font-display text-[2.15rem] leading-none text-[var(--navy-deep)]">SI</span>
          <span className="hidden border-l border-[#cfc5b7] pl-3 font-display text-[0.92rem] uppercase tracking-[0.14em] text-[var(--navy-deep)] sm:inline">Sharayu Ikhar</span>
        </Link>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
          {navigation.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={`relative py-2 text-[0.78rem] transition-colors ${activeRoute(pathname, to) ? "text-[var(--navy-deep)]" : "text-[#47515a] hover:text-[var(--navy)]"}`}
            >
              {label}
              {activeRoute(pathname, to) && <motion.span layoutId="activeNav" className="absolute inset-x-0 -bottom-1 h-[2px] bg-[var(--coral)]" />}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-outline hidden min-h-10 px-5 py-2 sm:inline-flex">Let&apos;s Connect</Link>
          <button type="button" onClick={() => setOpen(true)} className="grid h-11 w-11 place-items-center rounded-md border border-[#d9d2c8] xl:hidden" aria-label="Open navigation menu" aria-expanded={open}>
            <Menu size={22} />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              className="fixed inset-0 top-[76px] z-40 bg-[#031d31]/40 xl:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed right-0 top-0 z-50 flex h-dvh w-[min(88vw,390px)] flex-col bg-[var(--paper)] p-7 shadow-2xl xl:hidden"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.28, ease: "easeOut" }}
              aria-label="Mobile navigation"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-2xl text-[var(--navy)]">Sharayu Ikhar</span>
                <button type="button" className="grid h-10 w-10 place-items-center rounded-md border border-[#d9d2c8]" onClick={() => setOpen(false)} aria-label="Close navigation menu"><X size={22} /></button>
              </div>
              <div className="flex flex-col">
                {navigation.map(([label, to]) => (
                  <Link key={to} to={to} className={`border-b border-[#ebe5dc] py-3.5 text-base ${activeRoute(pathname, to) ? "font-medium text-[var(--coral)]" : "text-[var(--navy)]"}`}>{label}</Link>
                ))}
              </div>
              <Link to="/contact" className="btn-primary mt-8 w-full">Get in Touch</Link>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
