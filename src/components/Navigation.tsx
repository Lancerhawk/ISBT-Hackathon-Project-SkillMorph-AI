import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Brain, Zap, Users, Trophy, BarChart } from 'lucide-react';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/skill-sprints', icon: <Zap className="w-5 h-5" />, label: 'SkillSprints' },
    { path: '/role-challenges', icon: <Users className="w-5 h-5" />, label: 'Role Challenges' },
    { path: '/achievements', icon: <Trophy className="w-5 h-5" />, label: 'Achievements' },
    { path: '/analytics', icon: <BarChart className="w-5 h-5" />, label: 'Analytics' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Brain className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SkillMorph AI</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {React.cloneElement(item.icon, {
                    className: `w-4 h-4 mr-2 ${isActive(item.path) ? 'text-indigo-600' : 'text-gray-500'}`,
                  })}
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => navigate('/profile')}
              className="flex items-center space-x-3 group"
            >
              <div className="flex flex-col items-end mr-2">
                <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600">John Doe</span>
                <span className="text-xs text-gray-500">Software Engineer</span>
              </div>
              <img
                className="h-8 w-8 rounded-full ring-2 ring-white group-hover:ring-indigo-600"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="grid grid-cols-4 gap-y-2 px-2 py-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center px-2 py-2 text-xs font-medium rounded-md ${
                isActive(item.path)
                  ? 'text-indigo-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {React.cloneElement(item.icon, {
                className: `w-5 h-5 mb-1 ${isActive(item.path) ? 'text-indigo-600' : 'text-gray-500'}`,
              })}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}