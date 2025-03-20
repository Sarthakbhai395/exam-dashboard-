import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBell, FaSearch, FaHome, FaFileAlt, FaBook, FaChartLine, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search filtering logic here
    console.log("Searching for:", searchQuery);
  };

  const handleLogout = () => {
    // Implement logout logic
    console.log("Logging out...");
    // For demo purposes, redirect to dashboard
    navigate('/dashboard');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { icon: <FaHome className="text-xl" />, text: 'Dashboard', path: '/dashboard' },
    { icon: <FaFileAlt className="text-xl" />, text: 'Exams', path: '/exams' },
    { icon: <FaBook className="text-xl" />, text: 'Courses', path: '/courses' },
    { icon: <FaChartLine className="text-xl" />, text: 'Performance', path: '/performance' },
    { icon: <FaCog className="text-xl" />, text: 'Settings', path: '/settings' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-indigo-700 text-white">
        <div className="p-4 flex items-center">
          <h1 className="text-2xl font-bold">
            Exam<span className="text-indigo-300">Master</span>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <motion.button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                    isActive(item.path) 
                      ? 'bg-indigo-800 text-white' 
                      : 'text-indigo-100 hover:bg-indigo-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.text}</span>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute left-0 w-1 h-8 bg-white rounded-r-md"
                      layoutId="activeIndicator"
                    />
                  )}
                </motion.button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="px-4 mt-auto absolute bottom-4 w-64 pr-8">
          <motion.button
            onClick={handleLogout}
            className="w-full flex items-center p-3 rounded-lg bg-red-600 hover:bg-red-700 text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSignOutAlt className="mr-3" />
            <span>Logout</span>
          </motion.button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <div className="flex-1 max-w-md">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="flex items-center">
              <motion.button
                className="relative mr-4 p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaBell className="text-gray-600 text-xl" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </motion.button>
              <div className="flex items-center">
                <img
                  src="/api/placeholder/40/40"
                  alt="User avatar"
                  className="h-8 w-8 rounded-full border-2 border-indigo-500"
                />
                <div className="ml-2">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;