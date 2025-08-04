'use client';
import React from 'react';

const WhyCybertraits = () => {
  const imageGrid = [
    {
      src: 'https://st2.depositphotos.com/3591429/7472/i/950/depositphotos_74729859-stock-photo-professional-business-persons.jpg',
      alt: 'Industry Partnership',
    },
    {
      src: 'https://thumbs.dreamstime.com/z/asian-businesswoman-giving-presentation-to-coworkers-explaining-new-business-strategy-sitting-around-table-conference-room-92305024.jpg',
      alt: 'Top Placement CTC',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgyektXc5ZC-MFcf18hrUG4p6XpBD9He0fw&s',
      alt: 'Expert Mentorship',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZMAN_EsbauUKPnio7RRYOvkTiy0jjHpbag5VasjDp_I6EU29HmyI7QYcd8yrxCdJF-cs&usqp=CAU',
      alt: 'Real Projects & Labs',
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#264269] leading-tight">
            Why <span className="text-[#4A7C3E]">Cybertraits</span>?
          </h2>

          <div className="space-y-6 text-gray-700 text-base md:text-lg font-medium">
            <div className="border-l-4 border-[#4A7C3E] pl-4">
              <h4 className="text-xl font-semibold text-[#264269]">Recognized Industry Partner</h4>
              <p>Official training partner with EC-Council & Offensive Security, offering globally accredited certifications.</p>
            </div>

            <div className="border-l-4 border-[#4A7C3E] pl-4">
              <h4 className="text-xl font-semibold text-[#264269]">Results That Speak</h4>
              <p>10,000+ students placed. ₹36 LPA highest package. 100% Job Guarantee on selected programs.</p>
            </div>

            <div className="border-l-4 border-[#4A7C3E] pl-4">
              <h4 className="text-xl font-semibold text-[#264269]">Mentors From the Frontline</h4>
              <p>Guidance from top experts from global MNCs, cyber defense forces, and red team specialists.</p>
            </div>

            <div className="border-l-4 border-[#4A7C3E] pl-4">
              <h4 className="text-xl font-semibold text-[#264269]">Practice, Not Just Theory</h4>
              <p>Real-world simulations, red/blue team labs, and enterprise-grade tools to make you job-ready.</p>
            </div>
          </div>

          <div>
            <a
              href="/contact"
              className="inline-block bg-[#4A7C3E] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition duration-300"
            >
              Talk to an Expert
            </a>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 flex-1 max-h-[500px] w-full">
          {imageGrid.map((img, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCybertraits;


