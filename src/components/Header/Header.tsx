import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MobileHeader}>
        <h1 className={styles.title}>prezydenckie&nbsp;2020</h1>
      </div>
      <div className={styles.StandardHeader}>
        <h1 className={styles.title}>wybory&nbsp;prezydenckie&nbsp;2020</h1>
        <nav className={styles.links}>
          <Link to="#timer" className={styles.navitem}>
            Odliczanie
          </Link>
          <Link to="#candidates" className={styles.navitem}>
            Kandydaci
          </Link>
          <Link to="#dates" className={styles.navitem}>
            Ważne terminy
          </Link>
          <Link to="#who_can" className={styles.navitem}>
            Kto może głosować
          </Link>
          <Link to="#links" className={styles.navitem}>
            Linki
          </Link>
        </nav>
      </div>
    </header>
  );
}
