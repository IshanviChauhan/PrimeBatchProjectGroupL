import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Watch daily videos to earn points!',
      imageUrl: '/api/placeholder/200/200',
      alt: 'Watch daily videos',
      gradient: 'from-orange-400 to-pink-500'
    },
    {
      step: 2,
      title: 'Refer friends for bonus points!',
      imageUrl: '/api/placeholder/200/200',
      alt: 'Refer friends',
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      step: 3,
      title: 'Redeem points for exclusive rewards!',
      imageUrl: '/api/placeholder/200/200',
      alt: 'Redeem rewards',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How does it work?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((stepData) => (
            <Card key={stepData.step} className="text-center">
              <CardHeader>
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-4">
                  Step {stepData.step}
                </div>
                <div className={`w-48 h-48 mx-auto mb-4 relative overflow-hidden rounded-2xl bg-gradient-to-br ${stepData.gradient} flex items-center justify-center`}>
                  <img 
                    src={stepData.imageUrl}
                    alt={stepData.alt}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                <CardTitle className="text-white">{stepData.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
