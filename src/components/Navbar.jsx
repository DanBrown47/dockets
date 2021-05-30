import React from "react";
import { NavLink } from "react-router-dom";

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
                    <NavLink to="/" activeStyle={{ color: "white" }}>
                        Home
          </NavLink>
                    <NavLink href="" activeStyle={{ color: "white" }}>
                        Documentation
          </NavLink>
                    <NavLink href="" activeStyle={{ color: "white" }}>
                        Learn More
          </NavLink>
                    <NavLink to="/Aboutus" activeStyle={{ color: "white" }}>
                        About Us
          </NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
