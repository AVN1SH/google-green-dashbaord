import { Reveal } from "./Reveal";

export function LogoCloud() {
  return (
    <section className="py-12 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium text-gray-500 mb-8">
            Trusted by accounting and finance teams globally
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-60 grayscale filter transition-all hover:grayscale-0">
            <div className="flex items-center gap-2 font-bold text-xl font-serif">
              <div className="h-6 w-6 rounded-full bg-gray-900" /> Accosoft
            </div>
            <div className="flex items-center gap-2 font-bold text-xl font-serif">
              <div className="h-6 w-6 transform rotate-45 bg-red-600" /> Bookkeeper
            </div>
            <div className="flex items-center gap-2 font-bold text-xl font-serif">
              <div className="h-6 w-6 rounded-sm bg-purple-600" /> TallyPro
            </div>
            <div className="flex items-center gap-2 font-bold text-[22px] tracking-tighter">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z"/></svg>
               FINCORP<span className="text-xs align-top inline-block">®</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-orange-600">
               <div className="h-6 w-6 rounded-full border-[4px] border-orange-600" /> Auditoria
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
