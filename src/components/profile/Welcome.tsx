import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Eye, Globe, User } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  const handleCreateProfile = () => {
    // Navigate to the profile edit page with state indicating we came from Welcome
    navigate('/profile/edit', { state: { from: '/builder' } });
  };

  const handleAddProject = () => {
    // Navigate to the projects new page with state indicating we came from Welcome
    navigate('/projects/new', { state: { from: '/builder' } });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-900 mb-8"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0, type: 'spring', stiffness: 500 }}
      >
        Welcome to ChatAndBuild
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <User className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold ml-4">Builder Portfolio</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Create your builder profile to showcase your skills, projects, and connect with other
            builders in the community.
          </p>

          <button
            onClick={handleCreateProfile}
            className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Edit Profile <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.4 } }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full">
              <Briefcase className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-xl font-semibold ml-4">Project Showcase</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Share your projects with the community. Get feedback, collaborate with others, and
            inspire fellow builders.
          </p>

          <button
            onClick={handleAddProject}
            className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Add Project <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>
      </div>

      <motion.div
        className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0.5 } }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Eye className="h-6 w-6 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold ml-4">Preview Profile</h2>
        </div>

        <p className="text-gray-600 mb-6">
          View how your profile appears to other community members. Check your portfolio
          presentation and make adjustments if needed.
        </p>

        <button
          className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          onClick={() => navigate('/preview')}
        >
          Preview Portfolio
        </button>
      </motion.div>

      <motion.div
        className="mt-8 text-center"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: { duration: 0.6, delay: 0.6, type: 'spring', stiffness: 500 },
        }}
        viewport={{ once: true }}
      >
        <Link
          to="/community"
          className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105"
        >
          <Globe className="mr-2 h-5 w-5" />
          Explore Community
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Welcome;
