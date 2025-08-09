"use client";
import React, { useEffect, useState } from "react";

const features = [
  { 
    icon: "📊", 
    title: "AI-Powered Insights", 
    description: "Harness advanced algorithms to uncover trends, predict outcomes, and make smarter marketing decisions — all in seconds."
  },
  { 
    icon: "🤖", 
    title: "Smart Campaign Automation", 
    description: "Automate repetitive tasks and optimize ad delivery, so you can focus on creative strategy and business growth."
  },
  { 
    icon: "📈", 
    title: "Real-Time Analytics", 
    description: "Monitor every click, view, and conversion as it happens — with instant performance alerts and deep insights."
  },
  { 
    icon: "🎨", 
    title: "Brand-Perfect Designs", 
    description: "Generate stunning visuals and ad creatives that stay perfectly on-brand without needing a design team."
  },
  { 
    icon: "🔗", 
    title: "One-Click Integrations", 
    description: "Seamlessly connect with your CRM, analytics tools, and ad platforms — no complicated setup required."
  },
  { 
    icon: "💬", 
    title: "24/7 Human + AI Support", 
    description: "Get instant answers from our AI assistant or talk to real experts whenever you need them — day or night."
  },
];

export default function Features() {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("features-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          let i = 0;
          const interval = setInterval(() => {
            setVisibleIndex(i);
            i++;
            if (i >= features.length) clearInterval(interval);
          }, 150);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="features-section"
      className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      {/* Floating gradient blobs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-bounce"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Everything You Need to <span className="text-blue-600">Dominate Digital Marketing</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From <span className="font-semibold text-gray-800">AI-driven insights</span> to effortless automation, 
            <span className="text-blue-600 font-semibold"> ADmyBRAND AI Suite</span> gives you the tools to 
            plan, launch, and measure campaigns — faster than ever before.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-200
                         hover:shadow-2xl hover:border-blue-400/50 
                         transform hover:-translate-y-2 hover:scale-[1.03] 
                         transition-all duration-300 ease-out cursor-pointer group
                         ${index <= visibleIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
