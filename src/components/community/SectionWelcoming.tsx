import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-12">
      <div className="cb-wrapper">
        <div className="text-center">
          <motion.h1
            className="text-3xl font-extrabold text-white sm:text-4xl"
            initial={{ y: -20, scale: 0.5, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <span className="block">Discover Amazing Projects</span>
            <span className="block">Built with ChatAndBuild</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, delay: 0.6 }}
          >
            Explore a community of innovative projects created by developers like you. Get inspired,
            learn new techniques, and share your own creations.
          </motion.p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.2 }}
            >
              <Link
                to="https://www.chatandbuild.com/"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 shadow-md"
              >
                Start Building
              </Link>
            </motion.div>
            <motion.button
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-purple-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-600 focus:ring-white transition-all duration-200 hover:shadow-lg"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.2 }}
            >
              <Play className="mr-2 h-4 w-4" />
              Take A Tour
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
