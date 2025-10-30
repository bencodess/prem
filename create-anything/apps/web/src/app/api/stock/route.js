// Simple in-memory stock status (in production, this would be in a database)
let stockStatus = {
  inStock: true,
};

export async function GET() {
  return Response.json({
    inStock: stockStatus.inStock,
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (typeof body.inStock !== "boolean") {
      return Response.json({ error: "Invalid inStock value" }, { status: 400 });
    }

    stockStatus.inStock = body.inStock;

    return Response.json({
      success: true,
      inStock: stockStatus.inStock,
    });
  } catch (error) {
    console.error("Error updating stock:", error);
    return Response.json(
      { error: "Failed to update stock status" },
      { status: 500 },
    );
  }
}
