import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Button } from '../ui/button';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Watch daily videos to earn points!',
      imageUrl: '/step1.svg',
      alt: 'Watch daily videos',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      step: 2,
      title: 'Refer friends for bonus points!',
      imageUrl: '/step2.svg',
      alt: 'Refer friends',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      step: 3,
      title: 'Redeem points for exclusive rewards!',
      imageUrl: '/step3.svg',
      alt: 'Redeem rewards',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  const pointsFlow = [
    { activity: 'Sign-up/Login Bonus', points: '+50' },
    { activity: 'Sign-up/Login Bonus', points: '+50' },
    { activity: 'Watch a Video (Daily)', points: '+10/Video' },
    { activity: '7-Days Streak', points: '+50/Video' },
    { activity: '30-Days Streak', points: '+100' },
    { activity: '100 Days of Code', points: '+500' }
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
    <section className="pt-16 pb-8 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How does it work?</h2>
        
        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((stepData) => (
            <Card key={stepData.step} className="text-center">
              <CardHeader>
                <div className="px-4 py-2 text-sm font-medium mb-4 flex items-center justify-center" style={{ backgroundColor: '#ecfdf5', color: '#059669', width: '100px', height: '40px', borderRadius: '10px' }}>
                  Step {stepData.step}
                </div>
                <div className={`flex items-center justify-center`}>
                  <img 
                    src={stepData.imageUrl}
                    alt={stepData.alt}
                    className="w-64 h-auto object-contain"
                  />
                </div>
                <CardTitle className="text-white">{stepData.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Activity & Points Earned Section */}
        <div className="bg-slate-800 rounded-2xl p-4 sm:p-8 mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">Activity & Points Earned</h3>
          
          {/* Desktop - Points Flow SVG */}
          <div className="hidden md:block mb-10 mt-10">
            <img 
              src="/PointsFlow.svg"
              alt="Points Flow Diagram"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Mobile/Small Screen - Table Layout */}
          <div className="block md:hidden mb-8">
            <table className="w-full border-2 border-white rounded-lg bg-slate-700">
              <tbody>
                {pointsFlow.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`${
                      index !== pointsFlow.length - 1 ? 'border-b-2 border-white' : ''
                    }`}
                  >
                    <td className="text-white text-sm font-medium px-4 py-3 border-r-2 border-white text-left">
                      {item.activity}
                    </td>
                    <td className="px-4 py-3 min-w-[120px] text-left">
                      <div className="flex items-center gap-1">
                        <img src="/coin.svg" alt="coin" className="w-4 h-4" />
                        <span className="text-white font-bold text-sm">
                          {item.points}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Referral Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {referralRewards.map((reward, index) => (
              <Card key={index} className="bg-white border-gray-200 shadow-sm" style={{ borderRadius: '10px' }}>
                <CardHeader className="p-2 text-center">
                  {/* Mobile Layout - Points on Right */}
                  <div className="flex justify-center items-center md:hidden">
                    <div className="flex-1 text-center">
                      <CardTitle className="text-black text-lg font-semibold mb-1">{reward.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm">{reward.description}</CardDescription>
                    </div>
                    <div className="ml-2 flex-shrink-0">
                      <div className="text-white px-2 py-1 font-bold inline-flex items-center gap-1" style={{ backgroundColor: '#b45309', borderRadius: '10px' }}>
                        <img src="/coin.svg" alt="coin" className="w-4 h-4" />
                        <span>{reward.points}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Desktop Layout - Centered */}
                  <div className="hidden md:block text-center">
                    <div>
                      <CardTitle className="text-black text-lg font-semibold mb-2">{reward.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm mb-2">{reward.description}</CardDescription>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="text-white px-2 py-1 font-bold inline-flex items-center gap-1" style={{ backgroundColor: '#b45309', borderRadius: '10px' }}>
                        <img src="/coin.svg" alt="coin" className="w-4 h-4" />
                        <span>{reward.points}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        {/* Referral Link Section */}
        <div className="text-center w-full p-6">
          <div>
            <h4 className="text-xl font-bold text-white mb-4">Your Referral Link</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto p-2 rounded-xl" style={{ backgroundColor: '#e1e7f8'}}>
              <input 
                type="text" 
                value="http://www.sample.edu/referral" 
                readOnly 
                className="w-full sm:flex-1 px-4 py-2 bg-white rounded-lg text-gray-800"
              />
              <Button 
                className="w-full sm:w-auto text-white px-6 py-2 rounded-lg cursor-pointer transition-colors duration-200" 
                style={{ backgroundColor: '#7997e1' }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#3b82f6'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#7997e1'}
              >
                Copy Referral link
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
