import Link from "next/link";
import Image from "next/image";
import styles from './Navbar.module.css'
import { SignInButton, SignOutButton } from "./components/Buttons";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
        <Link
        href={"/"}
        >
        <Image
        src="/next.svg"
        width={215}
        height={199}
        alt="logo"
        />
        </Link>
        <ul className={styles.links}>
            <li>
                <Link href={'/about'}>About</Link>
            </li>
            <li>
                <Link href={'/blog'}>Blogs</Link>
            </li>
            <li>
                <Link href={'/users'}>Users</Link>
            </li>
            <li>
                <SignInButton/>
            </li>
            <li>
                <SignOutButton/>
            </li>
        </ul>
    </nav>
    )
}
