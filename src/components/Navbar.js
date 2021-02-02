import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <nav className="flex text-xl px-10 bg-navbar">
        <ol>
            <li className="mr-2">
                <NavLink to="/" exact>
                    Hacker News
                </NavLink>
            </li>
        </ol>
    </nav>
);
