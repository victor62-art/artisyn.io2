<<<<<<< HEAD
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { jobTitle, applicant } = body;
    if (!jobTitle || !applicant) {
      return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
    }

    const dataDir = path.join(process.cwd(), 'data');
    const dataPath = path.join(dataDir, 'applications.json');
    await fs.mkdir(dataDir, { recursive: true });

    let apps: any[] = [];
    try {
      const raw = await fs.readFile(dataPath, 'utf8');
      apps = JSON.parse(raw || '[]');
    } catch (e) {
      apps = [];
    }

    const duplicate = apps.find((a) => a.jobTitle === jobTitle && a.applicant === applicant);
    if (duplicate) {
      return new Response(JSON.stringify({ message: 'Duplicate application' }), { status: 409 });
    }

    const record = {
      id: `${Date.now()}`,
      jobTitle,
      applicant,
      payload: body,
      createdAt: new Date().toISOString(),
    };

    apps.push(record);
    await fs.writeFile(dataPath, JSON.stringify(apps, null, 2), 'utf8');

    return new Response(JSON.stringify(record), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'applications.json');
    const raw = await fs.readFile(dataPath, 'utf8');
    const apps = JSON.parse(raw || '[]');
    return new Response(JSON.stringify(apps), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

=======
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
      import { promises as fs } from 'fs';
      import path from 'path';

      export async function POST(req: Request) {
        try {
          const body = await req.json();
          const { jobTitle, applicant } = body;
          if (!jobTitle || !applicant) {
            return new Response(JSON.stringify({ message: 'Missing required fields' }), { status: 400 });
          }

          const dataDir = path.join(process.cwd(), 'data');
          const dataPath = path.join(dataDir, 'applications.json');
          await fs.mkdir(dataDir, { recursive: true });

          let apps: any[] = [];
          try {
            const raw = await fs.readFile(dataPath, 'utf8');
            apps = JSON.parse(raw || '[]');
          } catch (e) {
            apps = [];
          }

          const duplicate = apps.find((a) => a.jobTitle === jobTitle && a.applicant === applicant);
          if (duplicate) {
            return new Response(JSON.stringify({ message: 'Duplicate application' }), { status: 409 });
          }

          const record = {
            id: `${Date.now()}`,
            jobTitle,
            applicant,
            payload: body,
            createdAt: new Date().toISOString(),
          };

          apps.push(record);
          await fs.writeFile(dataPath, JSON.stringify(apps, null, 2), 'utf8');

          return new Response(JSON.stringify(record), { status: 201 });
        } catch (err) {
          return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
        }
      }

      export async function GET() {
        try {
          const dataPath = path.join(process.cwd(), 'data', 'applications.json');
          const raw = await fs.readFile(dataPath, 'utf8');
          const apps = JSON.parse(raw || '[]');
          return new Response(JSON.stringify(apps), { status: 200 });
        } catch (err) {
          return new Response(JSON.stringify([]), { status: 200 });
        }

      }
