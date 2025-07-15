import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Programming Pathshala Backend is running!',
    timestamp: new Date().toISOString()
  });
});

app.post('/api/auth/register', (req, res) => {
  const { name, email, whatsapp, password } = req.body;
  
  console.log('Registration request:', { name, email, whatsapp });
  
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

app.post('/api/auth/login', (req, res) => {
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

app.listen(PORT, () => {
  console.log(`🚀 Programming Pathshala Backend running on http://localhost:${PORT}`);
  console.log(`📡 Frontend expected at: http://localhost:3000`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});
