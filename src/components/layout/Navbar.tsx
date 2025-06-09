import { motion } from 'framer-motion';
import { Menu, Search, User } from 'lucide-react';
import { BookOpen, CircleDot, Home, Users } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Drawer from 'react-modern-drawer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import AuthButtons from '../navigation/AuthButtons';

import 'react-modern-drawer/dist/index.css';

import logo_name from '../../assets/logo-light-text.svg';
import logo from '../../assets/logo.svg';

const navItems = [
  {
    title: 'Home',
    link: '/community',
    tab: 'community',
    icon: <Home className="mr-2 h-5 w-5" />,
  },
  {
    title: 'Communities',
    link: '/communities',
    tab: 'communities',
    icon: <Users className="mr-2 h-5 w-5" />,
  },
  {
    title: 'Open Spaces',
    link: '/open-spaces',
    tab: 'openspaces',
    icon: <CircleDot className="mr-2 h-5 w-5" />,
  },
  {
    title: 'Tutorials',
    link: '/tutorials',
    tab: 'tutorials',
    icon: <BookOpen className="mr-2 h-5 w-5" />,
  },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  // Determine active tab based on current route - no state, direct calculation
  const getActiveTab = (): 'community' | 'communities' | 'openspaces' | 'tutorials' => {
    const path = location.pathname;

    if (path.includes('/tutorials')) {
      return 'tutorials';
    } else if (path.includes('/open-space/') || path.includes('/open-spaces')) {
      return 'openspaces';
    } else if (path.includes('/communities') || path.includes('/community/')) {
      return 'communities';
    } else {
      return 'community';
    }
  };

  const activeTab = getActiveTab();

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

  // Handle profile click
  const handleProfileClick = () => {
    navigate('/profile');
  };

  // Handle search click
  const handleSearchClick = () => {
    // You can implement search functionality here
    console.log('Search clicked');
  };

  // Toggle mobile drawer
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <header
        className={twMerge(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden',
          scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white',
        )}
      >
        <div className="cb-wrapper">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 500 }}
              >
                <Link to="/" className="flex items-center">
                  <img src={logo} alt="Logo" className="h-6 md:h-8 w-6 md:w-8 mr-2" />
                  <img src={logo_name} alt="ChatAndBuild" className="w-auto lg:mr-2" />

                  {/* <span className="text-xl font-bold text-indigo-600">ChatAndBuild</span> */}
                </Link>
              </motion.div>

              <nav className="hidden md:flex ml-4 xl:ml-10">
                <ul className="flex items-center">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { delay: 0.2 + index * 0.2, duration: 0.2 },
                      }}
                      whileHover={
                        activeTab !== item.tab
                          ? { scale: 1.05, transition: { delay: 0, duration: 0.1 } }
                          : {}
                      }
                      viewport={{ once: true }}
                    >
                      <Link
                        to={item.link}
                        className={`flex items-center px-3 xl:px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                          activeTab === item.tab
                            ? 'text-black border-blue-500'
                            : 'text-gray-500 border-transparent hover:text-gray-900'
                        }`}
                      >
                        {item.icon}
                        {item.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            <motion.div
              onClick={toggleDrawer}
              className="lg:hidden text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.8, type: 'spring', stiffness: 500 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>

            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {/* Search icon button */}
              <motion.button
                onClick={handleSearchClick}
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                title="Search projects"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.4, type: 'spring', stiffness: 500 }}
              >
                <Search className="h-6 w-6" />
              </motion.button>

              {/* Auth buttons */}
              <AuthButtons />

              {/* Profile icon button */}
              <motion.button
                onClick={handleProfileClick}
                className="p-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.8, type: 'spring', stiffness: 500 }}
              >
                <User className="h-6 w-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </header>
      {/* Add padding to account for fixed header */}
      <div className="h-16"></div>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="px-4 py-8 flex flex-col gap-2"
      >
        {/* Search icon button */}
        <motion.button
          onClick={handleSearchClick}
          className="flex gap-2 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          title="Search projects"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.4, type: 'spring', stiffness: 500 }}
        >
          <Search className="h-6 w-6" />
          <span>Search</span>
        </motion.button>
        <hr />

        <ul className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { delay: 0.2 + index * 0.2, duration: 0.2 },
              }}
              whileHover={
                activeTab !== item.tab
                  ? { scale: 1.05, transition: { delay: 0, duration: 0.1 } }
                  : {}
              }
              viewport={{ once: true }}
            >
              <Link
                to={item.link}
                className={`flex items-center py-2 text-base font-medium transition-all duration-200 ${
                  activeTab === item.tab ? 'text-blue-500' : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {item.icon}
                {item.title}
              </Link>
            </motion.li>
          ))}
        </ul>

        <hr />

        {/* Auth buttons */}
        <AuthButtons className="justify-between" />

        {/* Profile icon button */}
        <motion.button
          onClick={handleProfileClick}
          className="flex gap-2 py-2 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.8, type: 'spring', stiffness: 500 }}
        >
          <User className="h-6 w-6" />
          Profile
        </motion.button>
      </Drawer>
    </>
  );
};

export default Navbar;
