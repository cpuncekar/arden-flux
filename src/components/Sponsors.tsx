import React from 'react';

import ApexLogo from '../assets/images/sponsors/apex-white-nav-logo.svg';
import CodLogo from '../assets/images/sponsors/cod-logo.svg';
import RazerLogo from '../assets/images/sponsors/razer-ths-logo.svg';
import CCR from '../assets/images/sponsors/ccr-rivals-nav-logo.png';
import Respawn from '../assets/images/sponsors/respawn-footer-logo-white.svg';

interface Sponsor {
  id: number;
  name: string;
  logo: string;
}

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: 'Apex Legends Logo',
    logo: ApexLogo,
  },
  {
    id: 2,
    name: 'Call of Duty at the Logo',
    logo: CodLogo,
  },
   {
    id: 3,
    name: 'CCR Logo',
    logo: CCR,
  },
  {
    id: 4,
    name: 'Respawn Logo',
    logo: Respawn,
  },
];

const Sponsors: React.FC = () => {
  return (
    <section id="partners" className="relative py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-flux-orange font-display uppercase text-sm tracking-widest">OUR PARTNERS</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Powered By Precision</h2>
          <p className="text-flux-gray-300 max-w-2xl mx-auto">
            We partner with leading brands who share our commitment to excellence and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {sponsors.map((sponsor) => (
            <div 
              key={sponsor.id}
              className="bg-flux-gray-900/50 border border-flux-gray-800 rounded-lg p-6 flex items-center justify-center transition-all hover:border-flux-orange/50 hover:shadow-md hover:shadow-flux-orange/10 group"
            >
              <div className="relative h-20 flex items-center justify-center">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-flux-gray-400 mb-4">Interested in partnering with Arden Flux?</p>
          <a 
            href="#" 
            className="text-flux-orange hover:text-flux-orange/80 font-medium inline-block border-b border-flux-orange/30 hover:border-flux-orange transition-colors"
          >
            Contact our partnership team
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-20 h-[1px] bg-flux-orange/20"></div>
      <div className="absolute bottom-10 right-0 w-20 h-[1px] bg-flux-orange/20"></div>
    </section>
  );
};

export default Sponsors;