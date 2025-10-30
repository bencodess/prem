import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white h-16 px-6 border-b border-yellow-400 border-opacity-20">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center font-bold text-black">
            ⛏
          </div>
          <span className="text-xl font-bold text-white">MinecraftDE</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#features"
            className="hover:text-yellow-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="hover:text-yellow-400 transition-colors"
          >
            Pricing
          </a>
          <a href="#faq" className="hover:text-yellow-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/admin"
            className="px-6 py-2 rounded-lg border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
          >
            Admin
          </a>
          <button className="px-6 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors">
            Order Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black z-50 flex flex-col pt-20 px-6">
            <nav className="space-y-6">
              <a
                href="#features"
                className="block text-xl hover:text-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-xl hover:text-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="block text-xl hover:text-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="/admin"
                className="block text-xl hover:text-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </a>
            </nav>
            <button className="mt-8 w-full px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition-colors">
              Order Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
