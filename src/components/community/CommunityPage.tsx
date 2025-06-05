import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { CATEGORIES } from '../../types';
import { restoreScrollPosition } from '../../utils/scrollUtils';
import { EventCardGallery } from './EventCardGallery';
import { FilterBar } from './FilterBar';
import { ProjectFeed } from './ProjectFeed';
import { HeroSection as SectionWelcoming } from './SectionWelcoming';

const CommunityPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortOption, setSortOption] = useState('Most Recent');
  const location = useLocation();

  // Use direct scroll position restoration without animation
  useEffect(() => {
    const scrollPositionKey = `scrollPosition-${location.pathname}`;

    // Use a small timeout to ensure the DOM is ready
    const timer = setTimeout(() => {
      restoreScrollPosition(scrollPositionKey);
    }, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  return (
    <>
      {/* Section Welcome */}
      <SectionWelcoming />

      {/* Replace HeroSection with EventCardGallery - Pass size prop for main page */}
      <section className="cb-wrapper py-8">
        <div className="bg-white rounded-xl shadow-sm lg:p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <motion.h2
              className="text-2xl font-bold text-gray-900"
              initial={{ y: -20, scale: 0.5, opacity: 0 }}
              whileInView={{ y: 0, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              Upcoming Events
            </motion.h2>
          </div>
          <EventCardGallery size="large" />
        </div>
      </section>

      {/* Main content */}
      <section className="cb-wrapper py-8 overflow-hidden">
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center mb-8">
          <motion.h1
            className="text-2xl font-bold text-gray-900"
            initial={{ y: -20, scale: 0.5, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0 }}
          >
            Community Projects
          </motion.h1>

          <div className="flex flex-row flex-wrap justify-end w-full md:w-auto gap-4">
            <motion.select
              className="min-w-[200px] md:min-w-0 border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={selectedCategory}
              onChange={handleCategoryChange}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              <option>All Categories</option>
              {CATEGORIES.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </motion.select>

            <motion.select
              className="min-w-[200px] md:min-w-0 border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={sortOption}
              onChange={handleSortChange}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.6 }}
            >
              <option>Most Recent</option>
              <option>Most Popular</option>
              <option>Most Commented</option>
            </motion.select>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm py-6 lg:p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <motion.h2
              className="text-lg font-semibold text-gray-900"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.4 }}
            >
              Featured Project
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <motion.img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Featured Project"
                className="w-full h-48 object-cover rounded-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.4 }}
              />
            </div>

            <div className="md:col-span-2">
              <motion.h3
                className="text-xl font-bold text-gray-900 mb-2"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.5 }}
              >
                AI-Powered Task Manager
              </motion.h3>

              <motion.p
                className="text-gray-600 mb-4"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.7 }}
              >
                A task management app that uses AI to prioritize and suggest tasks based on your
                work patterns and deadlines. The system learns from your habits and helps you focus
                on what matters most.
              </motion.p>

              <motion.div
                className="flex items-center mb-4"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.9 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
                  alt="Alex Johnson"
                  className="h-8 w-8 rounded-full mr-2"
                />
                <span className="text-sm text-gray-700">Alex Johnson</span>
              </motion.div>

              <div className="flex flex-wrap gap-2">
                {['AI', 'Productivity', 'React'].map((tag, index) => (
                  <motion.span
                    key={index}
                    className="block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.9 + index * 0.2 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 1.1 }}
              >
                <Link
                  to="/community/project/1"
                  className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  View Project
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        <FilterBar />
        <ProjectFeed categoryFilter={selectedCategory} sortOption={sortOption} />
      </section>
    </>
  );
};

export default CommunityPage;
