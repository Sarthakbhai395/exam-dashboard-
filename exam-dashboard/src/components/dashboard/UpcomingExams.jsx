import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen } from 'lucide-react';

const UpcomingExams = ({ exams }) => {
  // Filter only upcoming exams
  const upcomingExams = exams.filter(exam => exam.status === 'upcoming');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white p-4 rounded-xl shadow-md"
    >
      <h2 className="text-lg font-semibold mb-4">Upcoming Exams</h2>
      <div className="space-y-4">
        {upcomingExams.slice(0, 3).map((exam, index) => {
          const examDate = new Date(exam.date);
          const formattedDate = examDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          });
          const formattedTime = examDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          });
          
          return (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                {exam.subject.charAt(0)}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-medium text-gray-900">{exam.title}</h3>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{formattedDate}</span>
                  <Clock className="h-3 w-3 ml-3 mr-1" />
                  <span>{formattedTime}</span>
                  <BookOpen className="h-3 w-3 ml-3 mr-1" />
                  <span>{exam.totalQuestions} Q</span>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-3 py-1 text-xs bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700"
              >
                View
              </motion.button>
            </motion.div>
          );
        })}
        
        {upcomingExams.length > 3 && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="w-full text-center text-sm text-indigo-600 font-medium hover:text-indigo-800 py-2"
          >
            View all {upcomingExams.length} upcoming exams
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default UpcomingExams;