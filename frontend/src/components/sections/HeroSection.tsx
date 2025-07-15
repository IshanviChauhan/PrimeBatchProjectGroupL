import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface HeroSectionProps {
  onSubmit: (e: React.FormEvent) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSubmit }) => {
  return (
    <section className="relative px-4 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
              🔥 Build Skills For Free
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              &lt;Code Everyday&gt;
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Get job-ready in just 15 minutes a day! Watch quick videos, solve
              one problem daily, and build your skills—completely free for 100
              Days. Refer friends & win rewards
            </p>
            
            {/* Feature Pills */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Exclusive Rewards',
                'Referral Bonuses', 
                'Earn Cash Prizes',
                'Daily Problem Solving',
                'Peer Learning',
                'Weekly Live'
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800 px-4 py-3 rounded-lg text-center">
                  <span className="text-sm font-medium text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Sign Up Form */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl">
            <div className="flex mb-6">
              <Button className="flex-1 rounded-lg" size="lg">
                Sign Up
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 ml-2 rounded-lg" 
                size="lg"
              >
                Log In
              </Button>
            </div>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Name</label>
                <Input 
                  name="name"
                  placeholder="Enter full name" 
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Email Address</label>
                <Input 
                  name="email"
                  type="email" 
                  placeholder="Enter email address" 
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white">WhatsApp Number</label>
                <div className="flex">
                  <div className="flex items-center bg-slate-700 border border-slate-600 rounded-l-md px-3">
                    <span className="text-2xl">🇮🇳</span>
                  </div>
                  <Input 
                    name="whatsapp"
                    placeholder="Enter 10-digit number" 
                    className="rounded-l-none border-l-0"
                    required
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">We have a strict no-spam policy</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-white">Create Password</label>
                <Input 
                  name="password"
                  type="password" 
                  placeholder="Enter your 6-character password" 
                  minLength={6}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Join the Challenge 🚀
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
