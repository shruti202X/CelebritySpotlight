import Link from "next/link";

export default function Nsavbar() {
  return (
    <nav>
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
