import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-gray-900" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">Axnix</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <Link href="#" className="font-medium text-gray-600 hover:text-gray-900">About Us</Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-gray-900">Features</Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-gray-900">Blog</Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-gray-900">Pricing</Link>
          <Link href="#" className="font-medium text-gray-600 hover:text-gray-900">Contact us</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#" className="hidden md:flex rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
