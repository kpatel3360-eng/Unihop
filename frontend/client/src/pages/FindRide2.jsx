const FindRide = () => {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Available Rides</h1>

      <div className="bg-white shadow p-6 rounded-xl mb-4">
        <h2 className="font-semibold text-lg">Campus → City Center</h2>
        <p className="text-gray-500">Tomorrow • 9:00 AM</p>
        <p className="text-gray-500">3 seats available</p>

        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Join Ride
        </button>
      </div>

      <div className="bg-white shadow p-6 rounded-xl">
        <h2 className="font-semibold text-lg">Hostel → Mall</h2>
        <p className="text-gray-500">Today • 5:30 PM</p>
        <p className="text-gray-500">2 seats available</p>

        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
          Join Ride
        </button>
      </div>
    </div>
  );
};

export default FindRide;