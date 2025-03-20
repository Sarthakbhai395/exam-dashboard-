import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, AreaChart, Area } from 'recharts';
import './PerformanceGraph.css';

const PerformanceGraph = ({ data, preview = false }) => {
  // Additional sample data for comprehensive performance view
  const subjectPerformance = [
    { subject: 'Math', score: 85 },
    { subject: 'Science', score: 92 },
    { subject: 'History', score: 78 },
    { subject: 'English', score: 88 },
    { subject: 'Programming', score: 94 },
  ];
  
  const examTypePerformance = [
    { name: 'Quiz', score: 82 },
    { name: 'Midterm', score: 86 },
    { name: 'Final', score: 91 },
    { name: 'Project', score: 88 },
  ];

  if (preview) {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[60, 100]} />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#5e72e4" strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    );
  }

  return (
    <div className="performance-container">
      <h1>Performance Analytics</h1>
      <p>Track your exam performance over time and across different subjects</p>
      
      <div className="graph-section">
        <div className="graph-card">
          <h2>Score Progression</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[60, 100]} />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="score" 
                name="Average Score" 
                stroke="#5e72e4" 
                strokeWidth={2} 
                activeDot={{ r: 8 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="graph-card">
          <h2>Subject Performance</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" name="Score" fill="#11cdef" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="graph-card">
          <h2>Exam Type Analysis</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={examTypePerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="score" 
                name="Average Score" 
                fill="#fb6340" 
                stroke="#fb6340" 
                fillOpacity={0.6} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="performance-summary">
        <div className="summary-card">
          <h3>Average Score</h3>
          <p className="summary-value">87.6%</p>
          <p className="summary-change positive">+4.2% from last semester</p>
        </div>
        
        <div className="summary-card">
          <h3>Highest Subject</h3>
          <p className="summary-value">Programming</p>
          <p className="summary-score">94%</p>
        </div>
        
        <div className="summary-card">
          <h3>Improvement Area</h3>
          <p className="summary-value">History</p>
          <p className="summary-score">78%</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceGraph;