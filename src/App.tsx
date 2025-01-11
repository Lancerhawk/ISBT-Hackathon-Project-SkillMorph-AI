import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Navigation from './components/Navigation';
import SkillSprints from './components/SkillSprints';
import SkillSprintDetails from './components/SkillSprintDetails'; // Import new component
import RoleChallenges from './components/RoleChallenges';
import Achievements from './components/Achievements';
import Analytics from './components/Analytics';
import ChatbotButton from './components/ChatbotButton'; // Import the chatbot button component

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/skill-sprints" element={<SkillSprints />} />
            <Route path="/skill-sprint/:id" element={<SkillSprintDetails />} /> {/* New Route */}
            <Route path="/role-challenges" element={<RoleChallenges />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </main>
        <ChatbotButton /> {/* Add the ChatbotButton to the bottom right */}
      </div>
    </BrowserRouter>
  );
}

export default App;
