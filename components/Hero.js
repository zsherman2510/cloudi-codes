import React from "react";
import styles from "../styles/Hero.module.css";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.text_wrapper}>
          <div className={styles.hero_title}>
            Learn in-demand software development skills to make yourself
            valuable to the job market.
          </div>
          <div className={styles.hero_subtitle}>
            Why waste time when you can start learning today!
          </div>
          <Link href="/courses">
            <button className="button_secondary">Enroll Now</button>
          </Link>
        </div>
      </div>

      <div className={styles.hero_image}></div>
    </div>
  );
}
