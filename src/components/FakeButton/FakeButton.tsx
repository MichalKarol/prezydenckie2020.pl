import React from "react";
import styles from "./FakeButton.module.css";

export function FakeButton(props: any) {
  const { children, ...rest } = props;
  return (
    <a {...rest} className={styles.FakeButton}>
      {props.children}
    </a>
  );
}
