import { Code, MessageSquare, Users } from 'lucide-react';
import React from 'react';

import logo_name from '../../assets/logo-light-text.svg';

export const Header = () => {
  return (
    <header className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 shadow-sm">
      <div className="cb-wrapper py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-indigo-600" />
          <img src={logo_name} alt="ChatAndBuild Logo1" className="h-500 w-500 mr-2" />

          {/* <span className="font-bold text-xl text-gray-900">ChatAndBuild Community Spaces</span> */}
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <MessageSquare className="h-5 w-5 mr-1" />
            <span>Help</span>
          </button>
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <Code className="h-5 w-5 mr-1" />
            <span>Docs</span>
          </button>
        </div>
      </div>
    </header>
  );
};
