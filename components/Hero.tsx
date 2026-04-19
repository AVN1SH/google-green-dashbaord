import { Play } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none z-[-1] flex justify-center">
        <div className="h-[800px] w-full max-w-[1200px] bg-[radial-gradient(ellipse_at_top,_#a3e635_0%,_transparent_70%)] opacity-30 blur-3xl transform -translate-y-64" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-dark animate-pulse" />
            <span className="text-sm font-medium text-gray-800">Multi-Channel Marketing</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            Automate workflows <br/> boost conversions
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
            Axnix makes it simple to run email campaigns, trigger workflows, and optimize conversions — all in one smart platform.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#" className="shimmer-wrapper rounded-full bg-gray-900 px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-gray-800 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 w-full sm:w-auto">
              Get started free
            </Link>
            <Link href="#" className="flex items-center gap-2 rounded-full bg-white border border-gray-200 px-8 py-3.5 text-base font-medium text-gray-900 transition-all hover:bg-gray-50 shadow-sm w-full sm:w-auto">
              <Play className="h-4 w-4" fill="currentColor" />
              Watch demo
            </Link>
          </div>
        </Reveal>

        {/* Dashboard Mockup */}
        <Reveal delay={500} y={60}>
          <div className="mx-auto mt-16 max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl relative">
            <div className="bg-gray-50 h-12 border-b border-gray-200 flex items-center px-4 gap-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-amber-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <div className="mx-auto flex h-6 w-64 items-center justify-center rounded bg-white border border-gray-200 text-[10px] text-gray-400">
                app.yourcorp.io
              </div>
            </div>
            {/* Dashboard Inner Skeleton to look like the UI */}
            <div className="p-6 md:p-8 flex gap-6 text-left">
              <div className="hidden md:flex w-48 flex-col gap-4 border-r border-gray-100 pr-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-lg bg-brand flex items-center justify-center font-bold text-gray-900">A</div>
                  <span className="font-semibold text-gray-800">Axnix</span>
                </div>
                <div className="h-8 w-full rounded bg-gray-100" />
                <div className="h-8 w-full rounded bg-transparent" />
                <div className="h-8 w-full rounded bg-transparent" />
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Welcome Back, Robert</h2>
                    <p className="text-gray-500 text-sm mt-1">Here is a quick overview of your marketing performance today.</p>
                  </div>
                  <div className="h-10 w-32 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium">
                    + Create Campaign
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Chart 1 */}
                  <div className="rounded-xl border border-gray-100 p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">Campaign Performance Overview</h3>
                    <div className="h-32 w-full flex items-end gap-1">
                      {[40, 70, 45, 90, 65, 80, 50, 100, 60].map((h, i) => (
                        <div key={i} className="flex-1 bg-brand-light rounded-t-sm" style={{ height: `${h}%` }}>
                           {h === 100 && <div className="w-full h-full bg-brand rounded-t-sm" />}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Chart 2 */}
                  <div className="rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between">
                    <h3 className="text-sm font-semibold text-gray-800 mb-4">Revenue by Platform</h3>
                    <div className="flex-1 flex items-center justify-center relative">
                      <svg viewBox="0 0 36 36" className="h-32 w-32 -rotate-90">
                        <path className="text-gray-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path className="text-brand" strokeDasharray="41, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                      </svg>
                      <div className="absolute flex flex-col items-center">
                        <span className="text-2xl font-bold">41%</span>
                      </div>
                    </div>
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
