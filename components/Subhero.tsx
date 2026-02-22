import Reveal from "@/components/Reveal";

export default function Subhero() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-7">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[0.72rem]">One platform. Two sides. Zero friction.</p>
          <p className="mt-2.5 max-w-4xl text-[0.92rem] leading-relaxed text-slate-700 sm:text-[1rem] lg:text-[1.12rem]">
            BucketOut is purpose-built for both task posters and taskers, making it easy to create tasks, receive offers, communicate instantly, and complete work with secure payment and verified outcomes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
