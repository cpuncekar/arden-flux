import React from 'react';
import { Play, ChevronRight } from 'lucide-react';

const Highlight: React.FC = () => {
  return (
    <section id="highlight" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <span className="text-flux-orange font-display uppercase text-sm tracking-widest">LATEST DROP</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">The Fluxline</h2>
          
          <div className="relative rounded-lg overflow-hidden bg-flux-gray-900 aspect-video mb-8">
            {/* Video thumbnail */}
            <div className="absolute inset-0 bg-flux-gray-800">
              <img 
                src="https://images.pexels.com/photos/7915577/pexels-photo-7915577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Arden Flux gameplay highlight" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-flux-orange text-black transition-transform hover:scale-110 group">
                <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
              </button>
            </div>
            
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
              <h3 className="font-display text-xl md:text-2xl font-bold">
                Conquest: Bay Area Championship Finals
              </h3>
              <p className="text-flux-gray-300 text-sm md:text-base mt-2">
                Watch Arden Flux dominate in the regional finals with a record-breaking performance
              </p>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-flux-orange"></div>
              <div className="w-2 h-2 bg-flux-gray-500"></div>
              <div className="w-2 h-2 bg-flux-gray-500"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center">
            <p className="text-flux-gray-300 text-lg flex-1 mb-4 sm:mb-0">
              Check out our latest tournament highlights, gameplay breakdowns, and behind-the-scenes content.
            </p>
            <a href="#" className="bg-black border border-flux-gray-700 hover:border-flux-orange text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group whitespace-nowrap">
              View All Videos
              <ChevronRight className="w-4 h-4 text-flux-orange group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;