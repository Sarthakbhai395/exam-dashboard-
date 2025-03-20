import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheckIcon, CalendarIcon, BookOpenIcon, FileTextIcon } from 'lucide-react';

const getActivityIcon = (type) => {
  switch (type) {
    case 'exam_completed':
      return ClipboardCheckIcon;
    case 'exam_registered':
      return CalendarIcon;
    case 'practice_completed':
      return BookOpenIcon;
    case 'material_accessed':
      return FileTextIcon;
    default:
      return FileTextIcon;
  }
};

const RecentActivity = ({ activities }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white p-4 rounded-xl shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const ActivityIcon = getActivityIcon(activity.type);
          const timestamp = new Date(activity.timestamp);
          const timeAgo = new Intl.RelativeTimeFormat('en', { numeric: 'auto' }).format(
            Math.floor((timestamp - new Date()) / (1000 * 60 * 60 * 24)),
            'day'
          );
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start p-3 rounded-lg hover:bg-gray-50"
            >
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                <ActivityIcon className="h-4 w-4" />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                  <span className="text-xs text-gray-500">{timeAgo}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{activity.details}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RecentActivity;