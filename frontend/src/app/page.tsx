import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative px-4 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                🔥 Build Skills For Free
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                &lt;Code Everyday&gt;
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Get job-ready in just 15 minutes a day! Watch quick videos, solve
                one problem daily, and build your skills—completely free for 100
                Days. Refer friends & win rewards
              </p>
              
              {/* Feature Pills */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-slate-800 px-4 py-3 rounded-lg text-center">
                  <span className="text-sm font-medium">Exclusive Rewards</span>
                </div>
                <div className="bg-slate-800 px-4 py-3 rounded-lg text-center">
                  <span className="text-sm font-medium">Referral Bonuses</span>
                </div>
                <div className="bg-slate-800 px-4 py-3 rounded-lg text-center">
                  <span className="text-sm font-medium">Earn Cash Prizes</span>
                </div>
                <div className="bg-slate-800 px-4 py-3 rounded-lg text-center">
                  <span className="text-sm font-medium">Daily Problem Solving</span>
                </div>
                <div className="bg-slate-800 px-4 py-3 rounded-lg text-center">
                  <span className="text-sm font-medium">Peer Learning</span>
                </div>
                <div className="bg-slate-800 px-4 py-3 rounded-lg text-center">
                  <span className="text-sm font-medium">Weekly Live</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Sign Up Form */}
            <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl">
              <div className="flex mb-6">
                <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium">
                  Sign Up
                </button>
                <button className="flex-1 bg-transparent text-gray-400 py-3 px-6 rounded-lg font-medium border border-gray-600 ml-2">
                  Log In
                </button>
              </div>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    placeholder="Enter full name" 
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input 
                    type="email" 
                    placeholder="Enter email address" 
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp Number</label>
                  <div className="flex">
                    <div className="flex items-center bg-slate-700 border border-slate-600 rounded-l-md px-3">
                      <span className="text-2xl">🇮🇳</span>
                    </div>
                    <Input 
                      placeholder="Enter 10-digit number" 
                      className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 rounded-l-none"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">We have a strict no-spam policy</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Create Password</label>
                  <Input 
                    type="password" 
                    placeholder="Enter your 6-character password" 
                    className="bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                  />
                </div>
                
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 text-lg font-medium">
                  Join the Challenge 🚀
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How does it work section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How does it work?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  Step 1
                </div>
                <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                  <div className="text-6xl">📺</div>
                </div>
                <CardTitle className="text-white">Watch daily videos to earn points!</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  Step 2
                </div>
                <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👥</div>
                </div>
                <CardTitle className="text-white">Refer friends for bonus points!</CardTitle>
              </CardHeader>
            </Card>
            
            <Card className="bg-slate-800 border-slate-700 text-center">
              <CardHeader>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  Step 3
                </div>
                <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-full flex items-center justify-center">
                  <div className="text-6xl">🎁</div>
                </div>
                <CardTitle className="text-white">Redeem points for exclusive rewards!</CardTitle>
              </CardHeader>
            </Card>
          </div>
          
          {/* Activity & Points Section */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Activity & Points Earned</h3>
            
            {/* Points Flow */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="bg-slate-700 px-6 py-4 rounded-lg mb-2">
                  <span className="font-medium">Sign-up/Login Bonus</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">+50</span>
                </div>
              </div>
              
              <div className="text-2xl text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-slate-700 px-6 py-4 rounded-lg mb-2">
                  <span className="font-medium">Watch a Video (Daily)</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">+10/Video</span>
                </div>
              </div>
              
              <div className="text-2xl text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-slate-700 px-6 py-4 rounded-lg mb-2">
                  <span className="font-medium">7-Days Streak</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">+50/Video</span>
                </div>
              </div>
              
              <div className="text-2xl text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-slate-700 px-6 py-4 rounded-lg mb-2">
                  <span className="font-medium">30-Days Streak</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">+100</span>
                </div>
              </div>
              
              <div className="text-2xl text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-slate-700 px-6 py-4 rounded-lg mb-2">
                  <span className="font-medium">Hit 100 Days of Code Completion</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">+500</span>
                </div>
              </div>
            </div>
            
            {/* Referral Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-lg">Refer 1 Friend</CardTitle>
                  <CardDescription className="text-gray-400">(Only for successful Signup)</CardDescription>
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold inline-block mt-2">
                    🪙 +50
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-lg">Refer 5 Friends</CardTitle>
                  <CardDescription className="text-gray-400">(Same day to earn 2X points)</CardDescription>
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold inline-block mt-2">
                    🪙 +500
                  </div>
                </CardHeader>
              </Card>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-lg">Refer 10 Friend</CardTitle>
                  <CardDescription className="text-gray-400">(Same day to earn 3X points)</CardDescription>
                  <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold inline-block mt-2">
                    🪙 +1500
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What will you win section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What will you win?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white text-black">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">zomato</span>
                </div>
                <CardTitle className="text-lg">Zomato Coupon Code</CardTitle>
                <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center mt-4">
                  1000 🪙
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                  Redeem Now
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="bg-white text-black">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-blue-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">%</span>
                </div>
                <CardTitle className="text-lg">30 Days Free Trial of Renaissance</CardTitle>
                <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center mt-4">
                  2000 🪙
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                  Redeem Now
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="bg-white text-black">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-black rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold">👕</span>
                </div>
                <CardTitle className="text-lg">Code Till Infinity T-shirt</CardTitle>
                <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center mt-4">
                  4000 🪙
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                  Redeem Now
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="bg-white text-black">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">💼</span>
                </div>
                <CardTitle className="text-lg">Laptop Bag</CardTitle>
                <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center mt-4">
                  7000 🪙
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                  Redeem Now
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="bg-white text-black">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-black rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🎧</span>
                </div>
                <CardTitle className="text-lg">Wireless Boat Earphone</CardTitle>
                <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center mt-4">
                  10000 🪙
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                  Redeem Now
                </Button>
              </CardHeader>
            </Card>
            
            <Card className="bg-white text-black">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-indigo-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">🎓</span>
                </div>
                <CardTitle className="text-lg">Scholarship for TFP</CardTitle>
                <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center mt-4">
                  14000 🪙
                </div>
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mt-4">
                  Redeem Now
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
