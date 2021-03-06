import React from "react";
import { Link } from "react-router-dom";

//CSS
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.left}>
                <div>
                    <h2>Dockets</h2>
                </div>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/">Documentation</Link>
                    <Link to="/">Learn More</Link>
                    <Link to="/Aboutus">About Us</Link>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
