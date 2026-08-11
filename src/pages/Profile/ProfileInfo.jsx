import {
  User,
  Mail,
  Phone,
  Briefcase,
  MapPin,
} from "lucide-react";

const ProfileInfo = ({ profile }) => {
  return (
    <div>

      {/* Header */}
      <div>
        <div>
          <h2 className="text-xl font-bold text-white">
            Personal Information
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            Basic account details
          </p>
        </div>

        <div className="h-10 w-1 rounded-full bg-[#D9B86C]"></div>
      </div>

      {/* Information */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">

        {/* Full Name */}
        <div className="group flex items-center gap-3 rounded-xl border border-transparent bg-[#151515] px-3 py-3 transition-all duration-300 hover:border-[#D9B86C]/40 hover:bg-[#1B1A17]">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9B86C]/10 group-hover:bg-[#D9B86C]/20">
            <User
              size={17}
              className="text-[#D9B86C]"
            />
          </div>

          <div>
            <p className="text-[11px] text-slate-500">
              Full Name
            </p>

            <h3 className="text-[15px] font-semibold text-white">
              {profile?.fullName || "Not added"}
            </h3>
          </div>

        </div>

        {/* Email */}
        <div className="group flex items-center gap-3 rounded-xl border border-transparent bg-[#151515] px-3 py-3 transition-all duration-300 hover:border-[#D9B86C]/40 hover:bg-[#1B1A17]">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9B86C]/10 group-hover:bg-[#D9B86C]/20">
            <Mail
              size={17}
              className="text-[#D9B86C]"
            />
          </div>

          <div className="overflow-hidden">

            <p className="text-[11px] text-slate-500">
              Email
            </p>

            <h3 className="truncate text-[15px] font-semibold text-white">
              {profile?.email || "Email not available"}
            </h3>

          </div>

        </div>

        {/* Phone */}
        <div className="group flex items-center gap-3 rounded-xl border border-transparent bg-[#151515] px-3 py-3 transition-all duration-300 hover:border-[#D9B86C]/40 hover:bg-[#1B1A17]">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9B86C]/10 group-hover:bg-[#D9B86C]/20">
            <Phone
              size={17}
              className="text-[#D9B86C]"
            />
          </div>

          <div>

            <p className="text-[11px] text-slate-500">
              Phone
            </p>

            <h3 className="text-[15px] font-semibold text-white">
              {profile?.phone || "Not added"}
            </h3>

          </div>

        </div>

        {/* Occupation */}
        <div className="group flex items-center gap-3 rounded-xl border border-transparent bg-[#151515] px-3 py-3 transition-all duration-300 hover:border-[#D9B86C]/40 hover:bg-[#1B1A17]">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9B86C]/10 group-hover:bg-[#D9B86C]/20">
            <Briefcase
              size={17}
              className="text-[#D9B86C]"
            />
          </div>

          <div>

            <p className="text-[11px] text-slate-500">
              Occupation
            </p>

            <h3 className="text-[15px] font-semibold text-white">
              {profile?.occupation || "Not added"}
            </h3>

          </div>

        </div>

        {/* Location */}
        <div className="group col-span-2 flex items-center gap-3 rounded-xl border border-transparent bg-[#151515] px-3 py-3 transition-all duration-300 hover:border-[#D9B86C]/40 hover:bg-[#1B1A17]">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D9B86C]/10 group-hover:bg-[#D9B86C]/20">
            <MapPin
              size={17}
              className="text-[#D9B86C]"
            />
          </div>

          <div>

            <p className="text-[11px] text-slate-500">
              Location
            </p>

            <h3 className="text-[15px] font-semibold text-white">
              {profile?.city || "Not added"}
            </h3>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProfileInfo;