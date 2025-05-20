import React, { useState, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md py-3 shadow-md shadow-flux-orange/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Zap className="h-7 w-7 text-flux-orange" />
          <span className="font-display font-bold text-xl">ARDEN FLUX</span>
        </a>
        
        <nav className="hidden md:flex gap-8">
          {['Home', 'Team', 'Matches', 'Merch', 'Partners'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-medium text-sm uppercase tracking-wider hover:text-flux-orange transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href="#join" 
            className="font-medium text-sm uppercase tracking-wider bg-flux-orange px-4 py-1 rounded hover:bg-flux-orange/80 transition-colors text-black"
          >
            Join
          </a>
        </nav>
        
        <button 
          className="md:hidden text-white hover:text-flux-orange transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-center items-center transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-5 right-4 text-white hover:text-flux-orange transition-colors"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X className="w-7 h-7" />
        </button>
        
        <div className="flex flex-col gap-8 items-center">
          {['Home', 'Team', 'Matches', 'Merch', 'Partners'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-medium text-xl uppercase tracking-wider hover:text-flux-orange transition-colors"
              onClick={toggleMenu}
            >
              {item}
            </a>
          ))}
          <a 
            href="#join" 
            className="font-medium text-xl uppercase tracking-wider bg-flux-orange px-6 py-2 rounded hover:bg-flux-orange/80 transition-colors text-black mt-4"
            onClick={toggleMenu}
          >
            Join
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar