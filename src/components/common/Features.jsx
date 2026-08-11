import {
  BarChart3,
  Wallet,
  Target,
  Brain,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "Visualize your spending with beautiful charts and monthly insights.",
  },
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Track every expense with categories, notes and real-time updates.",
  },
  {
    icon: Target,
    title: "Budget Planner",
    description:
      "Set monthly budgets and stay in control of your financial goals.",
  },
  {
    icon: Brain,
    title: "Smart Insights",
    description:
      "Understand your spending habits with meaningful financial insights.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "Protected with JWT authentication and secure data handling.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Enjoy a seamless experience across desktop, tablet and mobile.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-18 md:py-22" >
      <div className="mx-auto max-w-7xl px-6 py-10">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full border border-[#D6B36A]/25 bg-[#D6B36A]/10 px-4 py-2 text-sm font-medium text-[#E4C982]">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
            Everything You Need
            <br />
            To Master Your Finances
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#A7B0A8]">
            Powerful tools designed to help you track expenses,
            manage budgets, analyze spending patterns,
            and make smarter financial decisions.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-7 md:grid-cols-2 xl:grid-cols-3">

          {features.map(({ icon: Icon, title, description }) => (

            <div
              key={title}
              className="
                group
                flex
                h-full
                flex-col
                rounded-[28px]
                border
                border-white/[0.08]
                bg-[#151A17]
                p-7
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#D6B36A]/30
                hover:shadow-[0_20px_60px_rgba(214,179,106,.10)]
              "
            >

              {/* Icon */}
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-[#D6B36A]/15
                  bg-[#D6B36A]/10
                  transition-all
                  duration-300
                  group-hover:border-[#D6B36A]/30
                  group-hover:bg-[#D6B36A]/15
                "
              >
                <Icon
                  size={30}
                  className="text-[#D6B36A] transition-colors duration-300 group-hover:text-[#E4C982]"
                />
              </div>

              {/* Title */}
              <h3 className="mt-8 text-2xl font-bold text-white">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 leading-8 text-[#A7B0A8]">
                {description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;