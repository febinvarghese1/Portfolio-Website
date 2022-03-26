import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import styles from "../styles/NavBar.module.css";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [toggle, setToggle] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={styles.container}>
      <h1 className="text-xl uppercase">
        <Link href="/">PortFolio</Link>
      </h1>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
      <div className="flex items-center justify-between">
        <div className={styles.Menu} onClick={() => setToggle(!toggle)}>
          {!toggle ? <GiHamburgerMenu /> : <GiCancel />}
        </div>
        <ul
          onClick={() => setToggle(!toggle)}
          className={styles.menuList}
          style={{
            right: toggle ? "0px" : "-50vw",
            backgroundColor: theme === "dark" ? "whitesmoke" : "black",
          }}
        >
          <li
            style={{ color: theme === "dark" ? "black" : "white" }}
            className={styles.menuItem}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            style={{ color: theme === "dark" ? "black" : "white" }}
            className={styles.menuItem}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            style={{ color: theme === "dark" ? "black" : "white" }}
            className={styles.menuItem}
          >
            <Link href="/projects">Projects</Link>
          </li>
        </ul>

        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-12 ml-6 h-6 rounded focus:outline-none mb-3 flex justify-end "
        >
          {theme === "dark" ? (
            <i>
              <HiSun className="text-4xl fill-orange-300 " />
            </i>
          ) : (
            <i>
              <HiMoon className="text-4xl fill-white" />
            </i>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
