import Reveal from "@/components/Reveal";

type DealCard = {
  category: string;
  title: string;
  price: string;
};

const topRow: DealCard[] = [
  { category: "Delivery", title: "Sofa delivery", price: "$95" },
  { category: "Cleaning", title: "End of lease clean", price: "$450" },
  { category: "Cleaning", title: "End of lease clean", price: "$750" },
  { category: "Delivery", title: "Pickup and delivery", price: "$85" },
  { category: "Plumbing", title: "Fix leaking tap", price: "$140" },
];

const bottomRow: DealCard[] = [
  { category: "Removals", title: "Break down and take away boxes", price: "$150" },
  { category: "Removals", title: "Couch moved 1km down the road", price: "$60" },
  { category: "Removals", title: "Removalist TODAY", price: "$506" },
  { category: "Removals", title: "Urgent moving help", price: "$210" },
  { category: "Assembly", title: "Desk setup and alignment", price: "$120" },
];

function DealsRow({ cards, reverse }: { cards: DealCard[]; reverse?: boolean }) {
  return (
    <div className="deals-row">
      <div className={`deals-track ${reverse ? "deals-track-reverse" : ""}`}>
        {[...cards, ...cards].map((card, idx) => (
          <article key={`${card.title}-${idx}`} className="deal-card flex h-[8.75rem] flex-col sm:h-[10rem] lg:h-[10.75rem]">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="deal-avatar" aria-hidden>
                {card.title.charAt(0)}
              </span>
              <div className="min-w-0">
                <p className="text-[0.5rem] font-medium uppercase tracking-wide text-[#47558a] sm:text-[0.62rem] lg:text-[0.6rem]">{card.category}</p>
                <h3 className="mt-1 line-clamp-2 text-[0.82rem] font-semibold leading-tight text-[#122265] sm:text-[1.02rem] lg:text-[1rem]">{card.title}</h3>
              </div>
            </div>
            <div className="mt-auto flex items-center justify-between pt-3 sm:pt-4">
              <span className="inline-flex items-center rounded-full bg-white px-2 py-1 text-[0.72rem] font-semibold text-[#14256a] sm:px-2.5 sm:py-1 sm:text-[0.86rem] lg:text-[0.84rem]">
                5 Stars
              </span>
              <strong className="leading-none text-[0.94rem] font-bold text-[#14256a] sm:text-[1.2rem] lg:text-[1.08rem]">{card.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function WhyBucketOut() {
  return (
    <section id="why-bucketout" className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold leading-tight text-[#0b1e72] sm:text-4xl lg:text-5xl">
              See what others are getting done
            </h2>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="space-y-5">
            <DealsRow cards={topRow} />
            <DealsRow cards={bottomRow} reverse />
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <button className="rounded-2xl bg-gradient-to-r from-[#0d4458] to-[#0f5a74] px-8 py-4 text-2xl font-semibold text-white transition hover:brightness-110">
            Post your task for free
          </button>
        </Reveal>
      </div>
    </section>
  );
}
