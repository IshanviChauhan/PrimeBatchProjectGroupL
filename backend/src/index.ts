import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/abes-community')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Basic routes
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Programming Pathshala API is running',
    timestamp: new Date().toISOString()
  });
});

// API routes for the frontend
app.post('/api/auth/register', (req, res) => {
  const { name, email, whatsapp, password } = req.body;
  
  // Basic validation
  if (!name || !email || !whatsapp || !password) {
    return res.status(400).json({ 
      error: 'All fields are required',
      fields: ['name', 'email', 'whatsapp', 'password']
    });
  }

  // TODO: Implement user registration logic
  res.status(201).json({ 
    message: 'Registration successful! Welcome to Programming Pathshala',
    user: { name, email }
  });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ 
      error: 'Email and password are required'
    });
  }

  // TODO: Implement user login logic
  res.status(200).json({ 
    message: 'Login successful!',
    user: { email }
  });
});

// Programming challenge routes
app.get('/api/challenges/daily', (req, res) => {
  res.status(200).json({
    challenge: {
      id: 1,
      title: "Two Sum Problem",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      difficulty: "Easy",
      points: 10
    }
  });
});

app.get('/api/user/points', (req, res) => {
  res.status(200).json({
    totalPoints: 150,
    todayPoints: 10,
    streak: 7
  });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Programming Pathshala API is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📡 Frontend URL: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
});

export default app;
