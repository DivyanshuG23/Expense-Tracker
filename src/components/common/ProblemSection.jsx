import {
  BadgeIndianRupee,
  ChartNoAxesColumn,
  FileSpreadsheet,
  Wallet,
} from "lucide-react";

const problems = [
  {
    icon: Wallet,
    title: "Overspending",
    text: "Without tracking, small daily expenses quietly become big monthly costs.",
  },
  {
    icon: BadgeIndianRupee,
    title: "No Budget Planning",
    text: "Managing your salary becomes difficult without clear monthly goals.",
  },
  {
    icon: FileSpreadsheet,
    title: "Messy Excel Sheets",
    text: "Spreadsheets are hard to maintain and don't provide useful insights.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "No Visual Reports",
    text: "Raw numbers don't help you understand your spending habits.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-[#D6B36A]/20 bg-[#D6B36A]/10 px-4 py-2 text-sm font-medium text-[#D6B36A]">
            The Problem
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Still Managing Your Money Blindly?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#A7B0A8]">
            Many people earn well but still don't know where their money goes.
            Without clear insights, budgeting and saving become much harder than
            they should be.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {problems.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/[0.08] bg-[#151817] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#D6B36A]/40 hover:bg-[#181B19] hover:shadow-[0_20px_60px_rgba(214,179,106,.08)]"
            >

              {/* Icon */}
              <div className="mb-5 inline-flex rounded-xl border border-[#D6B36A]/10 bg-[#D6B36A]/10 p-3 transition-all duration-300 group-hover:border-[#D6B36A]/20 group-hover:bg-[#D6B36A]/15">
                <Icon className="h-6 w-6 text-[#D6B36A]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-3 leading-7 text-[#929B94]">
                {text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProblemSection;