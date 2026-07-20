import { cn } from "@/lib/utils";

type StatusIndicatorProps = {
	color?: "emerald" | "amber" | "red" | "blue" | "slate";
	pulse?: boolean;
	className?: string;
};

export function StatusIndicator({
	color = "emerald",
	pulse = false,
	className,
}: StatusIndicatorProps) {
	const colorClasses: Record<NonNullable<StatusIndicatorProps["color"]>, string> = {
		emerald: "bg-emerald-500",
		amber: "bg-amber-500",
		red: "bg-red-500",
		blue: "bg-blue-500",
		slate: "bg-slate-500",
	};

	return (
		<span
			aria-hidden="true"
			className={cn(
				"relative flex size-2.5 shrink-0 rounded-full",
				colorClasses[color],
				pulse && "animate-pulse",
				className
			)}
		/>
	);
}
