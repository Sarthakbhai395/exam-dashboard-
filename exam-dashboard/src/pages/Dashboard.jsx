import React, { useState } from 'react';
import { 
  FaBook, 
  FaClock, 
  FaCheckCircle, 
  FaChartLine, 
  FaPlus, 
  FaCalendarAlt,
  FaBell,
  FaGraduationCap,
  FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Line } from 'recharts';

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentMonth, setCurrentMonth] = useState('March 2025');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  const statCards = [
    {
      id: 'total',
      title: 'Total Exams',
      value: '15',
      icon: <FaBook className="text-xl" />,
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      onClick: () => navigate('/exams')
    },
    {
      id: 'upcoming',
      title: 'Upcoming Exams',
      value: '8',
      icon: <FaClock className="text-xl" />,
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      onClick: () => navigate('/exams?filter=upcoming')
    },
    {
      id: 'completed',
      title: 'Completed Exams',
      value: '7',
      icon: <FaCheckCircle className="text-xl" />,
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      onClick: () => navigate('/exams?filter=completed')
    },
    {
      id: 'average',
      title: 'Average Score',
      value: '82%',
      icon: <FaChartLine className="text-xl" />,
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      onClick: () => navigate('/performance')
    }
  ];

  // Mock data for weekly progress chart
  const weeklyProgressData = [
    { day: 'Mon', score: 65 },
    { day: 'Tue', score: 75 },
    { day: 'Wed', score: 70 },
    { day: 'Thu', score: 85 },
    { day: 'Fri', score: 90 },
    { day: 'Sat', score: 80 },
    { day: 'Sun', score: 78 }
  ];

  // Mock data for upcoming exams
  const upcomingExams = [
    {
      id: 1,
      subject: 'Advanced Mathematics',
      date: 'March 10, 2025',
      time: '10:00 AM',
      duration: '2 hours',
      location: 'Room 301'
    },
    {
      id: 2,
      subject: 'Data Structures',
      date: 'March 15, 2025',
      time: '2:00 PM',
      duration: '1.5 hours',
      location: 'Computer Lab B'
    },
    {
      id: 3,
      subject: 'Modern Physics',
      date: 'March 18, 2025',
      time: '9:00 AM',
      duration: '3 hours',
      location: 'Science Hall 105'
    }
  ];

  // Mock data for recent activity
  const recentActivity = [
    {
      id: 1,
      type: 'completed',
      subject: 'Organic Chemistry',
      date: 'March 5, 2025',
      score: '88%'
    },
    {
      id: 2,
      type: 'scheduled',
      subject: 'Microeconomics',
      date: 'March 20, 2025'
    },
    {
      id: 3,
      type: 'practice',
      subject: 'American Literature',
      date: 'March 3, 2025',
      score: '92%'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6 p-4 md:p-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back, John. Here's an overview of your exams.</p>
        </motion.div>
        <motion.div 
          className="flex mt-4 md:mt-0 space-x-2"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <motion.button
            className="flex items-center bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm text-gray-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="mr-2 text-indigo-500" />
            <span>{currentMonth}</span>
          </motion.button>
          <motion.button
            onClick={() => navigate('/exams/schedule')}
            className="flex items-center bg-indigo-600 px-4 py-2 rounded-lg text-white shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlus className="mr-2" />
            <span>Schedule Exam</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Stat Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {statCards.map((card) => (
          <StatCard key={card.id} {...card} variants={item} />
        ))}
      </motion.div>

      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Weekly Progress Chart */}
        <motion.div
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 lg:col-span-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">Weekly Progress</h2>
          <div className="h-64">
            {/* Chart implementation */}
            <WeeklyProgressChart data={weeklyProgressData} />
          </div>
        </motion.div>

        {/* Upcoming Exams */}
        <motion.div
          className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Upcoming Exams</h2>
            <motion.button
              className="text-indigo-600 flex items-center text-sm font-medium"
              whileHover={{ x: 3 }}
              onClick={() => navigate('/exams?filter=upcoming')}
            >
              View All <FaArrowRight className="ml-1" />
            </motion.button>
          </div>
          
          <div className="space-y-4">
            {upcomingExams.slice(0, 3).map(exam => (
              <motion.div 
                key={exam.id}
                className="p-4 rounded-lg bg-gray-50 border border-gray-100"
                whileHover={{ y: -2, backgroundColor: "#EFF6FF" }}
                onClick={() => navigate(`/exams/${exam.id}`)}
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-800">{exam.subject}</h3>
                  <span className="text-blue-600 text-sm flex items-center">
                    <FaClock className="mr-1" size={12} />
                    {exam.time}
                  </span>
                </div>
                <div className="mt-2 text-gray-600 text-sm">
                  <div className="flex justify-between">
                    <span>{exam.date}</span>
                    <span>{exam.duration}</span>
                  </div>
                  <div className="mt-1">
                    <span>{exam.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Activity */}
      <motion.div
        className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
          <motion.button
            className="text-indigo-600 flex items-center text-sm font-medium"
            whileHover={{ x: 3 }}
            onClick={() => navigate('/activity')}
          >
            View All <FaArrowRight className="ml-1" />
          </motion.button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-3 text-left text-sm font-semibold text-gray-600">Activity</th>
                <th className="py-3 text-left text-sm font-semibold text-gray-600">Subject</th>
                <th className="py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="py-3 text-left text-sm font-semibold text-gray-600">Score</th>
              </tr>
            </thead>
            <tbody>
              {recentActivity.map(activity => (
                <tr 
                  key={activity.id}
                  className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/activity/${activity.id}`)}
                >
                  <td className="py-3">
                    <div className="flex items-center">
                      {activity.type === 'completed' ? (
                        <span className="p-2 bg-green-100 rounded-full">
                          <FaCheckCircle className="text-green-600" size={14} />
                        </span>
                      ) : activity.type === 'scheduled' ? (
                        <span className="p-2 bg-blue-100 rounded-full">
                          <FaCalendarAlt className="text-blue-600" size={14} />
                        </span>
                      ) : (
                        <span className="p-2 bg-purple-100 rounded-full">
                          <FaGraduationCap className="text-purple-600" size={14} />
                        </span>
                      )}
                      <span className="ml-3 text-sm font-medium text-gray-700">
                        {activity.type === 'completed' ? 'Completed Exam' : 
                         activity.type === 'scheduled' ? 'Scheduled Exam' : 'Practice Test'}
                      </span>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-700">{activity.subject}</td>
                  <td className="py-3 text-sm text-gray-700">{activity.date}</td>
                  <td className="py-3 text-sm">
                    {activity.score ? (
                      <span className="text-green-600 font-medium">{activity.score}</span>
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Study Reminder */}
      <motion.div
        className="bg-indigo-50 rounded-xl shadow-sm p-6 border border-indigo-100"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex items-start md:items-center justify-between flex-col md:flex-row">
          <div className="flex items-start md:items-center">
            <div className="p-3 bg-indigo-100 rounded-full text-indigo-600">
              <FaBell className="text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-indigo-800">Study Reminder</h3>
              <p className="text-indigo-700">You have an exam in 3 days. Don't forget to review your study materials.</p>
            </div>
          </div>
          <motion.button
            className="mt-4 md:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md"
            whileHover={{ scale: 1.05, backgroundColor: "#4338ca" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/study-planner')}
          >
            Create Study Plan
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Reusable animated stat card component
const StatCard = ({ title, value, icon, bgColor, textColor, onClick, variants }) => {
  return (
    <motion.div
      variants={variants}
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 cursor-pointer transition-transform transform hover:shadow-md"
      whileHover={{ y: -5 }}
      whileTap={{ y: 0 }}
    >
      <div className="flex items-center">
        <div className={`p-3 rounded-full ${bgColor} ${textColor}`}>
          {icon}
        </div>
        <div className="ml-4">
          <h2 className="text-gray-600 text-sm font-medium">{title}</h2>
          <p className="text-3xl font-bold text-gray-800">{value}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Custom weekly progress chart component
const WeeklyProgressChart = ({ data }) => {
  return (
    <div className="w-full h-full">
      <div className="flex h-full">
        {/* Y-axis labels */}
        <div className="flex flex-col justify-between pr-2 text-xs text-gray-500">
          <div>100</div>
          <div>75</div>
          <div>50</div>
          <div>25</div>
          <div>0</div>
        </div>
        
        {/* Chart bars */}
        <div className="flex-1 flex items-end space-x-6 md:space-x-12">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="w-full flex justify-center">
                <motion.div 
                  className="w-full max-w-md bg-indigo-500 rounded-t-md"
                  initial={{ height: 0 }}
                  animate={{ height: `${item.score * 0.6}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ backgroundColor: "#4F46E5" }}
                >
                  <div className="h-1 w-full bg-indigo-400 rounded-t-md"></div>
                </motion.div>
              </div>
              <div className="mt-2 text-xs font-medium text-gray-600">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;