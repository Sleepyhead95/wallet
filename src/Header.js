import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <div className={styles.top_container}>
        <div className={styles.time}>
          <p>9:45</p>
        </div>
        <div className={styles.phone_icons}>
          <img src="/Signal_icon.png" alt="phone-signal-icon" />
          <img src="/Wifi_icon.png" alt="wifi-icon" />
          <img src="/Battery_icon.png" alt="battery-icon" />
        </div>
      </div> */}
      {/* <div className={styles.bottom_container}> */}
      <div className={styles.right_arrow}>
        <img src="/Arrow_icon.png" alt="right-arrow" />
      </div>
      <div className={styles.title}>
        <h1>Bitcoin Wallet</h1>
      </div>
      <div className={styles.dropdown_menu}>
        <img src="/Menu_icon.png" alt="menu" />
      </div>
      {/* </div> */}
    </header>
  );
}
