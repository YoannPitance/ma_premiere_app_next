import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Link href="/">
          <h1>Pitty'Art</h1>
        </Link>
        <div className={styles.navlinks}>
          <ul>
            <Link href="/">
              <li>Accueil</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/shop">
              <li>Boutique</li>
            </Link>
            <Link href="/gallery">
              <li>Gallerie</li>
            </Link>
            <Link href="/about">
              <li>A propos</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}
