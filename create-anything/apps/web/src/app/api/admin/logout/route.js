export async function POST(request) {
  try {
    const response = Response.json({ success: true });
    response.headers.set(
      "Set-Cookie",
      "adminSession=; Path=/; Max-Age=0; HttpOnly",
    );
    return response;
  } catch (error) {
    console.error("Logout error:", error);
    return Response.json({ error: "Logout failed" }, { status: 500 });
  }
}
