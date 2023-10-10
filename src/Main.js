import styles from "./Main.module.scss";

export default function Main() {
  return (
    <main>
      <div className={styles.container1}>
        <div className={styles.BTC_wrapper}>
          <img src="/Bitcoin_icon.png" alt="bitcoin-logo" />
        </div>
        <p className={styles.bitcoin}>Bitcoin</p>
        <p className={styles.btc}>BTC</p>
      </div>
      <div className={styles.container2}>
        <h2>3.529020 BTC</h2>
      </div>
      <div className={styles.container3}>
        <p className={styles.dollars}>$19.153 USD</p>
        <div className={styles.percent}>
          <p>- 2.32%</p>
        </div>
      </div>
      <div className={styles.container4}>
        <img src="/Down_arrow_icon.png" alt="down-arrow" />
      </div>
    </main>
  );
}
