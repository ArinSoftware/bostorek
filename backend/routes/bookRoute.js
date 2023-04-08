import express from 'express';
import * as bookController from '../controllers/bookController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';
import * as commentController from '../controllers/commentController.js';

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
  .route('/:bookId')
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

// Comment routes
router
  .route('/:bookId/comments')
  .post(authMiddleware.isLoggedIn, commentController.createComment)
  .get(authMiddleware.isLoggedIn, commentController.getAllComments);

router
  .route('/:bookId/rate')
  .post(authMiddleware.isLoggedIn, bookController.rateBook);

export default router;
