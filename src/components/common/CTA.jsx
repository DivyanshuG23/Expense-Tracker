import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const handleStartTracking = () => {
    navigate("/register");
  };

  return (
    <section>
      {/* Premium Gold Glow */}
      <div id="cta" className="absolute left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#D6B36A]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-gradient-to-br from-[#101412] to-[#181D19] px-10 py-20 text-center shadow-[0_20px_70px_rgba(0,0,0,.45)]">

          {/* Badge */}
          <span className="rounded-full border border-[#D6B36A]/25 bg-[#D6B36A]/10 px-4 py-2 text-sm font-medium text-[#E4C982]">
            Start Your Journey
          </span>

          {/* Heading */}
          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-6xl">
            Take Control of
            <br />

            <span className="bg-gradient-to-r from-[#D6B36A] to-[#F0DFA6] bg-clip-text text-transparent">
              Your Finances Today
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#A7B0A8]">
            Track every expense, manage your budget and build better
            financial habits with a clean and beautifully designed
            experience.
          </p>

          {/* Button */}
          <div className="mt-10">

            <button
              type="button"
              onClick={handleStartTracking}
              className="
                rounded-2xl
                bg-[#D6B36A]
                px-8
                py-4
                text-lg
                font-semibold
                text-[#111510]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#E4C982]
                hover:shadow-[0_15px_40px_rgba(214,179,106,.25)]
              "
            >
              Start Tracking Free
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;