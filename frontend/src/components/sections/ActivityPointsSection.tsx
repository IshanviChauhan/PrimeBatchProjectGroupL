import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';

const ActivityPointsSection: React.FC = () => {
  const pointsFlow = [
    { activity: 'Sign-up/Login Bonus', points: '+50' },
    { activity: 'Watch a Video (Daily)', points: '+10/Video' },
    { activity: '7-Days Streak', points: '+50/Video' },
    { activity: '30-Days Streak', points: '+100' },
    { activity: 'Hit 100 Days of Code Completion', points: '+500' }
  ];

  const referralRewards = [
    {
      title: 'Refer 1 Friend',
      description: '(Only for successful Signup)',
      points: '+50'
    },
    {
      title: 'Refer 5 Friends',
      description: '(Same day to earn 2X points)',
      points: '+500'
    },
    {
      title: 'Refer 10 Friend',
      description: '(Same day to earn 3X points)',
      points: '+1500'
    }
  ];

  return (
    <div className="bg-slate-800 rounded-2xl p-8">
      <h3 className="text-2xl font-bold text-center mb-8 text-white">Activity & Points Earned</h3>
      
      {/* Points Flow */}
      <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
        {pointsFlow.map((item, index) => (
          <React.Fragment key={index}>
            <div className="text-center">
              <div className="bg-slate-700 px-6 py-4 rounded-lg mb-2">
                <span className="font-medium text-white">{item.activity}</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {item.points}
                </span>
              </div>
            </div>
            {index < pointsFlow.length - 1 && (
              <div className="text-2xl text-gray-400">→</div>
            )}
          </React.Fragment>
        ))}
      </div>
      
      {/* Referral Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {referralRewards.map((reward, index) => (
          <Card key={index} className="bg-slate-700 border-slate-600">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-lg">{reward.title}</CardTitle>
              <CardDescription className="text-gray-400">{reward.description}</CardDescription>
              <div className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold inline-block mt-2">
                🪙 {reward.points}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ActivityPointsSection;
