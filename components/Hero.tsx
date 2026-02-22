"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const phoneTasks = [
  { title: "House Cleaning", detail: "Deep clean for 3-bedroom apartment", price: "$85" },
  { title: "Furniture Assembly", detail: "Expert assembly for IKEA sets", price: "$45" },
  { title: "Local Moving", detail: "Help with shifting boxes and furniture", price: "$120" },
  { title: "Painting Service", detail: "Interior wall painting and touch-ups", price: "$200" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-4">
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-grid relative overflow-hidden rounded-3xl border border-cyan-400/20 px-6 py-10 shadow-soft sm:px-10 sm:py-12 lg:h-[calc(100vh-6.5rem)] lg:min-h-[46rem] lg:max-h-[54rem] lg:px-12 lg:py-10"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-20 grid items-center gap-8 lg:h-full lg:grid-cols-[400px_1fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -18, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
              className="phone-shell mx-auto w-full max-w-[420px]"
            >
              <div className="phone-screen">
                <div className="flex items-center justify-between text-xs text-slate-200">
                  <span>14:42</span>
                  <span>5G</span>
                </div>
                <p className="mt-5 text-lg text-cyan-400">&lt; Home</p>
                <h3 className="mt-4 text-5xl font-bold text-white">TASKS</h3>

                <div className="phone-feed-wrap mt-6">
                  <div className="phone-feed">
                    {[...phoneTasks, ...phoneTasks].map((task, idx) => (
                      <article key={`${task.title}-${idx}`} className="phone-task-card">
                        <div className="phone-task-icon">
                          <Image src="/logo.png" alt="" width={26} height={26} aria-hidden />
                        </div>
                        <div>
                          <p className="text-[1.55rem] font-semibold leading-tight text-white">{task.title}</p>
                          <p className="mt-1 text-[1.15rem] text-slate-400">{task.detail}</p>
                        </div>
                        <p className="ml-auto text-[1.8rem] font-semibold text-cyan-300">{task.price}</p>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="accept-pill">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                  Task Accepted!
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
              className="text-left"
            >
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-7xl">
                Get tasks done
                <br />
                <span className="text-cyan-300">instantly</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-blue-100 sm:text-3xl">
                Post a task. Nearby taskers arrive ready to work. No waiting, no fuss. The future of getting things done is here.
              </p>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/70 sm:text-base">
                Available on
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.bucketout.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-image store-badge-play"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    className="store-badge-svg"
                    src="/google-play-badge.svg"
                    alt="Get it on Google Play"
                    width={297}
                    height={88}
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
                <a
                  href="https://apps.apple.com/au/app/bucketout/id6757649681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-badge-image store-badge-app"
                  aria-label="Download on the App Store"
                >
                  <Image
                    className="store-badge-svg"
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={297}
                    height={88}
                    style={{ width: "100%", height: "100%" }}
                  />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-blue-700 transition hover:scale-[1.02] hover:shadow-lg sm:text-base">
                  Post your task
                </button>
                         <button className="rounded-xl border border-white/50 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:text-base">
                  Earn as a tasker
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

