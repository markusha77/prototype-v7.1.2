import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef } from 'react';

import { useFollowedAttendees } from '../../hooks/useFollowedAttendees';
import { EventType } from '../../types/events';
import { EventCardGalleryItem } from './EventCardGalleryItem';

// Props interface
interface EventCardGalleryProps {
  size?: 'default' | 'large';
}

// Sample event data
const upcomingEvents: EventType[] = [
  {
    id: '1',
    title: 'React Developer Meetup',
    date: 'May 15, 2023 • 6:00 PM',
    location: 'Tech Hub, San Francisco',
    image:
      'https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 87,
    category: 'Web Development',
  },
  {
    id: '2',
    title: 'AI & Machine Learning Workshop',
    date: 'May 22, 2023 • 10:00 AM',
    location: 'Innovation Center, New York',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 124,
    category: 'AI & Machine Learning',
  },
  {
    id: '3',
    title: 'Mobile App Design Principles',
    date: 'June 3, 2023 • 2:00 PM',
    location: 'Design Studio, Austin',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 56,
    category: 'Design',
  },
  {
    id: '4',
    title: 'Blockchain Developer Conference',
    date: 'June 10, 2023 • 9:00 AM',
    location: 'Crypto Center, Miami',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 210,
    category: 'Blockchain',
  },
  {
    id: '5',
    title: 'Game Development Hackathon',
    date: 'June 17-18, 2023 • All Day',
    location: 'Game Studio, Seattle',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 95,
    category: 'Game Development',
  },
  {
    id: '6',
    title: 'Data Science Summit',
    date: 'June 25, 2023 • 11:00 AM',
    location: 'Data Center, Chicago',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    attendees: 178,
    category: 'Data Science',
  },
];

export const EventCardGallery: React.FC<EventCardGalleryProps> = ({ size = 'default' }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Get event IDs for the hook
  const eventIds = upcomingEvents.map((event) => event.id);
  const { followedAttendees, loading } = useFollowedAttendees(eventIds);

  // Determine card width and image height based on size prop
  const scrollAmount = size === 'large' ? 350 : 300;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation buttons */}
      <div className="flex justify-end space-x-2 mb-4">
        <motion.button
          onClick={scrollLeft}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          aria-label="Scroll left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.6 }}
        >
          <ChevronLeft className="h-4 w-4 text-gray-600" />
        </motion.button>
        <motion.button
          onClick={scrollRight}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
          aria-label="Scroll right"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <ChevronRight className="h-4 w-4 text-gray-600" />
        </motion.button>
      </div>

      {/* Events container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex space-x-4">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <EventCardGalleryItem event={event} followedAttendees={followedAttendees} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
