import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";
import ProfileHeader from "./ProfileHeader";
import AccountStats from "./AccountStats";
import ProfileInfo from "./ProfileInfo";
import EditProfileModal from "./EditProfileModal";

import { getProfile } from "./profileService";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);

  // ==========================
  // Fetch Profile
  // ==========================
  const fetchProfile = async () => {
    try {
      const response = await getProfile();

      setProfile(response.data.user);
    } catch (error) {
      console.log("Failed to fetch profile:", error);
    } finally {
      setLoading(false);
    }
  };

  // ==========================
  // Initial Load
  // ==========================
  useEffect(() => {
    fetchProfile();
  }, []);

  // ==========================
  // Profile Updated
  // ==========================
  const handleProfileUpdated = (updatedUser) => {
    setProfile(updatedUser);
  };

  // ==========================
  // Loading
  // ==========================
  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-slate-400">Loading Profile...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      {/* Heading */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-3xl font-black text-white">
          Profile
        </h1>

        <p className="mt-1 text-slate-400">
          Manage your personal information and account settings.
        </p>
      </div>

      {/* Profile Header */}
      <ProfileHeader profile={profile} />

      {/* Edit Button */}
      <div className="mt-5 flex justify-center md:justify-end">
        <button
          type="button"
          onClick={() => setShowEditModal(true)}
          className="rounded-xl bg-[#D9B86C] px-5 py-2.5 text-sm font-semibold text-[#0B0B0A] shadow-lg shadow-[#D9B86C]/20 transition hover:bg-[#F0D58A]"
        >
          Edit Profile
        </button>
      </div>

      {/* Account Stats */}
      <div className="mt-5">
        <AccountStats />
      </div>

      {/* Profile Info */}
      <div className="mt-5">
        <ProfileInfo profile={profile} />
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && profile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <EditProfileModal
            profile={profile}
            onClose={() => setShowEditModal(false)}
            onUpdated={handleProfileUpdated}
          />
        </div>
      )}
    </DashboardLayout>
  );
};

export default Profile;