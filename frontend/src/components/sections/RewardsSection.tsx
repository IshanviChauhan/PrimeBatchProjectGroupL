import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const RewardsSection: React.FC = () => {
  const rewards = [
    {
      title: 'Zomato Coupon Code',
      points: 1000,
      imageUrl: '/images/rewards/zomato-logo.png',
      alt: 'Zomato Logo'
    },
    {
      title: '30 Days Free Trial of Renaissance',
      points: 2000,
      imageUrl: '/images/rewards/renaissance-logo.png',
      alt: 'Renaissance Trial'
    },
    {
      title: 'Code Till Infinity T-shirt',
      points: 4000,
      imageUrl: '/images/rewards/tshirt.png',
      alt: 'Programming T-shirt'
    },
    {
      title: 'Laptop Bag',
      points: 7000,
      imageUrl: '/images/rewards/laptop-bag.png',
      alt: 'Laptop Bag'
    },
    {
      title: 'Wireless Boat Earphone',
      points: 10000,
      imageUrl: '/images/rewards/earphones.png',
      alt: 'Wireless Earphones'
    },
    {
      title: 'Scholarship for TFP',
      points: 14000,
      imageUrl: '/images/rewards/scholarship.png',
      alt: 'Scholarship Certificate'
    }
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">What will you win?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <Card key={index} className="bg-white text-black">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={reward.imageUrl}
                    alt={reward.alt}
                    className="w-16 h-16 object-contain"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.src = '/api/placeholder/64/64';
                    }}
                  />
                </div>
                <CardTitle className="text-lg text-black">{reward.title}</CardTitle>
                <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center mt-4">
                  {reward.points} 🪙
                </div>
                <Button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white">
                  Redeem Now
                </Button>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
