// components/sections/TestimonialsCarousel.tsx

const testimonials = [
  {
    name: "Anjali Mehta",
    role: "Marketing Head, TechNova",
    message:
      "This AI suite helped us scale content production by 5x. Amazing results and simple UI!",
  },
  {
    name: "Ravi Sharma",
    role: "Founder, StartUpGyaan",
    message:
      "I’ve tried dozens of tools, but this one actually delivers what it promises. Highly recommended.",
  },
  {
    name: "Priya Singh",
    role: "Product Manager, ZenSoft",
    message:
      "The automation features saved our team 20+ hours a week. Worth every penny!",
  },
];

export default function TestimonialsCarousel() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading - Half Black, Half Blue */}
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">
          <span className="text-black">What Our </span>
          <span className="text-indigo-600">Users Say</span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
          Real stories from businesses that transformed their marketing with
          <span className="text-indigo-600 font-semibold"> ADmyBRAND AI Suite</span>.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md border border-gray-100 
                         hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300 ease-out"
            >
              <p className="italic text-gray-700 mb-6 leading-relaxed">
                “{testimonial.message}”
              </p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-900 text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"></div>
    </section>
  );
}
