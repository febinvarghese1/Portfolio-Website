import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import Technology from "../components/Technology";
import Link from "next/link";
const about = () => {
  const { theme } = useTheme();
  return (
    <div className={styles.container}>
      <div
        className={
          theme === "dark" ? styles.subContainerLight : styles.subContainerDark
        }
      >
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <Image
              src="/img/portfolio-image.jpeg"
              alt=""
              width="800px"
              height="1000px"
              className={styles.photo}
            />
          </div>
          <div className={styles.rightSection}>
            <h1 className="text-xl md:p-6 sm:p-4">
              <span className="text-4xl"> H</span>i, My Name is{" "}
              <span className= {theme === 'dark' ? styles.nameDarkMode : styles.nameLightMode  }>
                Febin Varghese
              </span>
            </h1>
            <p className={styles.description}>
              I am a Front end developer who focus on improving user experience
              and interface , currently I am learning next js and tailwind css
              and improving my skills in web development , and interested in
              networking and developing apps especially web application
            </p>
            <div className={styles.iconContainer}>
              <i className={styles.icons}>
                <Link href="/">
                  <FaInstagram />
                </Link>
              </i>
              <i className={styles.icons}>
              <Link href="https://github.com/febinvarghese1">
                  <VscGithub />
                </Link>
              </i>
              <i className={styles.icons}>
              <Link href="https://www.linkedin.com/in/febin-varghese-0530191b8">
                  <FaLinkedin />
                </Link>
              </i>
            </div>
          </div>
        </div>
        <Technology />
      </div>
    </div>
  );
};

export default about;
