import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const paymentCards = [
  {
    title: "Escrow-secured checkout",
    text: "Funds are held securely and released on verified completion for both-side confidence.",
  },
  {
    title: "Flexible payout options",
    text: "Taskers can select preferred payout methods and see clear settlement timelines.",
  },
  {
    title: "Loyalty rewards",
    text: "Frequent posters and top-performing taskers unlock boosted visibility and reduced fees.",
  },
];

export default function PaymentsRewards() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Payments & Rewards"
            title="Built-in payments that feel safe and predictable"
            description="A fintech-style transaction experience with clear statuses, dispute support, and loyalty incentives."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {paymentCards.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.05}>
              <article className="card h-full">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600 sm:text-base">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}