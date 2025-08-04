'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'What is the Secret Coder?',
    answer:
      'The Secret Coder is an initiative taken by Secret Coder, where we offer 1000+ free online courses in cutting-edge technologies and have successfully enrolled a whopping 5 Million+ learners across all domains. Secret Coder covers courses on Data Science, Machine Learning, Artificial Intelligence, Cloud Computing, Software Development, Sales and Business Development, Digital Marketing, Big Data, and many more.',
  },
  {
    question: 'Why should I choose Great Learning Academy for free courses with certificates?',
    answer:
      'Great Learning Academy is an excellent choice for free courses with certificates because of the high quality of the learning content. The courses are well-crafted, offer a great learning experience, and are interactive and engaging, making them ideal for learners in identifying what works best for their career goals.',
  },
  {
    question: 'How many free courses can I enroll in at the same time?',
    answer: 'You can simultaneously enroll in multiple courses at Secret Coder.',
  },
  {
    question: 'How can I enroll in these free online courses?',
    answer:
      'You can click on the “Sign Up” button at the top-right of the page and register with your email address, or you can sign up using your Google Account.',
  },
  {
    question: 'What are the most popular free courses offered by Secret Coder?',
    answer: (
      <>
        <p>Secret Coder focuses on in-demand concepts and skills, where learners can develop industry-relevant knowledge in their chosen sector.</p>
        <p>Some of the most popular free courses offered by Secret Coder include:</p>
        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
          <li>Free Data Science Courses</li>
          <li>Free Artificial Intelligence Courses</li>
          <li>Free Software Courses</li>
          <li>Free Cloud Computing Courses</li>
        </ul>
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="border border-gray-200 rounded-lg shadow-sm">
                <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50 transition">
                  <span>{faq.question}</span>
                  <ChevronUpIcon
                    className={`w-5 h-5 transition-transform ${
                      open ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
