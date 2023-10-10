import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main>
      <div className={styles.container1}>
        <div className={styles.BTC_wrapper}>
          <img src="/Bitcoin_icon.png" alt="bitcoin-logo" />
        </div>
        <p>Bitcoin</p>
        <p>BTC</p>
      </div>
      <div className={styles.container2}>
        <h6>3.529020 BTC</h6>
      </div>
      <div className={styles.container3}>
        <p>$19.153 USD</p>
        <p>- 2.32%</p>
      </div>
      <div className={styles.container4}>
        <img src="/Down_arrow_icon.png" alt="down-arrow" />
      </div>
    </main>
  );
}
