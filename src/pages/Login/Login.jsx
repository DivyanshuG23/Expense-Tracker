import LoginForm from "./LoginForm";
import LoginIllustration from "./LoginIllustration";

const Login = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080A08]">

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        {/* Champagne Gold Glow */}
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-amber-300/8 blur-[180px]" />

        {/* Emerald Glow */}
        <div className="absolute bottom-10 left-20 h-72 w-72 rounded-full bg-emerald-500/6 blur-[120px]" />

        {/* Warm Gold Glow */}
        <div className="absolute right-20 top-24 h-72 w-72 rounded-full bg-yellow-400/5 blur-[120px]" />

      </div>

      {/* Content */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center gap-16 px-6 py-10 lg:justify-between lg:px-8">

        {/* Left Illustration
            Hidden on mobile/tablet
            Visible on large screens
        */}

        <div className="hidden lg:block">
          <LoginIllustration />
        </div>

        {/* Login Form */}

        <div className="w-full max-w-md">
          <LoginForm />
        </div>

      </div>

    </section>
  );
};

export default Login;