import React from 'react';
import { Zap, Twitch, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-flux-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-7 w-7 text-flux-orange" />
              <span className="font-display font-bold text-xl">ARDEN FLUX</span>
            </div>
            <p className="text-flux-gray-400 mb-6">
              NorCal's rising force in competitive gaming. Based in the Bay Area, competing globally.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-flux-gray-800 hover:bg-flux-orange text-white hover:text-black transition-colors"
                aria-label="Twitch"
              >
                <Twitch className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-flux-gray-800 hover:bg-flux-orange text-white hover:text-black transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-flux-gray-800 hover:bg-flux-orange text-white hover:text-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { text: 'Home', href: '#home' },
                { text: 'Team', href: '#team' },
                { text: 'Matches', href: '#matches' },
                { text: 'Merch', href: '#merch' },
                { text: 'Partners', href: '#partners' }
              ].map((item) => (
                <li key={item.text}>
                  <a 
                    href={item.href}
                    className="text-flux-gray-400 hover:text-flux-orange transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-display font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                { text: 'Match Schedule', href: '#matches' },
                { text: 'News & Updates', href: '#news' },
                { text: 'Join The Team', href: '#join' },
                { text: 'FAQs', href: '#faqs' },
                { text: 'Contact Us', href: '#contact' }
              ].map((item) => (
                <li key={item.text}>
                  <a 
                    href={item.href}
                    className="text-flux-gray-400 hover:text-flux-orange transition-colors"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold mb-4">Stay Connected</h3>
            <p className="text-flux-gray-400 mb-4">
              Subscribe to our newsletter for exclusive content and early access to merch drops.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-flux-gray-800 text-white px-4 py-2 rounded-l w-full focus:outline-none focus:ring-1 focus:ring-flux-orange"
              />
              <button 
                type="submit"
                className="bg-flux-orange hover:bg-flux-orange/90 text-black font-medium px-4 py-2 rounded-r transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-flux-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-flux-orange rounded-full mr-2"></div>
              <span className="text-flux-gray-400">Bay Area, CA</span>
            </div>
          </div>
          
          <p className="text-flux-gray-500 text-sm">
            © Arden Flux Gaming 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;