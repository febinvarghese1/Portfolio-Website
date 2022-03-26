import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <p>Designed and developed by FV</p>
      <div className={styles.container}>
        <div className={styles.avatar}>
          <Image src="/img/avatar.png" alt="" width={45} height={45} className={styles.photo}/>
          <div className={styles.circle}></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
