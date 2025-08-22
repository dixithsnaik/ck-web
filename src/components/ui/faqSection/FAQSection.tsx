import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "@/constants/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    // only change if it's a different index
    if (openIndex !== index) {
      setOpenIndex(index);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 w-full">
      {FAQS.map((faq, index) => (
        <div
          key={index}
          className={`mb-4 rounded-2xl transition-all ${
            openIndex === index ? "bg-[#F8F7FE]" : "bg-white"
          }`}
        >
          {/* Question Row */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center p-6 text-left"
          >
            <span className="text-lg font-medium text-gray-800">
              {faq.question}
            </span>
            <span
              className={`flex items-center justify-center rounded-lg p-1 transition-colors
                ${
                  openIndex === index
                    ? "bg-white text-gray-900"
                    : "bg-[#F8F7FE] text-gray-700"
                }`}
            >
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>

          {/* Answer */}
          {openIndex === index && (
            <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
          )}
        </div>
      ))}
    </section>
  );
}
