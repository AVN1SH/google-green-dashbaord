import Link from "next/link";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="bg-[#F9FAFB] pt-24 pb-12 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-24">
            
            <div className="md:col-span-5 lg:col-span-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-900" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900">Axnix</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed pr-8">
                Set smart automation rules monitor performance and receive real time insights to scale your marketing with confidence.
              </p>
            </div>

            <div className="md:col-span-7 lg:col-span-4 flex justify-between md:justify-around text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-6">Menu</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Home</Link></li>
                  <li><Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Features</Link></li>
                  <li><Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Pricing</Link></li>
                  <li><Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Blogs</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-6">Info</h4>
                <ul className="space-y-4">
                  <li><Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy policy</Link></li>
                  <li><Link href="#" className="text-gray-500 hover:text-gray-900 transition-colors">Support</Link></li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-4">
              <h4 className="font-semibold text-gray-900 mb-6">Subscribe to our newsletter</h4>
              <p className="text-sm text-gray-500 mb-6">
                Stay updated with the latest marketing insights automation tips and product updates.
              </p>
              <form className="flex gap-2 max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-all"
                  required
                />
                <button type="submit" className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 flex-shrink-0">
                  Subscribe
                </button>
              </form>
            </div>
            
          </div>
          
          <div className="text-center border-t border-gray-200 pt-8 mt-8">
            <p className="text-sm text-gray-500">
              Copyright ©Pixcut Studio LLC
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
