import React from 'react';
import { FaHome, FaFileAlt, FaBook, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-indigo-800 text-white w-64 py-6 flex-shrink-0 h-screen">
      <nav className="px-4 flex flex-col h-full">
        <div className="space-y-2">
          <Link to="/" className="flex items-center px-4 py-3 bg-indigo-700 rounded-lg group">
            <FaHome className="mr-3" />
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link to="/exams" className="flex items-center px-4 py-3 hover:bg-indigo-700 rounded-lg group">
            <FaFileAlt className="mr-3" />
            <span className="font-medium">Exams</span>
          </Link>
          <Link to="/courses" className="flex items-center px-4 py-3 hover:bg-indigo-700 rounded-lg group">
            <FaBook className="mr-3" />
            <span className="font-medium">Courses</span>
          </Link>
          <Link to="/performance" className="flex items-center px-4 py-3 hover:bg-indigo-700 rounded-lg group">
            <FaChartLine className="mr-3" />
            <span className="font-medium">Performance</span>
          </Link>
          <Link to="/settings" className="flex items-center px-4 py-3 hover:bg-indigo-700 rounded-lg group">
            <FaCog className="mr-3" />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
        
        <div className="mt-auto">
          <button className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg w-full">
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;