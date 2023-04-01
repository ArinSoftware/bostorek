import express from 'express';
import morgan from 'morgan';
/* import cookieParser from 'cookie-parser'; */
import bookRoute from '../routes/bookRoute.js';
import authRoute from '../routes/authRoute.js';

const app = express();

// Use the cookie-parser middleware
/* app.use(cookieParser()); */

app.use(morgan('dev'));

// Use built-in middleware to parse JSON-encoded request bodies
app.use(express.json());

//Routes
app.use('/api/v1/books', bookRoute);
app.use('/api/v1/auth', authRoute);

export default app;
