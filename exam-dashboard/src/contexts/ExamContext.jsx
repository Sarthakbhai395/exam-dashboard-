import React, { createContext, useState, useContext } from 'react';
import { mockExams, mockStats, mockActivities } from '../data/mockData';

const ExamContext = createContext();

export const useExamContext = () => useContext(ExamContext);

export const ExamProvider = ({ children }) => {
  const [exams, setExams] = useState(mockExams);
  const [stats, setStats] = useState(mockStats);
  const [activities, setActivities] = useState(mockActivities);

  const value = {
    exams,
    stats,
    activities,
    // Add methods for managing exams here
    getExamById: (id) => exams.find(exam => exam.id === id),
  };

  return (
    <ExamContext.Provider value={value}>
      {children}
    </ExamContext.Provider>
  );
};