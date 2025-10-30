import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How quickly can I get my server set up?",
      answer:
        "Your server will be ready in 2-3 business days after purchase. We handle all the technical setup so you can start playing immediately. You'll receive an email with all the server details and connection information once it's live.",
    },
    {
      question: "Can I migrate my existing server to Prem Hosting?",
      answer:
        "Absolutely! We offer free migration services for existing Minecraft servers. Our team will handle the technical details and ensure your world, player data, and settings are transferred safely. Just contact our support team to get started.",
    },
    {
      question: "What Minecraft versions do you support?",
      answer:
        "We support Java Edition and Bedrock Edition. For Java, we offer Vanilla servers. For Bedrock, you can choose between Vanilla or PocketMine with plugin support. You can select your preferred setup during the server configuration process.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 100% money-back guarantee on one-time purchases if you're not satisfied within the first 30 days. Monthly subscriptions can be cancelled anytime with no penalties. For the 2-day trial, it's completely free so no refund is needed.",
    },
    {
      question: "Is DDoS protection included?",
      answer:
        "Yes! Enterprise-level DDoS protection is included with all plans. We automatically detect and block malicious traffic to keep your server online 24/7. Our protection covers volumetric attacks, protocol attacks, and application-layer attacks.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "For monthly subscriptions, you can upgrade or downgrade anytime. Changes take effect on your next billing cycle. One-time purchases include a fixed player count, but you can always migrate to our monthly plan if you need more flexibility.",
    },
    {
      question: "What if my server goes down?",
      answer:
        "We monitor servers 24/7 and respond to issues immediately. With our 99.9% uptime guarantee, your server stays online when it matters most. If issues do occur, our support team is available round-the-clock to help.",
    },
    {
      question: "How much storage do I get?",
      answer:
        "All plans include 20GB of SSD storage. This is plenty for most servers and includes your world, plugins, player data, and backups. If you need more storage for a larger server, contact our support team for custom solutions.",
    },
    {
      question: "Can I install custom plugins or mods?",
      answer:
        "For Java Vanilla servers, the server runs vanilla Minecraft. For Bedrock PocketMine servers, you can install plugins to customize your server. Contact our support team for help with plugin installation and configuration.",
    },
    {
      question: "Do you have GDPR compliance?",
      answer:
        "Yes! We are fully GDPR compliant. Our servers are hosted in Frankfurt, Germany within the EU. We implement strict data protection measures and never share player information with third parties. See our privacy policy for full details.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#0a0a0a] via-black to-[#0a0a0a] border-b border-yellow-400 border-opacity-20"
    >
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 bg-opacity-10 border border-yellow-400 border-opacity-30 rounded-full mb-6">
            <span className="text-yellow-400 text-sm font-semibold">
              ❓ Got Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about Prem Hosting. Can't find your
            answer? Contact our 24/7 support team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-gray-700 rounded-xl overflow-hidden hover:border-yellow-400 hover:border-opacity-50 transition-all duration-300 bg-gray-900 bg-opacity-30"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-900 hover:bg-opacity-50 transition-colors cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="text-left text-white font-bold text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-yellow-400 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-900 bg-opacity-20 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-yellow-400 from-opacity-5 to-yellow-400 to-opacity-5 border border-yellow-400 border-opacity-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our friendly support team is available 24/7 to help you. Don't
            hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@premhosting.de"
              className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition-all duration-300"
            >
              Email Support
            </a>
            <button className="px-6 py-3 rounded-lg border-2 border-yellow-400 text-yellow-400 font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
