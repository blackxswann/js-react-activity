import React, { useState, useEffect } from 'react';

  // PART B - REACT COMPONENT 1: WelcomeCard
const WelcomeCard = ({ title, message, userName }) => {
  return (
    <div className="welcome-card">
      <h1>{title}</h1>
    </div>
  );
};

  // PART B - REACT COMPONENT 2: Counter
const Counter = ({ value, onChange, label }) => {
  // PART A - JavaScript Fundamentals: Functions
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <div className="counter-container">
      <label className="form-label">{label}:</label>
      {/* PART A - Event Handling Basics */}
      <button 
        onClick={decrement}
        className="counter-button decrement"
      >
        -
      </button>
      <span className="counter-display">
        {value}
      </span>
      <button 
        onClick={increment}
        className="counter-button increment"
      >
        +
      </button>
    </div>
  );
};

// PART B - REACT COMPONENT 3: StudentInfo
const StudentInfo = () => {
// PART A - JavaScript Fundamentals: Variables and Objects
  const [formData, setFormData] = useState({
    name: '',
    age: 18,
    course: '',
    hobbies: ['', '', '']
  });
  
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});

  // PART A - JavaScript Fundamentals: Functions and Array Methods
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.course.trim()) {
      newErrors.course = 'Course is required';
    }
    
    const validHobbies = formData.hobbies.filter(hobby => hobby.trim() !== '');
    if (validHobbies.length === 0) {
      newErrors.hobbies = 'At least one hobby is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // PART A - Event Handling Basics
  const handleNameChange = (e) => {
    setFormData(prev => ({
      ...prev,
      name: e.target.value
    }));
  };

  const handleCourseChange = (e) => {
    setFormData(prev => ({
      ...prev,
      course: e.target.value
    }));
  };

  const handleAgeChange = (newAge) => {
    setFormData(prev => ({
      ...prev,
      age: newAge
    }));
  };

// PART A - JavaScript Fundamentals: Arrays 
  const handleHobbyChange = (index, value) => {
    const newHobbies = [...formData.hobbies];
    newHobbies[index] = value;
    setFormData(prev => ({
      ...prev,
      hobbies: newHobbies
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const cleanedData = {
        ...formData,
        hobbies: formData.hobbies.filter(hobby => hobby.trim() !== '')
      };
      setSubmittedData(cleanedData);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      age: 18,
      course: '',
      hobbies: ['', '', '']
    });
    setSubmittedData(null);
    setErrors({});
  };

  return (
    <div className="main-container">
      {/* Form Section */}
      <div className="form-section">
        <h2 className="section-title">Student Information Form</h2>
        
        {/* Name Input */}
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            value={formData.name}
            onChange={handleNameChange}
            className={`form-input ${errors.name ? 'error' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="error-message">{errors.name}</p>
          )}
        </div>

        {/* Age Counter */}
        <div className="form-group">
          <Counter 
            value={formData.age} 
            onChange={handleAgeChange} 
            label="Age"
          />
        </div>

        {/* Course Input */}
        <div className="form-group">
          <label className="form-label">Course:</label>
          <input
            type="text"
            value={formData.course}
            onChange={handleCourseChange}
            className={`form-input ${errors.course ? 'error' : ''}`}
            placeholder="Enter your course"
          />
          {errors.course && (
            <p className="error-message">{errors.course}</p>
          )}
        </div>

        {/* Hobbies */}
        <div className="form-group">
          <label className="form-label">Hobbies (Enter up to 3):</label>
          {formData.hobbies.map((hobby, index) => (
            <input
              key={index}
              type="text"
              value={hobby}
              onChange={(e) => handleHobbyChange(index, e.target.value)}
              className="form-input"
              placeholder={`Hobby ${index + 1}`}
              style={{ marginBottom: '0.5rem' }}
            />
          ))}
          {errors.hobbies && (
            <p className="error-message">{errors.hobbies}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="submit-button"
        >
          Submit Information
        </button>
      </div>

      {/* Display Section */}
      <div className="display-section">
        <h2 className="section-title">Student Information Display</h2>
        
        {submittedData ? (
          <div className="display-content">
            <div className="info-card">
              <h3 className="info-title">Personal Details:</h3>
              <p className="info-text">
                <span className="info-label">Name:</span> {submittedData.name}
              </p>
              <p className="info-text">
                <span className="info-label">Age:</span> {submittedData.age} years old
              </p>
              <p className="info-text">
                <span className="info-label">Course:</span> {submittedData.course}
              </p>
            </div>
            
            <div className="info-card">
              <h3 className="info-title">Hobbies:</h3>
              <ul className="hobbies-list">
                {submittedData.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
            
            <button
              onClick={resetForm}
              className="reset-button"
            >
              Reset Form
            </button>
          </div>
        ) : (
          <div className="empty-state">
            <p>No information submitted yet.</p>
            <p><small>Fill out the form and click submit to see your information here.</small></p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentUser, setCurrentUser] = useState('');
  
  useEffect(() => {
    setCurrentUser('Student');
  }, []);

  return (
    <div>
      {/* Welcome Card Component */}
      <WelcomeCard 
        title="Welcome, user!" 
        message=""
        userName=""
      />
      
      {/* Student Info Component (includes Counter component) */}
      <StudentInfo />
    </div>
  );
}