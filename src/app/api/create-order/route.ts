import { NextRequest, NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function POST(request: NextRequest) {
  try {
    const {
      customerName,
      customerEmail,
      customerPhone,
      items,
      totalPrice,
      currency,
    } = await request.json();

    // Basic validation
    if (
      !customerName ||
      !customerEmail ||
      !customerPhone ||
      !items ||
      !totalPrice ||
      !currency
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Missing required fields: customerName, customerEmail, customerPhone, items, totalPrice, currency.",
        },
        { status: 400 }
      );
    }

    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "DATABASE_URL is not configured on the server.",
        },
        { status: 500 }
      );
    }

    const sql = neon(databaseUrl);

    const result = await sql`
      INSERT INTO orders (customer_name, customer_email, customer_phone, items, total_price, currency)
      VALUES (${customerName}, ${customerEmail}, ${customerPhone}, ${JSON.stringify(items)}, ${totalPrice}, ${currency})
      RETURNING id, created_at, status
    `;

    const newOrder = result[0];

    return NextResponse.json({
      success: true,
      message: "Order created and registered successfully in the database!",
      orderId: newOrder.id,
      createdAt: newOrder.created_at,
      status: newOrder.status,
    });
  } catch (error) {
    console.error("Error saving order to database:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to record the order in the database.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
