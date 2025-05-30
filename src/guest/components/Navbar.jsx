import React from "react";
import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about"> About </Link>
                </li>
                <li>
                    <Link to="/services"> Services </Link>
                </li>
                <li>
                    <Link to="/contact"> Contact </Link>
                </li>
            </ul>
        </nav>
    );
};