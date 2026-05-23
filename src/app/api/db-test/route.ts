import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

export async function GET() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return NextResponse.json(
      {
        success: false,
        error: "DATABASE_URL environment variable is not defined on the server.",
      },
      { status: 500 }
    );
  }

  try {
    const sql = neon(databaseUrl);
    const result =
      await sql`SELECT NOW() as current_time, VERSION() as db_version`;

    return NextResponse.json({
      success: true,
      message: "Successfully connected to Neon Database!",
      data: result[0],
    });
  } catch (error) {
    console.error("Database connection test failed:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to connect to database.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
