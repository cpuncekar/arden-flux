import React from 'react';
import { Send } from 'lucide-react';

const JoinTeam: React.FC = () => {
  return (
    <section id="join" className="py-20 bg-black relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-flux-orange/10 via-black to-black"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-flux-orange font-display uppercase text-sm tracking-widest">BE PART OF THE FUTURE</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-6">Join the Team</h2>
          
          <p className="text-flux-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join the Arden Flux family. Whether you're a competitive player, content creator, or streamer, if you've got what it takes to represent the Bay's finest, we want to hear from you.
          </p>
          
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="bg-flux-orange hover:bg-flux-orange/90 text-black font-medium px-8 py-3 rounded-full flex items-center gap-2 transition-all duration-300 group w-full sm:w-auto">
              Apply Now
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="#" 
              className="text-flux-orange hover:text-flux-orange/80 font-medium inline-block border-b-2 border-flux-orange/30 hover:border-flux-orange transition-colors px-4 py-2"
            >
              View Requirements
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;