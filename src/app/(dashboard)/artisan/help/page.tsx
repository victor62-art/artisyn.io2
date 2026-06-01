"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, ChevronUp, MessageCircle, FileText, Mail } from "lucide-react";

const faqs = [
	{
		category: "Getting Started",
		items: [
			{
				question: "How do I set up my artisan profile?",
				answer:
					"Go to Profile in the sidebar and fill in your skills, location, and portfolio. A complete profile increases your visibility to clients.",
			},
			{
				question: "How does the Artisyn platform work?",
				answer:
					"Artisyn connects artisans with clients through community-curated listings on the Stellar blockchain. Clients post jobs, artisans apply, and payments are handled securely via smart contracts.",
			},
		],
	},
	{
		category: "Jobs & Listings",
		items: [
			{
				question: "How do I apply for a job?",
				answer:
					"Browse available jobs on the Listings page, click a job to view details, and submit your proposal. Make sure your profile is complete to improve your chances.",
			},
			{
				question: "Why am I not seeing any jobs in my area?",
				answer:
					"Ensure your location is set correctly in your profile. Jobs are matched based on proximity. You can also broaden your search by adjusting filters.",
			},
		],
	},
	{
		category: "Payments & Earnings",
		items: [
			{
				question: "How do I get paid?",
				answer:
					"Payments are processed via Stellar smart contracts. Once a job is marked complete and the client confirms, funds are released to your connected wallet.",
			},
			{
				question: "What wallet do I need to receive payments?",
				answer:
					"You need a Stellar-compatible wallet. Supported wallets include Lobstr, Albedo, and others listed on the connect wallet page.",
			},
		],
	},
	{
		category: "Account & Settings",
		items: [
			{
				question: "How do I change my account settings?",
				answer:
					"Navigate to Account Settings in the sidebar to update your email, notification preferences, and connected wallet.",
			},
			{
				question: "How do I delete my account?",
				answer:
					"To delete your account, contact our support team via the contact page. Account deletion is permanent and cannot be undone.",
			},
		],
	},
];

export default function HelpPage() {
	const [query, setQuery] = useState("");
	const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

	const toggle = (key: string) =>
		setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

	const filtered = faqs
		.map((section) => ({
			...section,
			items: section.items.filter(
				(item) =>
					!query ||
					item.question.toLowerCase().includes(query.toLowerCase()) ||
					item.answer.toLowerCase().includes(query.toLowerCase())
			),
		}))
		.filter((section) => section.items.length > 0);

	return (
		<div className="w-full max-w-3xl mx-auto">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-gray-900 mb-2">Help Center</h1>
				<p className="text-gray-600">Find answers to common questions or reach out to our support team.</p>
			</div>

			{/* Search */}
			<div className="relative mb-8">
				<Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
				<input
					type="text"
					placeholder="Search help articles..."
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#605DEC] focus:border-transparent"
				/>
			</div>

			{/* FAQ Sections */}
			{filtered.length > 0 ? (
				<div className="space-y-6 mb-10">
					{filtered.map((section) => (
						<div key={section.category}>
							<h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
								{section.category}
							</h2>
							<div className="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100 shadow-sm">
								{section.items.map((item, i) => {
									const key = `${section.category}-${i}`;
									const isOpen = openItems[key];
									return (
										<div key={key}>
											<button
												onClick={() => toggle(key)}
												className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
											>
												<span className="text-sm font-medium text-gray-900">{item.question}</span>
												{isOpen ? (
													<ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0 ml-3" />
												) : (
													<ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0 ml-3" />
												)}
											</button>
											{isOpen && (
												<div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
													{item.answer}
												</div>
											)}
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="text-center py-12 text-gray-500 text-sm mb-10">
					No results found for &ldquo;{query}&rdquo;. Try a different search term or contact support below.
				</div>
			)}

			{/* Support CTA */}
			<div className="bg-[#F4F3FE] rounded-xl p-6">
				<h2 className="text-lg font-semibold text-gray-900 mb-1">Still need help?</h2>
				<p className="text-sm text-gray-600 mb-5">Our support team is here to assist you.</p>
				<div className="flex flex-wrap gap-3">
					<Link
						href="/contact"
						className="flex items-center gap-2 bg-[#605DEC] text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-[#4f4cd4] transition-colors"
					>
						<Mail className="w-4 h-4" />
						Contact Support
					</Link>
					<Link
						href="/privacy"
						className="flex items-center gap-2 bg-white text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
					>
						<FileText className="w-4 h-4" />
						Privacy Policy
					</Link>
					<a
						href="http://t.me/@artisynGF"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 bg-white text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
					>
						<MessageCircle className="w-4 h-4" />
						Telegram Community
					</a>
				</div>
			</div>
		</div>
	);
}
