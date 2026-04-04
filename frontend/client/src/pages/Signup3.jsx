const Signup = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-xl p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        <input className="w-full border p-3 mb-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 mb-3 rounded" placeholder="Email" />
        <input className="w-full border p-3 mb-3 rounded" placeholder="Phone" />
        <input className="w-full border p-3 mb-3 rounded" placeholder="Password" />

        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Signup;