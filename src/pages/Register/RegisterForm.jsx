import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  registerUser,
  googleLogin,
} from "../../services/authService";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser({
        fullName: name,
        email,
        password,
      });

      alert(response.data.message);

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Google Register
  // ==========================
  const handleGoogleRegister = async () => {
    try {
      setGoogleLoading(true);

      const provider = new GoogleAuthProvider();

      const result = await signInWithPopup(auth, provider);

      const idToken = await result.user.getIdToken();

      const response = await googleLogin(idToken);

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      console.log("Google Register Error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        return;
      }

      if (error.code === "auth/popup-blocked") {
        alert("Please allow popups for this website.");
        return;
      }

      alert(
        error.response?.data?.message ||
          error.message ||
          "Google Registration Failed"
      );
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div>
      {/* Heading */}

      <h2 className="text-[30px] font-black leading-none text-white">
        {loading ? "Creating..." : "Create Account"}
      </h2>

      <p className="mt-1.5 text-[13px] leading-5 text-[#A1A1AA]">
        Join ExpenseFlow and start tracking smarter.
      </p>

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="mt-4 space-y-2.5"
      >
        {/* Full Name */}

        <div>
          <label className="mb-1 block text-[13px] font-medium text-[#D4D4D8]">
            Full Name
          </label>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="John Doe"
            autoComplete="off"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-white outline-none transition placeholder:text-[#71717A] focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-1 block text-[13px] font-medium text-[#D4D4D8]">
            Email
          </label>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            autoComplete="off"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 text-white outline-none transition placeholder:text-[#71717A] focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20"
          />
        </div>

        {/* Password */}

        <div>
          <label className="mb-1 block text-[13px] font-medium text-[#D4D4D8]">
            Password
          </label>

          <div className="relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              autoComplete="new-password"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 pr-14 text-white outline-none transition placeholder:text-[#71717A] focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#71717A] transition hover:text-[#D6B56D]"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="mb-1 block text-[13px] font-medium text-[#D4D4D8]">
            Confirm Password
          </label>

          <div className="relative">
            <input
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              type={
                showConfirmPassword ? "text" : "password"
              }
              placeholder="••••••••"
              autoComplete="new-password"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-2.5 pr-14 text-white outline-none transition placeholder:text-[#71717A] focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-5 top-1/2 -translate-y-1/2 text-[#71717A] transition hover:text-[#D6B56D]"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Register Button */}

        <button
          type="submit"
          disabled={loading || googleLoading}
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D6B56D] py-2.5 font-semibold text-[#111111] shadow-[0_10px_30px_rgba(214,181,109,.15)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E4C982] hover:shadow-[0_15px_40px_rgba(214,181,109,.20)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Creating..." : "Create Account"}

          {!loading && (
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </button>
      </form>

      {/* Divider */}

      <div className="my-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/10"></div>

        <span className="text-[13px] text-[#71717A]">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10"></div>
      </div>

      {/* Google Button */}

      <button
        type="button"
        onClick={handleGoogleRegister}
        disabled={loading || googleLoading}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] py-2.5 text-white transition-all duration-300 hover:border-[#D6B56D]/30 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <FcGoogle size={20} />

        {googleLoading
          ? "Connecting to Google..."
          : "Continue with Google"}
      </button>

      {/* Bottom */}

      <p className="mt-4 text-center text-[13px] text-[#A1A1AA]">
        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-[#D6B56D] transition hover:text-[#E4C982]"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;