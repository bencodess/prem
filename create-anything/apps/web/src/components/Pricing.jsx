import { Check } from "lucide-react";
import { useState, useEffect } from "react";

export default function Pricing() {
  const [inStock, setInStock] = useState(true);

  useEffect(() => {
    // Fetch stock status from backend
    const fetchStockStatus = async () => {
      try {
        const response = await fetch("/api/stock");
        if (response.ok) {
          const data = await response.json();
          setInStock(data.inStock);
        }
      } catch (error) {
        console.error("Error fetching stock status:", error);
      }
    };
    fetchStockStatus();
  }, []);

  const features = [
    "Up to 20 players",
    "20GB Storage",
    "Daily Backups",
    "24/7 Support",
    "DDoS Protection",
    "Admin Panel Access",
  ];

  return (
    <section
      id="pricing"
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-black to-[#0a0a0a] border-b border-yellow-400 border-opacity-20"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-6">
            <span className="text-yellow-400 text-sm font-semibold">
              💰 Simple & Transparent
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No surprises. Choose what works best for you and
            scale as you grow.
          </p>
          {!inStock && (
            <div className="mt-6 inline-block px-4 py-2 bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 rounded-lg">
              <span className="text-red-400 font-semibold">
                Currently Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* 2-Day Free Trial */}
          <div
            className={`p-8 rounded-xl border-2 bg-green-900 bg-opacity-10 border-green-400 transition-all duration-300 flex flex-col ${
              !inStock ? "opacity-60" : ""
            }`}
          >
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 bg-green-500 bg-opacity-20 border border-green-400 rounded-full mb-6">
              <span className="text-green-400 text-xs font-bold">
                FREE TRIAL
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">2-Day Test</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-green-400">€0</span>
                <span className="text-gray-400">free</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8">
              Perfect to try our service risk-free
            </p>

            <a
              href="/setup"
              disabled={!inStock}
              className={`w-full px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 mb-8 text-center flex items-center justify-center gap-2 ${
                inStock
                  ? "bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Start Free Trial
            </a>

            <div className="space-y-4 flex-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-green-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* One-Time Purchase */}
          <div
            className={`p-8 rounded-xl border-2 border-yellow-400 bg-[#1a1a1a] transition-all duration-300 flex flex-col ${
              !inStock ? "opacity-60" : ""
            }`}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-3">One-Time</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-yellow-400">€30</span>
                <span className="text-gray-400">lifetime</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8">
              Perfect for testing or short-term projects
            </p>

            <a
              href="/setup"
              disabled={!inStock}
              className={`w-full px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 mb-8 text-center flex items-center justify-center gap-2 ${
                inStock
                  ? "bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Buy Now
            </a>

            <div className="space-y-4 flex-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-yellow-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Subscription */}
          <div
            className={`p-8 rounded-xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-400 from-opacity-5 to-transparent transition-all duration-300 flex flex-col relative ${
              !inStock ? "opacity-60" : ""
            }`}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-black font-bold text-sm rounded-full">
              ⭐ MOST POPULAR
            </div>

            <div className="mb-6 mt-6">
              <h3 className="text-2xl font-bold text-white mb-3">Monthly</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-yellow-400">€5</span>
                <span className="text-gray-400">/month</span>
              </div>
            </div>

            <p className="text-gray-300 mb-8">
              Most popular for active communities
            </p>

            <a
              href="/setup"
              disabled={!inStock}
              className={`w-full px-6 py-3 rounded-lg font-bold text-lg transition-all duration-300 mb-8 text-center flex items-center justify-center gap-2 ${
                inStock
                  ? "bg-yellow-400 text-black hover:bg-yellow-300 shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transform hover:scale-105"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              Subscribe Now
            </a>

            <div className="space-y-4 flex-1">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-yellow-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-yellow-400 border-opacity-20">
                <Check size={20} className="text-yellow-400" />
                <span className="text-gray-300 font-semibold">
                  Cancel anytime
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-blue-900 from-opacity-20 via-blue-900 via-opacity-10 to-blue-900 to-opacity-20 border border-blue-400 border-opacity-20 text-center max-w-3xl mx-auto">
          <p className="text-blue-200 font-semibold mb-2">📅 Setup Timeline</p>
          <p className="text-gray-300">
            Your server will be ready in 2-3 business days after purchase. We'll
            notify you via email when it's live and ready to use!
          </p>
        </div>
      </div>
    </section>
  );
}
