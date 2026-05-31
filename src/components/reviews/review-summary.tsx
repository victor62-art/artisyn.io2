import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Rating = 1 | 2 | 3 | 4 | 5;

export interface ReviewSummaryProps {
	averageRating: number;
	totalCount: number;
	ratingCounts: Partial<Record<Rating, number>>;
	className?: string;
	isLoading?: boolean;
}

function clampNumber(value: number, min: number, max: number) {
	if (Number.isNaN(value)) return min;
	return Math.min(max, Math.max(min, value));
}

function safeCount(value: unknown) {
	if (typeof value !== "number" || !Number.isFinite(value) || value <= 0) return 0;
	return Math.floor(value);
}

function StarRow({ value }: { value: number }) {
	const clamped = clampNumber(value, 0, 5);

	return (
		<div className="flex items-center gap-1" aria-label={`Rating ${clamped} out of 5`}>
			{Array.from({ length: 5 }).map((_, index) => {
				const starIndex = index + 1;
				const fill = clampNumber(clamped - (starIndex - 1), 0, 1);
				const fillPct = `${Math.round(fill * 100)}%`;

				return (
					<span key={starIndex} className="relative inline-block h-5 w-5">
						<Star className="h-5 w-5 text-slate-300" aria-hidden="true" />
						<span
							className="absolute inset-0 overflow-hidden"
							style={{ width: fillPct }}
							aria-hidden="true"
						>
							<Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
						</span>
					</span>
				);
			})}
		</div>
	);
}

function Skeleton() {
	return (
		<div className="animate-pulse">
			<div className="grid gap-6 md:grid-cols-2">
				<div className="space-y-3">
					<div className="h-10 w-24 rounded bg-slate-200" />
					<div className="h-5 w-32 rounded bg-slate-200" />
					<div className="h-4 w-24 rounded bg-slate-200" />
				</div>
				<div className="space-y-2">
					{Array.from({ length: 5 }).map((_, i) => (
						<div key={i} className="flex items-center gap-3">
							<div className="h-4 w-6 rounded bg-slate-200" />
							<div className="h-2 flex-1 rounded bg-slate-200" />
							<div className="h-4 w-8 rounded bg-slate-200" />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export function ReviewSummary({
	averageRating,
	totalCount,
	ratingCounts,
	className,
	isLoading,
}: ReviewSummaryProps) {
	if (isLoading) {
		return (
			<section
				className={cn("rounded-lg border border-slate-200 bg-white p-6", className)}
				aria-busy="true"
			>
				<Skeleton />
			</section>
		);
	}

	const safeTotal = safeCount(totalCount);
	const average = clampNumber(averageRating, 0, 5);

	const counts: Record<Rating, number> = {
		5: safeCount(ratingCounts?.[5]),
		4: safeCount(ratingCounts?.[4]),
		3: safeCount(ratingCounts?.[3]),
		2: safeCount(ratingCounts?.[2]),
		1: safeCount(ratingCounts?.[1]),
	};

	return (
		<section
			className={cn("rounded-lg border border-slate-200 bg-white p-6", className)}
		>
			<div className="grid gap-6 md:grid-cols-2">
				<div className="space-y-2">
					<div className="flex items-end gap-3">
						<div className="text-4xl font-semibold tracking-tight text-slate-900">
							{average.toFixed(1)}
						</div>
						<div className="pb-1">
							<StarRow value={average} />
						</div>
					</div>

					{safeTotal === 0 ? (
						<p className="text-sm text-slate-600">No reviews yet</p>
					) : (
						<p className="text-sm text-slate-600">
							{safeTotal.toLocaleString()} review{safeTotal === 1 ? "" : "s"}
						</p>
					)}
				</div>

				<div className="space-y-2">
					{([5, 4, 3, 2, 1] as const).map((rating) => {
						const count = counts[rating];
						const ratio = safeTotal > 0 ? clampNumber(count / safeTotal, 0, 1) : 0;

						return (
							<div key={rating} className="flex items-center gap-3">
								<div className="flex w-10 items-center gap-1 text-sm text-slate-700">
									<span className="tabular-nums">{rating}</span>
									<Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
								</div>
								<div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
									<div
										className="h-full rounded-full bg-yellow-500"
										style={{ width: `${Math.round(ratio * 100)}%` }}
									/>
								</div>
								<div className="w-10 text-right text-sm tabular-nums text-slate-600">
									{count}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

