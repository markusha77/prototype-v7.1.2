import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

interface AuthButtonsProps {
  className?: string;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-1 xl:space-x-3 ${className}`}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.5, type: 'spring', stiffness: 500 }}
      >
        <Link
          to="/signin"
          className="text-gray-700 font-medium hover:text-indigo-600 px-2 xl:px-4 py-2 rounded-md"
        >
          Sign In
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0.6, type: 'spring', stiffness: 500 }}
      >
        <Link
          to="/landing"
          className="block bg-indigo-600 text-white font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
};

export default AuthButtons;
