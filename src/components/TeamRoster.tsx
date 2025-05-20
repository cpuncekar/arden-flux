import React, { useState } from 'react';
import { Trophy, Gamepad2, Braces, Flame, Zap } from 'lucide-react';

// Team Images TeamRoster.tsx
import FluxZero from '../assets/images/team/01_FluxZero.jpg';
import FluxZeroAdjust from '../assets/images/team/01_FluxZero_adjustment.jpg';
import Rift9 from '../assets/images/team/02_Rift9.jpg';
import NOVA from '../assets/images/team/03_NOVA.jpg';
import Zynith from '../assets/images/team/04_Zynith.jpg';
import KhaosAI from '../assets/images/team/05_KhaosAI.jpg';


interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'FluxZeroAdjust',
    role: 'Captain',
    description: 'Strategic genius with 200+ tournament wins',
    icon: <Trophy className="w-5 h-5 text-flux-orange" />,
    imageSrc: FluxZero,
  },
  {
    id: 2,
    name: 'Rift9',
    role: 'Assault',
    description: 'Aggressive playstyle with pinpoint accuracy',
    icon: <Gamepad2 className="w-5 h-5 text-flux-orange" />,
    imageSrc: Rift9,
  },
  {
    id: 3,
    name: 'NOVA.exe',
    role: 'Techie',
    description: 'Hardware modder with lightning reflexes',
    icon: <Braces className="w-5 h-5 text-flux-orange" />,
    imageSrc: NOVA,
  },
  {
    id: 4,
    name: 'Zynith',
    role: 'Sniper',
    description: 'Steady hand, calm under pressure',
    icon: <Flame className="w-5 h-5 text-flux-orange" />,
    imageSrc: Zynith,
  },
  {
    id: 5,
    name: 'KhaosAI',
    role: 'Wildcard',
    description: 'Unpredictable tactics, impossible to counter',
    icon: <Zap className="w-5 h-5 text-flux-orange" />,
    imageSrc: KhaosAI,
  },
];

const TeamRoster: React.FC = () => {
  const [activePlayer, setActivePlayer] = useState<number | null>(null);
  
  return (
    <section id="team" className="relative py-20 bg-flux-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-flux-orange font-display uppercase text-sm tracking-widest">THE SQUAD</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">Meet the Elite</h2>
          <p className="text-flux-gray-300 max-w-2xl mx-auto">
            Our roster features the Bay Area's most skilled competitive gamers. Each member brings unique talents to dominate the competition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="relative group"
              onMouseEnter={() => setActivePlayer(member.id)}
              onMouseLeave={() => setActivePlayer(null)}
            >
              <div className={`relative overflow-hidden rounded-lg transition-all duration-300 ${
                activePlayer === member.id ? 'scale-105 shadow-lg shadow-flux-orange/20' : 'grayscale-[30%] hover:grayscale-0'
              }`}>
                {/* Image container with overlay */}
                <div className="aspect-[3/4] overflow-hidden bg-flux-gray-800">
                  <img 
                    src={member.imageSrc}
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2 mb-1">
                    {member.icon}
                    <span className="text-flux-orange text-sm font-medium uppercase tracking-wider">{member.role}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-flux-gray-300 text-sm line-clamp-2">{member.description}</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-8 h-[1px] bg-flux-orange/70"></div>
                <div className="absolute top-3 right-3 w-[1px] h-8 bg-flux-orange/70"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamRoster;