import React from 'react';
import { Zap, Clock, Target, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const sprints = [
  {
    id: 1,
    title: 'Frontend Architecture Patterns',
    description: 'Learn advanced frontend architecture patterns and best practices',
    duration: '2 hours',
    completed: true,
    category: 'Technical',
    points: 100,
  },
  {
    id: 2,
    title: 'System Design Principles',
    description: 'Master fundamental system design concepts and scalability',
    duration: '3 hours',
    completed: false,
    category: 'Technical',
    points: 150,
  },
  {
    id: 3,
    title: 'Team Leadership Fundamentals',
    description: 'Essential leadership skills for technical team leads',
    duration: '2.5 hours',
    completed: false,
    category: 'Soft Skills',
    points: 120,
  },
];

export default function SkillSprints() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">SkillSprints</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-indigo-50 px-4 py-2 rounded-lg">
            <span className="text-sm font-medium text-indigo-600">370 Points Earned</span>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-lg">
            <span className="text-sm font-medium text-green-600">1/3 Completed</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sprints.map((sprint) => (
          <div
            key={sprint.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-medium text-indigo-600">{sprint.category}</span>
                </div>
                {sprint.completed ? (
                  <span className="flex items-center text-green-600 text-sm font-medium">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Completed
                  </span>
                ) : (
                  <span className="flex items-center text-orange-600 text-sm font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    In Progress
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{sprint.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{sprint.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{sprint.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Target className="w-4 h-4" />
                  <span>{sprint.points} points</span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <Link to={`/skill-sprint/${sprint.id}`}>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  {sprint.completed ? 'Review Sprint' : 'Start Sprint'}
                </button>
              </Link>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
}
