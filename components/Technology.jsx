import React from "react";
import styles from "../styles/Technology.module.css";

const Technology = () => {
  return (
    <>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <h1 className={styles.techTitle}>Technologies ..</h1>
        <h3>Here are the technologies i have been using</h3>
        <div className={styles.listContainer}>
          <ul className={styles.list}>
            <li>
              <h2>React JS</h2>
            </li>

            <li>
              <h2>Next JS</h2>
            </li>

            <li>
              <h2>Tailwind css</h2>
            </li>

            <li>
              <h2>Node JS</h2>
            </li>

            <li>
              <h2>Mongo DB</h2>
            </li>

            <li>
              <h2>Vanilla JS</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Technology;
