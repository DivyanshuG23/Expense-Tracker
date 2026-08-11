import { UserPlus, Wallet, BarChart3 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create Your Account",
    description:
      "Sign up securely and set up your personal finance workspace in less than a minute.",
  },
  {
    number: "02",
    icon: Wallet,
    title: "Track Every Transaction",
    description:
      "Add your income and expenses, organize them into categories and stay on top of your money.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Analyze & Grow",
    description:
      "Understand your spending habits with beautiful analytics and smarter financial insights.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6B56D]/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#D6B56D]/20 bg-[#D6B56D]/10 px-4 py-2 text-sm font-medium text-[#E2C98A]">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            How ExpenseFlow Works
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A8A39A]">
            Start tracking your finances in just three simple steps.
            No complicated setup. Just a smooth experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {steps.map(({ number, icon: Icon, title, description }) => (
            <div
              key={number}
              className="group relative rounded-[28px] border border-white/10 bg-[#11110F]/80 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D6B56D]/40 hover:shadow-[0_20px_60px_rgba(214,181,109,0.12)]"
            >
              {/* Top */}
              <div className="flex items-center justify-between">
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D6B56D]/10 bg-[#D6B56D]/10 transition-all duration-300 group-hover:border-[#D6B56D]/20 group-hover:bg-[#D6B56D]/15">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#D6B56D] transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Number */}
                <span className="text-5xl font-black text-[#D6B56D]/10 transition-colors duration-300 group-hover:text-[#D6B56D]/20">
                  {number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-8 text-[#A8A39A]">
                {description}
              </p>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#D6B56D]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;