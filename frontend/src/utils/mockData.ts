// Sample user data for development/testing
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  points: number;
  level: number;
  joinedAt: Date;
}

export const sampleUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/avatars/john.jpg',
    points: 1250,
    level: 5,
    joinedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: '/avatars/jane.jpg',
    points: 890,
    level: 3,
    joinedAt: new Date('2024-02-20')
  }
];

// Sample coding challenge data
export interface Challenge {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  description: string;
  tags: string[];
}

export const sampleChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Two Sum',
    difficulty: 'Easy',
    points: 100,
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    tags: ['Array', 'Hash Table']
  },
  {
    id: '2',
    title: 'Binary Tree Traversal',
    difficulty: 'Medium',
    points: 200,
    description: 'Implement different traversal methods for a binary tree.',
    tags: ['Tree', 'DFS', 'BFS']
  },
  {
    id: '3',
    title: 'Dynamic Programming - Fibonacci',
    difficulty: 'Hard',
    points: 300,
    description: 'Optimize the Fibonacci sequence calculation using dynamic programming.',
    tags: ['Dynamic Programming', 'Recursion']
  }
];
