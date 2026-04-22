import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // For now, we simulate a login check
    if (email.includes('.edu') || email.includes('pdeu.ac.in')) {
      alert("Login Successful!");
      navigate('/'); // Redirect to Home after login
    } else {
      alert("Please use a valid University Email.");
    }
  };

  return (
    <div className="page-container" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh' 
    }}>
      <div className="section" style={{ 
        width: '100%', 
        maxWidth: '400px', 
        padding: '40px', 
        background: '#fff', 
        borderRadius: '16px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.05)' 
      }}>
        <div className="navbar-brand" style={{ textAlign: 'center', marginBottom: '20px' }}>
          UniHop<span>.</span>
        </div>
        
        <h2 className="mb-md" style={{ textAlign: 'center' }}>Welcome Back</h2>
        <p className="text-muted text-sm mb-md" style={{ textAlign: 'center' }}>
          Log in to your student account
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-md">
          <div>
            <label className="text-sm font-bold">University Email</label>
            <input
              type="email"
              placeholder="name@university.edu"
              className="btn-outline"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-bold">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="btn-outline"
              style={{ width: '100%', padding: '12px', borderRadius: '8px', marginTop: '5px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '10px' }}>
            Sign In
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center' }} className="text-sm">
          <span className="text-muted">Don't have an account? </span>
          <Link to="/signup" style={{ color: 'var(--primary-color)', fontWeight: 'bold', textDecoration: 'none' }}>
            Join Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;