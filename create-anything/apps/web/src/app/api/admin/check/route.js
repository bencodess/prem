export async function GET(request) {
  try {
    // In production, verify the session cookie
    const cookies = request.headers.get("cookie") || "";
    const hasAdminSession = cookies.includes("adminSession=");

    if (!hasAdminSession) {
      return Response.json({ authenticated: false }, { status: 401 });
    }

    return Response.json({ authenticated: true });
  } catch (error) {
    console.error("Auth check error:", error);
    return Response.json({ authenticated: false }, { status: 500 });
  }
}
