import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo_name from '../../assets/logo-light-text.svg';
import logo from '../../assets/logo.svg';

export const SignUpNavBar: React.FC = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="cb-wrapper">
        <div className="flex justify-between h-16 items-center">
          <div>
            <Link to="/community" className="flex items-center">
              <img src={logo} alt="ChatAndBuild Logo" className="h-8 w-8 mr-2" />
              <img src={logo_name} alt="ChatAndBuild Logo1" className="h-500 w-500 mr-2" />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#features"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Features
              </a>
              <a
                href="#community"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Community
              </a>
              <button
                onClick={handleGetStarted}
                className={`ml-4 px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all shadow-sm hover:shadow text-sm font-medium ${
                  scrolled ? 'bg-indigo-600 text-white' : 'bg-indigo-600 text-white'
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SignUpNavBar;
