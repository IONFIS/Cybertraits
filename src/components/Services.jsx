"use client ";
import React from "react";
import {
  ShieldCheck,
  Bug,
  Cloud,
  Lock,
  Network,
  Code2,
  Users,
  BookOpen,
  Globe,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    title: "Cybersecurity Training",
    icon: <BookOpen className="w-8 h-8 text-[#4A7C3E]" />,
    description:
      "Industry-focused training in Red Teaming, Blue Teaming, and Cloud Security with real-time labs and certifications.",
  },
  {
    title: "Penetration Testing",
    icon: <Bug className="w-8 h-8 text-[#E53E3E]" />,
    description:
      "Simulated attacks to uncover and fix vulnerabilities in web, mobile, API, cloud, and network layers.",
  },
  {
    title: "SOC as a Service",
    icon: <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />,
    description:
      "24/7 threat monitoring, alerting, incident response, and threat hunting services tailored for your organization.",
  },
  {
    title: "Cloud Security Solutions",
    icon: <Cloud className="w-8 h-8 text-[#7C3AED]" />,
    description:
      "Protect your AWS, Azure, or GCP environments with expert cloud security configuration, audits, and compliance.",
  },
  {
    title: "Vulnerability Assessments",
    icon: <Lock className="w-8 h-8 text-[#D97706]" />,
    description:
      "Comprehensive vulnerability scanning and remediation planning for apps, systems, and infrastructure.",
  },
  {
    title: "Network Security & Firewalls",
    icon: <Network className="w-8 h-8 text-[#0D9488]" />,
    description:
      "Design and secure enterprise-grade network infrastructure using latest firewall, VPN, and segmentation techniques.",
  },
  {
    title: "Secure DevOps (DevSecOps)",
    icon: <Code2 className="w-8 h-8 text-[#1E40AF]" />,
    description:
      "Secure CI/CD pipelines with static and dynamic code analysis, container security, and shift-left practices.",
  },
  {
    title: "Corporate Training & Upskilling",
    icon: <Users className="w-8 h-8 text-[#4A7C3E]" />,
    description:
      "Customized workshops and learning paths for corporates, universities, and government agencies.",
  },
  {
    title: "Digital Forensics & IR",
    icon: <MonitorSmartphone className="w-8 h-8 text-[#DC2626]" />,
    description:
      "Post-breach investigation, evidence collection, chain of custody, and digital forensics for legal proceedings.",
  },
  {
    title: "Web & Application Security",
    icon: <Globe className="w-8 h-8 text-[#0EA5E9]" />,
    description:
      "Secure web and mobile applications with source code review, SAST/DAST, and secure architecture design.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#F2F6FA] py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#264269] mb-4">
          Our Services
        </h2>
        <p className="text-[#4B5563] text-lg max-w-2xl mx-auto mb-12">
          At <span className="font-semibold text-[#4A7C3E]">Cybertrait</span>, we offer complete cybersecurity, training, and enterprise IT solutions tailored to secure and empower your future.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow hover:shadow-lg transition-all duration-300 p-6 text-left"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-[#264269] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
