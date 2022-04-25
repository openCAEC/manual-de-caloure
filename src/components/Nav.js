import { menu } from "../../content/menu";
import Link from "next/link";
import styles from "../styles/nav.module.scss";

import useDropdownMenu from "react-accessible-dropdown-menu-hook";

function Drawer() {
  const { buttonProps, itemProps, isOpen, setIsOpen } = useDropdownMenu(
    menu.length
  );

  return (
    <div className={styles.container}>
      <button
        {...buttonProps}
        className={`${styles.menuButton} ${styles.iconButton}`}
      >
        <span className="material-icons">menu</span>
      </button>

      <div
        className={`${styles.drawer} ${isOpen ? styles.open : ""}`}
        role="menu"
      >
        <div className={styles.header}>
          <button
            className={`material-icons ${styles.closeButton} ${styles.iconButton}`}
            onClick={() => setIsOpen(false)}
          >
            <span className="material-icons">close</span>
          </button>
        </div>
        <nav>
          <ol className={styles.itemList}>
            {menu.map((cap, index) => (
              <li key={index} className={styles.item}>
                <Link href={cap.slug}>
                  <a onClick={() => setIsOpen(false)}>{cap.title}</a>
                </Link>
                <ul className={styles.subitemList}>
                  {cap.items.map((item, indesx) => (
                    <li key={indesx} className={styles.subitem}>
                      <Link href={cap.slug + "#" + item.id}>
                        <a onClick={() => setIsOpen(false)}>{item.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className={isOpen ? styles.mask : ""}></div>
    </div>
  );
}

export default Drawer;
