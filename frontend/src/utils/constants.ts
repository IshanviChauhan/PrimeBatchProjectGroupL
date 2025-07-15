// API configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// API endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    profile: '/auth/profile'
  },
  posts: {
    list: '/posts',
    create: '/posts',
    update: (id: string) => `/posts/${id}`,
    delete: (id: string) => `/posts/${id}`
  },
  users: {
    list: '/users',
    profile: (id: string) => `/users/${id}`
  }
} as const;

// App constants
export const APP_CONFIG = {
  name: 'Programming Pathshala',
  version: '1.0.0',
  itemsPerPage: 10,
  maxFileSize: 5 * 1024 * 1024, // 5MB
} as const;
