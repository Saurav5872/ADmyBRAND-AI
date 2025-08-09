'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What is ADmyBRAND AI Suite?",
    answer: "It's an all-in-one AI-powered marketing tool designed to automate content creation, ad placement, and campaign analytics.",
  },
  {
    question: "Do I need coding experience to use this tool?",
    answer: "No. The interface is user-friendly and built for marketers, not developers.",
  },
  {
    question: "Can I integrate it with my existing tools?",
    answer: "Yes, we support integrations with popular platforms like HubSpot, Google Ads, Meta Ads, and more.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 7-day free trial with full access to all features.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 py-16" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        {/* Half black / half blue heading */}
        <h2 className="text-3xl font-bold text-center mb-10">
          <span className="text-white">Frequently Asked </span>
          <span className="text-blue-400">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-md p-4 cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-xl"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                <span className="text-xl text-blue-400">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
