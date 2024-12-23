import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../pages/booknow.css';

const BookNowForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [price, setPrice] = useState(0);
  const [roomPrice, setRoomPrice] = useState(100);

 
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  

  useEffect(() => {
    if (startDate && endDate) {
      const days = (new Date(endDate) - new Date(startDate)) / (1000 * 3600 * 24);
      const totalPrice = days * roomPrice * (adults + children * 0.5);
      setPrice(totalPrice);
    }
  }, [startDate, endDate, adults, children, roomPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Details:
      Total Price: $${price}
      Name: ${name}
      Country: ${country}
      Mobile No: ${mobileNo}
      Email: ${email}
      Start Date: ${startDate}
      End Date: ${endDate}
      Guests: ${adults} Adults, ${children} Children`);
  };

  return (
    <div id="book">
      <div className="book-now-form">
        <h1>Book Your Stay</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />

          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            type="tel"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            pattern="^\+?[0-9]{1,4}?[-.●]?[0-9]{1,15}$"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="startDate">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select start date"
            dateFormat="MMMM d, yyyy"
          />

          <label htmlFor="endDate">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select end date"
            dateFormat="MMMM d, yyyy"
            minDate={startDate}
          />

          <label htmlFor="adults">Adults:</label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
          />

          <label htmlFor="children">Children:</label>
          <input
            type="number"
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            min="0"
          />

          <div className="price">
            <span>Total Price: ${price.toFixed(2)}</span>
          </div>

          <button type="submit">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookNowForm;
