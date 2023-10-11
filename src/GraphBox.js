import Graph from "./Graph";
import styles from "./GraphBox.module.scss";

export default function GraphBox() {
  return (
    <section className={styles.section}>
      <div className={styles.top_container}>
        <div className={styles.lower_wrapper}>
          <div className={styles.red_dot}></div>
          <p>Lower: $4.895</p>
        </div>
        <div className={styles.higher_wrapper}>
          <div className={styles.green_dot}></div>
          <p>Higher: $6.857</p>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <Graph />
        <div className={styles.btc_wrapper}>
          <div className={styles.yellow_dot}></div>
          <p>1 BTC = $5.483</p>
        </div>
      </div>
    </section>
  );
}
