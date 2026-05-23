const { neon } = require('@neondatabase/serverless');

module.exports = async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(455).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  const { customerName, customerEmail, customerPhone, items, totalPrice, currency } = req.body;

  // Basic validation
  if (!customerName || !customerEmail || !customerPhone || !items || !totalPrice || !currency) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required fields: customerName, customerEmail, customerPhone, items, totalPrice, currency.' 
    });
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    return res.status(500).json({ 
      success: false, 
      error: 'DATABASE_URL is not configured on the server.' 
    });
  }

  try {
    const sql = neon(databaseUrl);
    
    // Insert order into PostgreSQL orders table
    const result = await sql`
      INSERT INTO orders (customer_name, customer_email, customer_phone, items, total_price, currency)
      VALUES (${customerName}, ${customerEmail}, ${customerPhone}, ${JSON.stringify(items)}, ${totalPrice}, ${currency})
      RETURNING id, created_at, status
    `;

    const newOrder = result[0];

    return res.status(200).json({
      success: true,
      message: 'Order created and registered successfully in the database!',
      orderId: newOrder.id,
      createdAt: newOrder.created_at,
      status: newOrder.status
    });
  } catch (error) {
    console.error('Error saving order to database:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to record the order in the database.',
      details: error.message
    });
  }
};
