import { CheckCircle2, ChevronRight, MoreVertical } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#F2F4F7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
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
                  A powerful set of features crafted to make accounting faster and completely secure.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Card 1 */}
            <Reveal delay={100}>
              <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Upload & Convert</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Easily upload invoices from your PC, manual forms, or Google Drive.</h3>
                  <p className="text-gray-500 mb-8">Our AI agent extracts data and generates Tally-ready Excel files instantly.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Convert files intuitively with smart text extraction.
                  </div>
                </div>
                <div className="w-full md:w-72 bg-gray-50 rounded-2xl p-6 border border-gray-100">
                   <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-semibold text-gray-900">Processing Speed</span>
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

            {/* Card 2: Bank Statements */}
            <Reveal delay={125}>
              <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Bank Statements</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Process locked bank statements effortlessly.</h3>
                  <p className="text-gray-500 mb-8">We detect encrypted PDFs and safely prompt you for a password to unlock and extract transactions in memory.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Secure on-the-fly decryption.
                  </div>
                </div>
                <div className="w-full md:w-72 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4 relative overflow-hidden min-h-[240px] justify-center items-center">
                   <div className="bg-white rounded-xl p-4 shadow-xl border border-gray-100 w-full z-10 relative">
                      <div className="flex items-center gap-2 mb-4">
                         <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center text-red-500">
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                         </div>
                         <div>
                           <div className="text-xs font-bold text-gray-900">statement_oct.pdf</div>
                           <div className="text-[10px] text-gray-500">Password protected</div>
                         </div>
                      </div>
                      <div className="flex gap-2">
                         <div className="flex-1 bg-gray-50 border border-gray-100 rounded px-2 py-2 flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            <div className="w-1.5 h-1.5 px-0.5 animate-pulse text-[10px] text-gray-400">|</div>
                         </div>
                         <div className="bg-gray-900 text-white rounded px-3 py-2 text-[10px] font-bold flex items-center shadow-lg cursor-pointer">Unlock</div>
                      </div>
                   </div>
                   {/* Background pattern */}
                   <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={150}>
              <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Drive Automation</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Automate invoice processing with intelligent Google Drive folder sync.</h3>
                  <p className="text-gray-500 mb-8">Select a folder and set a frequency (1hr, 12hr). Sketchbook scans, parses, and saves back to Drive.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Run agents globally without manual intervention.
                  </div>
                </div>
                <div className="w-full md:w-72 bg-brand rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center min-h-[240px]">
                   <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-white mb-8">
                     <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 36 36">
                       <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                       <path className="text-brand-dark" strokeWidth="3" strokeDasharray="100, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                     </svg>
                     <div className="absolute text-center">
                        <span className="block text-xl font-bold">12h</span>
                        <span className="block text-[8px] text-gray-500">Interval</span>
                     </div>
                   </div>

                   <div className="absolute bottom-6 right-6 bg-white rounded-xl p-3 shadow-lg flex items-center gap-3 border border-gray-100">
                     <div>
                       <div className="text-[10px] text-gray-500">Drive Synced</div>
                       <div className="text-sm font-bold">14 Docs</div>
                     </div>
                   </div>
                   
                   <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1 text-[8px] font-medium text-gray-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Success
                   </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={200}>
               <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Absolute Privacy</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Zero data storage. Complete peace of mind for your financial data.</h3>
                  <p className="text-gray-500 mb-8">We process your invoices directly in RAM. Your data is never stored on our servers and passes securely back.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Ensure absolute privacy natively.
                  </div>
                </div>
                <div className="w-full md:w-72 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
                   <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-sm self-start whitespace-nowrap">
                      <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-white" /></div>
                      <span className="text-xs font-semibold">RAM Processing</span>
                   </div>

                   <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-sm self-end whitespace-nowrap">
                      <span className="text-xs font-semibold pl-2">Zero Logs</span>
                      <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-white" /></div>
                   </div>

                   <div className="bg-white rounded-full p-1.5 pr-4 flex items-center gap-3 shadow-sm self-start whitespace-nowrap">
                      <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center"><CheckCircle2 className="w-3 h-3 text-white" /></div>
                      <div>
                         <span className="block text-xs font-semibold">Instantly Wiped</span>
                         <span className="block text-[8px] text-gray-400">Post-processing clean</span>
                      </div>
                   </div>
                </div>
              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal delay={250}>
               <div className="flex flex-col md:flex-row gap-8 rounded-3xl bg-white p-8 md:p-10 shadow-sm border border-gray-100 items-center transition-all hover:shadow-md">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-gray-50 px-3 py-1 mb-6">
                    <span className="flex h-2 w-2 rounded-full bg-brand" />
                    <span className="text-xs font-medium text-gray-700">Tally Ready</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Seamlessly import processed data directly into Tally.</h3>
                  <p className="text-gray-500 mb-8">Our automatic Excel exports are structured according to Tally's import standards, avoiding manual formatting.</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 border-t border-gray-100 pt-6">
                     <CheckCircle2 className="h-4 w-4" />
                     Skip entirely the manual data entry.
                  </div>
                </div>
                <div className="w-full md:w-72 bg-brand rounded-2xl p-6 relative overflow-hidden bg-gradient-to-br from-[#a3e635] to-[#65a30d] text-white">
                   <div className="flex items-center justify-between mb-8 opacity-90">
                      <span className="text-xs font-semibold text-gray-900">Format Match</span>
                      <MoreVertical className="h-4 w-4 text-gray-900" />
                   </div>
                   
                   <div className="relative mx-auto mt-4 w-40 h-20 overflow-hidden mb-6">
                     <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[12px] border-white/30" />
                     <div className="absolute top-0 left-0 w-40 h-40 rounded-full border-[12px] border-white border-b-transparent border-l-transparent transform rotate-[45deg]" />
                     
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-gray-900">
                        <span className="block text-3xl font-bold">100</span>
                        <span className="block text-[10px] font-medium pb-2">Ready</span>
                     </div>
                   </div>

                   <div className="flex justify-between items-center bg-white/20 rounded-xl p-3 backdrop-blur-sm text-gray-900">
                      <div className="text-center w-full border-r border-gray-900/10">
                         <div className="text-sm font-bold">Tally</div>
                      </div>
                      <div className="text-center w-full">
                         <div className="text-sm font-bold">Excel</div>
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
