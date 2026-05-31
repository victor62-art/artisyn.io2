import { NextResponse } from 'next/server';

export async function GET() {
  // Mock applications data
  const applications = [
    {
      id: "app_1",
      jobId: "job_1",
      jobTitle: "Senior Smart Contract Developer",
      company: "DeFi Protocol",
      state: "In Review",
      appliedAt: "2026-05-20T10:00:00Z",
      updatedAt: "2026-05-25T14:30:00Z"
    },
    {
      id: "app_2",
      jobId: "job_2",
      jobTitle: "Frontend Web3 Engineer",
      company: "NFT Marketplace",
      state: "Interviewing",
      appliedAt: "2026-05-15T09:00:00Z",
      updatedAt: "2026-05-28T16:45:00Z"
    },
    {
      id: "app_3",
      jobId: "job_3",
      jobTitle: "Fullstack Rust Developer",
      company: "Layer 1 Foundation",
      state: "Applied",
      appliedAt: "2026-05-29T11:20:00Z",
      updatedAt: "2026-05-29T11:20:00Z"
    }
  ];

  return NextResponse.json({ applications });
}
