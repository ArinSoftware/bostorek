import express from 'express';
import * as commentController from '../controllers/commentController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/:id')
  .get(commentController.getAComment)
  .put(
    authMiddleware.isLoggedIn,
    authMiddleware.isCommentator,
    commentController.updateComment
  )
  .delete(
    authMiddleware.isLoggedIn,
    authMiddleware.isCommentator,
    commentController.deleteComment
  );

/* 
Comments Endpoints:

Create a new comment: POST /api/v1/books/:bookId/comments
Retrieve all comments for a book: GET /api/v1/books/:bookId/comments
Retrieve a single comment by ID: GET /api/v1/comments/:commentId
Update a comment by ID: PATCH /api/v1/comments/:commentId
Delete a comment by ID: DELETE /api/v1/comments/:commentId
Books Endpoints:

Create a new book: POST /api/v1/books
Retrieve all books: GET /api/v1/books
Retrieve a single book by ID: GET /api/v1/books/:bookId
Update a book by ID: PATCH /api/v1/books/:bookId
Delete a book by ID: DELETE /api/v1/books/:bookId


*/

export default router;
