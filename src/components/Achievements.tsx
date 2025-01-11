import React from 'react';
import { Trophy, Star, Target, Award } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'Sprint Master',
    description: 'Complete 5 skill sprints with a score of 90% or higher',
    progress: 80,
    icon: <Trophy className="w-6 h-6" />,
    reward: 500,
    category: 'Learning',
  },
  {
    id: 2,
    title: 'Role Explorer',
    description: 'Successfully complete challenges in 3 different roles',
    progress: 66,
    icon: <Star className="w-6 h-6" />,
    reward: 750,
    category: 'Challenges',
  },
  {
    id: 3,
    title: 'Skill Pioneer',
    description: 'Achieve mastery level in any skill category',
    progress: 45,
    icon: <Target className="w-6 h-6" />,
    reward: 1000,
    category: 'Skills',
  },
];

export default function Achievements() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Achievements</h1>
        <div className="flex items-center space-x-4">
          <div className="bg-yellow-50 px-4 py-2 rounded-lg flex items-center">
            <Trophy className="w-4 h-4 text-yellow-600 mr-2" />
            <span className="text-sm font-medium text-yellow-600">2250 Total Points</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-yellow-50 rounded-lg text-yellow-600">
                  {achievement.icon}
                </div>
                <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
                  {achievement.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{achievement.description}</p>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{achievement.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-full bg-yellow-500 rounded-full"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Reward</span>
                  <span className="flex items-center text-yellow-600 font-medium">
                    <Award className="w-4 h-4 mr-1" />
                    {achievement.reward} points
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}