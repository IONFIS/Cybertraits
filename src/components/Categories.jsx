"use client";
import Image from "next/image";
import React from "react";

const companyData = [
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  },
  {
    name: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Deloitte_Logo.png",
  },
  {
    name: "PwC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/PwC_Logo.svg",
  },
  {
    name: "Accenture",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Accenture-logo.svg",
  },
  {
    name: "Oracle",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
  },
  {
    name: "Cisco",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Cisco_logo_blue_2016.svg",
  },
  {
    name: "EY",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/EY_logo_2019.svg",
  },
];

const PlacementPartners = () => {
  return (
    <div className="bg-gradient-to-br from-[#F2F6FA] to-[#ffffff] py-16 px-4 sm:px-6 lg:px-10 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#264269] mb-4">
          🌐 Our Placement Partners
        </h2>
        <p className="text-[#264269] mb-10 text-lg">
          Trusted by the world's leading companies in cybersecurity and tech.
        </p>

        {/* Marquee Wrapper */}
        <div className="overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {companyData.map((company, idx) => (
              <div
                key={idx}
                className="min-w-[180px] bg-white border border-gray-200 rounded-2xl p-5 shadow-md flex flex-col items-center justify-center hover:shadow-xl hover:border-[#4A7C3E] transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <div className="w-24 h-12 mb-3 relative">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain transition-transform duration-300"
                  />
                </div>
                <p className="text-sm font-semibold text-[#264269] mt-1">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PlacementPartners;
