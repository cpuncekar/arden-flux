import React from 'react';
import { CalendarDays } from 'lucide-react';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  summary: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    date: "May 18, 2025",
    title: "Arden Flux Signs New Apex Legends Roster",
    summary: "Bay Area's top-ranked squad joins the Flux family, marking our expansion into the battle royale scene."
  },
  {
    id: 2,
    date: "May 15, 2025",
    title: "FluxCore Collection Launch Success",
    summary: "Limited edition merch drop sells out in record time. Stay tuned for the next release coming soon."
  },
  {
    id: 3,
    date: "May 12, 2025",
    title: "CDL Major III: Top 3 Finish",
    summary: "Arden Flux secures a podium finish at the Boston major, climbing to 4th in season standings."
  }
];

const News: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-flux-orange font-display uppercase text-sm tracking-widest">LATEST UPDATES</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">News & Updates</h2>
          </div>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="bg-flux-gray-900/50 border border-flux-gray-800 rounded-lg p-6 hover:border-flux-orange/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-flux-orange mb-3">
                  <CalendarDays className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.date}</span>
                </div>
                
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-flux-gray-300">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;