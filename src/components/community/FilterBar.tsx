import { motion } from 'framer-motion';
import React, { useState } from 'react';

export const FilterBar: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="mb-6">
      <div className="border-b border-gray-200 overflow-x-auto overflow-y-hidden">
        <nav className="-mb-px flex space-x-3 md:space-x-8 w-max">
          {[
            { title: 'All Projects', filter: 'all' },
            { title: 'Trending', filter: 'trending' },
            { title: 'New', filter: 'new' },
            { title: 'Following', filter: 'following' },
          ].map(({ title, filter }, index) => (
            <motion.button
              key={index}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                activeFilter === filter
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => handleFilterChange(filter)}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 0.2 + index * 0.2 }}
            >
              {title}
            </motion.button>
          ))}
        </nav>
      </div>
    </div>
  );
};
