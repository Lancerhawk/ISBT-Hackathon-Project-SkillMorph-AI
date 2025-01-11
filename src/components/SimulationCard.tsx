import React from 'react';
import { Gamepad2 } from 'lucide-react';

export default function SimulationCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Active Simulation</h2>
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Gamepad2 className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-semibold text-purple-900">Marketing Challenge</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Experience a day as a Marketing Manager. Create a launch strategy for a new product line.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Progress</p>
            <div className="w-32 h-2 bg-purple-100 rounded-full mt-1">
              <div className="w-1/2 h-full bg-purple-600 rounded-full"></div>
            </div>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}