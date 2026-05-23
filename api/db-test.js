const { neon } = require('@neondatabase/serverless');

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return res.status(500).json({ 
      success: false, 
      error: "DATABASE_URL environment variable is not defined on the server." 
    });
  }

  try {
    const sql = neon(databaseUrl);
    // Execute a simple query
    const result = await sql`SELECT NOW() as current_time, VERSION() as db_version`;
    
    return res.status(200).json({
      success: true,
      message: "Successfully connected to Neon Database!",
      data: result[0]
    });
  } catch (error) {
    console.error("Database connection test failed:", error);
    return res.status(500).json({
      success: false,
      error: "Failed to connect to database.",
      details: error.message
    });
  }
};
