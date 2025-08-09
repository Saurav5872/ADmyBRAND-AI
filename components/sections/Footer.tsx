export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold">ADmyBRAND AI Suite</h2>
          <p className="mt-4 text-sm text-gray-400">
            Your all-in-one AI marketing partner. Create, analyze, and optimize campaigns faster with automation.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-white">FAQs</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h3 className="text-lg font-semibold">Get in Touch</h3>
          {/* Clickable Email */}
          <p className="mt-4 text-sm text-gray-400">
            <a href="mailto:support@admybrand.com" className="hover:text-white">
              support@admybrand.com
            </a>
          </p>

          {/* Social Links */}
          <div className="mt-4 flex space-x-4 text-lg">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-400"
            >
              🐦
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-300"
            >
              🔗
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-red-500"
            >
              ▶️
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ADmyBRAND. All rights reserved.
      </div>
    </footer>
  );
}
