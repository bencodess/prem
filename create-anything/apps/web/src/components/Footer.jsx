import { Mail, MapPin, Phone, Zap } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-400 border-opacity-20 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center font-bold text-black shadow-lg shadow-yellow-400/50">
                ⚡
              </div>
              <span className="text-xl font-black text-white bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Prem Hosting
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium Minecraft server hosting in Germany. Fast, reliable, and
              backed by 24/7 support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/setup"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail size={16} /> Email Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Phone size={16} /> Live Chat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                >
                  Status Page
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Location</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-yellow-400 flex-shrink-0 mt-1"
                />
                <p className="text-gray-400 text-sm">
                  Frankfurt, Germany
                  <br />
                  EU Data Center
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-400" />
                <p className="text-gray-400 text-sm">24/7 Support Available</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-400" />
                <p className="text-gray-400 text-sm">support@premhosting.de</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-yellow-400 from-opacity-5 via-yellow-400 via-opacity-0 to-yellow-400 to-opacity-5 border border-yellow-400 border-opacity-20 rounded-xl p-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2 flex items-center gap-2">
                <Zap size={20} className="text-yellow-400" />
                Get the Latest Updates
              </h3>
              <p className="text-gray-400 text-sm">
                Subscribe to our newsletter for hosting tips and exclusive
                offers.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 min-w-[250px]"
              />
              <button className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-gray-500 text-sm">
            © {currentYear} Prem Hosting. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition-colors text-sm"
            >
              GDPR Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
