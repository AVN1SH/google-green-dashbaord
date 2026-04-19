import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

export function PricingSection() {
  return (
    <section className="py-24 bg-[#F2F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-dark" />
            <span className="text-sm font-medium text-gray-800">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Flexible pricing plans <br/> choose your best.
          </h2>
          <p className="text-lg text-gray-600">
            Select the plan that fits your business needs and scale effortlessly with Axnix.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {/* Card 1 */}
          <Reveal delay={100} y={40}>
            <div className="rounded-[2rem] bg-white p-10 shadow-sm border border-gray-100 flex flex-col text-center transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Starter</h3>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-gray-900">$19</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">Billed monthly</p>
              <button className="w-full rounded-full border border-gray-200 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors mb-8">
                Get started now
              </button>
              <ul className="space-y-4 text-left text-sm text-gray-600">
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> Limited access to core features.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> Basic analytics and reporting.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> No additional add-ons.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> Web, desktop & mobile apps.</li>
              </ul>
            </div>
          </Reveal>

          {/* Card 2 (Premium - Dark) */}
          <Reveal delay={200} y={40}>
            <div className="rounded-[2.5rem] bg-gray-900 p-10 shadow-xl border border-gray-800 flex flex-col text-center text-white scale-105 relative z-10 transition-all hover:shadow-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">Premium</h3>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-gray-400 mb-1">/month</span>
              </div>
              <p className="text-sm text-gray-400 mb-8">Billed monthly</p>
              <button className="w-full rounded-full bg-white py-3 border border-white text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors mb-8 shimmer-wrapper relative overflow-hidden">
                <span className="relative z-10">Get started now</span>
              </button>
              <ul className="space-y-4 text-left text-sm text-gray-300">
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-white" /> Limited access to core features.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-white" /> Basic analytics and reporting.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-white" /> No additional add-ons.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-white" /> Web, desktop & mobile apps.</li>
              </ul>
            </div>
          </Reveal>

          {/* Card 3 (Starter again based on UI image) */}
          <Reveal delay={300} y={40}>
            <div className="rounded-[2rem] bg-white p-10 shadow-sm border border-gray-100 flex flex-col text-center transition-all hover:shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Starter</h3>
              <div className="flex items-end justify-center gap-1 mb-2">
                <span className="text-5xl font-bold text-gray-900">$99</span>
                <span className="text-gray-500 mb-1">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-8">Billed monthly</p>
              <button className="w-full rounded-full border border-gray-200 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors mb-8">
                Get started now
              </button>
              <ul className="space-y-4 text-left text-sm text-gray-600">
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> Limited access to core features.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> Basic analytics and reporting.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> No additional add-ons.</li>
                <li className="flex items-center gap-3"><Check className="h-4 w-4 text-gray-900" /> Web, desktop & mobile apps.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
