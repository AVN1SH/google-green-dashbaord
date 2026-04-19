import Image from "next/image";
import { Reveal } from "./Reveal";

const testimonials = [
  {
    quote: "Axnix streamlined our marketing workflows made campaigns effortless and increased conversions within weeks.",
    name: "Emma",
    role: "Marketing manager",
    image: "https://picsum.photos/seed/t1/48/48"
  },
  {
    quote: "Axnix has completely transformed our marketing workflow. Its intuitive automation tools save countless hours each week, boost team productivity, and ensure every campaign runs smoothly, efficiently, and delivers measurable results.",
    name: "Jane doe",
    role: "Saas founder",
    image: "https://picsum.photos/seed/t2/48/48"
  },
  {
    quote: "Real-time analytics from Axnix empowered our team to make smarter marketing decisions instantly, optimize campaigns effectively, and identify growth opportunities faster than ever before.",
    name: "Emily clark",
    role: "Growth specialist",
    image: "https://picsum.photos/seed/t3/48/48"
  },
  {
    quote: "From lead capture to final conversion, Axnix seamlessly streamlined our entire marketing process, improving efficiency, enhancing customer engagement, boosting campaign performance, and helping our team achieve consistent, measurable business growth faster.",
    name: "Michael lee",
    role: "Digital marketing lead",
    image: "https://picsum.photos/seed/t4/48/48"
  },
  {
    quote: "Axnix automation reduced manual work and helped our team focus on strategy.",
    name: "Daniel carter",
    role: "Growth director",
    image: "https://picsum.photos/seed/t5/48/48"
  },
  {
    quote: "Axnix gave us complete control over our marketing automation. Campaign execution is smoother, reporting is clearer, and our overall conversion rates have improved dramatically.",
    name: "Sophia martinez",
    role: "Head of marketing",
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
            Trusted by professionals <br/> using axnix
          </h2>
          <p className="text-lg text-gray-600">
            Marketing teams worldwide rely on Axnix to automate campaigns, track performance, and boost conversions effortlessly.
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
