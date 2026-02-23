"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-4">
      <svg aria-hidden="true" className="hidden">
        <filter id="heroGlassFilter" colorInterpolationFilters="linearRGB" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse">
          <feDisplacementMap in="SourceGraphic" in2="SourceGraphic" scale="20" xChannelSelector="R" yChannelSelector="B" result="displacementMap" />
          <feGaussianBlur stdDeviation="3 3" in="displacementMap" edgeMode="none" />
        </filter>
      </svg>
      <div className="relative mx-auto w-[calc(100%-1rem)] max-w-[1700px] sm:w-[calc(100%-1.5rem)] lg:w-[calc(100%-2.5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="hero-grid relative overflow-hidden rounded-3xl border border-cyan-400/20 px-4 py-8 shadow-soft sm:px-8 sm:py-10 lg:h-[calc(100vh-6.5rem)] lg:min-h-[46rem] lg:max-h-[54rem] lg:px-12 lg:py-10"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative z-20 grid items-center gap-7 lg:h-full lg:grid-cols-[360px_1fr] lg:gap-12">
            <div aria-hidden className="order-2 hidden lg:order-1 lg:block lg:h-full lg:w-full lg:max-w-[360px]" />

            <motion.div
              initial={{ opacity: 0, x: 18, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
              className="order-1 min-w-0 text-center lg:order-2 lg:text-left"
            >
              <h1 className="text-3xl font-semibold leading-[1.02] tracking-tight text-white sm:text-4xl lg:text-6xl">
                Get tasks done
                <br />
                <span className="text-cyan-300">instantly</span>
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white sm:text-xl lg:text-2xl">
                Post a task. Nearby taskers arrive ready to work. No waiting, no fuss. The future of getting things done is here.
              </p>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/70 sm:text-base">
                Available on
              </p>
              <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-start">
                <a
                  href="https://apps.apple.com/au/app/bucketout/id6757649681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-btn apple-btn"
                  aria-label="Download on the App Store"
                >
                  <span className="market-button-subtitle">Download on the</span>
                  <span className="market-button-title">App Store</span>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.bucketout.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="market-btn google-btn"
                  aria-label="Download on Google Play"
                >
                  <span className="market-button-subtitle">Download on the</span>
                  <span className="market-button-title">Google Play</span>
                </a>
              </div>

              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:items-start">
                <button className="glass-cta w-auto">
                  Post your task
                </button>
                <button className="glass-cta glass-cta-gl w-auto">
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

