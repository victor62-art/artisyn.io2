import { NextResponse } from 'next/server';

export async function GET() {
  const activeJobs = [
    {
      id: "active_job_1",
      title: "Plumber",
      category: "Home Services",
      budget: "₦15,000 - ₦30,000",
      location: "Ibadan, Nigeria",
      shortDescription: "Fix leaking pipes and replace damaged bathroom fittings in a residential apartment.",
      urgency: "high",
      startedAt: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      id: "active_job_2",
      title: "Tailor",
      category: "Fashion & Tailoring",
      budget: "₦10,000 - ₦25,000",
      location: "Abeokuta, Nigeria",
      shortDescription: "Sew a complete set of custom native attire for an upcoming family event.",
      urgency: "medium",
      startedAt: new Date(Date.now() - 172800000).toISOString(),
    },
  ];

  return NextResponse.json({ jobs: activeJobs });
}
