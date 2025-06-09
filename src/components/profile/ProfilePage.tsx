import { motion } from 'framer-motion';
import { Edit3, Github, Globe, Twitter } from 'lucide-react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  // Mock user data
  const user = {
    name: 'Alex Johnson',
    username: 'alexjohnson',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    bio: 'Full-stack developer with a passion for AI and productivity tools. Working at the intersection of machine learning and user experience.',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev',
    github: 'alexjohnson',
    twitter: 'alexjohnson',
    projects: [
      {
        id: '1',
        title: 'AI-Powered Task Manager',
        description:
          'A task management app that uses AI to prioritize and suggest tasks based on your work patterns and deadlines.',
        image:
          'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        likes: 124,
        comments: 18,
      },
      {
        id: '7',
        title: 'Personal Finance Dashboard',
        description:
          'A comprehensive dashboard for tracking expenses, investments, and financial goals with data visualization.',
        image:
          'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        likes: 87,
        comments: 12,
      },
      {
        id: '8',
        title: 'Recipe Recommendation Engine',
        description:
          'An app that suggests recipes based on ingredients you have, dietary preferences, and past cooking history.',
        image:
          'https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        likes: 56,
        comments: 8,
      },
    ],
  };

  const handleEditProfile = () => {
    // Navigate to edit profile with state indicating we came from profile page
    navigate('/profile/edit', { state: { from: '/profile' } });
  };

  const handleCreateNewProject = () => {
    // Navigate to create new project page
    navigate('/projects/new');
  };

  return (
    <>
      <div className="bg-white shadow relative">
        <div className="cb-wrapper py-8">
          {/* Profile content with back button aligned to profile image center */}
          <div className="relative">
            {/* Edit Profile button positioned to align with the middle of profile image on the right */}
            <div className="absolute right-0" style={{ top: '17px' }}>
              <button
                onClick={handleEditProfile}
                className="flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 ease-in-out"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit
              </button>
            </div>

            {/* Centered profile content */}
            <div className="flex flex-col items-center text-center">
              {/* Centered profile image */}
              <motion.img
                src={user.avatar}
                alt={user.name}
                className="h-24 w-24 rounded-full border-4 border-white shadow-md mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: 0.8, type: 'spring', stiffness: 500 }}
              />

              {/* Profile info */}
              <div className="mb-4">
                <motion.h1
                  className="text-2xl font-bold text-gray-900"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.2, type: 'spring', stiffness: 500 },
                  }}
                  viewport={{ once: true }}
                >
                  {user.name}
                </motion.h1>
                <motion.p
                  className="text-gray-600"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  viewport={{ once: true }}
                >
                  @{user.username}
                </motion.p>

                <div className="mt-2 flex flex-wrap justify-center items-center text-sm text-gray-500">
                  {user.location && (
                    <motion.span
                      className="mr-4"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.4 + Math.random() * 0.8 },
                      }}
                      viewport={{ once: true }}
                    >
                      {user.location}
                    </motion.span>
                  )}

                  {user.website && (
                    <motion.a
                      href={user.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center mr-4 hover:text-indigo-600"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.4 + Math.random() * 0.8 },
                      }}
                      viewport={{ once: true }}
                    >
                      <Globe className="h-4 w-4 mr-1" />
                      Website
                    </motion.a>
                  )}

                  {user.github && (
                    <motion.a
                      href={`https://github.com/${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center mr-4 hover:text-indigo-600"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.4 + Math.random() * 0.8 },
                      }}
                      viewport={{ once: true }}
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </motion.a>
                  )}

                  {user.twitter && (
                    <motion.a
                      href={`https://twitter.com/${user.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-indigo-600"
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.4 + Math.random() * 0.8 },
                      }}
                      viewport={{ once: true }}
                    >
                      <Twitter className="h-4 w-4 mr-1" />
                      Twitter
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Centered bio */}
              <div className="max-w-2xl mb-6">
                <motion.p
                  className="text-gray-700"
                  initial={{ y: 20, scale: 0.6, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.2, delay: 0.4 + Math.random() * 0.8 },
                  }}
                  viewport={{ once: true }}
                >
                  {user.bio}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <section className="cb-wrapper py-8">
        <div className="flex justify-between items-center mb-6">
          <motion.h2
            className="text-xl font-bold text-gray-900"
            initial={{ x: 20, scale: 0.6, opacity: 0 }}
            whileInView={{
              x: 0,
              scale: 1,
              opacity: 1,
              transition: { duration: 0.2, delay: 0.1 },
            }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>

          <motion.button
            onClick={handleCreateNewProject}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            initial={{ x: -20, scale: 0.6, opacity: 0 }}
            whileInView={{
              x: 0,
              scale: 1,
              opacity: 1,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            Create New Project
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.4 + Math.random() * 0.6 },
              }}
              viewport={{ once: true }}
            >
              <Link key={project.id} to={`/community/project/${project.id}`} className="h-full ">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{project.likes} likes</span>
                    <span>{project.comments} comments</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
