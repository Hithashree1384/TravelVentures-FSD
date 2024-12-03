// src/App.js
import React from 'react';
import './App.css';
import BookingForm from './bookingForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Booking Form</title>
        <h1>Welcome to Our Tourism Booking</h1>
      </header>

      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
