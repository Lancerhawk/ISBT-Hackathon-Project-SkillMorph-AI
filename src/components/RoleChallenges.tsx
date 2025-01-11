import React from 'react';
import { Users, Clock, Trophy, Target, ArrowRight } from 'lucide-react';

const challenges = [
  {
    id: 1,
    title: 'Marketing Strategy Challenge',
    role: 'Marketing Manager',
    description: 'Create a comprehensive marketing strategy for a new product launch',
    difficulty: 'Intermediate',
    duration: '45 minutes',
    points: 200,
    skills: ['Strategic Planning', 'Market Analysis', 'Campaign Management'],
  },
  {
    id: 2,
    title: 'Product Management Simulation',
    role: 'Product Manager',
    description: 'Lead a product development cycle from ideation to launch',
    difficulty: 'Advanced',
    duration: '60 minutes',
    points: 300,
    skills: ['Product Strategy', 'User Research', 'Roadmap Planning'],
  },
  {
    id: 3,
    title: 'UX Design Sprint',
    role: 'UX Designer',
    description: 'Redesign a key feature based on user feedback and metrics',
    difficulty: 'Intermediate',
    duration: '30 minutes',
    points: 150,
    skills: ['User Research', 'Wireframing', 'Usability Testing'],
  },
];

export default function RoleChallenges() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Role Swap Challenges</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-purple-50 px-4 py-2 rounded-lg">
            <span className="text-sm font-medium text-purple-600">3 Available Challenges</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {challenges.map((challenge) => (
          <div
            key={challenge.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-purple-600">{challenge.role}</span>
                </div>
                <span className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm">
                  {challenge.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{challenge.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4" />
                    <span>{challenge.points} points</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-3">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Skills you'll practice:</h4>
                  <div className="flex flex-wrap gap-2">
                    {challenge.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-50 text-gray-600 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center">
                Start Challenge
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}