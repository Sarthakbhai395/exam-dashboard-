import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaBook, FaSort, FaFilter, FaPlus, FaEye } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExamList = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');
  
  const [exams, setExams] = useState([]);
  const [filter, setFilter] = useState(filterParam || 'all');
  
  // Mock data for exams
  useEffect(() => {
    const mockExams = [
      { id: 1, title: 'Calculus Midterm', course: 'MATH 101', date: '2025-03-15', time: '10:00 AM', status: 'upcoming', score: null },
      { id: 2, title: 'Computer Science Final', course: 'CS 220', date: '2025-03-22', time: '2:00 PM', status: 'upcoming', score: null },
      { id: 3, title: 'Advanced Physics', course: 'PHYS 301', date: '2025-03-18', time: '9:00 AM', status: 'upcoming', score: null },
      { id: 4, title: 'Literature Quiz', course: 'ENG 110', date: '2025-03-14', time: '1:00 PM', status: 'upcoming', score: null },
      { id: 5, title: 'Programming Fundamentals', course: 'CS 101', date: '2025-03-10', time: '11:00 AM', status: 'upcoming', score: null },
      { id: 6, title: 'Database Management', course: 'CS 330', date: '2025-02-28', time: '3:00 PM', status: 'completed', score: 92 },
      { id: 7, title: 'Web Development Basics', course: 'CS 210', date: '2025-02-20', time: '9:30 AM', status: 'completed', score: 88 },
      { id: 8, title: 'Introduction to Psychology', course: 'PSY 101', date: '2025-02-15', time: '10:00 AM', status: 'completed', score: 76 },
      { id: 9, title: 'Statistics Quiz', course: 'MATH 220', date: '2025-02-10', time: '1:00 PM', status: 'completed', score: 85 },
      { id: 10, title: 'History of Art', course: 'ART 105', date: '2025-02-05', time: '2:30 PM', status: 'completed', score: 78 },
      { id: 11, title: 'Business Ethics', course: 'BUS 240', date: '2025-02-01', time: '11:00 AM', status: 'completed', score: 91 },
      { id: 12, title: 'French Language Basics', course: 'FREN 101', date: '2025-01-25', time: '9:00 AM', status: 'completed', score: 82 }
    ];
    
    setExams(mockExams);
  }, []);
  
  useEffect(() => {
    if (filterParam) {
      setFilter(filterParam);
    }
  }, [filterParam]);
  
  const filteredExams = exams.filter(exam => {
    if (filter === 'all') return true;
    return exam.status === filter;
  });
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <h1 className="text-2xl font-bold text-gray-800">Exams</h1>
          <p className="text-gray-600">View and manage your upcoming and completed exams.</p>
        </motion.div>
        <motion.div 
          className="flex mt-4 md:mt-0"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
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
      
      {/* Filters */}
      <motion.div 
        className="flex flex-wrap gap-2"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            filter === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 border border-gray-200'
          }`}
        >
          <FaBook className="mr-2" />
          All Exams
        </button>
        <button
          onClick={() => setFilter('upcoming')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            filter === 'upcoming' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'
          }`}
        >
          <FaCalendarAlt className="mr-2" />
          Upcoming
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg flex items-center ${
            filter === 'completed' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 border border-gray-200'
          }`}
        >
          <FaClock className="mr-2" />
          Completed
        </button>
        <button
          className="ml-auto px-4 py-2 rounded-lg flex items-center bg-white text-gray-700 border border-gray-200"
        >
          <FaSort className="mr-2" />
          Sort
        </button>
        <button
          className="px-4 py-2 rounded-lg flex items-center bg-white text-gray-700 border border-gray-200"
        >
          <FaFilter className="mr-2" />
          Filter
        </button>
      </motion.div>
      
      {/* Exams List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {filteredExams.length > 0 ? (
          filteredExams.map(exam => (
            <motion.div
              key={exam.id}
              variants={item}
              className="bg-white rounded-xl shadow-sm p-4 border border-gray-100"
              whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{exam.title}</h3>
                  <p className="text-gray-600">{exam.course}</p>
                </div>
                <div className="mt-2 md:mt-0 flex flex-wrap items-center gap-2">
                  <span className="flex items-center text-gray-600 text-sm">
                    <FaCalendarAlt className="mr-1 text-indigo-500" />
                    {exam.date} at {exam.time}
                  </span>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs ${
                    exam.status === 'upcoming' 
                      ? 'bg-blue-100 text-blue-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {exam.status === 'upcoming' ? 'Upcoming' : `Scored: ${exam.score}%`}
                  </span>
                  <motion.button
                    onClick={() => navigate(`/exams/${exam.id}`)}
                    className="ml-2 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 p-2 rounded-full"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEye />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No exams found matching the current filter.</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ExamList;