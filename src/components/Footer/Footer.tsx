import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      Created&nbsp;with&nbsp;
      <FontAwesomeIcon icon={faHeart} className={styles.icon} />
      &nbsp;by&nbsp;
      <a
        href="https://github.com/MichalKarol"
        target="blank"
        rel="nooperner noreferer"
      >
        Michał Karol
      </a>
    </footer>
  );
}
