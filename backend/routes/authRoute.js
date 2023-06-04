import express from 'express';
import * as authController from '../controllers/authController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);
router.route('/logout').get(authMiddleware.isLoggedIn, authController.logout);
/* router.route('/logout').get(authController.logout); */
router.route('/dashboard').get(authMiddleware.isLoggedIn);

export default router;
