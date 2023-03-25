import express from 'express';
import app from './app/app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const startServer = async () => {
  try {
    // Connect to the MongoDB database
    await connectDB();

    // Create the Express server
    const server = express();
    server.use(app);

    // Start the server
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
