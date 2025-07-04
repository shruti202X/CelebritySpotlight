import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Nsavbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/fandashboard">Fan Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
