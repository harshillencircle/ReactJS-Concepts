import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fakeAuth } from '../../auth/auth';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    fakeAuth.login(() => navigate("/product", { replace: true }))
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Login
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
            <input type="email" name="email" placeholder="Enter Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
            <input type="password" name="password" placeholder="Enter Password" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
            >
              Login to Continue
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Login