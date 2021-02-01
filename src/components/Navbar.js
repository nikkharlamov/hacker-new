import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ol>
                <li className="page-link">
                    <NavLink to="/" exact>
                    Hacker News
                    </NavLink>
                </li>
            </ol>
        </nav>
    );
};
