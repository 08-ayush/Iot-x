import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & { strong?: boolean };

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  { className, strong, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(strong ? "glass-strong" : "glass", "rounded-2xl", className)}
      {...rest}
    />
  );
});
