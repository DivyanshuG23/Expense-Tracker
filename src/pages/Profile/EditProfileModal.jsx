import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { updateProfile } from "./profileService";

const EditProfileModal = ({ profile, onClose, onUpdated }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    occupation: "",
    city: "",
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (profile) {
      setFormData({
        fullName: profile.fullName || "",
        phone: profile.phone || "",
        occupation: profile.occupation || "",
        city: profile.city || "",
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return;
    }

    try {
      setSaving(true);
      setError("");

      const response = await updateProfile(formData);

      if (response.data.success) {
        onUpdated(response.data.user);
        onClose();
      }
    } catch (error) {
      console.log(error);

      setError(
        error.response?.data?.message ||
          "Failed to update profile"
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#171613] p-6 shadow-2xl">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-white">
            Edit Profile
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Update your personal information
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition hover:bg-[#D6B56D]/10 hover:text-[#D6B56D]"
        >
          <X size={20} />
        </button>

      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Full Name */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-white/10 bg-[#1F1D18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B56D]/50 focus:ring-2 focus:ring-[#D6B56D]/10"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Phone
          </label>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-white/10 bg-[#1F1D18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B56D]/50 focus:ring-2 focus:ring-[#D6B56D]/10"
          />
        </div>

        {/* Occupation */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            Occupation
          </label>

          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="e.g. MERN Stack Developer"
            className="w-full rounded-xl border border-white/10 bg-[#1F1D18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B56D]/50 focus:ring-2 focus:ring-[#D6B56D]/10"
          />
        </div>

        {/* City */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-slate-300">
            City
          </label>

          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            className="w-full rounded-xl border border-white/10 bg-[#1F1D18] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-[#D6B56D]/50 focus:ring-2 focus:ring-[#D6B56D]/10"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm text-rose-400">
            {error}
          </p>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-3">

          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-[#D6B56D]/10 hover:text-[#D6B56D] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-[#D6B56D] px-5 py-2.5 text-sm font-semibold text-[#0B0B0A] shadow-lg shadow-[#D6B56D]/20 transition hover:bg-[#E5C98A] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </form>

    </div>
  );
};

export default EditProfileModal;