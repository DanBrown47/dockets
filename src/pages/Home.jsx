import React from "react";

//Components
import NavBar from "../components/Navbar";
import Cards from "../components/Card";

//Products CSS
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <Cards />
        </div>
    );
};

export default Home;
