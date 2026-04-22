import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Signup3 = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    university: 'PDEU'
  });

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Basic verification: Email should be a university one
    if (!userData.email.includes('.edu') && !userData.email.includes('.ac.in')) {
      alert("Please use your official university email address.");
      return;
    }

    console.log("User Registered:", userData);
    alert("Account created successfully! Welcome to UniHop.");
    navigate('/login'); // Take them to login page after signing up
  };

  return (
    <div className="page-container" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '90vh',
      padding: '20px'
    }}>
      <div className="section" style={{ 
        width: '100%', 
        maxWidth: '450px', 
        padding: '40px', 
        background: '#fff', 
        borderRadius: '16px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)' 
      }}>
        <div className="navbar-brand" style={{ textAlign: 'center', marginBottom: '10px' }}>
          UniHop<span>.</span>
        </div>
        
        <h2 className="mb-md" style={{ textAlign: 'center' }}>Create Account</h2>
        <p className="text-muted text-sm mb-md" style={{ textAlign: 'center' }}>
          Join the student community and start carpooling.
        </p>

        <form onSubmit={handleSignup} className="flex flex-col gap-md">
          <div className="flex gap-md">
            <div style={{ flex: 1 }}>
              <label className="text-sm font-bold">Full Name</label>
              <input
                type="text"
                placeholder="Krish Patel"
                className="btn-outline"
                style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
                onChange={(e) => setUserData({...userData, name: e.target.value})}
                required
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold">University Email</label>
            <input
              type="email"
              placeholder="krish.p@pdeu.ac.in"
              className="btn-outline"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
              onChange={(e) => setUserData({...userData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 00000 00000"
              className="btn-outline"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
              onChange={(e) => setUserData({...userData, phone: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold">Password</label>
            <input
              type="password"
              placeholder="Create a strong password"
              className="btn-outline"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
              onChange={(e) => setUserData({...userData, password: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '10px' }}>
            Create Account
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center' }} className="text-sm">
          <span className="text-muted">Already have an account? </span>
          <Link to="/login" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup3;