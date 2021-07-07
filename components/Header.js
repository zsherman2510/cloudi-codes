import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const showMenu = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
    console.log(isOpen);
  };

  const handleSticky = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
    console.log(sticky);
  });

  return (
    <nav
      className={`${styles.header} ${sticky ? styles.sticky : ""}`}
      id="navbar"
    >
      <div className={styles.logo}>
        <Link href="/">
          <a>Cloudicodes</a>
        </Link>
      </div>

      <div className={styles.hamburger} onClick={() => showMenu()}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div
        className={`${styles.menu} ${
          isOpen ? styles.show_menu : styles.close_menu
        }`}
      >
        <div className={styles.menu_link}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div className={styles.menu_link}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </div>
        <div className={styles.menu_link}>
          <Link href="/courses">
            <a>Courses</a>
          </Link>
        </div>
        <div className={styles.menu_link}>
          <a target="_blank" href="mailto: shermanzavion@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
