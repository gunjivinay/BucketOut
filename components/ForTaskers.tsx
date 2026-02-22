import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const taskerPoints = [
  "Discover nearby tasks that match your skills and schedule.",
  "Send clear offers with pricing, ETA, and service notes.",
  "Build reputation through ratings, badges, and completion history.",
  "Get paid quickly with clear earnings and reward incentives.",
];

export default function ForTaskers() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="For Taskers"
            title="A growth engine for local independent service pros"
            description="Choose your jobs, manage workload with mobile tools, and build repeat income through trust signals."
          />
        </Reveal>
        <Reveal className="mt-10">
          <article className="card h-full">
            <ul className="space-y-3">
              {taskerPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-slate-600 sm:text-base">
                  <span className="mt-1 h-2 w-2 rounded-full bg-violet-500" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}