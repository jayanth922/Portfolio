import { ReactNode } from "react";

export default function Section({
  id,
  title,
  eyebrow,
  children,
  className = "",
  actions,
}: {
  id?: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  actions?: ReactNode;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">
        {eyebrow && (
          <div className="text-sm font-medium text-primary/80">{eyebrow}</div>
        )}
        {title && (
          <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        )}
        {actions && <div className="mt-6">{actions}</div>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}
