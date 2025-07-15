'use client';

import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';

const AboutPage: React.FC = () => {
  const features = [
    {
      title: 'Daily Learning',
      description: 'Structured 15-minute daily lessons designed to build programming skills progressively.'
    },
    {
      title: 'Problem Solving',
      description: 'Daily coding challenges that reinforce concepts and improve problem-solving abilities.'
    },
    {
      title: 'Community Driven',
      description: 'Learn alongside peers, share progress, and get motivated by community achievements.'
    },
    {
      title: 'Reward System',
      description: 'Earn points for consistency and redeem them for exciting rewards and opportunities.'
    }
  ];

  return (
    <Layout currentPage="about">
      <div className="text-white">
        {/* Hero Section */}
        <section className="px-4 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Programming Pathshala</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We believe that consistent practice and community support are the keys to mastering programming. 
              Our platform is designed to make learning enjoyable, rewarding, and accessible to everyone.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-8">
                To democratize programming education by creating a platform where anyone can learn to code 
                through daily practice, community support, and a rewarding journey that keeps learners motivated 
                throughout their programming journey.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader className="text-center h-full flex flex-col justify-between">
                      <div>
                        <CardTitle className="text-white text-lg mb-3">{feature.title}</CardTitle>
                        <CardDescription className="text-gray-400">{feature.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already building their programming skills with us.
            </p>
            <Button size="lg" className="px-8 py-4 text-lg">
              Get Started Today
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
