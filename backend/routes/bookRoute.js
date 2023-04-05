import express from 'express';
import * as bookController from '../controllers/bookController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/')
  .post(authMiddleware.isLoggedIn, bookController.createBook)
  .get(bookController.getAllBooks);

// Endpoint to get all books related to the logged-in user
router.get(
  '/user',
  authMiddleware.isLoggedIn,
  bookController.getAllBooksByUser
);

router
  .route('/:id')
  .get(bookController.getABook)
  .put(
    authMiddleware.isLoggedIn,
    authMiddleware.isOwner,
    bookController.updateBook
  )
  .delete(
    authMiddleware.isLoggedIn,
    authMiddleware.isOwner,
    bookController.deleteBook
  );

export default router;
