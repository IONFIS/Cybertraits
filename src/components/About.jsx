'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyCybertraits = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Images Grid */}
        <div
          className="grid grid-cols-2 gap-4 flex-1"
          data-aos="fade-up"
        >
          {[
            { src: 'https://st2.depositphotos.com/3591429/7472/i/950/depositphotos_74729859-stock-photo-professional-business-persons.jpg', alt: 'Industry Partnership' },
            { src: 'https://thumbs.dreamstime.com/z/asian-businesswoman-giving-presentation-to-coworkers-explaining-new-business-strategy-sitting-around-table-conference-room-92305024.jpg', alt: 'Top Placement CTC' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgyektXc5ZC-MFcf18hrUG4p6XpBD9He0fw&s', alt: 'Expert Mentorship' },
            { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMAN_EsbauUKPnio7RRYOvkTiy0jjHpbag5VasjDp_I6EU29HmyI7QYcd8yrxCdJF-cs&usqp=CAU', alt: 'Real Projects & Labs' },
          ].map((img, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-8" data-aos="fade-left">
          <h2 className="text-4xl md:text-5xl font-bold text-[#264269] leading-snug">
            Why <span className="text-[#4A7C3E]">Cybertraits</span>?
          </h2>

          <div className="space-y-6 text-gray-700 text-[1.05rem] font-medium">
            <div className="border-l-4 pl-4 border-[#4A7C3E]">
              <h4 className="text-xl font-semibold text-[#264269]">Recognized Industry Partner</h4>
              <p>Official training partner with EC-Council & Offensive Security, providing globally accredited certifications.</p>
            </div>

            <div className="border-l-4 pl-4 border-[#4A7C3E]">
              <h4 className="text-xl font-semibold text-[#264269]">Results That Speak</h4>
              <p>Over 10K students placed. ₹36 LPA highest package. 100% Job Guarantee on flagship programs.</p>
            </div>

            <div className="border-l-4 pl-4 border-[#4A7C3E]">
              <h4 className="text-xl font-semibold text-[#264269]">Mentors From the Frontline</h4>
              <p>Get guided by real-world professionals from global MNCs, cyber defense, and offensive teams.</p>
            </div>

            <div className="border-l-4 pl-4 border-[#4A7C3E]">
              <h4 className="text-xl font-semibold text-[#264269]">Practice, Not Just Theory</h4>
              <p>Experience red/blue teaming, live simulations, and hands-on projects with enterprise-grade tools.</p>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="/contact"
              className="inline-block bg-[#4A7C3E] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCybertraits;
