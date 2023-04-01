import express from 'express';
import * as bookController from '../controllers/bookController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(
    authMiddleware.isLoggedIn,
    authMiddleware.isAdmin,
    bookController.createBook
  )
  .get(bookController.getAllBooks);

router
  .route('/:id')
  .get(bookController.getABook)
  .put(authMiddleware.isLoggedIn, bookController.updateBook)
  .delete(authMiddleware.isLoggedIn, bookController.deleteBook);

export default router;
