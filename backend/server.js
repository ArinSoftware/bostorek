import express from 'express';
import app from './app/app.js';

const PORT = 3000;

const server = express();

server.use(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
