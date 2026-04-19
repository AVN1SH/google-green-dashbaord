import { Reveal } from "./Reveal";

const faqs = [
  { question: "How long does a typical project take?", answer: "A typical project timeline depends on the complexity and scope, but most standard implementations are completed within 4 to 6 weeks. We prioritize efficiency without compromising quality." },
  { question: "What if I don't know exactly what I need?", answer: "That's completely fine! Our team of experts will consult with you to understand your goals and constraints, then recommend the perfect suite of automation tools tailored specifically to your business." },
  { question: "Can I request just one service?", answer: "Yes, our modular approach allows you to select only the services you need. You can always add more capabilities as your business grows and your requirements evolve." },
  { question: "How do payments work?", answer: "We offer flexible payment terms. Typically, we require a partial deposit upfront, with the remainder billed at specific project milestones or upon final delivery." },
  { question: "What if I need changes after a project ends?", answer: "We provide post-launch support and maintenance packages. We're always here to partner with you for ongoing enhancements, scaling, and any necessary adjustments." }
];

export function FAQSection() {
  return (
    <section className="py-24 bg-[#FDFDFD]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-4">
            <Reveal className="sticky top-32">
              <div className="inline-flex items-center gap-2 mb-6">
                 <span className="flex h-2 w-2 rounded-full bg-brand-dark" />
                 <span className="text-sm font-medium text-gray-800">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
                Everything You <br/> Need to Know
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col border-t border-gray-200">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={100 * i} y={20}>
                  <details className="group border-b border-gray-200 [&_summary::-webkit-details-marker]:hidden cursor-pointer">
                    <summary className="flex items-center justify-between py-6 font-medium text-lg text-gray-900">
                      {faq.question}
                      <span className="transition duration-300 group-open:-rotate-45 ml-4 flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </summary>
                    <div className="pb-6 text-gray-600 transition-all duration-300">
                      {faq.answer}
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
