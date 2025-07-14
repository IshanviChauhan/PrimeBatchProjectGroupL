import { Router } from 'express';
import { body } from 'express-validator';
import { register, login, logout, verifyToken } from '../controllers/authController';
import { validateRequest } from '../middleware/validateRequest';
import { auth } from '../middleware/auth';

const router = Router();

// Register route
router.post('/register', [
  body('username')
    .isLength({ min: 3, max: 30 })
    .withMessage('Username must be between 3 and 30 characters'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('firstName')
    .notEmpty()
    .withMessage('First name is required'),
  body('lastName')
    .notEmpty()
    .withMessage('Last name is required')
], validateRequest, register);

// Login route
router.post('/login', [
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
], validateRequest, login);

// Logout route
router.post('/logout', auth, logout);

// Verify token route
router.get('/verify', auth, verifyToken);

export default router;
