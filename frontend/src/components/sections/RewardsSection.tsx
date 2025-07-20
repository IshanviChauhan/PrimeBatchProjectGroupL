import React from 'react';
import { Card, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

const RewardsSection: React.FC = () => {
  const rewards = [
    {
      title: 'Zomato Coupon Code',
      points: 1000,
      imageUrl: '/zomato.svg',
      alt: 'Zomato Logo'
    },
    {
      title: '30 Days Free Trial of Renaissance',
      points: 2000,
      imageUrl: '/renaissance.svg',
      alt: 'Renaissance Trial'
    },
    {
      title: 'Code Till Infinity T-shirt',
      points: 4000,
      imageUrl: '/Tshirt.svg',
      alt: 'Programming T-shirt'
    },
    {
      title: 'Laptop Bag',
      points: 7000,
      imageUrl: '/Laptopbag.svg',
      alt: 'Laptop Bag'
    },
    {
      title: 'Wireless Boat Earphone',
      points: 10000,
      imageUrl: '/Earphones.svg',
      alt: 'Wireless Earphones'
    },
    {
      title: 'Scholarship for TFP',
      points: 14000,
      imageUrl: '/TFPscholarship.svg',
      alt: 'Scholarship Certificate'
    }
  ];

  return (
    <section className="py-16 bg-slate-800">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">What will you win?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rewards.map((reward, index) => (
            <Card key={index} className="bg-white text-black h-85 flex flex-col relative">
              <CardHeader className="text-center p-2 flex-1 flex flex-col relative">
                <div className="p-6 flex items-center justify-center rounded-lg mb-4" style={{ backgroundColor: '#f1f5f9'}}>
                  <img 
                    src={reward.imageUrl}
                    alt={reward.alt}
                    className="w-auto h-34 object-contain"
                    onError={(e) => {
                      // Hide broken image and show fallback icon
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-icon')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-icon w-16 h-16 flex items-center justify-center text-4xl';
                        fallback.textContent = '🎁';
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-lg text-black flex-1">{reward.title}</CardTitle>
                  <div className="bg-black text-white px-4 py-2 rounded-full inline-flex items-center ml-2">
                    {reward.points}&nbsp;<img src="/coin.svg" alt="coin" className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-auto">
                  <Button 
                    className="w-full text-white cursor-pointer transition-colors duration-200" 
                    style={{ backgroundColor: '#7997e1' }}
                    onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#3940A0'}
                    onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#7997e1'}
                  >
                    Redeem Now
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
