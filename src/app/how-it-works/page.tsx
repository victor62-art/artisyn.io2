import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "How It Works | Artisyn",
  description:
    "Discover how Artisyn connects clients with skilled local artisans — from discovery to review, powered by Stellar.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

const CLIENT_STEPS = [
  {
    step: "01",
    title: "Discover",
    description:
      "Browse community-curated listings of verified local artisans in your area. Filter by skill, rating, location, and availability to find the perfect match for your project.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Hire",
    description:
      "Reach out directly and agree on terms. Once confirmed, funds are held securely in a Stellar smart contract escrow — so both sides are protected from the very first moment.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Complete",
    description:
      "Work with your artisan until you're satisfied. When the job is done to your standard, release the escrow payment directly on-chain — fast, transparent, and fee-minimal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Review",
    description:
      "Leave an on-chain review that builds the artisan's verifiable reputation. Honest community feedback keeps quality high and helps the next client make a confident choice.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const ARTISAN_STEPS = [
  {
    step: "01",
    title: "List",
    description:
      "Create your free artisan profile. Showcase your craft, skills, portfolio, and location so local clients can find and trust you without any centralised gatekeeping.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Get Hired",
    description:
      "Receive job requests directly from nearby clients. Agree on scope and price, then accept the contract — funds are locked in escrow the moment the client confirms.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Deliver",
    description:
      "Do what you do best. Deliver quality work, communicate clearly, and build the kind of trust that turns one job into a lasting local reputation — on-chain and permanent.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Get Paid",
    description:
      "Once the client releases the escrow, payment arrives in your Stellar wallet instantly — no middleman, no payout delays, no platform fees eating into your earnings.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
      </svg>
    ),
  },
];

const TRUST_ITEMS = [
  {
    title: "Trustless Escrow",
    description:
      "Stellar smart contracts hold funds securely until work is complete. No human intermediary can freeze, redirect, or delay your payment.",
  },
  {
    title: "Decentralised Listings",
    description:
      "Artisan profiles and reviews are community-curated — not controlled by a single company, and impossible to silently manipulate.",
  },
  {
    title: "On-Chain Reputation",
    description:
      "Every review is written to the chain, permanent and publicly verifiable. Real work builds real credibility that can never be gamed away.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepCard({
  step,
  title,
  description,
  icon,
  iconColor,
}: {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
}) {
  return (
    <div className="group relative flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 transition-shadow duration-300 hover:shadow-md">
      <span className="absolute right-5 top-5 font-mono text-xs font-semibold tracking-widest text-gray-300">
        {step}
      </span>
      <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gray-50 ${iconColor}`}>
        {icon}
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="text-sm leading-relaxed text-gray-500">{description}</p>
      </div>
    </div>
  );
}

function SectionPill({ label, color }: { label: string; color: string }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-widest uppercase ${color}`}>
      {label}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Spacer for navbar — matches every other page */}
      <div className="h-20" />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-20 pt-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            How{" "}
            <span className="text-[#605DEC]">Artisyn</span>{" "}
            Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
            A trustless protocol connecting skilled local artisans with clients
            through community-curated listings — no middlemen, no hidden fees,
            no centralised control.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 rounded-xl bg-[#605DEC] px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Find a Trusted Artisan
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-medium text-[#605DEC] transition-colors hover:bg-gray-50 active:scale-[0.98]"
            >
              Apply as an Artisan
            </Link>
          </div>
        </div>
      </section>

      {/* ── Client Journey ────────────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4">
            <SectionPill label="For Clients" color="bg-[#605DEC]/10 text-[#605DEC]" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Find the right artisan, fast.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-500">
              From discovering skilled workers nearby to releasing a secure
              on-chain payment — every step is designed to protect you.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CLIENT_STEPS.map((s) => (
              <StepCard key={s.step} {...s} iconColor="text-[#605DEC]" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="mx-6 border-t border-gray-100 sm:mx-10 lg:mx-20" />

      {/* ── Artisan Journey ───────────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4">
            <SectionPill label="For Artisans" color="bg-amber-50 text-amber-600" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Get discovered. Get paid. No middleman.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-500">
              Build a verifiable on-chain reputation that no platform can take
              away. Your craft, your clients, your earnings.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ARTISAN_STEPS.map((s) => (
              <StepCard key={s.step} {...s} iconColor="text-amber-500" />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="mx-6 border-t border-gray-100 sm:mx-10 lg:mx-20" />

      {/* ── Why Trust ─────────────────────────────────────────────────────── */}
      <section className="px-6 py-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why trust the protocol?
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-500">
              Artisyn isn&apos;t a company with servers you have to trust — it&apos;s a
              set of open, auditable smart contracts on Stellar.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#605DEC]/10">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#605DEC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-base font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA — matches HireCTA dark style ────────────────────────── */}
      <section
        className="mt-10 px-6 py-20 sm:px-10 lg:px-20"
        style={{ backgroundImage: "linear-gradient(180deg, #212121 0%, #100F0F 100%)" }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Whether you&apos;re looking for skilled hands or ready to showcase your
            craft — Artisyn is the bridge.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/explore"
              className="inline-flex w-[217px] items-center justify-center gap-2 rounded-xl bg-[#605DEC] py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
            >
              Find a Trusted Artisan
            </Link>
            <Link
              href="/join"
              className="inline-flex w-[197px] items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium text-[#605DEC] transition-colors hover:bg-gray-100 active:scale-[0.98]"
            >
              Apply as an Artisan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}