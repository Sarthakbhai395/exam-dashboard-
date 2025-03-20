import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaArrowLeft, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaBook, 
  FaFileAlt, 
  FaCheckCircle,
  FaEdit,
  FaDownload,
  FaShare
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const ExamDetails = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch for exam details
    const fetchExamDetails = async () => {
      setLoading(true);
      try {
        // This would be an API call in a real application
        // await fetch(`/api/exams/${examId}`)
        
        // Mock data for demonstration
        const mockExam = {
          id: examId,
          subject: 'Advanced Mathematics',
          code: 'MATH-301',
          date: 'March 15, 2025',
          time: '10:00 AM - 12:00 PM',
          duration: '2 hours',
          location: 'Science Building, Room 301',
          instructor: 'Dr. Sarah Johnson',
          status: 'upcoming', // upcoming, completed, or cancelled
          description: 'Final examination covering all topics from the semester including advanced calculus, linear algebra, and differential equations.',
          materials: [
            { id: 1, name: 'Study Guide', type: 'PDF' },
            { id: 2, name: 'Formula Sheet', type: 'PDF' },
            { id: 3, name: 'Practice Problems', type: 'DOCX' }
          ],
          topics: [
            'Advanced Calculus',
            'Linear Algebra',
            'Differential Equations',
            'Vector Calculus',
            'Complex Analysis',
            'Numerical Methods'
          ],
          prerequisites: [
            'MATH-201: Calculus II',
            'MATH-250: Linear Algebra'
          ],
          notes: 'Calculators are permitted, but no other electronic devices. Bring your student ID and at least two pencils.',
          weightage: 40, // percentage of total grade
          passingScore: 60
        };
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setExam(mockExam);
      } catch (error) {
        console.error('Error fetching exam details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchExamDetails();
  }, [examId]);

  const handleStartPreparing = () => {
    navigate(`/exams/${examId}/prepare`);
  };

  const handleEditNotes = () => {
    navigate(`/exams/${examId}/notes`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!exam) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">Exam not found</h2>
        <p className="text-gray-600 mt-2">The exam you're looking for doesn't exist or has been removed.</p>
        <button 
          onClick={() => navigate('/exams')}
          className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
        >
          Go back to Exams
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-4 md:p-6 space-y-6"
    >
      {/* Header with back button */}
      <div className="flex items-center mb-6">
        <motion.button 
          onClick={() => navigate(-1)}
          className="mr-4 p-2 rounded-full hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowLeft className="text-gray-600" />
        </motion.button>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{exam.subject}</h1>
          <p className="text-gray-600">{exam.code}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column - Main info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status banner */}
          <motion.div 
            className={`p-4 rounded-lg ${
              exam.status === 'upcoming' ? 'bg-blue-50 border border-blue-100' : 
              exam.status === 'completed' ? 'bg-green-50 border border-green-100' : 
              'bg-red-50 border border-red-100'
            }`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-full ${
                exam.status === 'upcoming' ? 'bg-blue-100 text-blue-600' : 
                exam.status === 'completed' ? 'bg-green-100 text-green-600' : 
                'bg-red-100 text-red-600'
              }`}>
                {exam.status === 'upcoming' ? <FaCalendarAlt /> : 
                 exam.status === 'completed' ? <FaCheckCircle /> : 
                 <FaClock />}
              </div>
              <div className="ml-3">
                <h3 className={`font-medium ${
                  exam.status === 'upcoming' ? 'text-blue-800' : 
                  exam.status === 'completed' ? 'text-green-800' : 
                  'text-red-800'
                }`}>
                  {exam.status === 'upcoming' ? 'Upcoming Exam' : 
                   exam.status === 'completed' ? 'Completed Exam' : 
                   'Cancelled Exam'}
                </h3>
                <p className={`text-sm ${
                  exam.status === 'upcoming' ? 'text-blue-600' : 
                  exam.status === 'completed' ? 'text-green-600' : 
                  'text-red-600'
                }`}>
                  {exam.status === 'upcoming' ? 
                    'This exam is scheduled for the future.' : 
                    exam.status === 'completed' ? 
                    'You have completed this exam.' : 
                    'This exam has been cancelled.'}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Exam description */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Description</h2>
            <p className="text-gray-700">{exam.description}</p>
          </motion.div>

          {/* Topics covered */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Topics Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {exam.topics.map((topic, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Study materials */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Study Materials</h2>
            <div className="space-y-3">
              {exam.materials.map((material) => (
                <div key={material.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="flex items-center">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <FaFileAlt className="text-indigo-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800">{material.name}</p>
                      <p className="text-sm text-gray-500">{material.type}</p>
                    </div>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800">
                    <FaDownload />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Notes */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Notes</h2>
              <motion.button
                onClick={handleEditNotes}
                className="text-indigo-600 hover:text-indigo-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEdit />
              </motion.button>
            </div>
            <p className="text-gray-700">{exam.notes}</p>
          </motion.div>
        </div>

        {/* Right column - Details and actions */}
        <div className="space-y-6">
          {/* Exam details card */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Exam Details</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCalendarAlt className="text-indigo-600 mt-1 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium text-gray-800">{exam.date}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaClock className="text-indigo-600 mt-1 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium text-gray-800">{exam.time}</p>
                  <p className="text-sm text-gray-600">{exam.duration}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-indigo-600 mt-1 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium text-gray-800">{exam.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaBook className="text-indigo-600 mt-1 mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="font-medium text-gray-800">{exam.instructor}</p>
                </div>
              </div>
            </div>

            <hr className="my-4 border-gray-200" />
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Grade weight</p>
                <p className="font-medium text-gray-800">{exam.weightage}%</p>
              </div>
              
              <div className="flex justify-between">
                <p className="text-gray-600">Passing score</p>
                <p className="font-medium text-gray-800">{exam.passingScore}%</p>
              </div>
            </div>
          </motion.div>

          {/* Prerequisites */}
          <motion.div 
            className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-4">Prerequisites</h2>
            <ul className="space-y-2">
              {exam.prerequisites.map((prereq, index) => (
                <li key={index} className="text-gray-700">
                  • {prereq}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Action buttons */}
          <motion.div 
            className="space-y-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {exam.status === 'upcoming' && (
              <motion.button
                onClick={handleStartPreparing}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg shadow-md flex justify-center items-center font-medium"
                whileHover={{ backgroundColor: "#4F46E5", scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Preparing
              </motion.button>
            )}
            
            <motion.button
              onClick={() => {}}
              className="w-full py-3 bg-white border border-indigo-200 text-indigo-600 rounded-lg shadow-sm flex justify-center items-center font-medium"
              whileHover={{ backgroundColor: "#F9FAFB", scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCalendarAlt className="mr-2" />
              Add to Calendar
            </motion.button>
            
            <motion.button
              onClick={() => {}}
              className="w-full py-3 bg-white border border-gray-200 text-gray-700 rounded-lg shadow-sm flex justify-center items-center font-medium"
              whileHover={{ backgroundColor: "#F9FAFB", scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaShare className="mr-2" />
              Share Exam Details
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExamDetails;