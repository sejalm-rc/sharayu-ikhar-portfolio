import { BriefcaseBusiness, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[var(--navy-deep)] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-5 py-10 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1.4fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3"><span className="font-display text-4xl">SI</span><span className="font-display uppercase tracking-[0.16em]">Sharayu Ikhar</span></div>
          <p className="mt-2 text-xs text-white/65">Leadership · Research · Impact</p>
          <div className="mt-4 flex gap-3">
            {[BriefcaseBusiness, MessageCircle, Mail].map((Icon, index) => <span key={index} className="grid h-8 w-8 place-items-center rounded-full border border-white/25"><Icon size={15} /></span>)}
          </div>
        </div>
        <div className="flex flex-col gap-1.5 text-sm text-white/75">
          <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/research">Research</Link>
        </div>
        <div className="flex flex-col gap-1.5 text-sm text-white/75">
          <Link to="/publication">Publications</Link><Link to="/projects">Projects</Link><Link to="/media">Media</Link>
        </div>
        <div className="flex flex-col gap-1.5 text-sm text-white/75 md:items-end">
          <Link to="/achievement">Achievements</Link><Link to="/contact">Contact</Link>
          <p className="mt-3 inline-flex items-center gap-2"><Mail size={16} /> Official email to be added</p>
        </div>
      </div>
      <div className="border-t border-white/15 px-5 py-4 text-center text-xs text-white/60">© 2026 Sharayu Ikhar. All rights reserved.</div>
    </footer>
  );
}
