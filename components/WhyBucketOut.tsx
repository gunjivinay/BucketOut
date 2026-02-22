import Reveal from "@/components/Reveal";

type DealCard = {
  category: string;
  title: string;
  price: string;
};

const filters = ["Moving in", "Home maintenance", "Starting a business", "Parties", "Something different"];

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
          <article key={`${card.title}-${idx}`} className="deal-card">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="deal-avatar" aria-hidden>
                {card.title.charAt(0)}
              </span>
              <div>
                <p className="text-[0.72rem] font-medium uppercase tracking-wide text-[#47558a] sm:text-[0.9rem]">{card.category}</p>
                <h3 className="mt-1 text-[1.65rem] font-semibold leading-tight text-[#122265] sm:text-[2rem]">{card.title}</h3>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between sm:mt-8">
              <span className="inline-flex items-center rounded-full bg-white px-3 py-1.5 text-[1.2rem] font-semibold text-[#14256a] sm:px-4 sm:py-2 sm:text-[1.6rem]">
                5 Stars
              </span>
              <strong className="text-[1.8rem] font-bold text-[#14256a] sm:text-[2.2rem]">{card.price}</strong>
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
            <h2 className="text-3xl font-bold leading-tight text-[#0b1e72] sm:text-5xl lg:text-7xl">
              See what others are getting done
            </h2>
            <div className="flex flex-wrap gap-4 border-b-2 border-[#1a2f76] pb-4 text-[1rem] text-[#112367] sm:gap-8 sm:text-[1.55rem]">
              {filters.map((item, idx) => (
                <span key={item} className={`inline-flex items-center gap-2 sm:gap-3 ${idx === 0 ? "font-semibold text-[#1f66ef]" : ""}`}>
                  <span className="h-2.5 w-2.5 rounded-full bg-current" aria-hidden />
                  {item}
                </span>
              ))}
            </div>
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
