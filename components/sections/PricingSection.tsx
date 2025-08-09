'use client';

import React from 'react';

const PricingSection = () => {
  const handleClick = (plan: string) => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert(`You selected the ${plan} plan!`);
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Modified Heading */}
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-black">Simple, Transparent</span>{' '}
          <span className="text-blue-600">Pricing</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Choose the plan that fits your needs.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:border-blue-500 border border-gray-200 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
            <h3 className="text-2xl font-semibold mb-4 hover:text-blue-600 transition-all">
              Basic
            </h3>
            <p className="text-gray-600 mb-6">For individuals getting started</p>
            <p className="text-4xl font-bold mb-6 text-blue-600">
              $9<span className="text-lg font-normal text-gray-700">/mo</span>
            </p>
            <ul className="text-gray-700 space-y-3 mb-6">
              <li>✔️ 1 Project</li>
              <li>✔️ Basic Support</li>
              <li>✔️ Community Access</li>
            </ul>
            <button
              onClick={() => handleClick('Basic')}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-600 scale-105 transform hover:scale-110 hover:shadow-xl transition-all duration-300 ease-out">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">
              Pro
            </h3>
            <p className="text-gray-600 mb-6">Best for growing teams</p>
            <p className="text-4xl font-bold mb-6 text-blue-600">
              $29<span className="text-lg font-normal text-gray-700">/mo</span>
            </p>
            <ul className="text-gray-700 space-y-3 mb-6">
              <li>✔️ 10 Projects</li>
              <li>✔️ Priority Support</li>
              <li>✔️ Advanced Analytics</li>
            </ul>
            <button
              onClick={() => handleClick('Pro')}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              Start Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:border-blue-500 border border-gray-200 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out">
            <h3 className="text-2xl font-semibold mb-4 hover:text-blue-600 transition-all">
              Enterprise
            </h3>
            <p className="text-gray-600 mb-6">For large companies</p>
            <p className="text-4xl font-bold mb-6 text-blue-600">Contact Us</p>
            <ul className="text-gray-700 space-y-3 mb-6">
              <li>✔️ Unlimited Projects</li>
              <li>✔️ Dedicated Manager</li>
              <li>✔️ Custom Features</li>
            </ul>
            <button
              onClick={() => handleClick('Enterprise')}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
