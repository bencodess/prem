// Simple session storage (in production, use proper session management)
const adminSessions = new Set();

// The admin password - in production, use a hashed password and environment variable
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

export async function POST(request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return Response.json({ error: "Password is required" }, { status: 400 });
    }

    if (password !== ADMIN_PASSWORD) {
      return Response.json({ error: "Invalid password" }, { status: 401 });
    }

    // Generate a simple session token
    const sessionToken = Math.random().toString(36).substr(2) + Date.now();
    adminSessions.add(sessionToken);

    const response = Response.json({ success: true });
    response.headers.set(
      "Set-Cookie",
      `adminSession=${sessionToken}; Path=/; Max-Age=86400; HttpOnly`,
    );
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return Response.json({ error: "Login failed" }, { status: 500 });
  }
}
