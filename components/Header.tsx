"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Why BucketOut", href: "#why-bucketout" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<"why-bucketout" | "how-it-works" | "faq">("why-bucketout");
  const navRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "why-bucketout" || hash === "how-it-works" || hash === "faq") {
        setActiveNav(hash);
      }
    };

    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  useEffect(() => {
    const idx = navItems.findIndex((item) => item.href === `#${activeNav}`);
    const node = navRefs.current[idx];
    if (!node) return;
    setIndicator({ left: node.offsetLeft, width: node.offsetWidth });
  }, [activeNav]);

  useEffect(() => {
    const onResize = () => {
      const idx = navItems.findIndex((item) => item.href === `#${activeNav}`);
      const node = navRefs.current[idx];
      if (!node) return;
      setIndicator({ left: node.offsetLeft, width: node.offsetWidth });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeNav]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur"
    >
      <div className="section-shell relative h-16">
        <div className="grid h-full grid-cols-[2.75rem_1fr_2.75rem] items-center md:hidden">
          <a href="#" aria-label="BucketOut home" className="inline-flex h-9 w-9 items-center justify-center rounded-md">
            <Image src="/logo.png" alt="BucketOut logo" width={36} height={36} className="h-9 w-9 rounded-md" />
          </a>

          <a href="#" className="justify-self-center text-2xl font-bold tracking-tight text-[#0e4b62]">
            BucketOut
          </a>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>

        <div className="hidden h-full grid-cols-[auto_1fr_auto] items-center gap-6 md:grid">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight text-slate-900">
            <Image src="/logo.png" alt="BucketOut logo" width={36} height={36} className="h-9 w-9 rounded-md" />
            <span className="text-[#0e4b62]">BucketOut</span>
          </a>

          <div className="flex justify-center">
            <nav className="theme-switcher" data-active={activeNav} aria-label="Primary navigation">
              <span
                className="theme-switcher__indicator"
                style={{ left: `${indicator.left}px`, width: `${indicator.width}px` }}
                aria-hidden
              />
              {navItems.map((item, idx) => {
                const value = item.href.replace("#", "") as "why-bucketout" | "how-it-works" | "faq";
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="theme-switcher__option"
                    data-theme={value}
                    ref={(el) => {
                      navRefs.current[idx] = el;
                    }}
                    onClick={() => setActiveNav(value)}
                  >
                    <span className="theme-switcher__icon">{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button className="rounded-xl bg-gradient-to-r from-[#0d4458] to-[#0f5a74] px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-soft">
              Post a task
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white shadow-lg md:hidden">
          <nav className="section-shell flex flex-col py-3" aria-label="Mobile Primary">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
}
