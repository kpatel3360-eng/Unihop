const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="shadow-xl p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6">Login</h2>

        <input
          type="email"
          placeholder="University Email"
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 mb-4 rounded"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;