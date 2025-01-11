import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Notes from './Notes'; // Import the Notes component

const sprints = [
  {
    id: 1,
    title: 'Frontend Architecture Patterns',
    description: 'Learn advanced frontend architecture patterns and best practices',
    duration: '2 hours',
    completed: true,
    category: 'Technical',
    points: 100,
    topics: ['Topic 1', 'Topic 2', 'Topic 3'],
  },
  {
    id: 2,
    title: 'System Design Principles',
    description: 'Master fundamental system design concepts and scalability',
    duration: '3 hours',
    completed: false,
    category: 'Technical',
    points: 150,
    topics: ['Topic A', 'Topic B', 'Topic C'],
  },
  {
    id: 3,
    title: 'Team Leadership Fundamentals',
    description: 'Essential leadership skills for technical team leads',
    duration: '2.5 hours',
    completed: false,
    category: 'Soft Skills',
    points: 120,
    topics: ['Topic X', 'Topic Y', 'Topic Z'],
  },
];

function SkillSprintDetails() {
  const { id } = useParams();
  const sprint = sprints.find((sprint) => sprint.id === parseInt(id));

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [openTopic, setOpenTopic] = useState(null);
  const [activeTab, setActiveTab] = useState('description');

  const toggleTopic = (topic) => {
    setOpenTopic(openTopic === topic ? null : topic);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'description':
        return <p className="text-sm text-gray-700">{sprint.description}</p>;
      case 'notes':
        return <Notes />; // Render Notes component here
      case 'whiteboard':
        return (
          <div>
            <p className="text-sm text-gray-700 mb-4">Draw or make quick sketches here.</p>
            <div className="w-full h-32 bg-gray-200 border border-gray-300 rounded-md">
              <p className="text-center text-gray-500">Whiteboard area (interactive sketching not implemented)</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left side: Topics Dropdown */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Topics</h2>
          {sprint.topics.map((topic, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => toggleTopic(topic)}
                className="flex items-center justify-between w-full bg-gray-100 p-3 rounded-md text-left hover:bg-gray-200 transition-all"
              >
                <span className="text-lg font-medium text-gray-900">{topic}</span>
              </button>
              {openTopic === topic && (
                <div className="mt-2 space-y-2 pl-4 text-sm text-gray-700">
                  <p>Subtopics or additional information about {topic}...</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side: Video/PPT area + Tabs */}
        <div className="lg:col-span-2">
          <div className="bg-gray-100 p-6 rounded-xl mb-6">
            <h3 className="text-2xl font-semibold mb-4">Video / PPT</h3>
            <div className="w-full h-72 bg-gray-300 mb-4 rounded-md">
              {/* Placeholder for Video/PPT */}
              <p className="text-center text-gray-600 pt-20">Video/PPT content will go here.</p>
            </div>
          </div>

          {/* Tabs for Description, Notes, Whiteboard */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'description' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'notes' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'}`}
              onClick={() => setActiveTab('notes')}
            >
              Notes
            </button>
            <button
              className={`px-4 py-2 rounded-md ${activeTab === 'whiteboard' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-900'}`}
              onClick={() => setActiveTab('whiteboard')}
            >
              Whiteboard
            </button>
          </div>
          
          {/* Render content based on active tab */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}

export default SkillSprintDetails;
