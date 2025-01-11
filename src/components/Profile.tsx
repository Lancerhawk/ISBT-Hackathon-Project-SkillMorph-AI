import React, { useState } from 'react';
import { Briefcase, Target, Trophy, GraduationCap, ArrowRight, Code, Palette, PieChart, Settings } from 'lucide-react';

export default function Profile() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    avatarUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    jobTitle: 'Software Engineer',
  });

  const handleSettingsToggle = () => setIsSettingsOpen(!isSettingsOpen);

  const handleProfileChange = (field, value) => {
    setProfileData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative">
          <button
            onClick={handleSettingsToggle}
            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <Settings className="w-6 h-6 text-indigo-600" />
          </button>
        </div>
        
        {/* Profile Picture */}
        <div className="relative px-6 py-4 sm:px-8 -mt-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-5">
            <div className="flex">
              <img
                className="h-24 w-24 rounded-xl ring-4 ring-white"
                src={profileData.avatarUrl}
                alt="User avatar"
              />
            </div>
            <div className="mt-6 sm:mt-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
              <div className="flex flex-wrap gap-4 mt-1">
                <span className="inline-flex items-center text-sm text-gray-500">
                  <Briefcase className="w-4 h-4 mr-1" />
                  {profileData.jobTitle}
                </span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  <Trophy className="w-4 h-4 mr-1" />
                  850 Learning Points
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Settings Modal */}
        {isSettingsOpen && (
          <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-1/3">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Edit Profile</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={profileData.name}
                    onChange={(e) => handleProfileChange('name', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={profileData.jobTitle}
                    onChange={(e) => handleProfileChange('jobTitle', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Avatar URL</label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    value={profileData.avatarUrl}
                    onChange={(e) => handleProfileChange('avatarUrl', e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-4">
                <button
                  onClick={handleSettingsToggle}
                  className="px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSettingsToggle}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 sm:p-8">
          {/* Current Role & Skills */}
          <div className="lg:col-span-2 space-y-6">
            <section className="bg-gray-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Role</h2>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <Code className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{profileData.jobTitle}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Full-stack developer with 3 years of experience in web technologies
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[{ name: 'Frontend Development', level: 85, icon: <Palette className="w-5 h-5" /> },
                  { name: 'Backend Development', level: 75, icon: <Code className="w-5 h-5" /> },
                  { name: 'UI/UX Design', level: 60, icon: <PieChart className="w-5 h-5" /> },
                ].map((skill) => (
                  <div key={skill.name} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm text-indigo-600">
                        {skill.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{skill.name}</h3>
                        <div className="flex items-center mt-1">
                          <div className="w-32 h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-full bg-indigo-600 rounded-full"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-sm text-gray-500">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Career Goals */}
          <div className="space-y-6">
            <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Career Goal</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Technical Lead</h3>
                    <p className="text-sm text-gray-600 mt-1">Target: 2 years</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Team management skills
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  System architecture
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Project planning
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
