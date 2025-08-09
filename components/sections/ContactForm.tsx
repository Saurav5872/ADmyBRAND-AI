// components/sections/ContactForm.tsx
'use client';

export default function ContactForm() {
  return (
    <section
      className="py-20 text-white"
      style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)", // same as testimonials
      }}
      id="contact"
    >
      <div className="max-w-xl mx-auto px-6">
        {/* Half Black & Half Blue Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">
          <span className="text-white">Contact</span>{" "}
          <span className="text-blue-400">Us</span>
        </h2>

        {/* Contact Form */}
        <form className="space-y-4 bg-white rounded-lg p-6 shadow-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white w-full font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
