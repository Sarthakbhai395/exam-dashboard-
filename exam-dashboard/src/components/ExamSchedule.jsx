import React, { useState } from 'react';
;

const ExamSchedule = () => {
  const [examForm, setExamForm] = useState({
    title: '',
    course: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    notes: ''
  });
  
  const [showForm, setShowForm] = useState(false);
  
  // Sample data for upcoming exams
  const upcomingExams = [
    {
      id: 1,
      title: 'Midterm Exam',
      course: 'Advanced Mathematics',
      date: '2025-03-15',
      time: '10:00 AM',
      duration: '2 hours',
      location: 'Hall A',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Programming Quiz',
      course: 'Web Development',
      date: '2025-03-18',
      time: '2:00 PM',
      duration: '1 hour',
      location: 'Lab 204',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Final Project Presentation',
      course: 'Software Engineering',
      date: '2025-03-25',
      time: '11:30 AM',
      duration: '30 minutes',
      location: 'Conference Room',
      priority: 'high'
    },
    {
      id: 4,
      title: 'Written Assignment',
      course: 'Literature Studies',
      date: '2025-04-02',
      time: '9:00 AM',
      duration: '3 hours',
      location: 'Hall B',
      priority: 'medium'
    },
    {
      id: 5,
      title: 'Lab Practical',
      course: 'Chemistry',
      date: '2025-04-10',
      time: '1:00 PM',
      duration: '2 hours',
      location: 'Lab 101',
      priority: 'high'
    }
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExamForm({
      ...examForm,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally save the exam to your backend
    setShowForm(false);
    // Reset form
    setExamForm({
      title: '',
      course: '',
      date: '',
      time: '',
      duration: '',
      location: '',
      notes: ''
    });
  };
  
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  const isPastDue = (dateString) => {
    return new Date(dateString) < new Date();
  };
  
  const getDaysUntil = (dateString) => {
    const examDate = new Date(dateString);
    const today = new Date();
    const diffTime = examDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="exam-schedule-container">
      <div className="schedule-header">
        <h1>Exam Schedule</h1>
        <button 
          className="add-exam-button"
          onClick={() => setShowForm(true)}
        >
          + Schedule New Exam
        </button>
      </div>
      
      {showForm && (
        <div className="exam-form-overlay">
          <div className="exam-form-container">
            <h2>Schedule New Exam</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="title">Exam Title</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={examForm.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="course">Course</label>
                  <select
                    id="course"
                    name="course"
                    value={examForm.course}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="Advanced Mathematics">Advanced Mathematics</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Software Engineering">Software Engineering</option>
                    <option value="Literature Studies">Literature Studies</option>
                    <option value="Chemistry">Chemistry</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={examForm.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={examForm.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="duration">Duration</label>
                  <select
                    id="duration"
                    name="duration"
                    value={examForm.duration}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Duration</option>
                    <option value="30 minutes">30 minutes</option>
                    <option value="1 hour">1 hour</option>
                    <option value="1.5 hours">1.5 hours</option>
                    <option value="2 hours">2 hours</option>
                    <option value="3 hours">3 hours</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={examForm.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={examForm.notes}
                  onChange={handleInputChange}
                  rows="3"
                />
              </div>
              
              <div className="form-buttons">
                <button 
                  type="button" 
                  className="cancel-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-button">
                  Schedule Exam
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      <div className="exams-filter">
        <div className="filter-group">
          <label>Sort by:</label>
          <select>
            <option value="date">Date (nearest first)</option>
            <option value="priority">Priority</option>
            <option value="course">Course</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Filter:</label>
          <select>
            <option value="all">All Exams</option>
            <option value="upcoming">Upcoming only</option>
            <option value="this-week">This week</option>
            <option value="this-month">This month</option>
          </select>
        </div>
      </div>
      
      <div className="exams-list">
        {upcomingExams.map(exam => (
          <div 
            key={exam.id} 
            className={`exam-card ${isPastDue(exam.date) ? 'past-due' : ''} priority-${exam.priority}`}
          >
            <div className="exam-date-tag">
              <div className="month">{new Date(exam.date).toLocaleDateString('en-US', { month: 'short' })}</div>
              <div className="day">{new Date(exam.date).getDate()}</div>
            </div>
            
            <div className="exam-details">
              <h3>{exam.title}</h3>
              <p className="exam-course">{exam.course}</p>
              <div className="exam-info">
                <span>
                  <i className="icon">⏰</i> {exam.time}
                </span>
                <span>
                  <i className="icon">⌛</i> {exam.duration}
                </span>
                <span>
                  <i className="icon">📍</i> {exam.location}
                </span>
              </div>
            </div>
            
            <div className="exam-status">
              {isPastDue(exam.date) ? (
                <span className="status past-due">Past Due</span>
              ) : (
                <>
                  <span className="days-left">{getDaysUntil(exam.date)} days left</span>
                  <div className="priority-indicator" title={`Priority: ${exam.priority}`}></div>
                </>
              )}
            </div>
            
            <div className="exam-actions">
              <button className="exam-action-btn">
                <i className="icon">📝</i>
              </button>
              <button className="exam-action-btn">
                <i className="icon">🔔</i>
              </button>
              <button className="exam-action-btn">
                <i className="icon">❌</i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamSchedule;