import express from 'express';
import * as commentController from '../controllers/commentController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router
  .route('/:commentId')
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

router
  .route('/:commentId/like')
  .post(authMiddleware.isLoggedIn, commentController.likeComment);

router
  .route('/:commentId/dislike')
  .post(authMiddleware.isLoggedIn, commentController.dislikeComment);

export default router;
