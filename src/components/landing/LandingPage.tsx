import { motion } from 'framer-motion';
import { ArrowRight, Code, Globe, Users, Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo.svg';

const statistics = [
  {
    label: 'Active Users',
    count: '10k+',
  },
  {
    label: 'Projects',
    count: '5k+',
  },
  {
    label: 'Communities',
    count: '120+',
  },
];

const reasons = [
  {
    title: 'Connect with Peers',
    description:
      'Join spaces based on your interests and connect with like-minded builders and  creators.',
    icon: <Users className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: 'Showcase Projects',
    description:
      'Share your work, get feedback, and discover inspiring projects from the community.',
    icon: <Code className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: 'Grow Together',
    description:
      'Learn from others, collaborate on ideas, and build your network in a supportive environment.',
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
  },
];

const LandingPage: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>

        {/* Animated Floating Elements */}
        <div className="absolute top-32 left-[15%] w-10 h-10 bg-indigo-200 rounded-full opacity-20 animate-float" />
        <div
          className="absolute top-[60%] right-[20%] w-8 h-8 bg-purple-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '1.5s' }}
        ></div>
        <div
          className="absolute bottom-[30%] left-[30%] w-12 h-12 bg-blue-200 rounded-full opacity-20 animate-float"
          style={{ animationDelay: '2.5s' }}
        ></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]"></div>

        {/* Subtle Dots Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(99, 102, 241, 0.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      {/* Add padding to account for fixed header */}
      <div className="h-16"></div>

      {/* Hero Section with Enhanced Background */}
      <div className="container mx-auto px-4 pt-24 pb-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            className="mb-8 p-2 bg-white/30 backdrop-blur-sm rounded-2xl shadow-sm border border-white/50 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.8 },
            }}
            viewport={{ once: true }}
          >
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-indigo-100/50 rounded-2xl blur-md"></div>
            <div className="relative">
              <img src={logo} alt="ChatAndBuild Logo" className="h-20 w-20" />
            </div>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ y: -30, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.2, delay: 0, type: 'spring', stiffness: 500 },
            }}
            viewport={{ once: true }}
          >
            Community <span className="text-gradient">Spaces</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-10 leading-relaxed"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            viewport={{ once: true }}
          >
            Connect, collaborate, and create with a community of builders and innovators. Share your
            projects and get valuable feedback from peers.
          </motion.p>
          <motion.button
            onClick={handleGetStarted}
            className="flex items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium py-4 px-8 rounded-xl transition-all text-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 relative overflow-hidden group"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.4, delay: 0.4, type: 'spring', stiffness: 500 },
            }}
            viewport={{ once: true }}
          >
            {/* Button background animation */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Sign Up</span>
            <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform group-hover:translate-x-1" />
          </motion.button>

          {/* Stats with enhanced design */}
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-3 gap-4 md:gap-8 mt-16 w-full max-w-2xl">
            {statistics.map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-white/60 shadow-md w-[124px] md:w-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: {
                    duration: 0.1,
                    delay: 0.2 + index * 0.2,
                    type: 'spring',
                    stiffness: 500,
                  },
                }}
                viewport={{ once: true }}
              >
                <p className="text-3xl font-bold text-indigo-600">{item.count}</p>
                <p className="text-gray-600 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.2, delay: 0 } }}
            viewport={{ once: true }}
          >
            Why Choose Community Spaces?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: -20, scale: 0.6, opacity: 0 }}
            whileInView={{ y: 0, scale: 1, opacity: 1, transition: { duration: 0.2, delay: 0.3 } }}
            viewport={{ once: true }}
          >
            Our platform provides everything you need to connect, share, and grow with fellow
            creators.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
          {reasons.map(({ title, description, icon }, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm px-4 py-6 lg:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transform hover:-translate-y-1"
              initial={{ x: 20, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.3 + index * 0.2 },
              }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonial Section with Enhanced Background */}
      <div id="community" className="container mx-auto px-4 py-20 relative z-10">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 shadow-md border border-white/50 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full opacity-40 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>

            {/* Subtle pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle, rgba(99, 102, 241, 0.1) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            ></div>
          </div>

          <div className="flex flex-col items-center text-center relative z-10">
            <div className="bg-indigo-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 border border-indigo-200 shadow-sm">
              <Zap className="h-8 w-8 text-indigo-600" />
            </div>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              Join our growing community
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-2xl mb-8"
              initial={{ y: -20, scale: 0.6, opacity: 0 }}
              whileInView={{
                y: 0,
                scale: 1,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.4 },
              }}
              viewport={{ once: true }}
            >
              Thousands of builders are already sharing ideas, getting feedback, and collaborating
              on exciting projects.
            </motion.p>
            <motion.button
              onClick={handleGetStarted}
              className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg group"
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.2, type: 'spring', stiffness: 500 },
              }}
              viewport={{ once: true }}
            >
              Sign up now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
