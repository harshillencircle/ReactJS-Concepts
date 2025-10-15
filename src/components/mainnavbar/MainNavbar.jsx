import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function MainNavbar() {
    return (
        <Fragment>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default MainNavbar;