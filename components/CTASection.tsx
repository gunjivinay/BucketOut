import Reveal from "@/components/Reveal";

export default function CTASection() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal className="rounded-2xl bg-gradient-to-r from-[#0d4458] via-[#0f4f67] to-[#12607c] px-6 py-10 text-center shadow-soft sm:px-10 sm:py-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Launch tasks faster with BucketOut
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">
            Join the waitlist to access the app early and shape the next generation of local task commerce.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:scale-[1.02] hover:shadow-lg">
              Join Waitlist
            </button>
            <button className="rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact Sales
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
