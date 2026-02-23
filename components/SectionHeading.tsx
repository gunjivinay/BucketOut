import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  actions?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  actions,
}: SectionHeadingProps) {
  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#1b6f88] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-slate-600 sm:text-lg">{description}</p>
      ) : null}
      {actions ? <div className="mt-6">{actions}</div> : null}
    </header>
  );
}
