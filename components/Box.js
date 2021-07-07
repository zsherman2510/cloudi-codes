import React from "react";
import styles from "../styles/Box.module.css";

export default function Box({
  point,
  explanation,
  icon = null,
  className = null,
}) {
  return (
    <div className={`${styles.box} ${className ? className : ""}`}>
      {icon != null ? <div className={styles.icon}>{icon}</div> : <div></div>}

      <div className={styles.box_title}>{point}</div>
      <div className={styles.box_subtitle}>{explanation}</div>
    </div>
  );
}
