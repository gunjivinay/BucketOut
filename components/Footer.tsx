import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Image src="/logo.png" alt="BucketOut logo" width={24} height={24} className="h-6 w-6 rounded" />
            <span className="text-[#0e4b62]">BucketOut</span>
          </p>
          <p className="mt-1 text-sm text-slate-500">Instant task marketplace for posters and taskers.</p>
        </div>
        <nav aria-label="Footer" className="flex w-full flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-600 sm:w-auto sm:justify-start sm:gap-4">
          <a className="transition hover:text-slate-900" href="#">Privacy</a>
          <a className="transition hover:text-slate-900" href="#">Terms</a>
          <a className="transition hover:text-slate-900" href="#">Support</a>
          <a className="transition hover:text-slate-900" href="#">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
