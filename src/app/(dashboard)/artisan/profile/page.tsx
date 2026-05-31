import { ProfileIdentitySection } from "@/components/artisan/profile-identity-section"
import { ProfileSkillsSection } from "@/components/artisan/profile-skills-section"
import { ProfileLocationSection } from "@/components/artisan/profile-location-section"
import { PortfolioMediaManager } from "@/components/artisan/portfolio-media-manager"

// Mock data — replace with real data fetching once API is available
const mockProfile = {
  identity: {
    fullName: "Samuel Adeyemi",
    email: "samuel@example.com",
    phone: "+234 800 000 0000",
  },
  skills: {
    skillCategory: "Carpentry",
    yearsOfExperience: "3-5 years",
    bio: "Experienced carpenter specialising in custom furniture and home renovations.",
  },
  location: {
    state: "Lagos",
    city: "Ikeja",
    address: "",
  },
}

export default function ProfilePage() {
  return (
    <div className="w-full max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        <p className="text-sm text-gray-500 mt-1">
          Keep your profile up to date so clients can find and trust you.
        </p>
      </div>
      <div className="space-y-6">
        <ProfileIdentitySection initialData={mockProfile.identity} />
        <ProfileSkillsSection initialData={mockProfile.skills} />
        <ProfileLocationSection initialData={mockProfile.location} />
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <PortfolioMediaManager />
        </div>
      </div>
    </div>
  )
}
