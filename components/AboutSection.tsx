import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal y={20}>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-dark" />
              <span className="text-sm font-medium text-gray-800">About us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Empowering growth <br className="hidden md:block"/> through automation
            </h2>
            
            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
              Saaset is built on a simple idea — work should flow, not fight you. We created a smart workspace that brings tasks, automation, collaboration,
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-gray-100 pt-8">
              <div>
                <div className="text-4xl font-bold text-gray-900">200+</div>
                <div className="mt-2 text-sm text-gray-600">Workflows automated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">98%</div>
                <div className="mt-2 text-sm text-gray-600">Task accuracy with ai</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900">50+</div>
                <div className="mt-2 text-sm text-gray-600">Smart integrations</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} y={40} className="relative">
            <div className="rounded-3xl bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100">
              <div className="flex justify-end mb-6">
                 <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-xs font-medium text-gray-900">
                   $540,50,000
                 </span>
              </div>
              
              {/* Fake Graph */}
              <div className="relative h-48 w-full">
                 <svg className="w-full h-full" viewBox="0 0 400 150" fill="none" preserveAspectRatio="none">
                    <path d="M0,100 C50,100 100,50 150,80 C200,110 250,30 300,50 C350,70 400,20 400,20 L400,150 L0,150 Z" fill="url(#gradient)" opacity="0.2"/>
                    <path d="M0,100 C50,100 100,50 150,80 C200,110 250,30 300,50 C350,70 400,20 400,20" stroke="#8FE600" strokeWidth="4" strokeLinecap="round" />
                    
                    <defs>
                       <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#8FE600" stopOpacity="0.5"/>
                          <stop offset="100%" stopColor="#8FE600" stopOpacity="0"/>
                       </linearGradient>
                    </defs>
                 </svg>
                 
                 {/* Graph Points */}
                 <div className="absolute top-[34px] left-[61%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-brand-dark" />
                 
                 <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-xs font-medium text-gray-400 px-4">
                    <span>May</span>
                    <span>Jun</span>
                    <span className="text-gray-900 font-bold border-t-2 border-brand-dark pt-1 -mt-1">Jul</span>
                    <span>Aug</span>
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                 </div>
              </div>
            </div>
            
            {/* Background Blob decoration */}
            <div className="absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_center,_#a3e635_0%,_transparent_60%)] opacity-10 blur-2xl" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
