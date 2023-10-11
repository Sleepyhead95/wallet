import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src="Wallet_icon.png" alt="wallet button" />
      <img src="Compass_icon.png" alt="navigation button" />
      <img src="Bell_icon.png" alt="notifications button" />
      <img src="Settings_icon.png" alt="settings button" />
    </footer>
  );
}
