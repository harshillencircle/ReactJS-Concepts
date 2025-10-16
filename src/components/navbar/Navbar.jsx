import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../themetoggle/ThemeToggle";

function Navbar() {
    return (
        <nav className="sticky top-0 z-10 bg-gray-100 dark:bg-gray-800 transition-colors duration-300 flex justify-between items-center shadow-md space-x-8 mb-4 py-4 px-8 tracking-wider uppercase">
            <div>
                <ThemeToggle />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-100 transition-colors duration-300 font-bold space-x-6">
                <Link className="hover:text-blue-600" to="/">Blogs</Link>
                <Link className="hover:text-blue-600" to="/profile">Profile</Link>
                <Link className="hover:text-blue-600" to="/task">Tasks</Link>
                <Link className="hover:text-blue-600" to="/blogpost">BlogPosts</Link>
                <Link className="hover:text-blue-600" to="/register">Register</Link>
                <Link className="hover:text-blue-600" to="/user">Users</Link>
                <Link className="hover:text-blue-600" to="/counter">Counters</Link>
            </div>
        </nav>
    )
}

export default Navbar;