import styles from "../styles/nextbutton.module.scss";
import { menu } from "../../content/menu";
import Link from "next/link";

export default function NextButton({ slug }) {
  const nextItem = slug.split("-")[0];

  return (
    <Link href={menu[nextItem].slug}>
      <div className={styles.next}>
        <h3 className={styles.tag}>Próximo</h3>
        <h2 className={styles.title}>{menu[nextItem].title}</h2>
        <span className={`material-icons ${styles.arrow}`}>arrow_forward</span>
      </div>
    </Link>
  );
}
