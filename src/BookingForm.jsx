// BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS file

const BookingForm = ({ movieName, onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    // Initial form data if needed
    name: '',
    email: '',
    // ... add more fields as needed
  });
  const [bookingFormVisible, setBookingFormVisible] = useState(true); // Set it to true initially

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setBookingFormVisible(false); 
  };

 

  return (
    <div className={`booking-form-container${bookingFormVisible ? ' visible' : ''}`}>
      <h2>Booking Form</h2>
      <div className="close-icon" onClick={onClose}>
        close
      </div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Movie Name:</label>
        <input
          type="text"
          id="Movie"
          name={movieName}
          value={movieName}
         disabled
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

    <div className='button'> 
     <button type="submit">Book</button>
     </div>

    
      </form>
    </div>
  );
};

export default BookingForm;
