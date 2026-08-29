import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Publication from "./pages/Publication";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import Achievement from "./pages/Achievement";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/publications" element={<Publication />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/media" element={<Media />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/achievements" element={<Achievement />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
