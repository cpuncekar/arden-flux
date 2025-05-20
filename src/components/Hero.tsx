import React from 'react';
import { ChevronRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="flex items-center mb-5">
            <div className="h-[1px] w-10 bg-flux-orange mr-3"></div>
            <span className="text-flux-orange font-display uppercase text-sm tracking-widest">ARDEN FLUX GAMING</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
            <span className="text-white">Formed in the Bay.</span>
            <br />
            <span className="text-flux-orange group relative inline-block">
              Forged in the Grind.
              <span className="absolute -inset-1 bg-flux-orange/10 -skew-y-3 group-hover:bg-flux-orange/20 transition-all duration-300"></span>
            </span>
          </h1>
          
          <p className="text-flux-gray-300 text-lg md:text-xl max-w-2xl mb-8 md:mb-10">
            The official hub of Arden Flux — NorCal's rising force in competitive gaming.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#join" 
              className="bg-flux-orange hover:bg-flux-orange/90 text-black font-medium px-6 py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 group"
            >
              Join the Flux 
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#highlight" 
              className="bg-black border border-flux-gray-700 hover:border-flux-orange text-white font-medium px-6 py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 group"
            >
              <Play className="w-4 h-4 text-flux-orange" /> 
              Watch Our Latest Match
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute hidden md:block top-1/2 right-10 transform -translate-y-1/2 w-[1px] h-40 bg-flux-gray-700"></div>
      <div className="absolute hidden md:block top-1/3 right-10 w-2 h-2 bg-flux-orange"></div>
    </section>
  );
};

export default Hero;