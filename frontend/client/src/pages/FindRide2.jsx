import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

// Accept the 'rides' prop from App.jsx
function FindRide2({ rides }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Use 'rides' (the prop) for filtering instead of the mock data
  const filteredRides = (rides || []).filter(ride => {
    // Check all possible field names (origin/from and destination/to)
    const pickup = (ride.origin || ride.from || "").toLowerCase();
    const drop = (ride.destination || ride.to || "").toLowerCase();
    const search = searchTerm.toLowerCase();
    
    return pickup.includes(search) || drop.includes(search);
  });

  return (
    <div className="page-container" style={{ marginTop: '50px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'var(--primary-color)', fontWeight: 'bold' }}>
        ← Back to Home
      </Link>

      <div className="section" style={{ marginTop: '20px' }}>
        <h2 className="mb-md">Available Hops</h2>
        
        {/* Search Bar */}
        <div style={{ marginBottom: '30px' }}>
          <input 
            type="text" 
            placeholder="Search by destination (e.g. Nikol, Infocity)..." 
            className="btn-outline"
            style={{ width: '100%', padding: '15px', borderRadius: '12px', fontSize: '1rem', border: '1px solid #ddd' }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Rides List */}
        <div className="rides-grid">
          {filteredRides.length > 0 ? (
            filteredRides.map((ride, index) => (
              <div key={ride.id || index} className="ride-card" style={{ background: '#fff', border: '1px solid #eee' }}>
                <div className="ride-card-route">
                  {ride.origin || ride.from} <span className="arrow">→</span> {ride.destination || ride.to}
                </div>
                <div className="ride-card-meta">
                  <span>🕒 {ride.time}</span>
                  {ride.date && <span>📅 {ride.date}</span>}
                  <span>👤 {ride.seats} Seats left</span>
                  <span>🚗 Driver: {ride.driver || "Student"}</span>
                </div>
                <div className="ride-card-footer">
                  <span className="ride-price">₹{ride.price}</span>
                  <button className="btn btn-primary btn-sm" onClick={() => alert(`Request sent to the driver!`)}>
                    Book Seat
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px' }}>
              <p className="text-muted">No rides found matching your search.</p>
              <Link to="/offer-ride" style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Be the first to offer a ride!</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FindRide2;