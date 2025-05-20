import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeamRoster from './components/TeamRoster';
import Matches from './components/Matches';
import Highlight from './components/Highlight';
import MerchDrop from './components/MerchDrop';
import News from './components/News';
import FAQs from './components/FAQs';
import JoinTeam from './components/JoinTeam';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <TeamRoster />
        <Matches />
        <News />
        <Highlight />
        <MerchDrop />
        <FAQs />
        <JoinTeam />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;