import BuyButton from "./BuyButton";
import SellButton from "./SellButton";
import styles from "./Buttons.module.scss";

export default function Buttons() {
  return (
    <section className={styles.buttons_container}>
      <BuyButton />
      <SellButton />
    </section>
  );
}
