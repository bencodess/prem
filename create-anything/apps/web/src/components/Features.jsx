import {
  Server,
  Shield,
  Zap,
  Users,
  Globe,
  Clock,
  HardDrive,
  Headphones,
  Lock,
  Settings,
  Cpu,
  Gauge,
  Wifi,
  AlertCircle,
  Download,
  RotateCcw,
  Key,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, highlight }) => (
  <div
    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
      highlight
        ? "border-yellow-400 bg-yellow-400 bg-opacity-5 shadow-lg shadow-yellow-400/30"
        : "border-gray-700 bg-gray-900 bg-opacity-30 hover:border-yellow-400 hover:border-opacity-50"
    }`}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-yellow-400 bg-opacity-20">
        <Icon size={24} className="text-yellow-400" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Servers hosted on high-end hardware in Germany with low latency. Experience lag-free gameplay with optimized network routes.",
      highlight: true,
    },
    {
      icon: Shield,
      title: "DDoS Protection",
      description:
        "Enterprise-level DDoS protection keeps your server online 24/7. Block unwanted traffic automatically.",
      highlight: false,
    },
    {
      icon: Users,
      title: "Up to 20 Players",
      description:
        "Support for up to 20 players with optimized server resources. Scalable plans as your community grows.",
      highlight: false,
    },
    {
      icon: HardDrive,
      title: "20GB Storage",
      description:
        "Plenty of space for your world, plugins, and player data. SSD storage for super fast loading.",
      highlight: false,
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description:
        "Guaranteed uptime with redundant systems and 24/7 monitoring. Your server stays live when it matters most.",
      highlight: true,
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Friendly support team available round the clock. Get help with setup, troubleshooting, and optimization.",
      highlight: false,
    },
    {
      icon: Lock,
      title: "Automatic Backups",
      description:
        "Daily automated backups protect your data. Restore to any previous version instantly if needed.",
      highlight: false,
    },
    {
      icon: Settings,
      title: "Admin Panel Access",
      description:
        "Full control over your server settings through our intuitive admin dashboard. No technical knowledge needed.",
      highlight: false,
    },
    {
      icon: Globe,
      title: "Germany-Based Servers",
      description:
        "Located in Frankfurt, Germany for optimal performance in Europe. Low ping from anywhere in the continent.",
      highlight: true,
    },
    {
      icon: Cpu,
      title: "Powerful Hardware",
      description:
        "Latest generation CPUs, 64GB+ RAM per server, and NVMe SSD storage. Enterprise-grade infrastructure.",
      highlight: false,
    },
    {
      icon: Gauge,
      title: "Real-time Monitoring",
      description:
        "Monitor server performance, player counts, and resource usage in real-time. Get alerts for issues.",
      highlight: false,
    },
    {
      icon: Wifi,
      title: "Multiple Version Support",
      description:
        "Support for Java Edition, Bedrock Edition, Vanilla, and PocketMine. Choose your preferred setup.",
      highlight: false,
    },
    {
      icon: AlertCircle,
      title: "Priority Support",
      description:
        "Fast-track support for premium customers. Get issues resolved quickly by experienced technicians.",
      highlight: false,
    },
    {
      icon: Download,
      title: "Easy Migration",
      description:
        "Seamlessly migrate your existing server to us. We handle the technical details, you enjoy your new home.",
      highlight: false,
    },
    {
      icon: RotateCcw,
      title: "1-Click Restart",
      description:
        "Restart your server with a single click from the control panel. No downtime, instant restart.",
      highlight: false,
    },
    {
      icon: Key,
      title: "Secure Login",
      description:
        "Two-factor authentication and encrypted connections. Your account and server are protected.",
      highlight: false,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a] border-b border-yellow-400 border-opacity-20"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-6">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">
              Why Choose Prem Hosting?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need for Your{" "}
            <span className="text-yellow-400">Perfect Server</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We've packed our hosting with features that make running a Minecraft
            server effortless. From powerful hardware to 24/7 support, we've got
            you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Additional info section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-xl border border-yellow-400 border-opacity-20 p-8 text-center bg-yellow-400 bg-opacity-5 hover:bg-opacity-10 transition-all duration-300">
            <div className="text-4xl font-black text-yellow-400 mb-3">
              1000+
            </div>
            <p className="text-gray-300">Active Servers</p>
            <p className="text-sm text-gray-500 mt-2">
              Join thousands of gaming communities
            </p>
          </div>

          <div className="rounded-xl border border-yellow-400 border-opacity-20 p-8 text-center bg-yellow-400 bg-opacity-5 hover:bg-opacity-10 transition-all duration-300">
            <div className="text-4xl font-black text-yellow-400 mb-3">50K+</div>
            <p className="text-gray-300">Happy Players</p>
            <p className="text-sm text-gray-500 mt-2">
              Enjoy lag-free gaming experience
            </p>
          </div>

          <div className="rounded-xl border border-yellow-400 border-opacity-20 p-8 text-center bg-yellow-400 bg-opacity-5 hover:bg-opacity-10 transition-all duration-300">
            <div className="text-4xl font-black text-yellow-400 mb-3">
              99.9%
            </div>
            <p className="text-gray-300">Uptime</p>
            <p className="text-sm text-gray-500 mt-2">
              Rock-solid reliability guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
