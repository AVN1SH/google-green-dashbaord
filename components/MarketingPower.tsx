import { LineChart, Settings, Users } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function MarketingPower() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-dark" />
            <span className="text-sm font-medium text-gray-800">Accounting power</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Unlock the Full Power of Automated <br/> Invoice Processing
          </h2>
          <p className="text-lg text-gray-600">
            Sync folders, extract data securely in RAM, and push Tally-ready Excel sheets right to your Google Drive.
          </p>
        </Reveal>

        {/* Top 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Reveal delay={100} y={30}>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 h-full flex flex-col justify-between">
              <div className="space-y-4 mb-20">
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <div className="text-gray-400"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                  <span className="text-sm font-medium text-gray-800">RAM Processing</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-800">Direct to Drive</span>
                </div>
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100 opacity-60">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="text-sm font-medium text-gray-800">Tally Integrated</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Data Extraction</h3>
                <p className="text-sm text-gray-500">Turn raw invoices into structured data to optimize accounting and drive smarter growth.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} y={30}>
             <div className="rounded-3xl border border-gray-100 bg-white p-8 h-full flex flex-col justify-between items-center text-center shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                  <span className="flex items-center gap-1.5 rounded-full border border-gray-100 bg-white px-2 py-1 text-[10px] shadow-sm"><div className="w-1.5 h-1.5 bg-brand-dark rounded-full"/>Active</span>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-brand mb-6 flex items-center justify-center mt-8 shadow-lg shadow-brand/20">
                   <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">Automated Agent Sync</h4>
                <p className="text-gray-500 mb-12">Next sync in <span className="text-brand-dark font-medium">1 Hour</span></p>
                
                <div className="w-full text-left">
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Agent Automation</h3>
                   <p className="text-sm text-gray-500">Automate processing to accelerate accounting efficiently and securely without human intervention.</p>
                </div>
             </div>
          </Reveal>

          <Reveal delay={300} y={30}>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 h-full flex flex-col justify-between">
              <div className="bg-white rounded-xl border border-gray-100 p-4 shadow-sm mb-12 w-full">
                <div className="flex justify-between items-center mb-4">
                   <span className="text-xs font-semibold text-gray-900">Sync Frequency</span>
                   <span className="text-[10px] text-gray-400 bg-gray-50 px-2 py-0.5 rounded">Every Interval</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-gray-400 mb-4 px-2">
                   <span>1h</span><span>3h</span><span className="text-gray-900">6h</span><span className="text-white bg-brand rounded-full w-6 h-6 flex items-center justify-center -m-1">12h</span><span className="text-gray-900">24h</span>
                </div>
                <div className="bg-brand-light/30 rounded text-[10px] font-semibold text-brand-dark text-center py-1 mb-4">
                   Background
                </div>
                <div className="flex justify-between items-center text-[10px] border-t border-gray-100 pt-3">
                   <span className="text-gray-400">Target</span>
                   <span className="text-gray-900 font-medium">Google Drive Folder</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Efficiency boost</h3>
                <p className="text-sm text-gray-500">Improve team performance with automated extraction and intelligent data aggregation.</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom 2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <Reveal delay={100} y={30}>
              <div className="rounded-3xl border border-gray-100 bg-white p-8 h-full shadow-sm flex flex-col justify-between">
                 <div>
                    <div className="flex justify-between items-start mb-6">
                       <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Invoices 24 hours</h4>
                          <div className="flex flex-col text-[10px] text-gray-400 gap-2 h-24 justify-between mt-4">
                             <span>10k</span><span>8k</span><span>6k</span><span>4k</span><span>2k</span><span>0</span>
                          </div>
                       </div>
                       <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-medium">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                          100% vs last month
                       </div>
                    </div>
                 </div>
                 {/* Decorative Graph overlaying empty area */}
                 <div className="w-full h-32 -mt-24 relative overflow-hidden mb-6">
                    <svg viewBox="0 0 400 100" className="w-full h-full preserveAspectRatio-none" preserveAspectRatio="none">
                       <path d="M0,80 Q50,70 100,40 T200,60 T300,30 T400,50 L400,100 L0,100 Z" fill="#d9f99d" opacity="0.5"/>
                       <path d="M0,80 Q50,70 100,40 T200,60 T300,30 T400,50" stroke="#8FE600" strokeWidth="2" fill="none"/>
                    </svg>
                 </div>
                 
                 <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Accounting Intelligence</h3>
                    <p className="text-sm text-gray-500">Turn real-time data into insights to optimize finances and drive smarter business growth.</p>
                 </div>
              </div>
           </Reveal>
           
           <Reveal delay={200} y={30}>
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 h-full shadow-sm flex flex-col justify-between relative overflow-hidden">
                 <div className="absolute right-0 top-0 w-3/4 h-3/4 pointer-events-none">
                     <svg viewBox="0 0 200 200" className="w-full h-full text-brand right-0 absolute transform translate-x-1/4 -translate-y-1/4" preserveAspectRatio="none">
                        <path d="M0,200 Q50,150 100,200 T200,100" stroke="currentColor" strokeWidth="2" fill="none" />
                        <circle cx="200" cy="100" r="4" fill="currentColor" />
                     </svg>
                     <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-gray-400 px-4">
                        <span>May</span><span>Jun</span><span className="text-gray-900 font-bold border-t-2 border-gray-900 pt-1 -mt-1">Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span>
                     </div>
                 </div>
                 
                 <div className="relative z-10 w-2/3">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Efficiency boost</h3>
                    <p className="text-sm text-gray-500">Transform accounting results with data-driven workflows and intelligent invoice automation tools.</p>
                 </div>
              </div>
           </Reveal>
        </div>

      </div>
    </section>
  );
}
