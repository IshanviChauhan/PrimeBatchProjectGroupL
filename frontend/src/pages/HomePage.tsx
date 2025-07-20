'use client';

import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import RewardsSection from '../components/sections/RewardsSection';

const HomePage: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      whatsapp: formData.get('whatsapp'),
      password: formData.get('password')
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      
      const result = await response.json();
      if (response.ok) {
        alert('Registration successful! Welcome to Programming Pathshala 🚀');
      } else {
        alert('Registration failed: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <Layout currentPage="home">
      <div className="text-white">
        <HeroSection onSubmit={handleSubmit} />
        <HowItWorksSection />
        <RewardsSection />
      </div>
    </Layout>
  );
};

export default HomePage;
