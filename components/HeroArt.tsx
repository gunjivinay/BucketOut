export default function HeroArt() {
  return (
    <>
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[290px] 2xl:block">
        <div className="absolute left-6 top-12">
          <svg width="250" height="350" viewBox="0 0 250 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="78" y="18" width="150" height="286" rx="38" fill="#CBD5E1" stroke="#0F172A" strokeWidth="3" />
            <rect x="95" y="64" width="116" height="210" rx="22" fill="#F8FAFC" />
            <rect x="130" y="34" width="46" height="8" rx="4" fill="#94A3B8" />
            <text x="112" y="95" fill="#64748B" fontSize="10" fontWeight="700" letterSpacing="1.1">
              POST TASK
            </text>
            <text x="111" y="122" fill="#0F172A" fontSize="13" fontWeight="700">
              Need package pickup
            </text>
            <rect x="111" y="134" width="76" height="6" rx="3" fill="#E2E8F0" />
            <rect x="111" y="146" width="62" height="6" rx="3" fill="#E2E8F0" />
            <rect x="111" y="162" width="84" height="32" rx="10" fill="#2563EB" />
            <text x="133" y="181" fill="#FFFFFF" fontSize="11" fontWeight="700">
              Post now
            </text>
            <rect x="107" y="206" width="98" height="44" rx="11" fill="#DBEAFE" />
            <text x="113" y="226" fill="#1D4ED8" fontSize="10" fontWeight="700">
              Task posted
            </text>
            <text x="113" y="241" fill="#475569" fontSize="9.8">
              Taskers notified nearby
            </text>

            <circle cx="40" cy="95" r="20" fill="#F1F5F9" />
            <rect x="24" y="116" width="32" height="54" rx="14" fill="#93C5FD" />
            <rect x="2" y="126" width="20" height="38" rx="10" fill="#BFDBFE" />
            <rect x="55" y="132" width="40" height="14" rx="7" fill="#BFDBFE" />
            <rect x="84" y="134" width="24" height="12" rx="6" fill="#FBCFE8" />
            <rect x="78" y="118" width="12" height="30" rx="6" fill="#F9A8D4" className="tap-finger" />
            <rect x="26" y="169" width="12" height="58" rx="6" fill="#2563EB" />
            <rect x="42" y="169" width="12" height="58" rx="6" fill="#2563EB" />
            <rect x="19" y="224" width="24" height="10" rx="5" fill="#86EFAC" />
            <rect x="37" y="224" width="24" height="10" rx="5" fill="#86EFAC" />
          </svg>

          <div className="tap-ring absolute left-[168px] top-[156px] h-8 w-8 rounded-full border-2 border-white/90" />
          <div className="tap-ring absolute left-[164px] top-[152px] h-10 w-10 rounded-full border border-blue-100/90 [animation-delay:0.2s]" />
          <div className="task-fly absolute left-[192px] top-[120px] rounded-lg border border-blue-100 bg-white px-3 py-1.5 shadow-lg">
            <p className="text-[10px] font-semibold text-slate-900">Task sent</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 hidden 2xl:block">
        <div className="floaty rounded-2xl border border-white/20 bg-white/5 p-3">
          <svg width="238" height="146" viewBox="0 0 238 146" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="112" r="20" stroke="#93C5FD" strokeWidth="7" />
            <circle cx="156" cy="112" r="20" stroke="#93C5FD" strokeWidth="7" />
            <path d="M50 112L84 76L111 112H156" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M84 76H132" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" />
            <path d="M132 76L121 59" stroke="#60A5FA" strokeWidth="6" strokeLinecap="round" />
            <circle cx="122" cy="35" r="13" fill="#F1F5F9" />
            <rect x="110" y="49" width="27" height="34" rx="10" fill="#2563EB" />
            <rect x="134" y="56" width="34" height="10" rx="5" fill="#1D4ED8" />
            <rect x="160" y="45" width="24" height="28" rx="8" fill="#38BDF8" />
            <rect x="106" y="80" width="12" height="24" rx="6" fill="#1E40AF" />
            <rect x="126" y="80" width="12" height="24" rx="6" fill="#1E40AF" />
          </svg>
        </div>
      </div>

      <div className="sparkle pointer-events-none absolute right-[13%] top-[26%] hidden h-3 w-3 rotate-45 bg-white/80 2xl:block" />
      <div className="sparkle pointer-events-none absolute left-[22%] top-[28%] hidden h-3 w-3 rotate-45 bg-white/80 2xl:block [animation-delay:0.9s]" />
    </>
  );
}
