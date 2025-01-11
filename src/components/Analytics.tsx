import React from 'react';
import { BarChart, PieChart, LineChart, Activity } from 'lucide-react';

export default function Analytics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Learning Analytics</h1>
        <div className="flex items-center space-x-4">
          <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm">
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        {[
          {
            title: 'Learning Hours',
            value: '45.5',
            change: '+12.5%',
            icon: <Activity className="w-5 h-5" />,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
          },
          {
            title: 'Completed Sprints',
            value: '12',
            change: '+3',
            icon: <BarChart className="w-5 h-5" />,
            color: 'text-indigo-600',
            bg: 'bg-indigo-50',
          },
          {
            title: 'Role Challenges',
            value: '8',
            change: '+2',
            icon: <PieChart className="w-5 h-5" />,
            color: 'text-purple-600',
            bg: 'bg-purple-50',
          },
          {
            title: 'Skill Growth',
            value: '24%',
            change: '+8%',
            icon: <LineChart className="w-5 h-5" />,
            color: 'text-green-600',
            bg: 'bg-green-50',
          },
        ].map((stat) => (
          <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div className={`p-2 ${stat.bg} rounded-lg ${stat.color}`}>{stat.icon}</div>
              <span className="text-green-600 text-sm font-medium">{stat.change}</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mt-4">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Skill Progress</h2>
          <div className="space-y-4">
            {[
              { skill: 'Technical Skills', progress: 75 },
              { skill: 'Leadership', progress: 60 },
              { skill: 'Communication', progress: 85 },
              { skill: 'Problem Solving', progress: 70 },
            ].map((skill) => (
              <div key={skill.skill}>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>{skill.skill}</span>
                  <span>{skill.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${skill.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                activity: 'Completed System Design Sprint',
                time: '2 hours ago',
                points: '+150',
                type: 'sprint',
              },
              {
                activity: 'Started Marketing Challenge',
                time: '1 day ago',
                points: '+50',
                type: 'challenge',
              },
              {
                activity: 'Achieved Role Explorer Badge',
                time: '2 days ago',
                points: '+200',
                type: 'achievement',
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.activity}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
                <span className="text-green-600 font-medium">{activity.points}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}