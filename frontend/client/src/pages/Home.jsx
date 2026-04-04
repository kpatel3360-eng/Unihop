import { Link } from "react-router-dom";
import { FaCar, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">
          Student Carpool <span className="text-blue-600">Made Easy</span> 🚗
        </h1>

        <p className="mt-4 text-gray-500">
          Share rides with students going your way
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link to="/find">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Find Ride
            </button>
          </Link>

          <Link to="/create">
            <button className="border px-6 py-3 rounded-xl">
              Offer Ride
            </button>
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow">
          <FaMapMarkerAlt className="text-blue-600 text-2xl mb-2"/>
          <h3 className="font-semibold">Find Nearby Rides</h3>
          <p className="text-gray-500">Discover rides from students</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <FaCar className="text-blue-600 text-2xl mb-2"/>
          <h3 className="font-semibold">Offer a Ride</h3>
          <p className="text-gray-500">Share your empty seats</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <FaUsers className="text-blue-600 text-2xl mb-2"/>
          <h3 className="font-semibold">Travel Together</h3>
          <p className="text-gray-500">Eco friendly travel</p>
        </div>

      </div>

    </div>
  );
};

export default Home;