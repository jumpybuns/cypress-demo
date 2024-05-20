import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.Header}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
