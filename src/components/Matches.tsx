import React, { useState } from 'react';
import { Calendar, MapPin, Trophy, Monitor, Ticket, Play } from 'lucide-react';

interface Match {
  id: number;
  date: string;
  game: string;
  tournament: string;
  location: string;
  isOnline: boolean;
}

const matches: Match[] = [
  // Upcoming Matches (after May 19, 2025)
  {
    id: 1,
    date: "June 2, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "CDL Major IV: Dallas",
    location: "Dallas, TX",
    isOnline: false
  },
  {
    id: 2,
    date: "June 15, 2025",
    game: "Apex Legends",
    tournament: "ALGS Split 1 Playoffs",
    location: "Seattle, WA",
    isOnline: false
  },
  {
    id: 3,
    date: "June 28, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "Warzone Open Qualifiers",
    location: "Online",
    isOnline: true
  },
  {
    id: 4,
    date: "July 10, 2025",
    game: "Call of Duty: Black Ops 6",
    tournament: "Black Ops Pro-Am Invitational",
    location: "Atlanta, GA",
    isOnline: false
  },
  {
    id: 5,
    date: "July 22, 2025",
    game: "Apex Legends",
    tournament: "Bay Area LAN Finals",
    location: "San Jose, CA",
    isOnline: false
  },
  {
    id: 6,
    date: "August 5, 2025",
    game: "Call of Duty: Black Ops 6",
    tournament: "CDL Major V: Seattle",
    location: "Seattle, WA",
    isOnline: false
  },
  {
    id: 7,
    date: "August 18, 2025",
    game: "Apex Legends",
    tournament: "ALGS Split 2 Playoffs",
    location: "Raleigh, NC",
    isOnline: false
  },
  {
    id: 8,
    date: "September 1, 2025",
    game: "Call of Duty: Black Ops 6",
    tournament: "Warzone Championship Qualifier",
    location: "Online",
    isOnline: true
  },
  {
    id: 9,
    date: "September 15, 2025",
    game: "Call of Duty: Black Ops 6",
    tournament: "CDL Championship Weekend",
    location: "Burbank, CA",
    isOnline: false
  },
  {
    id: 10,
    date: "September 30, 2025",
    game: "Apex Legends",
    tournament: "ALGS Championship",
    location: "Las Vegas, NV",
    isOnline: false
  },
  // Previous Matches (before May 19, 2025)
  {
    id: 11,
    date: "May 15, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "CDL Major III: Boston",
    location: "Boston, MA",
    isOnline: false
  },
  {
    id: 12,
    date: "May 1, 2025",
    game: "Apex Legends",
    tournament: "ALGS Regular Season",
    location: "Online",
    isOnline: true
  },
  {
    id: 13,
    date: "April 18, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "Warzone Spring Invitational",
    location: "Online",
    isOnline: true
  },
  {
    id: 14,
    date: "April 5, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "CDL Major II: Miami",
    location: "Miami, FL",
    isOnline: false
  },
  {
    id: 15,
    date: "March 22, 2025",
    game: "Apex Legends",
    tournament: "NorCal Championship",
    location: "San Francisco, CA",
    isOnline: false
  },
  {
    id: 16,
    date: "March 8, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "CDL Major I: Las Vegas",
    location: "Las Vegas, NV",
    isOnline: false
  },
  {
    id: 17,
    date: "February 23, 2025",
    game: "Apex Legends",
    tournament: "ALGS Preseason Qualifier",
    location: "Online",
    isOnline: true
  },
  {
    id: 18,
    date: "February 10, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "Warzone Winter Classic",
    location: "Online",
    isOnline: true
  },
  {
    id: 19,
    date: "January 27, 2025",
    game: "Call of Duty: Modern Warfare III",
    tournament: "CDL Kickoff Classic",
    location: "Arlington, TX",
    isOnline: false
  },
  {
    id: 20,
    date: "January 15, 2025",
    game: "Apex Legends",
    tournament: "West Coast Invitational",
    location: "Los Angeles, CA",
    isOnline: false
  }
];

const Matches: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'previous'>('upcoming');
  const currentDate = new Date('2025-05-19');
  
  const filteredMatches = matches.filter(match => {
    const matchDate = new Date(match.date);
    return activeTab === 'upcoming' 
      ? matchDate > currentDate 
      : matchDate <= currentDate;
  });

  return (
    <section id="matches" className="py-20 bg-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-flux-orange font-display uppercase text-sm tracking-widest">COMPETITION SCHEDULE</span>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">Arden Flux Match Schedule</h1>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-flux-gray-900 rounded-lg p-1">
              {['upcoming', 'previous'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'upcoming' | 'previous')}
                  className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-flux-orange text-black'
                      : 'text-white hover:text-flux-orange'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Match List */}
          <div className="space-y-4">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-flux-gray-900/50 border border-flux-gray-800 rounded-lg p-6 hover:border-flux-orange/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Match Info */}
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-flux-orange">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{match.date}</span>
                    </div>
                    
                    <h3 className="font-display text-xl font-bold">{match.tournament}</h3>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-2 text-flux-gray-400">
                        <Trophy className="w-4 h-4" />
                        <span>{match.game}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-flux-gray-400">
                        {match.isOnline ? (
                          <Monitor className="w-4 h-4" />
                        ) : (
                          <MapPin className="w-4 h-4" />
                        )}
                        <span>{match.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex-shrink-0">
                    {new Date(match.date) > currentDate ? (
                      <button className="bg-flux-orange hover:bg-flux-orange/90 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
                        <Ticket className="w-4 h-4" />
                        {match.isOnline ? 'Watch Live' : 'Purchase Tickets'}
                      </button>
                    ) : (
                      <button className="bg-flux-gray-800 hover:bg-flux-gray-700 text-white font-medium px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300">
                        <Play className="w-4 h-4" />
                        Watch Replay
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matches;