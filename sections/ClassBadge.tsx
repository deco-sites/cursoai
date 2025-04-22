import { JSX } from "preact";

export interface ClassBadgeProps {
  type: "virtual" | "free";
  text: string;
}

export default function ClassBadge({
  type,
  text,
}: ClassBadgeProps): JSX.Element {
  const typeStyles = {
    virtual: "bg-[rgba(79,70,229,0.1)] text-[#7C9EFF]",
    free: "bg-[rgba(16,185,129,0.1)] text-[#10B981]"
  };

  return (
    <span class={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${typeStyles[type]}`}>
      {text}
    </span>
  );
} 