import styles from "./BuyButton.module.scss";

export default function BuyButton() {
  return (
    <button className={styles.buyButton}>
      <div className={styles.buy_blue}>
        <img src="dollar_sign.png" alt="buy button" />
      </div>
      <p>Buy BTC</p>
    </button>
  );
}
