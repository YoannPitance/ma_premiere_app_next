import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <h1>titre du site</h1>
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
