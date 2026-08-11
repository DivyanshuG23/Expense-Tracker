const Testimonials = () => {
  return (
    <section id="reviews" className="relative py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D6B56D]/5 blur-[140px]" />

      {/* Heading */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-[#D6B56D]/20 bg-[#D6B56D]/10 px-4 py-2 text-sm font-medium text-[#E5C98A]">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Loved by People Who
            <br />
            Track Their Money Wisely
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            A clean experience designed to make managing money
            effortless, organized and stress free.
          </p>

        </div>

        {/* Testimonials Cards */}
        <div className="mt-16 grid gap-7 md:grid-cols-3">

          {/* Card 1 */}
          <div className="group rounded-[28px] border border-white/10 bg-[#11110F]/80 p-7 shadow-[0_15px_50px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D6B56D]/30 hover:shadow-[0_20px_60px_rgba(214,181,109,.08)]">

            <div className="flex items-center gap-1 text-[#D6B56D]">
              ★★★★★
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              "Finally an expense tracker that feels modern, fast and
              incredibly easy to use. Everything is exactly where I expect
              it to be."
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D6B56D] text-lg font-bold text-[#0B0B0A]">
                R
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Rahul Sharma
                </h4>

                <p className="text-sm text-slate-500">
                  Software Engineer
                </p>
              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div className="group rounded-[28px] border border-white/10 bg-[#11110F]/80 p-7 shadow-[0_15px_50px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-[0_20px_60px_rgba(52,211,153,.08)]">

            <div className="flex items-center gap-1 text-[#D6B56D]">
              ★★★★★
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              "The dashboard is beautiful and gives me a clear overview
              of my finances without feeling overwhelming."
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-lg font-bold text-[#07110C]">
                P
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Priya Verma
                </h4>

                <p className="text-sm text-slate-500">
                  UI Designer
                </p>
              </div>

            </div>
          </div>

          {/* Card 3 */}
          <div className="group rounded-[28px] border border-white/10 bg-[#11110F]/80 p-7 shadow-[0_15px_50px_rgba(0,0,0,.25)] transition-all duration-300 hover:-translate-y-2 hover:border-[#D6B56D]/30 hover:shadow-[0_20px_60px_rgba(214,181,109,.08)]">

            <div className="flex items-center gap-1 text-[#D6B56D]">
              ★★★★★
            </div>

            <p className="mt-5 leading-7 text-slate-300">
              "Clean UI, smooth animations and a professional experience.
              It genuinely feels like a premium finance product."
            </p>

            <div className="mt-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D6B56D] text-lg font-bold text-[#0B0B0A]">
                A
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Aman Gupta
                </h4>

                <p className="text-sm text-slate-500">
                  Product Manager
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;