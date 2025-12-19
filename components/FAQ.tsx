import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-900 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Menghancurkan Alasan (FAQ)
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="text-green-500" /> : <ChevronDown className="text-slate-400" />}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-300 border-t border-slate-700/50 pt-4 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;