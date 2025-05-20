import React from 'react';
import { ShoppingBag, Clock } from 'lucide-react';

// Hoodie Image - MerchDrop.tsx
import HoodieMerch from '../assets/images/merch/hoodie-alpha.jpg';

// Countdown timer component
const CountdownTimer: React.FC = () => {
  // Set the end date to 7 days from now
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  
  const calculateTimeLeft = (): { days: number; hours: number; minutes: number; seconds: number } => {
    const difference = +endDate - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };
  
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearTimeout(timer);
  });
  
  return (
    <div className="flex items-center gap-6 md:gap-8">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="bg-flux-gray-800 w-14 md:w-16 h-14 md:h-16 rounded flex items-center justify-center text-xl md:text-2xl font-display font-bold">
            {value.toString().padStart(2, '0')}
          </div>
          <span className="text-xs uppercase text-flux-gray-400 mt-1">{key}</span>
        </div>
      ))}
    </div>
  );
};

const MerchDrop: React.FC = () => {
  return (
    <section id="merch" className="relative py-20 bg-flux-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-flux-orange font-display uppercase text-sm tracking-widest">LIMITED EDITION</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Gear Up with Arden Flux</h2>
            <p className="text-flux-gray-300 max-w-2xl mx-auto">
              Rep the squad with our premium gaming apparel. New drops sell out fast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Featured product */}
            <div className="group relative overflow-hidden rounded-lg">
              <div className="aspect-square bg-flux-gray-800 rounded-lg overflow-hidden">
                <img 
                    src={HoodieMerch} 
                    alt="FluxCore Hoodie" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
              </div>
              
              {/* Product tag */}
              <div className="absolute top-4 left-4 bg-flux-orange text-black px-3 py-1 rounded-sm font-medium text-sm">
                FEATURED
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-3 right-3 w-6 h-[1px] bg-flux-orange/70"></div>
              <div className="absolute top-3 right-3 w-[1px] h-6 bg-flux-orange/70"></div>
              <div className="absolute bottom-3 left-3 w-6 h-[1px] bg-flux-orange/70"></div>
              <div className="absolute bottom-3 left-3 w-[1px] h-6 bg-flux-orange/70"></div>
            </div>
            
            {/* Product details */}
            <div className="flex flex-col">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">FluxCore Hoodie</h3>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-flux-orange text-xl font-bold">$65.00</span>
                <span className="text-flux-gray-400 line-through">$75.00</span>
              </div>
              
              <p className="text-flux-gray-300 mb-6">
                Premium heavyweight hoodie in sleek black with striking orange accents. Features embroidered Arden Flux logo and custom sleeve details. Ultra-comfortable for both gaming sessions and everyday wear.
              </p>
              
              {/* Size selector */}
              <div className="mb-6">
                <span className="block text-sm text-flux-gray-400 mb-2">Select Size</span>
                <div className="flex gap-3">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button 
                      key={size}
                      className="w-10 h-10 border border-flux-gray-700 hover:border-flux-orange rounded flex items-center justify-center transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <button className="bg-flux-orange hover:bg-flux-orange/90 text-black font-medium px-6 py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 mb-8">
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>
              
              {/* Countdown timer */}
              <div className="border-t border-flux-gray-700 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-flux-orange" />
                  <span className="font-medium">Next Drop Countdown</span>
                </div>
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchDrop;