import styles from "./Dates.module.scss";

export default function Dates() {
  return (
    <section>
      <div className={styles.wrapper}>
        <p>Day</p>
      </div>
      <div className={styles.wrapper}>
        <p>Week</p>
      </div>
      <div className={styles.wrapper}>
        <p>Month</p>
      </div>
      <div className={styles.wrapper}>
        <p>Year</p>
      </div>
    </section>
  );
}
