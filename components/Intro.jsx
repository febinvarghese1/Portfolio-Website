import React from "react";
import styles from "../styles/Intro.module.css";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { MdEmail } from "react-icons/md";
const Intro = () => {
  const { theme } = useTheme();
  const animateTitle = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: [1, 1.2, 1.2, 1],
      opacity: 1,

      transition: {
        delay: 1,
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animateTitle}
          >
            <div
              className={
                theme === "dark" ? styles.content : styles.contentLight
              }
            >
              <h1>Febin varghese</h1>
              <h1>Febin varghese</h1>
            </div>
          </motion.div>
        </h1>
        <p className={styles.description}>
          Hi, I am a budding web developer who is interested in Front end
          development <br></br> and fond of creating rich user interface and
          experience
        </p>
        <div className={styles.btnContainer}>
          <a href="mailto:febv183@gmail.com">
            <button
              className={theme === "dark" ? styles.cardBtnDark : styles.cardBtn}
            >
              <MdEmail /> Contact
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
