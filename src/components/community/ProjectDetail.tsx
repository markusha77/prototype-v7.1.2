import { motion } from 'framer-motion';
import {
  Calendar,
  ExternalLink,
  Eye,
  Github,
  Globe,
  Heart,
  Linkedin,
  MessageSquare,
  Share2,
  Twitter,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useContentLoader from '../../hooks/useContentLoader';
import { formatDate } from '../../utils/dateUtils';
import LoadingIndicator from '../common/LoadingIndicator';
import BackToProjectsButton from '../navigation/BackToProjectsButton';

// Mock comments data
const mockComments = [
  {
    id: 'c1',
    author: {
      name: 'Emma Wilson',
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
    content:
      'This is such an innovative project! I love how you approached the UI design. Have you considered adding dark mode support?',
    date: '2023-10-05T14:30:00Z',
    likes: 8,
  },
  {
    id: 'c2',
    author: {
      name: 'Michael Chen',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
    content:
      "I've been looking for something exactly like this. The data visualization is really impressive. Would love to see how it handles larger datasets.",
    date: '2023-10-04T09:15:00Z',
    likes: 5,
  },
  {
    id: 'c3',
    author: {
      name: 'Sophia Rodriguez',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
    content:
      'Great work! I tried the demo and it works flawlessly. The performance optimization is really noticeable compared to similar tools.',
    date: '2023-10-03T16:45:00Z',
    likes: 12,
  },
  {
    id: 'c4',
    author: {
      name: 'James Wilson',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
    content:
      "I'm curious about the tech stack you used. Did you encounter any challenges with state management?",
    date: '2023-10-02T11:20:00Z',
    likes: 3,
  },
];

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [liked, setLiked] = useState(false);

  // Use the content loader hook to manage loading state and scrolling
  const { isLoading, contentStyle, prepareContent } = useContentLoader({
    scrollToTop: true,
    scrollDelay: 100,
    loadingDelay: 200,
    fadeInDuration: 300,
  });

  // Trigger content preparation when component mounts or projectId changes
  useEffect(() => {
    prepareContent();
  }, [projectId, prepareContent]);

  // This would normally come from an API or context
  // For now, we'll use mock data based on the projectId
  const projects = [
    {
      id: '1',
      title: 'Interactive Data Visualization Tool',
      description:
        'Transform complex datasets into beautiful, interactive visualizations with no coding required.',
      longDescription:
        'Transform complex datasets into beautiful, interactive visualizations with no coding required. This project was created to showcase the capabilities of AI in everyday applications.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Natalie Wong',
        avatar:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'AI Developer & UX Designer',
        description:
          'Passionate about creating intuitive, AI-powered applications that solve real-world problems. Specializes in user-centered design and modern web technologies.',
      },
      likes: 433,
      comments: 4,
      views: 1967,
      remixes: 42,
      tags: ['Data', 'Visualization', 'No-Code'],
      demoUrl: 'https://example.com/demo',
      githubUrl: 'https://github.com/example/data-viz-tool',
      websiteUrl: 'https://example.com',
      twitterUrl: 'https://twitter.com/example',
      linkedinUrl: 'https://linkedin.com/in/example',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'AI', 'Data', 'Visualization', 'No-Code'],
      screenshots: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      createdAt: '2023-10-08T10:30:00Z',
      lastUpdated: '2023-10-08T10:30:00Z',
      lastComment: '2023-10-06T10:30:00Z',
      followers: 324,
    },
    {
      id: '2',
      title: 'Virtual Reality Meditation Space',
      description:
        'A VR application that creates immersive meditation environments with guided sessions and biofeedback integration.',
      longDescription:
        "This VR meditation application transports users to serene natural environments designed specifically for mindfulness practice. It features guided meditation sessions led by experienced instructors, ambient soundscapes recorded in 3D audio, and optional biofeedback integration via compatible wearables. The app adapts the environment based on the user's stress levels and meditation goals, creating a truly personalized experience.",
      image:
        'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Maya Patel',
        avatar:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'XR developer and meditation practitioner. Creating technology that enhances mental wellbeing and mindfulness.',
      },
      likes: 89,
      comments: 4,
      views: 842,
      remixes: 15,
      tags: ['VR', 'Wellness', 'Unity'],
      demoUrl: 'https://example.com/vr-demo',
      githubUrl: 'https://github.com/example/vr-meditation',
      techStack: ['Unity', 'C#', 'Oculus SDK', 'Bluetooth LE'],
      screenshots: [
        'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      createdAt: '2023-07-22T14:45:00Z',
      lastUpdated: '2023-09-15T08:30:00Z',
      lastComment: '2023-09-10T14:20:00Z',
      followers: 78,
    },
    {
      id: '3',
      title: 'Sustainable Food Delivery Platform',
      description:
        'An eco-friendly food delivery service that connects users with local restaurants using zero-waste packaging.',
      longDescription:
        'This platform revolutionizes food delivery by prioritizing sustainability at every step. It partners exclusively with restaurants committed to eco-friendly practices and uses a fleet of electric bikes and vehicles for delivery. All meals are packaged in compostable or reusable containers, and customers can opt into a container return program for additional discounts. The app also calculates and displays the carbon footprint saved with each order compared to traditional delivery services.',
      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Carlos Rodriguez',
        avatar:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'Environmental engineer turned developer. Building tech solutions for a more sustainable future.',
      },
      likes: 56,
      comments: 4,
      views: 635,
      remixes: 8,
      tags: ['Sustainability', 'Food', 'Mobile App'],
      demoUrl: 'https://example.com/eco-food-demo',
      githubUrl: 'https://github.com/example/eco-food-delivery',
      techStack: ['React Native', 'Firebase', 'Google Maps API', 'Stripe'],
      screenshots: [
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      createdAt: '2023-08-05T09:15:00Z',
      lastUpdated: '2023-08-20T16:45:00Z',
      lastComment: '2023-08-18T11:30:00Z',
      followers: 42,
    },
    {
      id: '4',
      title: 'Collaborative Music Creation Tool',
      description:
        'A web platform that allows musicians to collaborate remotely on tracks with real-time editing and mixing capabilities.',
      longDescription:
        'This collaborative platform enables musicians around the world to create together in real-time. It features a multi-track audio editor with version control, real-time collaboration tools, and integrated video chat. Musicians can record directly in the browser, import existing tracks, and apply professional-grade effects. The platform handles latency intelligently to ensure a smooth jamming experience even across continents. Finished projects can be exported in various formats or published directly to streaming platforms.',
      image:
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Jamie Lee',
        avatar:
          'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'Audio engineer and web developer. Creating tools that make music production more accessible and collaborative.',
      },
      likes: 210,
      comments: 4,
      views: 1243,
      remixes: 27,
      tags: ['Music', 'Collaboration', 'Web Audio'],
      demoUrl: 'https://example.com/music-collab-demo',
      githubUrl: 'https://github.com/example/music-collab',
      techStack: ['WebRTC', 'Web Audio API', 'React', 'WebSockets', 'AWS'],
      screenshots: [
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      createdAt: '2023-09-12T16:20:00Z',
      lastUpdated: '2023-10-05T09:15:00Z',
      lastComment: '2023-10-01T14:30:00Z',
      followers: 156,
    },
    {
      id: '5',
      title: 'Smart Home Energy Monitor',
      description:
        'An IoT device and companion app that tracks and optimizes home energy usage with AI-powered recommendations.',
      longDescription:
        'This comprehensive energy monitoring system combines hardware sensors with intelligent software to give homeowners unprecedented insight into their energy consumption. The system identifies energy-hungry appliances, detects inefficient usage patterns, and provides actionable recommendations for reducing consumption. The AI learns from your habits and automatically adjusts connected smart home devices to optimize energy usage without sacrificing comfort. Users typically see 15-30% reduction in energy bills within the first three months.',
      image:
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'Sarah Kim',
        avatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'IoT specialist and clean energy advocate. Building smart solutions for more efficient and sustainable homes.',
      },
      likes: 76,
      comments: 4,
      views: 521,
      remixes: 11,
      tags: ['IoT', 'Energy', 'Sustainability'],
      demoUrl: 'https://example.com/energy-monitor-demo',
      githubUrl: 'https://github.com/example/smart-energy',
      techStack: ['ESP32', 'MQTT', 'TensorFlow Lite', 'React Native', 'AWS IoT'],
      screenshots: [
        'https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      createdAt: '2023-10-03T11:05:00Z',
      lastUpdated: '2023-10-10T08:45:00Z',
      lastComment: '2023-10-08T16:20:00Z',
      followers: 63,
    },
    {
      id: '6',
      title: 'Augmented Reality Language Learning',
      description:
        'An AR app that helps users learn new languages by overlaying translations and pronunciation guides on real-world objects.',
      longDescription:
        "This innovative language learning application uses augmented reality to make vocabulary acquisition intuitive and contextual. Users simply point their camera at objects around them, and the app identifies the items and displays their names in the target language, complete with pronunciation guides. The spaced repetition system tracks which words you've learned and which need review, creating a personalized learning experience. The app supports 12 languages with plans to add more based on user demand.",
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      author: {
        name: 'David Chen',
        avatar:
          'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        bio: 'AR/VR developer and language enthusiast. Creating immersive educational experiences through technology.',
      },
      likes: 143,
      comments: 4,
      views: 978,
      remixes: 19,
      tags: ['AR', 'Education', 'Mobile App'],
      demoUrl: 'https://example.com/ar-language-demo',
      githubUrl: 'https://github.com/example/ar-language',
      techStack: ['ARKit', 'ARCore', 'Unity', 'ML Kit', 'Firebase'],
      screenshots: [
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      ],
      createdAt: '2023-11-18T13:40:00Z',
      lastUpdated: '2023-11-25T10:15:00Z',
      lastComment: '2023-11-22T09:30:00Z',
      followers: 92,
    },
  ];

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <BackToProjectsButton variant="default" size="md" />
        </div>
      </div>
    );
  }

  const handleLike = () => {
    setLiked(!liked);
  };

  // Show loading indicator while content is being prepared
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <LoadingIndicator size="md" color="indigo" message="Loading project details..." />
      </div>
    );
  }

  return (
    /* Main content with fade-in effect */
    <div style={contentStyle} className="max-w-4xl mx-auto px-4 py-8">
      {/* Header Banner */}
      <motion.div
        className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 mb-8 text-white bg-[length:120%_120%]"
        initial={{ backgroundPosition: '0% 50%' }}
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="flex justify-between items-center">
          <motion.h1
            className="text-2xl md:text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.2, type: 'spring', stiffness: 400 },
            }}
            viewport={{ once: true }}
          >
            {project.title}
          </motion.h1>
          <div className="flex items-center space-x-2">
            <motion.span
              className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } }}
              viewport={{ once: true }}
            >
              {project.category || project.tags[0]}
            </motion.span>
          </div>
        </div>
        <motion.p
          className="mt-2 text-indigo-100 max-w-2xl"
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0, transition: { delay: 0.2, duration: 0.2 } }}
          viewport={{ once: true }}
        >
          {project.description}
        </motion.p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="px-2 py-1 bg-white bg-opacity-10 rounded-full text-xs"
              initial={{ opacity: 0, x: 20, scale: 0.6 }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
                transition: { delay: 0.4 + index * 0.15, duration: 0.15 },
              }}
              viewport={{ once: true }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Back button - Using our new component */}
      <div className="mb-6">
        <BackToProjectsButton
          variant="text"
          size="md"
          className="transition-all duration-200 hover:translate-x-[-4px]"
        />
      </div>

      {/* Project header */}
      <div className="mb-8">
        <div className="flex items-center mb-6">
          <motion.img
            src={project.author.avatar}
            alt={project.author.name}
            className="h-10 w-10 rounded-full mr-3"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.1, duration: 0.6 },
            }}
            viewport={{ once: true }}
          />
          <div>
            <motion.p
              className="font-medium text-gray-900"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.1, duration: 0.15 },
              }}
              viewport={{ once: true }}
            >
              {project.author.name}
            </motion.p>
            <motion.p
              className="text-sm text-gray-500"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.35, duration: 0.15 },
              }}
              viewport={{ once: true }}
            >
              {project.author.bio}
            </motion.p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.5 + index * 0.15, duration: 0.15 },
              }}
              viewport={{ once: true }}
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="flex items-center space-x-6 text-gray-500"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.6, duration: 0.2 },
          }}
          viewport={{ once: true }}
        >
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">Created {formatDate(project.createdAt)}</span>
          </div>

          {project.lastUpdated && (
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="text-sm">Updated {formatDate(project.lastUpdated)}</span>
            </div>
          )}

          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span className="text-sm">{project.views} views</span>
          </div>
        </motion.div>
      </div>

      {/* Main image */}
      <div className="mb-8 rounded-lg overflow-hidden shadow-md">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full min-h-[300px]"
          onError={(e) => {
            // Fallback image if the project image fails to load
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.4 },
          }}
          viewport={{ once: true }}
        />
      </div>

      {/* Project details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <motion.h2
            className="text-xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0, duration: 0.2 },
            }}
            viewport={{ once: true }}
          >
            About this project
          </motion.h2>
          <div className="prose prose-indigo max-w-none">
            <motion.p
              className="text-gray-700 mb-6"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.2 },
              }}
              viewport={{ once: true }}
            >
              {project.longDescription}
            </motion.p>
          </div>

          {project.techStack && project.techStack.length > 0 && (
            <div className="mt-8">
              <motion.h3
                className="text-lg font-semibold text-gray-900 mb-3"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { delay: 0.3, duration: 0.2 },
                }}
                viewport={{ once: true }}
              >
                Technologies used
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: 0.3 + index * 0.15, duration: 0.15 },
                    }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          {project.screenshots && project.screenshots.length > 1 && (
            <div className="mt-8">
              <motion.h3
                className="text-lg font-semibold text-gray-900 mb-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.2 },
                }}
                viewport={{ once: true }}
              >
                Screenshots
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.screenshots.slice(1).map((screenshot, index) => (
                  <div key={index} className="h-full rounded-lg overflow-hidden shadow-sm">
                    <motion.img
                      src={screenshot}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto sm:h-full object-cover"
                      onError={(e) => {
                        // Fallback image if screenshot fails to load
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80';
                      }}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.3 + index * 0.15, duration: 0.15 },
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sticky top-16 h-fit">
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <motion.h3
              className="text-lg font-semibold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.2 },
              }}
              viewport={{ once: true }}
            >
              Project Stats
            </motion.h3>

            <div className="space-y-3">
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 0.15 },
                }}
                viewport={{ once: true }}
              >
                <span className="text-gray-600">Likes</span>
                <div className="flex items-center">
                  <Heart className="h-4 w-4 mr-1 text-red-500" />
                  <span>{project.likes}</span>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.55, duration: 0.15 },
                }}
                viewport={{ once: true }}
              >
                <span className="text-gray-600">Comments</span>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1 text-blue-500" />
                  <span>{project.comments}</span>
                </div>
              </motion.div>

              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.7, duration: 0.15 },
                }}
                viewport={{ once: true }}
              >
                <span className="text-gray-600">Views</span>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1 text-green-500" />
                  <span>{project.views}</span>
                </div>
              </motion.div>

              {project.remixes !== undefined && (
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.85, duration: 0.15 },
                  }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-600">Remixes</span>
                  <span>{project.remixes}</span>
                </motion.div>
              )}

              {project.followers !== undefined && (
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: project.remixes !== undefined ? 1 : 0.85, duration: 0.15 },
                  }}
                  viewport={{ once: true }}
                >
                  <span className="text-gray-600">Followers</span>
                  <span>{project.followers}</span>
                </motion.div>
              )}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <motion.h3
              className="text-lg font-semibold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.2 },
              }}
              viewport={{ once: true }}
            >
              Links
            </motion.h3>

            <div className="space-y-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <Github className="h-4 w-4 mr-2" />
                  <span>Source Code</span>
                </motion.a>
              )}

              {project.websiteUrl && (
                <motion.a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.3, duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  <span>Website</span>
                </motion.a>
              )}

              {project.twitterUrl && (
                <motion.a
                  href={project.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.4, duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  <span>Twitter</span>
                </motion.a>
              )}

              {project.linkedinUrl && (
                <motion.a
                  href={project.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-indigo-600 hover:text-indigo-800"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.5, duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  <span>LinkedIn</span>
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Comments section */}
      <div className="mb-12">
        <motion.h2
          className="text-xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.2 },
          }}
          viewport={{ once: true }}
        >
          Comments ({mockComments.length})
        </motion.h2>

        <div className="space-y-6">
          {mockComments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="py-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2 + index * 0.1, duration: 0.1 },
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-start">
                <img
                  src={comment.author.avatar}
                  alt={comment.author.name}
                  className="h-10 w-10 rounded-full mr-3"
                  onError={(e) => {
                    // Fallback avatar if the comment author avatar fails to load
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80';
                  }}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium text-gray-900">{comment.author.name}</h4>
                    <span className="text-xs text-gray-500">{formatDate(comment.date)}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{comment.content}</p>
                  <div className="mt-2 flex items-center">
                    <button className="text-gray-500 hover:text-indigo-600 text-xs flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      <span>{comment.likes}</span>
                    </button>
                    <button className="ml-4 text-gray-500 hover:text-indigo-600 text-xs">
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comment form */}
        <div className="mt-8">
          <motion.h3
            className="text-lg font-semibold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 0.2 },
            }}
            viewport={{ once: true }}
          >
            Leave a comment
          </motion.h3>
          <div className="">
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 text-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows={4}
              placeholder="Share your thoughts about this project..."
            ></textarea>
            <div className="mt-3 flex justify-end">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-sm font-medium">
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-center space-x-6 md:hidden">
        <button
          onClick={handleLike}
          className={`flex flex-col items-center ${liked ? 'text-red-500' : 'text-gray-500'}`}
        >
          <Heart className="h-6 w-6" fill={liked ? 'currentColor' : 'none'} />
          <span className="text-xs mt-1">Like</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Comment</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <Share2 className="h-6 w-6" />
          <span className="text-xs mt-1">Share</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectDetail;
