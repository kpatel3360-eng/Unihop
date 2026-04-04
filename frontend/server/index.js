const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection Logic
const DB_URI = process.env.MONGO_URI;

mongoose.connect(DB_URI)
  .then(() => {
    console.log('✅ Success: Connected to MongoDB Atlas');
  })
  .catch((err) => {
    console.error('❌ Connection Error Details:');
    console.error('Message:', err.message);
    // This helps identify if the issue is your IP address or your credentials
    if (err.message.includes('ECONNREFUSED')) {
      console.error('Tip: Your current Wi-Fi/ISP is blocking MongoDB. Try a Mobile Hotspot.');
    }
  });

// Default Route
app.get('/', (req, res) => {
  res.send('UniHop Backend is Running Successfully!');
});

// Set Port and Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is live on: http://localhost:${PORT}`);
});