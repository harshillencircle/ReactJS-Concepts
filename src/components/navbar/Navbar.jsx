import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Blog</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/task">Tasks</Link>
            <Link to="/blogpost">BlogPosts</Link>
            <Link to="/register">Register</Link>
            <Link to="/user">Users</Link>
        </nav>
    )
}

export default Navbar;