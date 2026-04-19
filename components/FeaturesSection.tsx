import { CheckCircle2, ChevronRight, MoreVertical } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#F2F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <Reveal>
                <div className="flex items-center gap-2 mb-6">
                  <span className="flex h-2 w-2 rounded-full bg-brand-dark" />
                  <span className="text-sm font-medium text-gray-800">Core features</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                  Everything you need nothing extra
                </h2>
                
                <p className="mt-6 text-lg text-gray-600">
                  A tight, powerful set of features crafted to make your team faster and more focused.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Scrolling Right Column (Feature Cards) */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Card 1: Smart tasks */}
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Smart tasks</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Automate and manage marketing tasks with intelligent precision.</h3>
                  <p className="text-gray-500 mb-8">Automate marketing tasks efficiently to boost team productivity.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Automate tasks to boost team productivity.
                  </div>
                </div>
                {/* Visual */}
                <div className="w-full md:w-72 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                   <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold text-gray-900">Task performance analytics</span>
                      <MoreVertical className="h-4 w-4 text-gray-400" />
                   </div>
                   <div className="flex items-end justify-between h-32 gap-2">
                       <div className="w-full bg-brand-light rounded-t-sm h-[40%]" />
                       <div className="w-full bg-brand rounded-t-sm h-[80%]" />
                       <div className="w-full bg-brand-dark rounded-t-sm h-[100%]" />
                       <div className="w-full bg-brand-light rounded-t-sm h-[60%]" />
                       <div className="w-full bg-brand-light rounded-t-sm h-[30%]" />
                   </div>
                   <div className="flex justify-between text-[10px] text-gray-400 mt-3">
                       <span>Jan</span><span>Feb</span><span className="text-gray-900 font-bold">Mar</span><span>Apr</span><span>May</span>
                   </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Auto workflows */}
            <Reveal delay={150}>
              <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Auto workflows</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Automate marketing workflows to drive smarter campaign performance.</h3>
                  <p className="text-gray-500 mb-8">Build automated workflows to simplify marketing campaign management.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Automate workflows for seamless campaigns.
                  </div>
                </div>
                {/* Visual */}
                <div className="w-full md:w-72 bg-brand rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[240px]">
                   {/* Circle progress container */}
                   <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-white mb-8">
                     <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                       <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                       <path className="text-brand-dark" strokeWidth="3" strokeDasharray="43, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                     </svg>
                     <div className="absolute text-center">
                        <span className="block text-xl font-bold">43%</span>
                        <span className="block text-[8px] text-gray-500">Total</span>
                     </div>
                   </div>

                   {/* Floating card */}
                   <div className="absolute bottom-6 right-6 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 border border-gray-100">
                     <div>
                       <div className="text-[10px] text-gray-500">Workflow triggered</div>
                       <div className="text-sm font-bold">$275.00</div>
                     </div>
                     <Image src="https://picsum.photos/seed/face1/64/64" alt="user" width={24} height={24} className="rounded-full" />
                   </div>
                   
                   <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1 text-[8px] font-medium text-gray-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Successfully credited
                   </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Team sync */}
            <Reveal delay={200}>
               <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Team sync</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Keep your marketing team aligned with real-time collaboration tools.</h3>
                  <p className="text-gray-500 mb-8">Collaborate in real time to streamline tasks, share updates, and boost team productivity.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Synchronize your team for efficient workflows.
                  </div>
                </div>
                {/* Visual */}
                <div className="w-full md:w-72 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
                   <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-sm self-start whitespace-nowrap">
                      <div className="flex -space-x-2">
                        <Image src="https://picsum.photos/seed/f1/32/32" width={24} height={24} alt="avatar" className="rounded-full border-2 border-white z-20" />
                        <Image src="https://picsum.photos/seed/f2/32/32" width={24} height={24} alt="avatar" className="rounded-full border-2 border-white z-10" />
                        <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white z-0 flex items-center justify-center text-[8px] font-bold">+2</div>
                      </div>
                      <span className="text-xs font-semibold">Highly effective</span>
                   </div>

                   <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-sm self-end whitespace-nowrap">
                      <span className="text-xs font-semibold pl-2">Game changing</span>
                      <Image src="https://picsum.photos/seed/f3/32/32" width={24} height={24} alt="avatar" className="rounded-full border-2 border-white" />
                   </div>

                   <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-sm self-start whitespace-nowrap">
                      <Image src="https://picsum.photos/seed/f4/32/32" width={24} height={24} alt="avatar" className="rounded-full border-2 border-white" />
                      <div>
                         <span className="block text-xs font-semibold">Smart growth</span>
                         <span className="block text-[8px] text-gray-400">Yes, it's totally right!</span>
                      </div>
                   </div>

                   <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-sm self-end whitespace-nowrap">
                      <div className="flex -space-x-2">
                         <Image src="https://picsum.photos/seed/f5/32/32" width={24} height={24} alt="avatar" className="rounded-full border-2 border-white z-20" />
                         <Image src="https://picsum.photos/seed/f6/32/32" width={24} height={24} alt="avatar" className="rounded-full border-2 border-white z-10" />
                      </div>
                      <span className="text-xs font-semibold">Conversion lift</span>
                   </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4: Insights hub */}
            <Reveal delay={250}>
               <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Insights hub</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Get real-time insights to boost campaign results.</h3>
                  <p className="text-gray-500 mb-8">Track performance metrics instantly to make smarter marketing decisions faster.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Access smarter marketing insights.
                  </div>
                </div>
                {/* Visual */}
                <div className="w-full md:w-72 bg-brand rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-[#a3e635] to-[#65a30d] text-white">
                   <div className="flex items-center justify-between mb-8 opacity-90">
                      <span className="text-xs font-semibold text-gray-900">Task performance analytics</span>
                      <MoreVertical className="h-4 w-4 text-gray-900" />
                   </div>
                   
                   <div className="relative mx-auto mt-4 w-40 h-20 overflow-hidden mb-6">
                     {/* Gauge Background */}
                     <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[12px] border-white/30" />
                     {/* Gauge Fill (Fake rotation via CSS logic) */}
                     <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[12px] border-white border-b-transparent border-l-transparent transform rotate-[-45deg]" />
                     
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-gray-900">
                        <span className="block text-3xl font-bold">68</span>
                        <span className="block text-[10px] font-medium pb-2">Great</span>
                     </div>
                   </div>

                   <div className="flex justify-between items-center bg-white/20 rounded-xl p-3 backdrop-blur-sm text-gray-900">
                      <div className="text-center w-full border-r border-gray-900/10">
                         <div className="text-sm font-bold">44%</div>
                      </div>
                      <div className="text-center w-full">
                         <div className="text-sm font-bold">56%</div>
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
