const { neon } = require('@neondatabase/serverless');
require('dotenv').config();

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("Error: DATABASE_URL is not defined in environment variables or .env file.");
    console.error("Please create a .env file with your DATABASE_URL from Neon.");
    process.exit(1);
  }

  console.log("Connecting to Neon database...");
  const sql = neon(databaseUrl);

  try {
    console.log("Creating 'orders' table if it does not exist...");
    await sql(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        customer_email VARCHAR(255) NOT NULL,
        customer_phone VARCHAR(50) NOT NULL,
        items JSONB NOT NULL,
        total_price NUMERIC(10, 2) NOT NULL,
        currency VARCHAR(10) NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log("Table 'orders' created successfully or already exists!");
    
    console.log("Database seed completed successfully!");
  } catch (error) {
    console.error("Error setting up database:", error);
    process.exit(1);
  }
}

main();
