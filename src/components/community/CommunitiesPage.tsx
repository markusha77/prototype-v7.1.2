import { motion } from 'framer-motion';
import {
  Briefcase,
  ChevronRight,
  Edit,
  Filter,
  Grid,
  List,
  Search,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Community {
  id: string;
  name: string;
  logo: string;
  members: number;
  description: string;
  projects: number;
  joinStatus: 'join' | 'request' | 'joined';
}

const communities: Community[] = [
  {
    id: '1',
    name: 'EcoTech Innovators',
    logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    members: 3,
    description:
      'A community of developers, designers, and entrepreneurs building technology solutions for environmental sustainability.',
    projects: 2,
    joinStatus: 'join',
  },
  {
    id: '2',
    name: 'AI Creators Collective',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    members: 3,
    description:
      'A collaborative community exploring the frontiers of artificial intelligence and machine learning applications.',
    projects: 1,
    joinStatus: 'request',
  },
  {
    id: '3',
    name: 'Design Systems Guild',
    logo: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
    members: 3,
    description:
      'A professional community dedicated to advancing the practice of design systems and component-based design.',
    projects: 1,
    joinStatus: 'join',
  },
];

const CommunitiesPage: React.FC = () => {
  const [hoveredCommunity, setHoveredCommunity] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleCommunityClick = (communityId: string) => {
    navigate(`/community/${communityId}`);
  };

  const handleEditCommunity = (e: React.MouseEvent, communityId: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Edit community:', communityId);
    navigate(`/community/${communityId}/edit`);
  };

  const renderJoinButton = (status: Community['joinStatus'], communityId: string) => {
    const handleJoinClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Join community:', communityId);
      // TODO: Implement join functionality
    };

    switch (status) {
      case 'join':
        return (
          <button
            onClick={handleJoinClick}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Join
          </button>
        );
      case 'request':
        return (
          <button
            onClick={handleJoinClick}
            className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Request Access
          </button>
        );
      case 'joined':
        return (
          <button
            onClick={handleJoinClick}
            className="px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg cursor-default font-medium"
          >
            ✓ Joined
          </button>
        );
    }
  };

  const filteredCommunities = communities.filter(
    (community) =>
      community.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      community.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <div className="relative bg-white shadow-sm border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        {/* Page header */}
        <div className="relative cb-wrapper py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* page title & desc */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0, duration: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Users className="h-6 w-6 text-white" />
                </motion.div>
                <motion.h1
                  className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  viewport={{ once: true }}
                >
                  Communities
                </motion.h1>
                <motion.div
                  className="flex items-center gap-1 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.2 }}
                  viewport={{ once: true }}
                >
                  <TrendingUp className="h-3 w-3" />
                  <span>Trending</span>
                </motion.div>
              </div>
              <motion.p
                className="text-gray-600 text-lg max-w-2xl"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.1 }}
                viewport={{ once: true }}
              >
                Explore and join partner communities where innovation meets collaboration
              </motion.p>
            </div>

            {/* search, filter */}
            <div className="flex flex-col sm:flex-row items-end gap-4 lg:min-w-96">
              <motion.div
                className="relative flex-1 w-full sm:w-auto"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.2 }}
                viewport={{ once: true }}
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search communities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white shadow-sm"
                />
              </motion.div>

              <div className="flex gap-2">
                <motion.button
                  className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors bg-white shadow-sm"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Filter className="h-4 w-4" />
                  <span className="hidden sm:inline">Filter</span>
                </motion.button>

                <motion.div
                  className="flex border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.2 }}
                  viewport={{ once: true }}
                >
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2.5 transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2.5 transition-colors ${
                      viewMode === 'list'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Status bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="cb-wrapper py-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                duration: 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="font-medium">{filteredCommunities.length} Active Communities</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.2,
              }}
              viewport={{ once: true }}
            >
              <Star className="h-4 w-4 text-yellow-500" />
              <span>Featured Partners</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.2,
              }}
              viewport={{ once: true }}
            >
              <Users className="h-4 w-4 text-blue-500" />
              <span>{communities.reduce((sum, c) => sum + c.members, 0)}+ Members</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.2,
              }}
              viewport={{ once: true }}
            >
              <Briefcase className="h-4 w-4 text-purple-500" />
              <span>{communities.reduce((sum, c) => sum + c.projects, 0)} Active Projects</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="cb-wrapper py-8">
        {searchTerm && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-800">
              <span className="font-medium">{filteredCommunities.length} communities</span> found
              for "{searchTerm}"
            </p>
          </div>
        )}

        <div
          className={`grid gap-6 ${
            viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
          }`}
        >
          {filteredCommunities.map((community, index) => (
            <motion.div
              key={community.id}
              className={`bg-white border-2 ${
                hoveredCommunity === community.id
                  ? 'border-blue-300 shadow-xl shadow-blue-100/50'
                  : 'border-gray-100 shadow-lg hover:shadow-xl'
              } rounded-2xl h-full flex flex-col hover:-translate-y-1 cursor-pointer group`}
              onMouseEnter={() => setHoveredCommunity(community.id)}
              onMouseLeave={() => setHoveredCommunity(null)}
              onClick={() => handleCommunityClick(community.id)}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.2, delay: 0.2 + index * 0.2 },
              }}
              whileHover={{ y: -2, transition: { duration: 0.1 } }}
              whileTap={{ scale: 0.96 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="h-20 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-t-2xl">
                  <div className="absolute inset-0 opacity-20 rounded-t-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {community.joinStatus === 'joined' && (
                      <div className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        Member
                      </div>
                    )}
                    {community.joinStatus === 'request' && (
                      <div className="px-3 py-1 bg-yellow-500 text-white rounded-full text-xs font-medium">
                        Private
                      </div>
                    )}
                  </div>
                </div>

                <div className="absolute -bottom-8 left-6">
                  <img
                    src={community.logo}
                    alt={community.name}
                    className="h-16 w-16 rounded-xl border-4 border-white shadow-lg object-cover bg-white"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src =
                        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80';
                    }}
                  />
                </div>
              </div>

              <div className="pt-12 px-6 pb-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {community.name}
                  </h3>
                  <ChevronRight
                    className={`h-5 w-5 text-gray-400 transition-all duration-300 ${
                      hoveredCommunity === community.id
                        ? 'transform translate-x-1 text-blue-500'
                        : ''
                    }`}
                  />
                </div>

                <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
                  {community.description}
                </p>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-6">
                      <div className="flex items-center text-gray-600 group/stat hover:text-blue-600 transition-colors">
                        <div className="p-1.5 bg-blue-50 rounded-lg mr-2 group-hover/stat:bg-blue-100 transition-colors">
                          <Users className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium">{community.members}</span>
                      </div>
                      <div className="flex items-center text-gray-600 group/stat hover:text-purple-600 transition-colors">
                        <div className="p-1.5 bg-purple-50 rounded-lg mr-2 group-hover/stat:bg-purple-100 transition-colors">
                          <Briefcase className="h-4 w-4 text-purple-600" />
                        </div>
                        <span className="text-sm font-medium">{community.projects}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    {community.name === 'EcoTech Innovators' && (
                      <button
                        onClick={(e) => handleEditCommunity(e, community.id)}
                        className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                        title="Edit Community"
                      >
                        <Edit className="h-4 w-4" />
                        Edit
                      </button>
                    )}
                    {renderJoinButton(community.joinStatus, community.id)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCommunities.length === 0 && (
          <div className="text-center py-16">
            <motion.div
              className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6"
              whileInView={{
                scale: [1, 1.1, 1, 0.9, 1],
                opacity: [1, 0.8, 1, 0.8, 1],
                transition: { duration: 2, repeat: Infinity },
              }}
              viewport={{ once: true }}
            >
              <Search className="h-1/2 w-1/2 text-gray-400" />
            </motion.div>
            <motion.h3
              className="text-xl font-semibold text-gray-900 mb-2"
              whileInView={{
                rotateZ: [0, 5, 0, -5, 0],
                opacity: [0.2, 0.6, 0.4, 0.6, 1],
                transition: { duration: 0.3, delay: 0.2 },
              }}
              viewport={{ once: true }}
            >
              No communities found
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, delay: 0.5 },
              }}
              viewport={{ once: true }}
            >
              Try adjusting your search terms or browse all communities.
            </motion.p>
            <motion.button
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, delay: 0.7 },
              }}
              viewport={{ once: true }}
            >
              Clear Search
            </motion.button>
          </div>
        )}

        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, delay: 0.6 },
          }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.8, type: 'spring', stiffness: 400 },
            }}
            viewport={{ once: true }}
          >
            Want to create your own community?
          </motion.h2>
          <motion.p
            className="text-blue-100 mb-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.2, delay: 1, type: 'spring', stiffness: 200 },
            }}
            viewport={{ once: true }}
          >
            Join thousands of creators building amazing projects together. Start your community
            today and connect with like-minded builders.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-lg hover:shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.2, delay: 1.2, type: 'spring', stiffness: 200 },
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
          >
            Create Community
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default CommunitiesPage;
