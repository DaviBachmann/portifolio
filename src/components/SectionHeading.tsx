import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  align = "center",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-body text-sm text-muted">{eyebrow}</p>
      ) : null}
      <h2 className="inline-block border-b-2 border-primary pb-1 font-display text-3xl font-semibold uppercase text-secondary md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
