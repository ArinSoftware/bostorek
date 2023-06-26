import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bookRoute from '../routes/bookRoute.js';
import authRoute from '../routes/authRoute.js';
import commentRoute from '../routes/commentRoute.js';

const app = express();

app.use(morgan('dev'));

//Enable All CORS Requests
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// Use built-in middleware to parse JSON-encoded request bodies
app.use(express.json());

// Use the cookie-parser middleware
app.use(cookieParser());

//Routes
app.use('/api/v1/comments', commentRoute);
app.use('/api/v1/books', bookRoute);
app.use('/api/v1/auth', authRoute);

export default app;
