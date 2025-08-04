'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';

const faqs = [
  {
    question: 'What is Cybertraits?',
    answer:
      'Cybertraits is a leading cybersecurity training platform offering hands-on, real-world learning in Red Teaming, Blue Teaming, Cloud Security, and more. We aim to bridge the industry skill gap through job-ready programs and expert-led mentorship.',
  },
  {
    question: 'Are Cybertraits courses suitable for beginners?',
    answer:
      'Absolutely! We offer beginner-friendly courses such as "Ethical Hacking Fundamentals" and "Python for Beginners" that lay a strong foundation for anyone entering the cybersecurity domain.',
  },
  {
    question: 'Do I receive certifications after completing a course?',
    answer:
      'Yes, all our courses come with a verifiable certificate of completion. Some advanced programs are also aligned with global certifications like CEH, OSCP, and CompTIA.',
  },
  {
    question: 'Do you offer any job assistance?',
    answer:
      'Yes. Our Cybersecurity Job Guarantee Program includes resume preparation, mock interviews, LinkedIn profile optimization, and direct placement assistance through industry partnerships.',
  },
  {
    question: 'What are the most popular courses at Cybertraits?',
    answer: (
      <>
        <p>We focus on the most in-demand cybersecurity skills across offensive and defensive domains. Our top-rated courses include:</p>
        <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
          <li>Ethical Hacking Fundamentals</li>
          <li>Web Application Pentesting</li>
          <li>Cloud Security & Pentesting</li>
          <li>Blue Team SOC Analyst</li>
          <li>Digital Forensics & Incident Response</li>
        </ul>
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl bg-white" id="faq">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#264269]">Frequently Asked Questions</h1>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <Disclosure key={idx}>
            {({ open }) => (
              <div className="border border-gray-200 rounded-lg shadow-sm">
                <Disclosure.Button className="flex w-full justify-between items-center px-4 py-3 text-left text-[#264269] font-medium hover:bg-gray-50 transition">
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
