import { useState } from "react";
import { ChevronRight, Check, Zap, Package } from "lucide-react";

export default function SetupPage() {
  const [step, setStep] = useState(1);
  const [selectedVersion, setSelectedVersion] = useState(null);
  const [selectedEdition, setSelectedEdition] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [serverName, setServerName] = useState("");

  const isStep1Complete = selectedVersion !== null;
  const isStep2Complete = selectedEdition !== null;
  const isStep3Complete = selectedPlan !== null && serverName.trim() !== "";

  const handleNext = () => {
    if (step === 1 && isStep1Complete) setStep(2);
    else if (step === 2 && isStep2Complete) setStep(3);
    else if (step === 3 && isStep3Complete) setStep(4);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Configure Your <span className="text-yellow-400">Server</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Set up your perfect Minecraft server in just a few steps. Choose
            your version, edition, and plan.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all duration-300 ${
                  num === step
                    ? "bg-yellow-400 text-black shadow-lg shadow-yellow-400/50"
                    : num < step
                      ? "bg-green-500 text-white"
                      : "bg-gray-700 text-gray-300"
                }`}
              >
                {num < step ? <Check size={20} /> : num}
              </div>
            ))}
          </div>
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 transition-all duration-500"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-[#1a1a1a] border border-yellow-400 border-opacity-20 rounded-2xl p-8 md:p-12 mb-8">
          {/* Step 1: Version Selection */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-8">
                Which version do you want?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bedrock Option */}
                <div
                  onClick={() => setSelectedVersion("bedrock")}
                  className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedVersion === "bedrock"
                      ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                      : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Package size={24} className="text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">Bedrock</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    For Windows 10/11, Xbox, Mobile, and Nintendo Switch
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Cross-platform
                      compatible
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Better
                      performance on lower-end devices
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Microsoft
                      account integration
                    </li>
                  </ul>
                </div>

                {/* Java Option */}
                <div
                  onClick={() => setSelectedVersion("java")}
                  className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedVersion === "java"
                      ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                      : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={24} className="text-yellow-400" />
                    <h3 className="text-2xl font-bold text-white">Java</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    For PC, Mac, and Linux. The classic Minecraft experience
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Largest player
                      base
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Most mods &
                      plugins available
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Full
                      customization support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Edition Selection */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-8">
                Choose your edition
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedVersion === "bedrock" ? (
                  <>
                    {/* Vanilla Bedrock */}
                    <div
                      onClick={() => setSelectedEdition("bedrock-vanilla")}
                      className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedEdition === "bedrock-vanilla"
                          ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                          : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Vanilla
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Pure vanilla Minecraft experience
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Original
                          gameplay
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> No plugins
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Stable &
                          reliable
                        </li>
                      </ul>
                    </div>

                    {/* Pocketmine */}
                    <div
                      onClick={() => setSelectedEdition("bedrock-pocketmine")}
                      className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedEdition === "bedrock-pocketmine"
                          ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                          : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">
                        PocketMine
                      </h3>
                      <p className="text-gray-300 mb-4">
                        Extensible server software with plugins
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Plugin
                          support
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Custom
                          features
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Active
                          community
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Java Vanilla - Only Option */}
                    <div
                      onClick={() => setSelectedEdition("java-vanilla")}
                      className={`p-8 rounded-xl border-2 cursor-pointer transition-all duration-300 md:col-span-2 max-w-sm mx-auto w-full ${
                        selectedEdition === "java-vanilla"
                          ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                          : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Vanilla
                      </h3>
                      <p className="text-gray-300 mb-4">
                        The classic Minecraft Java Edition
                      </p>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Pure
                          vanilla gameplay
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Compatible
                          with all Java mods
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-yellow-400">✓</span> Built-in
                          world generation
                        </li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Plan & Server Name */}
          {step === 3 && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-8">
                Choose your plan
              </h2>

              {/* Server Name Input */}
              <div className="mb-8">
                <label className="block text-white font-semibold mb-3">
                  Server Name
                </label>
                <input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  placeholder="e.g., My Epic Server"
                  maxLength={30}
                  className="w-full px-6 py-4 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-20 transition-all duration-300"
                />
                <p className="text-sm text-gray-400 mt-2">
                  {serverName.length}/30 characters
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 2-Day Test */}
                <div
                  onClick={() => setSelectedPlan("test")}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedPlan === "test"
                      ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                      : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                  }`}
                >
                  <div className="mb-4 inline-block px-3 py-1 bg-green-500 bg-opacity-20 border border-green-500 rounded-full">
                    <span className="text-green-400 text-xs font-bold">
                      FREE TRIAL
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    2-Day Test
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-yellow-400">
                      €0
                    </span>
                    <span className="text-gray-400">/2 days</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> 20 players
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> 20GB Storage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Full access
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Daily backups
                    </li>
                  </ul>
                </div>

                {/* One-Time Purchase */}
                <div
                  onClick={() => setSelectedPlan("onetime")}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedPlan === "onetime"
                      ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                      : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">
                    One-Time
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-yellow-400">
                      €30
                    </span>
                    <span className="text-gray-400">lifetime</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> 20 players
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> 20GB Storage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Daily backups
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> 24/7 Support
                    </li>
                  </ul>
                </div>

                {/* Monthly Subscription */}
                <div
                  onClick={() => setSelectedPlan("monthly")}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 relative ${
                    selectedPlan === "monthly"
                      ? "border-yellow-400 bg-yellow-400 bg-opacity-10 shadow-lg shadow-yellow-400/50"
                      : "border-gray-600 bg-gray-900 bg-opacity-50 hover:border-yellow-400 hover:border-opacity-50"
                  }`}
                >
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black font-bold text-xs rounded-full">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 mt-3">
                    Monthly
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-yellow-400">
                      €5
                    </span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> 20 players
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> 20GB Storage
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Daily backups
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-yellow-400">✓</span> Cancel anytime
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Confirm */}
          {step === 4 && (
            <div className="animate-fadeIn">
              <h2 className="text-3xl font-bold text-white mb-8">
                Review your configuration
              </h2>

              <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8 border border-yellow-400 border-opacity-30 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">
                      Server Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-500 text-sm">Server Name</p>
                        <p className="text-white font-semibold text-lg">
                          {serverName}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Version</p>
                        <p className="text-white font-semibold text-lg capitalize">
                          {selectedVersion}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Edition</p>
                        <p className="text-white font-semibold text-lg capitalize">
                          {selectedEdition?.split("-")[1]}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-300 mb-4">
                      Plan Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-gray-500 text-sm">Plan Type</p>
                        <p className="text-white font-semibold text-lg capitalize">
                          {selectedPlan === "test"
                            ? "2-Day Test (Free)"
                            : selectedPlan === "onetime"
                              ? "One-Time Purchase"
                              : "Monthly Subscription"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Price</p>
                        <p className="text-yellow-400 font-bold text-2xl">
                          {selectedPlan === "test"
                            ? "€0"
                            : selectedPlan === "onetime"
                              ? "€30"
                              : "€5/month"}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Setup Time</p>
                        <p className="text-white font-semibold">
                          2-3 Business Days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 bg-opacity-20 border border-blue-500 border-opacity-30 rounded-lg p-6 mb-8">
                <p className="text-blue-200 text-sm">
                  💡 After placing your order, our team will set up your server
                  and send you the server details via email within 2-3 business
                  days.
                </p>
              </div>

              <button className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-bold text-lg hover:from-yellow-300 hover:to-yellow-200 transition-all duration-300 shadow-lg shadow-yellow-400/50 hover:shadow-yellow-400/80 transform hover:scale-105 flex items-center justify-center gap-2">
                <Zap size={20} />
                Complete Order
              </button>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="flex gap-4 justify-between">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 ${
                step === 1
                  ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                  : "bg-gray-700 text-white hover:bg-gray-600"
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={
                (step === 1 && !isStep1Complete) ||
                (step === 2 && !isStep2Complete) ||
                (step === 3 && !isStep3Complete)
              }
              className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 ${
                (step === 1 && !isStep1Complete) ||
                (step === 2 && !isStep2Complete) ||
                (step === 3 && !isStep3Complete)
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-yellow-400 to-yellow-300 text-black hover:from-yellow-300 hover:to-yellow-200 shadow-lg shadow-yellow-400/50"
              }`}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
