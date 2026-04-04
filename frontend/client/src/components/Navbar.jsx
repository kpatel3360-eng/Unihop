import { Link } from "react-router-dom";
import { FaCar } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaCar /> UniHop
        </h1>

        <div className="space-x-6 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/find" className="hover:text-blue-600">Find Ride</Link>
          <Link to="/create" className="hover:text-blue-600">Offer Ride</Link>
          <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;