import Reveal from "@/components/Reveal";

type TaskCard = {
  title: string;
  subtitle: string;
};

const steps = ["Describe what you need done", "Set your budget", "Receive quotes and pick the best Tasker"];

const columnOne: TaskCard[] = [
  { title: "Landscaping", subtitle: "Mulching, weeding and tidying up" },
  { title: "Handyperson", subtitle: "Help with home maintenance" },
  { title: "Marketing & design", subtitle: "Help with website and assets" },
  { title: "Removalists", subtitle: "Packing, wrapping and moving" },
  { title: "Furniture assembly", subtitle: "Flatpack assembly and disassembly" },
  { title: "Gardening", subtitle: "Lawn care, hedge trimming and cleanup" },
];

const columnTwo: TaskCard[] = [
  { title: "Painting", subtitle: "Interior and exterior wall painting" },
  { title: "Business & admin", subtitle: "Help with accounting and admin work" },
  { title: "Something else", subtitle: "Wall mount art and small repairs" },
  { title: "Home cleaning", subtitle: "Clean, mop and tidy your house" },
  { title: "Deliveries", subtitle: "Urgent deliveries and courier services" },
  { title: "Plumbing", subtitle: "Leaks, installs and fixture replacement" },
];

function TaskColumn({ items, extraClass }: { items: TaskCard[]; extraClass?: string }) {
  return (
    <div className={`tasks-track ${extraClass ?? ""}`}>
      {[...items, ...items].map((item, idx) => (
        <article key={`${item.title}-${idx}`} className="task-card">
          <div className="task-thumb" aria-hidden>
            {item.title.charAt(0)}
          </div>
          <div>
            <h3 className="text-[1.35rem] font-semibold leading-tight text-[#0b1e72]">{item.title}</h3>
            <p className="mt-1 text-[1.02rem] leading-snug text-[#5f6e9a]">{item.subtitle}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ForPosters() {
  return (
    <section className="pb-16 sm:pb-24">
      <div className="section-shell">
        <Reveal className="rounded-[2rem] bg-[#eef4ff] px-6 py-10 sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.3fr] lg:items-center">
            <div>
              <h2 className="text-4xl font-bold leading-tight text-[#0b1e72] sm:text-5xl lg:text-7xl">
                Post your first task in seconds
              </h2>
              <p className="mt-5 max-w-lg text-xl text-[#10255f]">
                Save yourself hours and get your to-do list completed
              </p>
              <ol className="mt-8 space-y-4">
                {steps.map((step, idx) => (
                  <li key={step} className="flex items-center gap-4 text-xl text-[#0b1e72]">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#d7e4ff] text-[1.35rem] font-semibold text-[#1f5fdf]">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
              <button className="mt-8 rounded-2xl bg-gradient-to-r from-[#0d4458] to-[#0f5a74] px-8 py-4 text-2xl font-semibold text-white transition hover:brightness-110">
                Post your task
              </button>
            </div>

            <div className="tasks-board">
              <TaskColumn items={columnOne} />
              <TaskColumn items={columnTwo} extraClass="tasks-track-reverse tasks-track-delayed" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
