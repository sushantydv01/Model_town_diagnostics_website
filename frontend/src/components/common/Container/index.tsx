import type { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Utility for Tailwind class merging */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ----------------------------------------
// CONTAINER SYSTEM
// ----------------------------------------

export function PageWrapper({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "min-h-screen flex flex-col w-full bg-background",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ContentWrapper({
  children,
  className,
  id = "main-content",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <main
      id={id}
      className={cn("flex-1 w-full flex flex-col", className)}
      tabIndex={-1}
    >
      {children}
    </main>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 md:py-24", className)}>
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-[var(--container-default)] mx-auto px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
