'use client';

import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const DashboardPage: React.FC = () => {
  const [userStats] = useState({
    totalPoints: 1250,
    streak: 7,
    videosWatched: 12,
    problemsSolved: 8,
    friendsReferred: 3
  });

  const recentActivity = [
    { action: 'Watched video: "React Hooks Basics"', points: 10, time: '2 hours ago' },
    { action: 'Solved problem: "Array Manipulation"', points: 15, time: '4 hours ago' },
    { action: 'Referred friend: John Doe', points: 50, time: '1 day ago' },
    { action: 'Completed 7-day streak bonus', points: 50, time: '1 day ago' }
  ];

  const availableRewards = [
    { name: 'Zomato Coupon', points: 1000, available: true },
    { name: 'Renaissance Trial', points: 2000, available: false },
    { name: 'T-shirt', points: 4000, available: false }
  ];

  return (
    <Layout currentPage="dashboard">
      <div className="text-white">
        {/* Header */}
        <section className="px-4 py-8 bg-slate-800">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-2">Your Dashboard</h1>
            <p className="text-gray-300">Track your progress and redeem rewards</p>
          </div>
        </section>

        {/* Stats and Content */}
        <section className="py-8 bg-slate-900">
          <div className="container mx-auto px-4">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-yellow-500">{userStats.totalPoints}</CardTitle>
                  <CardDescription>Total Points</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-500">{userStats.streak}</CardTitle>
                  <CardDescription>Day Streak</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-500">{userStats.videosWatched}</CardTitle>
                  <CardDescription>Videos Watched</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-purple-500">{userStats.problemsSolved}</CardTitle>
                  <CardDescription>Problems Solved</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-500">{userStats.friendsReferred}</CardTitle>
                  <CardDescription>Friends Referred</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Recent Activity</CardTitle>
                  <CardDescription>Your latest achievements and actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                        <div>
                          <p className="text-white text-sm">{activity.action}</p>
                          <p className="text-gray-400 text-xs">{activity.time}</p>
                        </div>
                        <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm font-bold">
                          +{activity.points}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Available Rewards */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Available Rewards</CardTitle>
                  <CardDescription>Redeem your points for exciting rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableRewards.map((reward, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                        <div>
                          <p className="text-white text-sm">{reward.name}</p>
                          <p className="text-gray-400 text-xs">{reward.points} points required</p>
                        </div>
                        <Button 
                          size="sm" 
                          variant={reward.available ? "default" : "outline"}
                          disabled={!reward.available}
                        >
                          {reward.available ? "Redeem" : "Locked"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};


export default DashboardPage;
