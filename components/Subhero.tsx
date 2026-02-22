import Reveal from "@/components/Reveal";

export default function Subhero() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">One platform. Two sides. Zero friction.</p>
          <p className="mt-4 max-w-4xl text-xl leading-relaxed text-slate-700 sm:text-2xl">
            BucketOut is purpose-built for both task posters and taskers, making it easy to create tasks, receive offers, communicate instantly, and complete work with secure payment and verified outcomes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}