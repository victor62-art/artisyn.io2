import Image from "next/image";
import { BadgeCheck, BriefcaseBusiness, MapPin, ShieldCheck, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

export type PublicArtisanProfile = {
  id: string;
  name: string;
  category: string;
  location: string;
  image: string;
  bio: string;
  rating: number;
  reviewCount: number;
  completedJobs: number;
  responseTime: string;
  hourlyRate: number;
  yearsOfExperience: number;
  skills: string[];
  verified: boolean;
  availability: string;
};

type ProfileSectionProps = {
  artisan: PublicArtisanProfile;
};

export function PublicProfileHeroSection({ artisan }: ProfileSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[280px_1fr] md:py-14">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-[#F1F5F9]">
          <Image
            alt={`${artisan.name}, ${artisan.category}`}
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 280px"
            src={artisan.image}
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-sm font-medium text-[#605DEC]">
              {artisan.category}
            </span>
            {artisan.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#ECFDF5] px-3 py-1 text-sm font-medium text-[#047857]">
                <ShieldCheck className="size-4" />
                Verified
              </span>
            )}
          </div>

          <h1 className="mt-5 flex items-center gap-2 text-4xl font-bold text-[#262626]">
            {artisan.name}
            {artisan.verified && <BadgeCheck className="size-6 text-[#605DEC]" />}
          </h1>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#64748B]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              {artisan.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Star className="size-4 fill-yellow-500 text-yellow-500" />
              {artisan.rating.toFixed(1)} ({artisan.reviewCount} reviews)
            </span>
            <span className="inline-flex items-center gap-2">
              <BriefcaseBusiness className="size-4" />
              {artisan.completedJobs} completed jobs
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#475569]">
            {artisan.bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-xl bg-[#605DEC] px-6 hover:bg-[#605DEC]/90">
              Hire artisan
            </Button>
            <Button className="rounded-xl border-[#E2E8F0]" variant="outline">
              Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PublicProfileStatsSection({ artisan }: ProfileSectionProps) {
  const stats = [
    { label: "Hourly rate", value: `$${artisan.hourlyRate}/hr` },
    { label: "Experience", value: `${artisan.yearsOfExperience}+ years` },
    { label: "Response time", value: artisan.responseTime },
    { label: "Availability", value: artisan.availability },
  ];

  return (
    <section className="border-y border-[#E2E8F0] bg-[#F8FAFC]">
      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div className="bg-white p-5" key={stat.label}>
            <p className="text-sm text-[#64748B]">{stat.label}</p>
            <p className="mt-2 text-xl font-semibold text-[#262626]">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function PublicProfileAboutSection({ artisan }: ProfileSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold text-[#262626]">About the artisan</h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-[#475569]">
          {artisan.bio}
        </p>

        <div className="mt-8">
          <h3 className="text-base font-semibold text-[#262626]">Skills</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {artisan.skills.map((skill) => (
              <span
                className="rounded-full bg-[#F1F5F9] px-3 py-1.5 text-sm text-[#475569]"
                key={skill}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
