import React from "react";

//Components
import NavBar from "../components/Navbar";

//Products CSS
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.container}>
            <NavBar />
            <Card />
        </div>
    );
};

export default Home;
