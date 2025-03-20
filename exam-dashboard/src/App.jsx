import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import ExamList from './pages/ExamList';
import ExamDetails from './pages/ExamDetails';
import CourseList from './pages/CourseList';
import PerformanceGraph from './components/dashboard/PerformanceGraph';
import ExamSchedule from './components/ExamSchedule';
import Settings from './pages/Settings';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import './components/StudyPlan.css';
import StudyPlan from './components/StudyPlan.jsx';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exams" element={<ExamList />} />
            <Route path="/exams/:id" element={<ExamDetails />} />
            <Route path="/courses" element={<CourseList />} />
            <Route path="/study-planner" element={<StudyPlan />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/performance" element={<PerformanceGraph />} />
            <Route path="/schedule" element={<ExamSchedule />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </Router>
  );
}

export default App;