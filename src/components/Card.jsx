import React from "react";

//CSS
import styles from "./styles/Card.module.css";

//Data
import { CardDetails } from "../contents/Cardsdetails";

const Card = () => {
    return (
        <div className={styles.Container}>
            {CardDetails.map((data) => (
                <Card key={data.id} title={data.title} />
            ))}
        </div>
    );
};

export default Card;

const CardS = ({ title }) => {
    return (
        <div className={styles.Card}>
            <div className={styles.CardBody}>
                <h3>{title}</h3>
            </div>
        </div>
    );
};
