const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.json());

// Import Vercel serverless function handlers
const dbTestHandler = require('./api/db-test');
const createOrderHandler = require('./api/create-order');

// Helper to convert Vercel handlers to Express routes
const makeExpressRoute = (handler) => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (err) {
      console.error('Express wrapper error:', err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, error: 'Internal Server Error', details: err.message });
      }
    }
  };
};

// Map Vercel serverless paths
app.all('/api/db-test', makeExpressRoute(dbTestHandler));
app.all('/api/create-order', makeExpressRoute(createOrderHandler));

// Serve static files from project root
app.use(express.static(path.join(__dirname)));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Novex-Sport Local Server running!`);
  console.log(`👉 Main website: http://localhost:${PORT}/index.html`);
  console.log(`👉 Storefront: http://localhost:${PORT}/Node_p/tienda.html`);
  console.log(`👉 Connection Test: http://localhost:${PORT}/api/db-test`);
  console.log(`==================================================`);
});
