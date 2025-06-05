import { Calendar, MapPin, Users } from 'lucide-react';
import React, { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';

import { EventType, FollowedAttendeesResponse } from '../../types/events';
import { FollowedAttendees } from './FollowedAttendees';

interface Props {
  event: EventType;
  size?: 'default' | 'large';
  followedAttendees: Record<string, FollowedAttendeesResponse>;
}

export const EventCardGalleryItem: React.FC<Props> = ({
  event,
  size = 'default',
  followedAttendees,
}) => {
  const eventFollowedAttendees = useMemo(
    () => followedAttendees[event.id]?.followedAttendees || [],
    [followedAttendees, event],
  );

  // Determine card width and image height based on size prop
  const cardWidth = size === 'large' ? 'w-80' : 'w-72';
  const imageHeight = size === 'large' ? 'h-48' : 'h-40';

  return (
    <div
      key={event.id}
      className={twMerge(
        `h-full flex-shrink-0 snap-start bg-white rounded-2xl border border-gray-200/60 hover:border-indigo-300/70 overflow-hidden transition-all duration-300 flex flex-col`,
        cardWidth,
      )}
      style={{
        boxShadow: '0 2px 8px -2px rgba(0, 0, 0, 0.1), 0 4px 16px -4px rgba(59, 130, 246, 0.15)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          '0 4px 16px -2px rgba(0, 0, 0, 0.15), 0 8px 24px -4px rgba(99, 102, 241, 0.25)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow =
          '0 2px 8px -2px rgba(0, 0, 0, 0.1), 0 4px 16px -4px rgba(59, 130, 246, 0.15)';
        e.currentTarget.style.transform = 'translateY(0px)';
      }}
    >
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className={twMerge(`w-full object-cover`, imageHeight)}
        />
        <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-700 shadow-sm border border-indigo-100/50">
          {event.category}
        </div>
      </div>

      {/* Content area with flex-1 to push button to bottom */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            {event.date}
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            {event.location}
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2 text-gray-400" />
            {event.attendees} attending
          </div>
        </div>

        {/* Followed Attendees Section */}
        {eventFollowedAttendees.length > 0 && (
          <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100/50">
            <FollowedAttendees attendees={eventFollowedAttendees} className="justify-start" />
          </div>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-1"></div>

        {/* Register button - always at bottom */}
        <button className="w-full py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
          Register Now
        </button>
      </div>
    </div>
  );
};
