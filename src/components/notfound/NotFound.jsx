import React from "react";
import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
            <p className="text-gray-500 mb-6">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link
                to="/"
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
            >
                Go to Home
            </Link>
        </div>
    );
}

export default NotFound;