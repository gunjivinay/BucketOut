import Reveal from "@/components/Reveal";
import Image from "next/image";

const steps = ["Describe what you need done", "Set your budget", "Receive quotes and pick the best Tasker"];

const phoneTasks = [
  { title: "House Cleaning", detail: "Deep clean for 3-bedroom apartment", price: "$85" },
  { title: "Furniture Assembly", detail: "Expert assembly for IKEA sets", price: "$45" },
  { title: "Local Moving", detail: "Help with shifting boxes and furniture", price: "$120" },
  { title: "Painting Service", detail: "Interior wall painting and touch-ups", price: "$200" },
];

export default function ForPosters() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal className="rounded-[2rem] bg-[#eef4ff] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-[#0b1e72] sm:text-4xl lg:text-5xl">
                Post your first task in seconds
              </h2>
              <p className="mt-4 max-w-lg text-base text-[#10255f] sm:text-lg lg:text-xl">
                Save yourself hours and get your to-do list completed
              </p>
              <ol className="mt-6 space-y-3.5 sm:space-y-4">
                {steps.map((step, idx) => (
                  <li key={step} className="flex items-center gap-3 text-base text-[#0b1e72] sm:text-lg lg:text-xl">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#d7e4ff] text-[1.05rem] font-semibold text-[#1f5fdf] sm:h-10 sm:w-10 sm:text-[1.2rem]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <button className="mt-7 rounded-2xl bg-gradient-to-r from-[#0d4458] to-[#0f5a74] px-7 py-3 text-lg font-semibold text-white transition hover:brightness-110 sm:text-xl">
                Post your task
              </button>
            </div>

            <div className="phone-shell mx-auto w-full max-w-[350px] sm:max-w-[420px] lg:max-w-[400px]">
              <div className="phone-screen">
                <h3 className="text-center text-2xl font-bold text-white sm:text-3xl">BucketOut</h3>

                <div className="phone-feed-wrap mt-3">
                  <div className="phone-feed">
                    {[...phoneTasks, ...phoneTasks].map((task, idx) => (
                      <article key={`${task.title}-${idx}`} className="phone-task-card">
                        <div className="phone-task-icon">
                          <Image src="/logo.png" alt="" width={26} height={26} aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[0.86rem] font-semibold leading-tight text-white sm:text-[1rem] lg:text-[1.08rem]">{task.title}</p>
                          <p className="phone-task-detail mt-1 text-[0.72rem] leading-snug text-slate-400 sm:text-[0.84rem] lg:text-[0.9rem]">{task.detail}</p>
                        </div>
                        <p className="ml-auto text-[0.98rem] font-semibold text-cyan-300 sm:text-[1.12rem] lg:text-[1.2rem]">{task.price}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

