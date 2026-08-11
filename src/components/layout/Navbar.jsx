import { Link } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const { scrollY } = useScroll();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (section) {
    const navbarHeight = 80;
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionPosition - navbarHeight,
      behavior: "smooth",
    });
  }

  closeMenu();
};

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#0B0B0A]/90 shadow-xl backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Main Navbar */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#D6B56D] to-[#B89550] shadow-[0_8px_30px_rgba(214,181,109,.25)] transition-transform duration-300 group-hover:scale-105">
            <span className="text-lg font-black text-[#0B0B0A]">
              ₹
            </span>
          </div>

          <div>
            <h2 className="text-xl font-black text-white">
              Expense
              <span className="text-[#D6B56D]">
                Flow
              </span>
            </h2>

            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
              Smart Finance
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">

          <button
            onClick={() => scrollToSection("features")}
            className="group relative text-[15px] font-medium text-slate-400 transition hover:text-white"
          >
            Features

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D6B56D] transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection("dashboard")}
            className="group relative text-[15px] font-medium text-slate-400 transition hover:text-white"
          >
            Dashboard

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D6B56D] transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection("reviews")}
            className="group relative text-[15px] font-medium text-slate-400 transition hover:text-white"
          >
            Reviews

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D6B56D] transition-all duration-300 group-hover:w-full" />
          </button>

          <button
            onClick={() => scrollToSection("cta")}
            className="group relative text-[15px] font-medium text-slate-400 transition hover:text-white"
          >
            CTA

            <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#D6B56D] transition-all duration-300 group-hover:w-full" />
          </button>

        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Login */}
          <Link
            to="/login"
            className="hidden text-sm font-medium text-slate-300 transition hover:text-[#D6B56D] md:block"
          >
            Login
          </Link>

          {/* Get Started */}
          <Link
            to="/register"
            className="hidden items-center gap-2 rounded-xl bg-[#D6B56D] px-5 py-2.5 font-semibold text-[#0B0B0A] shadow-[0_8px_25px_rgba(214,181,109,.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E5C98A] hover:shadow-[0_12px_30px_rgba(214,181,109,.25)] md:flex"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 text-white transition hover:bg-white/5 hover:text-[#D6B56D] lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#0B0B0A]/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-col px-6 py-6">

              <button
                onClick={() => scrollToSection("features")}
                className="py-3 text-left text-slate-300 transition hover:text-[#D6B56D]"
              >
                Features
              </button>

              <button
                onClick={() => scrollToSection("dashboard")}
                className="py-3 text-left text-slate-300 transition hover:text-[#D6B56D]"
              >
                Dashboard
              </button>

              <button
                onClick={() => scrollToSection("reviews")}
                className="py-3 text-left text-slate-300 transition hover:text-[#D6B56D]"
              >
                Reviews
              </button>

              <button
                onClick={() => scrollToSection("cta")}
                className="py-3 text-left text-slate-300 transition hover:text-[#D6B56D]"
              >
                CTA
              </button>

              <div className="my-4 border-t border-white/10" />

              <Link
                to="/login"
                onClick={closeMenu}
                className="py-3 text-slate-300 transition hover:text-[#D6B56D]"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center rounded-xl bg-[#D6B56D] py-3 font-semibold text-[#0B0B0A] transition hover:bg-[#E5C98A]"
              >
                Get Started
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;