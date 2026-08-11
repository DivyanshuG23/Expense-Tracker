import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, googleLogin } from "../../services/authService";
import API from "../../services/api";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const navigate = useNavigate();

  // ==========================
  // Google Login
  // ==========================
  const handleGoogleLogin = async () => {
  try {
    setGoogleLoading(true);

    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);

    // Firebase ID Token
    const idToken = await result.user.getIdToken();

    // Send Firebase token to our backend
    const response = await API.post("/auth/google", {
      idToken,
    });

    alert(response.data.message);

    navigate("/dashboard");
  } catch (error) {
    console.log("Google Login Error:", error);

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
      "Google Login Failed"
    );
  } finally {
    setGoogleLoading(false);
  }
};
  // ==========================
  // Normal Login
  // ==========================
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser({
        email,
        password,
      });

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          error.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Heading */}

      <h2 className="text-4xl font-black text-white">
        Welcome Back 👋
      </h2>

      <p className="mt-3 text-[#A1A1AA]">
        Sign in to continue managing your finances.
      </p>

      {/* Form */}

      <form
        className="mt-8 space-y-5"
        autoComplete="off"
        onSubmit={handleLogin}
      >
        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#D4D4D8]">
            Email Address
          </label>

          <input
            type="email"
            name="login-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="off"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 placeholder:text-[#71717A] focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20"
          />
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#D4D4D8]">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="login-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="new-password"
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 pr-14 text-white outline-none transition-all duration-300 placeholder:text-[#71717A] focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20"
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

        {/* Remember */}

        <div className="flex items-center">
          <label className="flex items-center gap-2 text-sm text-[#A1A1AA]">
            <input
              type="checkbox"
              className="h-4 w-4 accent-[#D6B56D]"
            />

            Remember me
          </label>
        </div>

        {/* Login Button */}

        <button
          type="submit"
          disabled={loading || googleLoading}
          className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D6B56D] py-4 font-semibold text-[#111111] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C982] hover:shadow-[0_15px_40px_rgba(214,181,109,.20)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Signing In..." : "Sign In"}

          {!loading && (
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </button>
      </form>

      {/* Divider */}

      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10"></div>

        <span className="text-sm text-[#71717A]">
          OR
        </span>

        <div className="h-px flex-1 bg-white/10"></div>
      </div>

      {/* Google Button */}

      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={googleLoading || loading}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] py-4 font-medium text-white transition-all duration-300 hover:border-[#D6B56D]/30 hover:bg-white/[0.07] disabled:cursor-not-allowed disabled:opacity-70"
      >
        <FcGoogle size={20} />

        {googleLoading
          ? "Connecting to Google..."
          : "Continue with Google"}
      </button>

      {/* Footer */}

      <p className="mt-6 text-center text-sm text-[#A1A1AA]">
        Don't have an account?{" "}

        <Link
          to="/register"
          className="font-semibold text-[#D6B56D] transition hover:text-[#E4C982]"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;