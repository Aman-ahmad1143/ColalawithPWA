import React from 'react';

const FAQs: React.FC = () => {
  const faqs = [
    {
      question: "How do I place an order?",
      answer: "Browse products, add them to cart, and proceed to checkout to place your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and mobile payment methods."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order from the 'My Orders' section in your account."
    },
    {
      question: "What is your return policy?",
      answer: "Items can be returned within 30 days of purchase in original condition."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us through the Support section or email support@colala.com"
    }
  ];

  return (
    <div className="flex-1 p-8 bg-white rounded-[20px]">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500 mb-4">Still need help?</p>
          <button className="bg-[#E53E3E] text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
