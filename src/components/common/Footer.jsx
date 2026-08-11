const Footer = () => {
  return (
    <footer>
      {/* Premium Gold Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D6B36A]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Top */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_2fr]">

          {/* Logo */}
          <div className="text-center lg:text-left">

            <h2 className="text-3xl font-black text-white">
              Expense
              <span className="text-[#D6B36A]">Flow</span>
            </h2>

            <p className="mx-auto mt-6 max-w-md leading-8 text-[#A7B0A8] lg:mx-0">
              Take control of your money with a modern expense
              tracking experience designed for students,
              professionals and businesses.
            </p>

          </div>

          {/* Right Grid */}
          <div className="grid w-full grid-cols-2 justify-items-center gap-y-10 sm:grid-cols-3 lg:grid-cols-3 lg:justify-items-start">

            {/* Product */}
            <div>

              <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-[0.18em] text-white lg:text-left">
                Product
              </h3>

              <div className="space-y-4">

                <a
                  href="#features"
                  className="block text-[#929B94] transition hover:text-[#D6B36A]"
                >
                  Features
                </a>

                <a
                  href="#dashboard"
                  className="block text-[#929B94] transition hover:text-[#D6B36A]"
                >
                  Dashboard
                </a>

                <a
                  href="#reviews"
                  className="block text-[#929B94] transition hover:text-[#D6B36A]"
                >
                  Reviews
                </a>

                <a
                  href="#cta"
                  className="block text-[#929B94] transition hover:text-[#D6B36A]"
                >
                  Get Started
                </a>

              </div>

            </div>

            {/* Company */}
            <div>

              <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-[0.18em] text-white lg:text-left">
                Company
              </h3>

              <div className="space-y-4">

                <p className="cursor-pointer text-[#929B94] transition hover:translate-x-1 hover:text-[#D6B36A]">
                  About
                </p>

                <p className="cursor-pointer text-[#929B94] transition hover:translate-x-1 hover:text-[#D6B36A]">
                  Support
                </p>

                <p className="cursor-pointer text-[#929B94] transition hover:translate-x-1 hover:text-[#D6B36A]">
                  Privacy
                </p>

                <p className="cursor-pointer text-[#929B94] transition hover:translate-x-1 hover:text-[#D6B36A]">
                  Terms
                </p>

              </div>

            </div>

            {/* Contact */}
            <div className="col-span-2 text-center sm:col-span-1 lg:text-left">

              <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
                Contact
              </h3>

              <a
                href="mailto:divyanshugangwar663@gmail.com?subject=ExpenseFlow%20Contact"
                className="block text-[#C5CCC6] transition hover:text-[#D6B36A]"
              >
                📧 divyanshugangwar663@gmail.com
              </a>

              <p className="mt-3 text-[#707A72]">
                📍 India
              </p>

            </div>

          </div>

        </div>

        {/* Social */}
        <div className="mt-16 border-t border-white/[0.06] pt-10">

          <div className="flex flex-wrap items-center justify-center gap-4">

            <a
              href="https://github.com/DivyanshuG23"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/[0.08] px-5 py-2 text-[#929B94] transition-all duration-300 hover:border-[#D6B36A]/50 hover:bg-[#D6B36A]/5 hover:text-[#D6B36A]"
            >
              GitHub  
            </a>

            <a
              href="https://www.linkedin.com/in/divyanshu-gangwar-831bb6346?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/[0.08] px-5 py-2 text-[#929B94] transition-all duration-300 hover:border-[#D6B36A]/50 hover:bg-[#D6B36A]/5 hover:text-[#D6B36A]"
            >
              LinkedIn
            </a>

            <a
              href="https://t.me/bmtik2007"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/[0.08] px-5 py-2 text-[#929B94] transition-all duration-300 hover:border-[#D6B36A]/50 hover:bg-[#D6B36A]/5 hover:text-[#D6B36A]"
            >
              Telegram
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/[0.06] pt-8 md:flex-row">

          <p className="text-center text-sm text-[#707A72]">
            © 2026 ExpenseFlow • Built with ❤️ by Divyanshu Gangwar
          </p>

          <div className="flex gap-6 text-sm">

            <p className="cursor-pointer text-[#707A72] transition hover:text-[#D6B36A]">
              Privacy
            </p>

            <p className="cursor-pointer text-[#707A72] transition hover:text-[#D6B36A]">
              Terms
            </p>

            <p className="cursor-pointer text-[#707A72] transition hover:text-[#D6B36A]">
              Cookies
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;