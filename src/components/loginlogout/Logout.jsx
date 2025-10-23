import React from 'react'
import { useNavigate } from 'react-router-dom'
import { fakeAuth } from '../../auth/auth';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        fakeAuth.logout(() => navigate('/', { replace: true }));
    }
    return (
        <div className="flex items-center justify-center">
            <button
                type="button"
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-6 py-2 rounded-md shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                Logout
            </button>
        </div>

    )
}

export default Logout