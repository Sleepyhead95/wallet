import styles from "./Dates.module.scss";

export default function Dates() {
  return (
    <section>
      <div className={styles.wrapper1}>
        <p>Day</p>
      </div>
      <div className={styles.wrapper2}>
        <p>Week</p>
      </div>
      <div className={styles.wrapper3}>
        <p>Month</p>
      </div>
      <div className={styles.wrapper4}>
        <p>Year</p>
      </div>
    </section>
  );
}
