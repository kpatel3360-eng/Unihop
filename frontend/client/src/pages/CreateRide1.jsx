import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../App.css';

function CreateRide1({ addRide }) { // Accept addRide prop from App.jsx
  const navigate = useNavigate(); // Initialize the redirect tool
  
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    date: '',
    time: '',
    seats: 1,
    price: '',
    driver: 'Krish Patel' // Default for now
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send data to the central 'rides' state in App.jsx
    if (addRide) {
      addRide(formData);
    }
    
    alert("Ride Posted Successfully!");
    
    // Automatically redirect user to the Find Ride page to see their post
    navigate('/find-ride');
  };

  return (
    <div className="page-container" style={{ marginTop: '50px', maxWidth: '600px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--primary-color)', fontWeight: 'bold' }}>
        ← Back to Home
      </Link>
      
      <div className="section" style={{ marginTop: '20px', padding: '30px', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 className="mb-md">Offer a Ride</h2>
        <p className="text-muted mb-md">Fill in the details to share your journey with other students.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-md">
          <div>
            <label className="text-sm font-bold">Pickup Location</label>
            <input 
              type="text" 
              placeholder="e.g. Campus North Gate" 
              className="btn-outline" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
              onChange={(e) => setFormData({...formData, origin: e.target.value})}
              required 
            />
          </div>

          <div>
            <label className="text-sm font-bold">Destination</label>
            <input 
              type="text" 
              placeholder="e.g. Ahmedabad Central" 
              className="btn-outline" 
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
              onChange={(e) => setFormData({...formData, destination: e.target.value})}
              required 
            />
          </div>

          <div className="flex gap-md">
            <div style={{ flex: 1 }}>
              <label className="text-sm font-bold">Date</label>
              <input 
                type="date" 
                className="btn-outline" 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required 
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="text-sm font-bold">Time</label>
              <input 
                type="time" 
                className="btn-outline" 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
                required 
              />
            </div>
          </div>

          <div className="flex gap-md">
            <div style={{ flex: 1 }}>
              <label className="text-sm font-bold">Available Seats</label>
              <input 
                type="number" 
                min="1" 
                max="6"
                className="btn-outline" 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
                onChange={(e) => setFormData({...formData, seats: e.target.value})}
                required 
              />
            </div>
            <div style={{ flex: 1 }}>
              <label className="text-sm font-bold">Price (₹)</label>
              <input 
                type="number" 
                placeholder="e.g. 50" 
                className="btn-outline" 
                style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '10px' }}>
            Post Ride Offer
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateRide1;