import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDate: '',
    returnDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  console.log('Booking data:', formData);
  
    setFormData({
      name: '',
      email: '',
      destination: '',
      travelDate: '',
      returnDate: '',
    });

    alert('Booking Successful!');
  };

  return (
    <div className="booking-form-container">
      <h2>Book Your Trip</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="travelDate">Travel Date:</label>
          <input
            type="date"
            id="travelDate"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="returnDate">Return Date:</label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
