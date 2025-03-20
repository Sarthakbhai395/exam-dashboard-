import React, { useState } from 'react';
import './CourseList.css';

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  
  // Sample course data
  const courses = [
    {
      id: 1,
      code: 'MATH301',
      name: 'Advanced Mathematics',
      instructor: 'Dr. Sarah Johnson',
      credits: 4,
      schedule: 'Mon, Wed 10:00-11:30 AM',
      status: 'active',
      progress: 75,
      grade: 'B+',
      description: 'Advanced topics in calculus, linear algebra, and differential equations with applications in science and engineering.'
    },
    {
      id: 2,
      code: 'CS405',
      name: 'Web Development',
      instructor: 'Prof. Michael Chen',
      credits: 3,
      schedule: 'Tue, Thu 2:00-3:30 PM',
      status: 'active',
      progress: 85,
      grade: 'A',
      description: 'Design and implementation of dynamic web applications using modern frameworks and technologies.'
    },
    {
      id: 3,
      code: 'CS450',
      name: 'Software Engineering',
      instructor: 'Dr. James Wilson',
      credits: 4,
      schedule: 'Mon, Wed, Fri 1:00-2:00 PM',
      status: 'active',
      progress: 65,
      grade: 'B',
      description: 'Principles and practices of software development including requirements analysis, design, testing, and project management.'
    },
    {
      id: 4,
      code: 'ENG220',
      name: 'Literature Studies',
      instructor: 'Prof. Emily Rodriguez',
      credits: 3,
      schedule: 'Tue, Thu 11:00-12:30 PM',
      status: 'active',
      progress: 90,
      grade: 'A-',
      description: 'Analysis of classical and contemporary literature with focus on critical reading and interpretation techniques.'
    },
    {
      id: 5,
      code: 'CHEM240',
      name: 'Chemistry',
      instructor: 'Dr. Robert Brown',
      credits: 4,
      schedule: 'Mon, Wed 3:00-4:30 PM, Fri 3:00-5:00 PM (Lab)',
      status: 'active',
      progress: 70,
      grade: 'B',
      description: 'Principles of organic chemistry including structure, properties, reactions, and synthesis of organic compounds.'
    },
    {
      id: 6,
      code: 'PHYS301',
      name: 'Classical Mechanics',
      instructor: 'Dr. Lisa Wong',
      credits: 4,
      schedule: 'Mon, Wed, Fri 9:00-10:00 AM',
      status: 'completed',
      progress: 100,
      grade: 'A',
      description: 'Newtonian mechanics, conservation laws, oscillations, central forces, and rigid body dynamics.'
    },
    {
      id: 7,
      code: 'CS330',
      name: 'Database Systems',
      instructor: 'Prof. David Miller',
      credits: 3,
      schedule: 'Tue, Thu 9:30-11:00 AM',
      status: 'completed',
      progress: 100,
      grade: 'A-',
      description: 'Design and implementation of database systems including data modeling, normalization, and query languages.'
    }
  ];
  
  // Filter courses based on search term and status filter
  const filteredCourses = courses.filter(course => {
    const matchesSearch = 
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesStatus = filterStatus === 'all' || course.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  const getStatusColor = (status) => {
    switch(status) {
      case 'active':
        return 'green';
      case 'completed':
        return 'blue';
      case 'upcoming':
        return 'orange';
      default:
        return 'gray';
    }
  };
  
  const getGradeColor = (grade) => {
    if (grade.startsWith('A')) return 'text-green-600';
    if (grade.startsWith('B')) return 'text-blue-600';
    if (grade.startsWith('C')) return 'text-yellow-600';
    if (grade.startsWith('D')) return 'text-orange-600';
    if (grade.startsWith('F')) return 'text-red-600';
    return '';
  };

  return (
    <div className="course-list-container">
      <div className="course-header">
        <h1>My Courses</h1>
        <div className="course-actions">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-button">🔍</button>
          </div>
          
          <div className="filter-dropdown">
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Courses</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="upcoming">Upcoming</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="courses-grid">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <div className="course-header-info">
              <span className={`course-status status-${course.status}`}>
                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </span>
              <span className="course-code">{course.code}</span>
            </div>
            
            <h3 className="course-name">{course.name}</h3>
            <p className="course-instructor">{course.instructor}</p>
            
            <div className="course-details">
              <div className="detail-item">
                <span className="detail-label">Schedule:</span>
                <span className="detail-value">{course.schedule}</span>
              </div>
              
              <div className="detail-item">
                <span className="detail-label">Credits:</span>
                <span className="detail-value">{course.credits}</span>
              </div>
              
              {course.status === 'active' && (
                <div className="course-progress">
                  <div className="progress-label">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
              
              {(course.status === 'active' || course.status === 'completed') && (
                <div className="detail-item">
                  <span className="detail-label">Current Grade:</span>
                  <span className={`detail-value grade ${getGradeColor(course.grade)}`}>
                    {course.grade}
                  </span>
                </div>
              )}
            </div>
            
            <p className="course-description">{course.description}</p>
            
            <div className="course-actions">
              <button className="course-btn view-details">View Details</button>
              {course.status === 'active' && (
                <button className="course-btn view-assignments">Assignments</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;