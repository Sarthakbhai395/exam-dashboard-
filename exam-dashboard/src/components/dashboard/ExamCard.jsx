import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const ExamCard = ({ exam }) => {
  const isUpcoming = exam.status === 'upcoming';
  const examDate = new Date(exam.date);
  const formattedDate = examDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = examDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden"
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-32 w-full object-cover md:w-48"
            src={exam.image}
            alt={exam.title}
          />
        </div>
        <div className="p-4 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                exam.difficulty === 'Hard' ? 'bg-red-100 text-red-800' :
                exam.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'
              }`}>
                {exam.difficulty}
              </span>
              <span className="ml-2 text-xs text-gray-500">{exam.subject}</span>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
              isUpcoming ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
            }`}>
              {isUpcoming ? 'Upcoming' : 'Completed'}
            </span>
          </div>
          <Link to={`/exams/${exam.id}`}>
            <h3 className="mt-2 text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors">
              {exam.title}
            </h3>
          </Link>
          <div className="mt-3 flex items-center text-sm text-gray-600 space-x-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1 text-indigo-500" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-indigo-500" />
              <span>{formattedTime}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-600">
              <BookOpen className="h-4 w-4 mr-1 text-indigo-500" />
              <span>{exam.totalQuestions} Questions</span>
            </div>
            {isUpcoming ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Prepare
              </motion.button>
            ) : (
              <div className="text-lg font-bold text-gray-800">
                {exam.score}/{exam.totalMarks}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExamCard;