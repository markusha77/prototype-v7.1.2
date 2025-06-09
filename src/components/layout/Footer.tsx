import { motion } from 'framer-motion';
import React from 'react';
import { useLocation } from 'react-router-dom';

import logo from '../../assets/logo.svg';

export const Footer: React.FC = () => {
  const { pathname } = useLocation();
  if (!['/', '/landing', '/community'].includes(pathname)) {
    return null;
  }

  return (
    <footer className="px-4 py-4 md:py-6 lg:py-8 border-t border-gray-200 relative z-10 overflow-hidden">
      <div className="cb-wrapper flex flex-col-reverse md:flex-row gap-4 justify-between items-center">
        <motion.div
          className="flex flex-row items-start"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0, type: 'spring', stiffness: 500 }}
        >
          <img src={logo} alt="ChatAndBuild Logo" className="h-6 w-6 mr-2" />
          <p className="text-gray-500/70 text-center md:text-left">
            © 2025 Community Spaces.
            <br className="md:hidden" />
            All rights reserved.
          </p>
        </motion.div>
        <div className="flex space-x-6">
          {['Terms', 'Privacy', 'Contact'].map((label, index) => (
            <motion.a
              key={index}
              href="#"
              className="text-gray-500 hover:text-indigo-600 transition-colors"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                delay: 0.2 + index * 0.2,
                type: 'spring',
                stiffness: 500,
              }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};
