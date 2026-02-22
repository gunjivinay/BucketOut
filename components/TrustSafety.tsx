import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const safetyItems = [
  "Identity verification and profile checks",
  "In-app masked messaging and audit timeline",
  "Secure payment handling with fraud monitoring",
  "Issue resolution workflows and evidence support",
];

export default function TrustSafety() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Trust & Safety"
            title="Protection features embedded across every task"
            description="Safety isn't an add-on. It's integrated across identity, communication, payments, and support."
          />
        </Reveal>
        <Reveal className="mt-10 rounded-2xl border border-slate-100 bg-gradient-to-r from-blue-50 to-violet-50 p-8 shadow-sm">
          <ul className="grid gap-4 md:grid-cols-2">
            {safetyItems.map((item) => (
              <li key={item} className="rounded-xl border border-white/70 bg-white/80 p-4 text-sm font-medium text-slate-700 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}