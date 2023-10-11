import styles from "./SellButton.module.scss";

export default function SellButton() {
  return (
    <button className={styles.sellButton}>
      <div className={styles.sell_red}>
        <img src="dollar_sign.png" alt="sell button" />
      </div>
      <p>Sell BTC</p>
    </button>
  );
}
