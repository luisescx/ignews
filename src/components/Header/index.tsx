import styles from "./styles.module.scss";
import Image from "next/image";
import { SignInButton } from "../SignInButton";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width={108} height={30} />

        <nav className={styles.headerContentNav}>
          <a className={`${styles.headerContentNavA} ${styles.active}`}>Home</a>
          <a className={styles.headerContentNavA}>Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
