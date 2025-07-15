import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'Programming Pathshala API is running',
    timestamp: new Date().toISOString()
  });
});

// Authentication routes
app.post('/api/auth/register', (req: Request, res: Response) => {
  const { name, email, whatsapp, password } = req.body;
  
  if (!name || !email || !whatsapp || !password) {
    return res.status(400).json({ 
      error: 'All fields are required',
      fields: ['name', 'email', 'whatsapp', 'password']
    });
  }

  res.status(201).json({ 
    message: 'Registration successful! Welcome to Programming Pathshala 🚀',
    user: { name, email }
  });
});

app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ 
      error: 'Email and password are required'
    });
  }

  res.status(200).json({ 
    message: 'Login successful!',
    user: { email }
  });
});

// Programming challenge routes
app.get('/api/challenges/daily', (req: Request, res: Response) => {
  res.status(200).json({
    challenge: {
      id: 1,
      title: "Two Sum Problem",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      difficulty: "Easy",
      points: 10,
      examples: [
        {
          input: "nums = [2,7,11,15], target = 9",
          output: "[0,1]",
          explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
        }
      ]
    }
  });
});

app.get('/api/user/points', (req: Request, res: Response) => {
  res.status(200).json({
    totalPoints: 150,
    todayPoints: 10,
    streak: 7,
    achievements: [
      { name: "Early Bird", description: "Complete 7 days in a row" },
      { name: "Problem Solver", description: "Solve 10 coding problems" }
    ]
  });
});

// Rewards routes
app.get('/api/rewards', (req: Request, res: Response) => {
  res.status(200).json({
    rewards: [
      { id: 1, name: "Zomato Coupon Code", points: 1000, available: true },
      { id: 2, name: "30 Days Free Trial of Renaissance", points: 2000, available: true },
      { id: 3, name: "Code Till Infinity T-shirt", points: 4000, available: true },
      { id: 4, name: "Laptop Bag", points: 7000, available: true },
      { id: 5, name: "Wireless Boat Earphone", points: 10000, available: true },
      { id: 6, name: "Scholarship for TFP", points: 14000, available: true }
    ]
  });
});

app.post('/api/rewards/redeem', (req: Request, res: Response) => {
  const { rewardId, userPoints } = req.body;
  
  res.status(200).json({
    message: "Reward redeemed successfully!",
    rewardId,
    remainingPoints: userPoints - 1000 // Example calculation
  });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handling middleware
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Programming Pathshala Backend API is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📡 Frontend URL: ${process.env.CORS_ORIGIN || 'http://localhost:3000'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});

export default app;
