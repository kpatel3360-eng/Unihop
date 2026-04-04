const Dashboard = () => {
  return (
    <div>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="p-6 shadow rounded-xl">
            Your Rides
          </div>

          <div className="p-6 shadow rounded-xl">
            Upcoming Trips
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;