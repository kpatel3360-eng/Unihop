const CreateRide = () => {
  return (
    <div className="max-w-xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Offer Ride</h1>

      <input className="border p-3 w-full mb-3 rounded" placeholder="From" />
      <input className="border p-3 w-full mb-3 rounded" placeholder="To" />
      <input type="date" className="border p-3 w-full mb-3 rounded" />
      <input type="number" className="border p-3 w-full mb-3 rounded" placeholder="Seats" />

      <button className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full">
        Create Ride
      </button>
    </div>
  );
};

export default CreateRide;