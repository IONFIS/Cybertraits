"use client";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "SOC Analyst at EY",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "This platform gave me everything I needed to switch careers into cybersecurity. The hands-on labs and red teaming training were outstanding.",
  },
  {
    name: "Sneha Kapoor",
    role: "Penetration Tester at Deloitte",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "I landed my dream job within 3 months of completing the Red Teaming program. The instructors and placement support were top-notch!",
  },
  {
    name: "Rohan Sharma",
    role: "Cloud Security Engineer at Microsoft",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    feedback:
      "The Cloud Security course was both deep and practical. I could apply what I learned directly in real-world scenarios at my new job.",
  },
  {
    name: "Neha Singh",
    role: "Security Consultant at PwC",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The certification helped me gain credibility and confidence during interviews. Totally recommend the Job Guarantee path.",
  },
  {
    name: "Vikram Chauhan",
    role: "Incident Responder at Accenture",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "Excellent mentorship and real-world labs. I learned more here than I did during my college years!",
  },
  {
    name: "Anjali Verma",
    role: "Malware Analyst at Cisco",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    feedback:
      "The Blue Team track gave me exactly what I needed to break into a technical role. Kudos to the support team!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-10 overflow-hidden border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#264269]">
          What Our Learners Say
        </h2>
        <p className="text-[#264269] text-lg mt-2">
          Real stories from successful cybersecurity professionals.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 animate-marquee w-max">
          {[...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F2F6FA] rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-5 w-[80vw] sm:w-[300px] flex-shrink-0"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#4A7C3E] mb-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-md font-semibold text-[#264269]">
                  {t.name}
                </h3>
                <p className="text-sm text-[#4A7C3E] mb-2">{t.role}</p>
                <p className="text-gray-600 text-sm">“{t.feedback}”</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSection;
