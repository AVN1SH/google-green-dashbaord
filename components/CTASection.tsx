import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative rounded-[3rem] bg-[radial-gradient(ellipse_at_center,_#d9f99d_0%,_#f2f4f7_100%)] px-6 py-20 text-center overflow-hidden border border-gray-100 flex flex-col items-center shadow-sm">
            {/* Background elements */}
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#a3e635] to-[#84cc16] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
            
            <h2 className="mx-auto max-w-2xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Put your invoicing on autopilot <br/> with Sketchbook
            </h2>
            <p className="mx-auto max-w-xl text-lg text-gray-600 mb-10">
              Let our smart agents extract data, sync with your Google Drive, and instantly generate Tally-ready Excel sheets securely.
            </p>
            
            <button className="shimmer-dark flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-gray-800 shadow-xl hover:-translate-y-0.5">
              <span className="relative z-10">Get Started Free</span>
            </button>

            {/* Left Circular Decor */}
            <div className="absolute left-10 md:left-24 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center w-28 h-28 rounded-full bg-white shadow-xl rotate-[15deg]">
               <svg className="w-full h-full rotate-[-105deg]" viewBox="0 0 36 36">
                 <path className="text-gray-100" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                 <path className="text-brand-dark" strokeWidth="3" strokeDasharray="100, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
               </svg>
               <div className="absolute text-center">
                  <span className="block text-xl font-bold -rotate-[15deg]">RAM</span>
                  <span className="block text-[8px] text-gray-500 -rotate-[15deg]">Processed</span>
               </div>
            </div>

            {/* Right Card Decor */}
            <div className="absolute right-10 md:right-24 top-1/2 -translate-y-1/2 hidden md:flex flex-col bg-white rounded-2xl p-4 shadow-xl border border-gray-100 rotate-[-10deg] w-48">
               <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] text-gray-500">Drive Synced</span>
               </div>
               <div className="text-xl font-bold mb-4">Tally Export</div>
               
               <div className="bg-gray-50 rounded-full px-2 py-1.5 flex items-center gap-1.5 text-[8px] font-medium text-gray-800 w-fit border border-gray-100 shadow-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                  Successfully generated
               </div>
            </div>
            
          </div>
        </Reveal>
      </div>
    </section>
  );
}
