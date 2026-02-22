import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { title: "Post a task", text: "Describe what you need, set budget and timing, and publish." },
  { title: "Match with taskers", text: "Nearby verified taskers send offers you can compare quickly." },
  { title: "Chat and confirm", text: "Use in-app chat to align details, scope, and delivery terms." },
  { title: "Complete and rate", text: "Release payment securely and leave ratings to build trust." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="How It Works"
            title="From post to payout in four simple steps"
            centered
          />
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.05}>
              <article className="card h-full">
                <p className="text-sm font-semibold text-blue-700">Step {idx + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
