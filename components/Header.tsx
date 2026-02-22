"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Why BucketOut", href: "#why-bucketout" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur"
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-slate-900">
          <Image src="/logo.png" alt="BucketOut logo" width={30} height={30} className="h-[30px] w-[30px] rounded-md" />
          <span className="text-[#0e4b62]">BucketOut</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 sm:block">
            Log in
          </button>
          <button className="rounded-xl bg-gradient-to-r from-[#0d4458] to-[#0f5a74] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-soft">
            Post a task
          </button>
        </div>
      </div>
    </motion.header>
  );
}
