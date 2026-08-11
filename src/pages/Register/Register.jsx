import LoginIllustration from "../Login/LoginIllustration";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0A]">

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-12 px-6 py-10 lg:px-8">

        {/* Left Illustration */}
        <div className="hidden lg:block">
          <LoginIllustration />
        </div>

        {/* Register Form */}
        <div className="w-full lg:w-auto">
          <RegisterForm />
        </div>

      </div>

    </section>
  );
};

export default Register;