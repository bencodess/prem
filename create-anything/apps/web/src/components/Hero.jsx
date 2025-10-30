import { Zap, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-20 md:py-40 px-6 bg-gradient-to-b from-black to-[#1a1a1a] border-b border-yellow-400 border-opacity-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl opacity-5 -z-10"></div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-6 hover:border-opacity-100 transition-all duration-300">
          <Zap size={16} className="text-yellow-400 animate-pulse" />
          <span className="text-yellow-400 text-sm font-semibold">
            🚀 Launch Your Server in 2-3 Days
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 max-w-4xl mx-auto leading-tight">
          Premium Minecraft Servers{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
            in Germany
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          High-performance Minecraft servers with 99.9% uptime guarantee. Choose
          between one-time purchase or monthly subscription. Try it free for 2
          days!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
          <a
            href="/setup"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 w-full sm:w-auto shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/80 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Get Your Server Now
            <ArrowRight size={20} />
          </a>
          <button className="px-8 py-4 rounded-lg border-2 border-yellow-400 text-yellow-400 font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 w-full sm:w-auto shadow-lg shadow-yellow-400/0 hover:shadow-yellow-400/50">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto mb-12">
          <div className="border-l border-yellow-400 border-opacity-30 pl-4 hover:border-opacity-100 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">
              99.9%
            </div>
            <div className="text-gray-400 text-sm font-medium">
              Uptime Guarantee
            </div>
          </div>
          <div className="border-l border-yellow-400 border-opacity-30 pl-4 hover:border-opacity-100 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">
              2-3
            </div>
            <div className="text-gray-400 text-sm font-medium">Days Setup</div>
          </div>
          <div className="border-l border-yellow-400 border-opacity-30 pl-4 hover:border-opacity-100 transition-all duration-300">
            <div className="text-3xl md:text-4xl font-black text-yellow-400 mb-2">
              24/7
            </div>
            <div className="text-gray-400 text-sm font-medium">Support</div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="bg-gradient-to-r from-yellow-400 from-opacity-5 via-yellow-400 via-opacity-0 to-yellow-400 to-opacity-5 border border-yellow-400 border-opacity-20 rounded-lg p-6">
          <p className="text-gray-300 text-sm md:text-base">
            ✨ Trusted by 1000+ gaming communities • 📊 Free 2-day trial • 🔒
            100% money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
}
