import styles from "./DropdownMenu.module.scss";

export default function DropdownMenu({ closeMenu }) {
  return (
    <div className={styles.backdrop} onClick={closeMenu}>
      <section
        className={styles.dropdownMenu}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.div1}>
          <p>Edit</p>
          <img src="" alt="edit button" />
        </div>
        <div className={styles.div2}>
          <p>Info</p>
          <img src="" alt="info button" />
        </div>
        <div className={styles.div3}>
          <p>Share</p>
          <img src="" alt="share button" />
        </div>
        <div className={styles.div4}>
          <p>Remove</p>
          <img src="" alt="remove button" />
        </div>
      </section>
    </div>
  );
}
