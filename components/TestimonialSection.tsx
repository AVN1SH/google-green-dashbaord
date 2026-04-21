import Image from "next/image";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote: "Sketchbook streamlined our accounting workflows, made invoice processing effortless and reduced manual entry within weeks.",
    name: "Emma",
    role: "Finance manager",
    image: "https://picsum.photos/seed/t1/48/48"
  },
  {
    quote: "Sketchbook has completely transformed our billing workflow. Its automated Drive sync runs efficiently, ensuring every invoice is Tally-ready instantly.",
    name: "Jane doe",
    role: "Accounting lead",
    image: "https://picsum.photos/seed/t2/48/48"
  },
  {
    quote: "RAM-based processing from Sketchbook empowered our team to secure client data instantly while optimizing the entire pipeline safely.",
    name: "Emily clark",
    role: "CPA Partner",
    image: "https://picsum.photos/seed/t3/48/48"
  },
  {
    quote: "From invoice upload to final Tally export, Sketchbook seamlessly streamlined our entire data entry process without compromising security.",
    name: "Michael lee",
    role: "Tax specialist",
    image: "https://picsum.photos/seed/t4/48/48"
  },
  {
    quote: "Sketchbook's agent automation reduced manual work entirely and helped our financial team focus on strategy rather than spreadsheets.",
    name: "Daniel carter",
    role: "Director of Finance",
    image: "https://picsum.photos/seed/t5/48/48"
  },
  {
    quote: "Sketchbook gave us complete control over our accounts. Syncing to Drive is smoother, and our overall compilation rates have improved dramatically.",
    name: "Sophia martinez",
    role: "Head of Accounting",
    image: "https://picsum.photos/seed/t6/48/48"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-brand-dark" />
            <span className="text-sm font-medium text-gray-800">Testimonial</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Trusted by professionals <br/> using Sketchbook
          </h2>
          <p className="text-lg text-gray-600">
            Accounting teams worldwide rely on Sketchbook to automate invoices, track performance, and generate Tally sheets effortlessly.
          </p>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={100 * (i % 3)} y={30} className="break-inside-avoid">
              <div className="rounded-[2rem] bg-[#F9FAFB] p-8 border border-gray-100 flex flex-col justify-between h-full">
                <svg className="w-8 h-8 text-brand-dark mb-6" viewBox="0 0 24 24" fill="currentColor">
                   <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-900 mb-8 leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <div>
                    <h4 className="font-semibold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                  <Image src={t.image} alt={t.name} width={40} height={40} className="rounded-full grayscale" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
