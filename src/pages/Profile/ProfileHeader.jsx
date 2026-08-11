import { Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProfileHeader = ({ profile }) => {
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Unique key for current logged-in user
  const getStorageKey = () => {
    const userId = profile?.id || profile?._id || profile?.email;

    if (!userId) return null;

    return `expenseflow_profile_image_${userId}`;
  };

  // Load saved image
  useEffect(() => {
    const storageKey = getStorageKey();

    if (!storageKey) {
      setPreviewImage(null);
      return;
    }

    const savedImage = localStorage.getItem(storageKey);

    if (savedImage) {
      setPreviewImage(savedImage);
    } else {
      setPreviewImage(null);
    }
  }, [profile]);

  // Open file picker
  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  // Select image
  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Image validation
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      event.target.value = "";
      return;
    }

    // 5MB limit
    if (file.size > 5 * 1024 * 1024) {
      alert("Please select an image smaller than 5MB.");
      event.target.value = "";
      return;
    }

    const storageKey = getStorageKey();

    if (!storageKey) {
      alert("User information is not available.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const imageData = reader.result;

      // Save for this specific user
      localStorage.setItem(storageKey, imageData);

      // Immediately show image
      setPreviewImage(imageData);
    };

    reader.onerror = () => {
      alert("Unable to read this image.");
    };

    reader.readAsDataURL(file);

    // Allow selecting same image again
    event.target.value = "";
  };

  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:flex-row md:items-center">
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Profile Image */}
        {previewImage ? (
          <img
            src={previewImage}
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover shadow-lg ring-2 ring-[#D9B86C]/40"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#D9B86C] to-[#F0D58A] text-3xl font-bold text-white shadow-lg">
            {profile?.fullName?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}

        {/* Camera Button */}
        <button
          type="button"
          onClick={handleImageClick}
          aria-label="Change profile picture"
          className="absolute bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#D9B86C] text-white shadow-md transition hover:scale-105 hover:bg-[#C8A85D]"
        >
          <Camera size={18} />
        </button>
      </div>

      {/* User Info */}
      <div className="min-w-0 flex-1 text-center md:text-left">
        <h1 className="truncate text-2xl font-bold text-white">
          {profile?.fullName || "User"}
        </h1>

        <p className="mt-2 text-slate-400">
          {profile?.occupation || "Occupation not added"}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
          <span className="max-w-full truncate rounded-xl bg-[#151515] px-3 py-1.5 text-sm text-slate-300">
            📧 {profile?.email || "Email not available"}
          </span>

          <span className="rounded-xl bg-[#151515] px-3 py-1.5 text-sm text-slate-300">
            📱 {profile?.phone || "Phone not added"}
          </span>

          <span className="rounded-xl bg-[#151515] px-3 py-1.5 text-sm text-slate-300">
            📍 {profile?.city || "Location not added"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;