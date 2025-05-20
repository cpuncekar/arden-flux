import React from 'react';

const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Diagonal lines */}
      <div className="absolute -top-[30%] right-0 w-full h-[60%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-flux-orange/10 via-flux-orange/5 to-transparent"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      {/* Random squares */}
      <div className="absolute top-[20%] left-[10%] w-24 h-24 border border-flux-orange/20 rotate-45 opacity-20"></div>
      <div className="absolute top-[50%] right-[15%] w-32 h-32 border border-flux-orange/20 rotate-12 opacity-20"></div>
      <div className="absolute bottom-[20%] left-[20%] w-48 h-48 border border-flux-orange/10 -rotate-12 opacity-10"></div>
      
      {/* Glowing orb */}
      <div className="absolute top-[30%] right-[20%] w-64 h-64 rounded-full bg-flux-orange/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[25%] w-96 h-96 rounded-full bg-flux-orange/3 blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

export default BackgroundEffects;