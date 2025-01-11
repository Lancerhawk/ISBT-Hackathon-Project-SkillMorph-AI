import React from 'react';
import { BarChart3, Brain, Trophy, Users } from 'lucide-react';
import LearningPath from './LearningPath';
import SimulationCard from './SimulationCard';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Brain className="w-6 h-6 text-indigo-600" />}
          title="Learning Score"
          value="850"
          subtitle="+23 this week"
        />
        <StatCard
          icon={<Trophy className="w-6 h-6 text-yellow-600" />}
          title="Completed Tasks"
          value="12"
          subtitle="4 pending"
        />
        <StatCard
          icon={<Users className="w-6 h-6 text-green-600" />}
          title="Role Simulations"
          value="5"
          subtitle="2 available"
        />
        <StatCard
          icon={<BarChart3 className="w-6 h-6 text-purple-600" />}
          title="Skill Growth"
          value="32%"
          subtitle="This month"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LearningPath />
        </div>
        <div>
          <SimulationCard />
        </div>
      </div>

      <div className="mt-8">
        <Link to="/skill-sprints">
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-full">
            Start Sprint/Challenge
          </button>
        </Link>
      </div>
    </div>
  );
}

function StatCard({ icon, title, value, subtitle }: { icon: React.ReactNode; title: string; value: string; subtitle: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 transition-all hover:shadow-md">
      <div className="flex items-center space-x-4">
        <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
        <div>
          <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
