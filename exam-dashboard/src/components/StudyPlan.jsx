import React, { useState, useEffect } from 'react';
import './StudyPlan.css';

const StudyPlan = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Organic Chemistry", priority: "high", completed: false },
    { id: 2, name: "Microeconomics", priority: "medium", completed: false },
    { id: 3, name: "American Literature", priority: "low", completed: false },
  ]);
  
  const [studyBlocks, setStudyBlocks] = useState([
    { id: 1, courseId: 1, day: "Monday", startTime: "09:00", duration: 60, topic: "Alkanes and Alkenes" },
    { id: 2, courseId: 2, day: "Tuesday", startTime: "14:00", duration: 45, topic: "Supply and Demand" },
    { id: 3, courseId: 3, day: "Wednesday", startTime: "16:00", duration: 90, topic: "Modernist Writers" },
  ]);
  
  const [newBlock, setNewBlock] = useState({
    courseId: "",
    day: "Monday",
    startTime: "09:00",
    duration: 60,
    topic: ""
  });
  
  const [isAddingBlock, setIsAddingBlock] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [weeklyGoal, setWeeklyGoal] = useState(10);
  const [studyTime, setStudyTime] = useState(0);
  
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  // Calculate total study time
  useEffect(() => {
    const total = studyBlocks.reduce((acc, block) => acc + block.duration, 0);
    setStudyTime(total);
  }, [studyBlocks]);
  
  // Handle adding new study block
  const handleAddBlock = (e) => {
    e.preventDefault();
    
    if (!newBlock.courseId || !newBlock.topic) {
      alert("Please select a course and enter a topic.");
      return;
    }
    
    const newId = studyBlocks.length > 0 ? Math.max(...studyBlocks.map(block => block.id)) + 1 : 1;
    
    setStudyBlocks([
      ...studyBlocks,
      {
        ...newBlock,
        id: newId,
        courseId: parseInt(newBlock.courseId),
        duration: parseInt(newBlock.duration)
      }
    ]);
    
    setNewBlock({
      courseId: "",
      day: "Monday",
      startTime: "09:00",
      duration: 60,
      topic: ""
    });
    
    setIsAddingBlock(false);
  };
  
  // Handle removing a study block
  const handleRemoveBlock = (id) => {
    setStudyBlocks(studyBlocks.filter(block => block.id !== id));
  };
  
  // Handle toggling course completion
  const toggleCourseCompleted = (id) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, completed: !course.completed } : course
    ));
  };
  
  // Get course name by ID
  const getCourseName = (id) => {
    const course = courses.find(course => course.id === id);
    return course ? course.name : "Unknown Course";
  };
  
  // Get priority class
  const getPriorityClass = (priority) => {
    switch(priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };
  
  return (
    <div className="study-plan">
      <div className="study-plan-header">
        <h1>Study Plan</h1>
        <div className="progress-container">
          <div className="progress-label">
            <span>Weekly Progress</span>
            <span>{studyTime} mins / {weeklyGoal * 60} mins</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(studyTime / (weeklyGoal * 60) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      <div className="study-plan-tabs">
        <button 
          className={activeTab === 'schedule' ? 'active' : ''} 
          onClick={() => setActiveTab('schedule')}
        >
          Schedule
        </button>
        <button 
          className={activeTab === 'courses' ? 'active' : ''} 
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </button>
        <button 
          className={activeTab === 'goals' ? 'active' : ''} 
          onClick={() => setActiveTab('goals')}
        >
          Goals
        </button>
      </div>
      
      <div className="study-plan-content">
        {activeTab === 'schedule' && (
          <div className="schedule-tab">
            <div className="schedule-header">
              <h2>Your Study Schedule</h2>
              <button 
                className="add-block-btn" 
                onClick={() => setIsAddingBlock(true)}
              >
                Add Study Session
              </button>
            </div>
            
            {isAddingBlock && (
              <div className="add-block-form-container">
                <form className="add-block-form" onSubmit={handleAddBlock}>
                  <h3>Add New Study Session</h3>
                  
                  <div className="form-group">
                    <label>Course</label>
                    <select 
                      value={newBlock.courseId} 
                      onChange={(e) => setNewBlock({...newBlock, courseId: e.target.value})}
                      required
                    >
                      <option value="">Select a course</option>
                      {courses.map(course => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label>Day</label>
                    <select 
                      value={newBlock.day} 
                      onChange={(e) => setNewBlock({...newBlock, day: e.target.value})}
                    >
                      {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label>Start Time</label>
                      <input 
                        type="time" 
                        value={newBlock.startTime} 
                        onChange={(e) => setNewBlock({...newBlock, startTime: e.target.value})}
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Duration (mins)</label>
                      <input 
                        type="number" 
                        min="15" 
                        step="15" 
                        value={newBlock.duration} 
                        onChange={(e) => setNewBlock({...newBlock, duration: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Topic</label>
                    <input 
                      type="text" 
                      placeholder="What will you study?" 
                      value={newBlock.topic} 
                      onChange={(e) => setNewBlock({...newBlock, topic: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" onClick={() => setIsAddingBlock(false)}>Cancel</button>
                    <button type="submit" className="primary">Save</button>
                  </div>
                </form>
              </div>
            )}
            
            <div className="schedule-blocks">
              {days.map(day => (
                <div key={day} className="day-schedule">
                  <h3 className="day-heading">{day}</h3>
                  <div className="day-blocks">
                    {studyBlocks.filter(block => block.day === day).length > 0 ? (
                      studyBlocks
                        .filter(block => block.day === day)
                        .sort((a, b) => a.startTime.localeCompare(b.startTime))
                        .map(block => (
                          <div key={block.id} className="study-block">
                            <div className="time-badge">
                              {block.startTime}
                              <span className="duration">({block.duration} mins)</span>
                            </div>
                            <div className="block-content">
                              <h4>{getCourseName(block.courseId)}</h4>
                              <p>{block.topic}</p>
                            </div>
                            <button 
                              className="remove-block" 
                              onClick={() => handleRemoveBlock(block.id)}
                              aria-label="Remove study block"
                            >
                              ✕
                            </button>
                          </div>
                        ))
                    ) : (
                      <div className="empty-day">No study sessions scheduled</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'courses' && (
          <div className="courses-tab">
            <h2>Your Courses</h2>
            <div className="course-list">
              {courses.map(course => (
                <div key={course.id} className={`course-item ${course.completed ? 'completed' : ''}`}>
                  <div className="course-info">
                    <span className={`priority-indicator ${getPriorityClass(course.priority)}`}></span>
                    <h3>{course.name}</h3>
                  </div>
                  <label className="checkbox-container">
                    <input 
                      type="checkbox" 
                      checked={course.completed} 
                      onChange={() => toggleCourseCompleted(course.id)}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'goals' && (
          <div className="goals-tab">
            <h2>Your Study Goals</h2>
            
            <div className="goal-setting">
              <div className="goal-item">
                <h3>Weekly Study Hours</h3>
                <div className="goal-input">
                  <input 
                    type="range" 
                    min="1" 
                    max="20" 
                    value={weeklyGoal} 
                    onChange={(e) => setWeeklyGoal(parseInt(e.target.value))}
                  />
                  <span className="goal-value">{weeklyGoal} hours</span>
                </div>
                <p className="goal-description">
                  You're planning to study for {weeklyGoal} hours per week, which is about {Math.round(weeklyGoal / 7 * 10) / 10} hours per day.
                </p>
              </div>
              
              <div className="stats-container">
                <div className="stat-box">
                  <h4>Total Planned</h4>
                  <div className="stat-value">{Math.round(studyTime / 60 * 10) / 10} hrs</div>
                </div>
                <div className="stat-box">
                  <h4>Remaining</h4>
                  <div className="stat-value">{Math.max(0, Math.round((weeklyGoal * 60 - studyTime) / 60 * 10) / 10)} hrs</div>
                </div>
                <div className="stat-box">
                  <h4>Progress</h4>
                  <div className="stat-value">{Math.min(100, Math.round(studyTime / (weeklyGoal * 60) * 100))}%</div>
                </div>
              </div>
            </div>
            
            <div className="study-tips">
              <h3>Study Tips</h3>
              <ul>
                <li>
                  <strong>Active recall</strong> - Test yourself frequently to strengthen memory retention
                </li>
                <li>
                  <strong>Spaced repetition</strong> - Review material at increasing intervals
                </li>
                <li>
                  <strong>Pomodoro technique</strong> - Study in focused 25-minute sessions with short breaks
                </li>
                <li>
                  <strong>Interleaving</strong> - Mix different subjects or topics in one study session
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyPlan;