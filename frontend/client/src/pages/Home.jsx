import { Link } from 'react-router-dom';
import logo from '../assets/unihop-logo-light.svg';
import '../App.css';

function Home() {
  return (
    <div id="root">
      {/* --- Navigation Bar --- */}
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="navbar-brand" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <img src={logo} alt="UniHop Logo" style={{ height: '32px', width: 'auto' }} />
            <span>UniHop.</span>
          </Link>

          <div className="navbar-links">
            <Link to="/find-ride">Find Ride</Link>
            <Link to="/offer-ride">Offer Ride</Link>
            <a href="#about">About</a>
          </div>
          
          <div className="navbar-actions">
            <Link to="/login"><button className="btn btn-ghost btn-sm">Sign In</button></Link>
            <Link to="/signup"><button className="btn btn-primary btn-sm">Join Now</button></Link>
          </div>
        </div>
      </nav>

      {/* --- Hero Section: Fixed for Visibility --- */}
      <header className="hero" style={{ 
        textAlign: 'center', 
        padding: '120px 20px', 
        background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
        color: '#ffffff' 
      }}>
        <div className="page-container">
          <div className="badge mb-md" style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
            ✨ Exclusive for University Students
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '20px', color: '#ffffff' }}>
            Your Campus. Your Ride. <br />
            Your Community.
          </h1>
          
          <p className="hero-subtitle" style={{ 
            maxWidth: '700px', 
            margin: '0 auto 40px', 
            fontSize: '1.25rem', 
            color: '#ffffff', 
            opacity: '0.95', // High opacity for perfect readability
            lineHeight: '1.6' 
          }}>
            The smartest way to commute. Connect with verified students, 
            split gas costs, and turn every trip into a shared experience.
          </p>
          
          <div className="hero-actions" style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <Link to="/find-ride">
              <button className="btn btn-primary btn-lg" style={{ background: '#fff', color: '#1d4ed8' }}>Find a Ride</button>
            </Link>
            <Link to="/offer-ride">
              <button className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: '#fff' }}>Offer a Ride</button>
            </Link>
          </div>
        </div>
      </header>

      {/* --- Main Content: Popular Routes --- */}
      <main className="page-content" style={{ padding: '80px 0' }}>
        <div className="page-container">
          <div className="section">
            <h2 className="mb-md" style={{ textAlign: 'center', fontSize: '2rem' }}>Popular Routes Today</h2>
            <div className="rides-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div className="ride-card" style={{ padding: '25px', border: '1px solid #e2e8f0', borderRadius: '16px' }}>
                <div className="ride-card-route" style={{ fontWeight: '700', fontSize: '1.2rem', marginBottom: '15px' }}>
                  Campus North <span className="arrow" style={{ color: '#3b82f6' }}>→</span> West Housing
                </div>
                <div className="ride-card-meta" style={{ display: 'flex', gap: '15px', color: '#64748b', marginBottom: '20px' }}>
                  <span>🕒 10:30 AM</span>
                  <span>👤 2 Seats left</span>
                </div>
                <div className="ride-card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="ride-price" style={{ fontSize: '1.5rem', fontWeight: '800', color: '#1e293b' }}>₹70</span>
                  <Link to="/find-ride"><button className="btn btn-primary btn-sm">Join Hop</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* --- About Section: Image Replaced with Typographic Slogan --- */}
      <section id="about" className="section" style={{ padding: '100px 0', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="page-container" style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
          
          {/* LEFT SIDE: Large Beautiful Slogan */}
          <div style={{ flex: '1', minWidth: '320px', textAlign: 'left' }}>
            <h2 style={{ 
                fontSize: '5rem', 
                fontWeight: '900', 
                lineHeight: '1', 
                letterSpacing: '-3px',
                background: 'linear-gradient(135deg, #1d4ed8, #3b82f6)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent',
                marginBottom: '10px'
            }}>
              MOVE <br /> TOGETHER. <br /> SAVE <br /> SMARTER.
            </h2>
            <div style={{ width: '60px', hieght: '6px', background: '#3b82f6', borderRadius: '10px', marginTop: '20px' }}></div>
          </div>

          {/* RIGHT SIDE: Mission Content */}
          <div style={{ flex: '1.2', minWidth: '350px' }}>
            <div className="badge badge-primary mb-sm">Our Mission</div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '700' }}>
              Built for Students, <br />By <span>Students.</span>
            </h3>
            <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '30px' }}>
              UniHop is a community-driven carpooling platform designed specifically for the 
              university lifestyle. We help you find safe, reliable rides while reducing 
              traffic and saving your student budget.
            </p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.3rem' }}>✓</span>
                Verified university email required.
              </li>
              <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.3rem' }}>✓</span>
                Directly connect with peer drivers.
              </li>
              <li style={{ marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                <span style={{ color: '#3b82f6', fontWeight: 'bold', fontSize: '1.3rem' }}>✓</span>
                Sustainable travel for a greener campus.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer" style={{ padding: '80px 0', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="page-container" style={{ textAlign: 'center' }}>
          <div className="navbar-brand" style={{ marginBottom: '20px', justifyContent: 'center', fontSize: '2rem' }}>
             UniHop<span>.</span>
          </div>
          <p className="text-muted" style={{ marginBottom: '20px' }}>&copy; 2026 UniHop. Helping students move together.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem' }}>Privacy</a>
            <a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem' }}>Terms</a>
            <a href="mailto:support@unihop.com" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem' }}>Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;