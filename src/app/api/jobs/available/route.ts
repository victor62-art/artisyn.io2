import { NextResponse } from 'next/server';

export async function GET() {
  const availableJobs = [
    {
      id: "job_1",
      title: "Plumber",
      category: "Home Services",
      budget: "₦15,000 - ₦30,000",
      location: "Ibadan, Nigeria",
      shortDescription: "Fix leaking pipes and replace damaged bathroom fittings in a residential apartment.",
      urgency: "high",
      postedAt: new Date().toISOString(),
    },
    {
      id: "job_2",
      title: "Tailor",
      category: "Fashion & Tailoring",
      budget: "₦10,000 - ₦25,000",
      location: "Abeokuta, Nigeria",
      shortDescription: "Sew a complete set of custom native attire for an upcoming family event.",
      urgency: "medium",
      postedAt: new Date(Date.now() - 3600000).toISOString(),
    },
    {
      id: "job_3",
      title: "Mechanic",
      category: "Auto Repair",
      budget: "₦20,000 - ₦50,000",
      location: "Lagos, Nigeria",
      shortDescription: "Diagnose engine knocking sound and service a Toyota Corolla.",
      urgency: "high",
      postedAt: new Date(Date.now() - 7200000).toISOString(),
    },
    {
      id: "job_4",
      title: "Electrician",
      category: "Home Services",
      budget: "₦12,000 - ₦35,000",
      location: "Akure, Nigeria",
      shortDescription: "Fix faulty wiring and install new power sockets in a two-bedroom flat.",
      urgency: "low",
      postedAt: new Date(Date.now() - 10800000).toISOString(),
    },
  ];

  return NextResponse.json({ jobs: availableJobs });
}
