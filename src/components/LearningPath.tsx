import React from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';

const tasks = [
  {
    id: '1',
    title: 'Marketing Strategy Fundamentals',
    type: 'video',
    duration: 15,
    skillCategory: 'Marketing',
    difficulty: 'beginner',
  },
  {
    id: '2',
    title: 'Data Analysis for Decision Making',
    type: 'challenge',
    duration: 30,
    skillCategory: 'Analytics',
    difficulty: 'intermediate',
  },
  {
    id: '3',
    title: 'Leadership in Crisis Management',
    type: 'quiz',
    duration: 20,
    skillCategory: 'Leadership',
    difficulty: 'advanced',
  },
];

export default function LearningPath() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Your Learning Path</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="border border-gray-100 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{task.title}</h3>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {task.duration} min
                    </span>
                    <span className="flex items-center text-sm text-gray-500">
                      <Star className="w-4 h-4 mr-1" />
                      {task.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}