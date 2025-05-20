import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "How can I join Arden Flux?",
    answer: "We regularly scout for talented players across multiple games. Submit your application through our 'Join the Team' section, including your competitive history and achievements."
  },
  {
    id: 2,
    question: "Where is Arden Flux based?",
    answer: "We're proudly based in the San Francisco Bay Area, with our training facility located in the heart of Silicon Valley."
  },
  {
    id: 3,
    question: "Do you offer sponsorships?",
    answer: "Yes, we partner with brands that align with our vision. Contact our partnership team for collaboration opportunities."
  },
  {
    id: 4,
    question: "How can I purchase team merchandise?",
    answer: "Our merch drops happen monthly through our online store. Join our newsletter to get early access to new collections."
  },
  {
    id: 5,
    question: "Where can I watch Arden Flux compete?",
    answer: "Follow us on Twitch and YouTube for live matches. Major tournaments are also broadcast on official league channels."
  }
];

const FAQs: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-flux-orange font-display uppercase text-sm tracking-widest">GOT QUESTIONS?</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className={`border rounded-lg transition-all duration-300 ${
                  openId === faq.id
                    ? 'border-flux-orange bg-flux-gray-900/50 shadow-[0_0_15px_rgba(255,94,0,0.1)]'
                    : 'border-flux-gray-800 bg-flux-gray-900/30'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <span className="font-display font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-flux-orange transition-transform duration-300 ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <div
                  className={`px-6 transition-all duration-300 overflow-hidden ${
                    openId === faq.id ? 'max-h-40 pb-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-flux-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;