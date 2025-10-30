import { useState, useEffect } from "react";
import { LogOut, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inStock, setInStock] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/admin/check");
        if (response.ok) {
          setIsAuthenticated(true);
          await fetchStockStatus();
        }
      } catch (err) {
        console.error("Auth check failed:", err);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const fetchStockStatus = async () => {
    try {
      const response = await fetch("/api/stock");
      if (response.ok) {
        const data = await response.json();
        setInStock(data.inStock);
      }
    } catch (err) {
      console.error("Error fetching stock:", err);
      setError("Failed to fetch stock status");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword("");
        await fetchStockStatus();
      } else {
        setError("Invalid password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStock = async () => {
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    try {
      const response = await fetch("/api/stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inStock: !inStock }),
      });

      if (response.ok) {
        setInStock(!inStock);
        setSuccessMessage(
          `Stock status updated to: ${!inStock ? "IN STOCK" : "OUT OF STOCK"}`,
        );
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setError("Failed to update stock status");
      }
    } catch (err) {
      console.error("Error updating stock:", err);
      setError("Failed to update stock status");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/logout", { method: "POST" });
    } catch (err) {
      console.error("Logout error:", err);
    }
    setIsAuthenticated(false);
    setPassword("");
  };

  if (loading && !isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Login Form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="rounded-lg border border-yellow-400 border-opacity-30 bg-[#1a1a1a] p-8">
            <h1 className="text-3xl font-bold text-white mb-2 text-center">
              Admin Login
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Access the admin dashboard
            </p>

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 flex items-center gap-3">
                <AlertCircle size={20} className="text-red-400" />
                <span className="text-red-400">{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 rounded-lg bg-black border border-yellow-400 border-opacity-30 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:border-opacity-100 transition-colors"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 rounded-lg font-bold text-lg transition-colors ${
                  loading
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Admin Dashboard
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-400">
              Manage server inventory and stock status
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-yellow-400 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 flex items-center gap-3">
            <AlertCircle size={20} className="text-red-400" />
            <span className="text-red-400">{error}</span>
          </div>
        )}

        {successMessage && (
          <div className="mb-6 p-4 rounded-lg bg-green-500 bg-opacity-10 border border-green-500 border-opacity-30 flex items-center gap-3">
            <span className="text-green-400">{successMessage}</span>
          </div>
        )}

        {/* Stock Management Card */}
        <div className="rounded-lg border border-yellow-400 border-opacity-30 bg-[#1a1a1a] p-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Server Stock Status
          </h2>
          <p className="text-gray-400 mb-8">
            Control whether servers are available for purchase
          </p>

          <div className="bg-black rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-400 text-sm mb-2">Current Status</p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-4 h-4 rounded-full ${inStock ? "bg-green-400" : "bg-red-400"}`}
                  ></div>
                  <span
                    className={`text-2xl font-bold ${inStock ? "text-green-400" : "text-red-400"}`}
                  >
                    {inStock ? "IN STOCK" : "OUT OF STOCK"}
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              {inStock
                ? "Servers are currently available for purchase. Customers will see all pricing options."
                : 'Servers are currently unavailable. Customers will see an "Out of Stock" message on the pricing page.'}
            </p>

            <button
              onClick={handleToggleStock}
              disabled={loading}
              className={`px-8 py-3 rounded-lg font-bold text-lg transition-colors ${
                loading
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : inStock
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
              }`}
            >
              {loading
                ? "Updating..."
                : inStock
                  ? "Set Out of Stock"
                  : "Set In Stock"}
            </button>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-black p-6 border border-yellow-400 border-opacity-20">
              <h3 className="font-bold text-white mb-2">
                One-Time Purchase (€30)
              </h3>
              <p className="text-gray-400 text-sm">
                This option is {inStock ? "available" : "unavailable"} for
                customers
              </p>
            </div>
            <div className="rounded-lg bg-black p-6 border border-yellow-400 border-opacity-20">
              <h3 className="font-bold text-white mb-2">
                Monthly Subscription (€5)
              </h3>
              <p className="text-gray-400 text-sm">
                This option is {inStock ? "available" : "unavailable"} for
                customers
              </p>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 p-8 rounded-lg bg-[#1a1a1a] border border-yellow-400 border-opacity-20">
          <h3 className="text-xl font-bold text-white mb-4">
            Setup Information
          </h3>
          <ul className="space-y-3 text-gray-400">
            <li>• Servers take 2-3 business days to set up after purchase</li>
            <li>• When out of stock, all purchase buttons will be disabled</li>
            <li>
              • Customers will receive email notifications about setup progress
            </li>
            <li>• Check back soon to update inventory as needed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
