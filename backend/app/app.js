import express from 'express';
import morgan from 'morgan';
import bookRoute from '../routes/bookRoute.js';

const app = express();

app.use(morgan('dev'));

//Routes
app.use('/api/v1/books', bookRoute);

export default app;
