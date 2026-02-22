import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const faqs = [
  {
    q: "Is BucketOut for urgent same-day tasks?",
    a: "Yes. Posters can mark tasks as instant, and nearby available taskers are prioritized in matching.",
  },
  {
    q: "How are payments handled?",
    a: "Payments are processed in-app with secure holding and released upon completion milestones.",
  },
  {
    q: "How does BucketOut keep users safe?",
    a: "The platform combines verification, in-app messaging, payment safeguards, and dispute support.",
  },
  {
    q: "Can taskers choose which jobs to accept?",
    a: "Absolutely. Taskers control their offers, availability, service area, and pricing preferences.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Answers for posters and taskers"
            centered
          />
        </Reveal>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map((item, idx) => (
            <Reveal key={item.q} delay={idx * 0.04}>
              <details className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-soft">
                <summary className="cursor-pointer list-none text-base font-semibold text-slate-900">
                  {item.q}
                </summary>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
