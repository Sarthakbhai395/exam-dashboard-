import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenIcon, ClockIcon, CheckCircleIcon, TrendingUpIcon } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md p-4 flex items-center"
    >
      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
      </div>
    </motion.div>
  );
};

const ExamStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        icon={BookOpenIcon}
        title="Total Exams"
        value={stats.totalExams}
        color="bg-blue-500"
      />
      <StatCard
        icon={ClockIcon}
        title="Upcoming Exams"
        value={stats.upcomingExams}
        color="bg-purple-500"
      />
      <StatCard
        icon={CheckCircleIcon}
        title="Completed Exams"
        value={stats.completedExams}
        color="bg-green-500"
      />
      <StatCard
        icon={TrendingUpIcon}
        title="Average Score"
        value={`${stats.averageScore}%`}
        color="bg-orange-500"
      />
    </div>
  );
};

export default ExamStats;
