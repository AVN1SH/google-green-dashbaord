import { Reveal } from "./Reveal";

const faqs = [
  { question: "Can Sketchbook extract data from password-protected bank statements?", answer: "Yes. If our system detects a locked PDF (like an encrypted bank statement), it securely prompts you for the password. The file is temporarily decrypted directly in RAM, parsed, and immediately cleared, maintaining absolute security throughout the process." },
  { question: "Does Sketchbook store my invoice data?", answer: "No. Sketchbook operates strictly in RAM. We process your documents and output the Excel sheet directly to your designated Google Drive folder. Your data is wiped from memory immediately after processing and never persisted on our servers." },
  { question: "How does the Google Drive automation work?", answer: "Simply connect your Google Drive and select a source folder. Then, set a sync frequency (e.g., every 1 hour, or 12 hours). Our agent runs in the background, extracts data from new invoices, and saves a Tally-ready Excel file back into your drive." },
  { question: "Is the generated Excel file ready for Tally?", answer: "Absolutely. The output Excel sheet is structured according to Tally's exact import standards, allowing you to directly import the data without any manual cleanup or re-formatting." },
  { question: "Can I upload invoices manually instead of using Google Drive?", answer: "Yes! You can use our secure manual form to upload invoices directly from your computer if you prefer not to configure the automated Drive sync." },
  { question: "How do payments work?", answer: "We offer flexible monthly billing based on your invoice processing volume. You can upgrade, downgrade, or cancel your plan at any time." }
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
                    <div className="pb-6 text-gray-600 transition-all duration-300 leading-relaxed">
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
