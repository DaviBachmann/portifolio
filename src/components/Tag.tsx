import { cn } from "@/lib/utils";

type TagProps = {
  children: string;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-8 items-center rounded-lg border border-primary/30 bg-primary/15 px-3 py-1 font-body text-sm text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
