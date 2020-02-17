import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

export function Timer(props: { date: string }) {
  const SECOND_IN_MS = 1000;
  const MINUTE_IN_MS = 60 * SECOND_IN_MS;
  const HOUR_IN_MS = 60 * MINUTE_IN_MS;
  const DAY_IN_MS = 24 * HOUR_IN_MS;

  const [currentDate, setCurrentDate] = useState<number>(new Date().getTime());

  const date: number = new Date(props.date).getTime();

  const diff = date - currentDate;

  const days = Math.floor(diff / DAY_IN_MS);
  const hours = Math.floor((diff % DAY_IN_MS) / HOUR_IN_MS);
  const minutes = Math.floor((diff % HOUR_IN_MS) / MINUTE_IN_MS);
  const seconds = Math.floor((diff % MINUTE_IN_MS) / SECOND_IN_MS);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>Odlicznie</h2>
      <h3>Czas pozostały do otwarcia lokali wyborczych</h3>
      <div className={styles.counter}>
        <TPart main={days.toString()} description="dni" />
        <TPart main={hours.toString()} description="godziny" />
        <TPart main={minutes.toString()} description="minuty" />
        <TPart main={seconds.toString()} description="sekundy" />
      </div>
    </>
  );
}

function TPart(props: { main: string; description: string }) {
  return (
    <div className={styles.TPart}>
      <div className={styles.TPartMain}>{props.main}</div>
      <div>{props.description}</div>
    </div>
  );
}
