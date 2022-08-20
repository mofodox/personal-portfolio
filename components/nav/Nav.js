import MovingText from "react-moving-text";

import styles from "./Nav.module.scss";
import Link from "next/link";

const Nav = () => {
    return (
        <nav className={styles.navWrapper}>
            <MovingText
                type="fadeInFromLeft"
                duration="2500ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="none"
            >
                <Link href={"/"}>
                    <a className={styles.navBrand}>Khairul Akmal</a>
                </Link>
            </MovingText>
            <MovingText
                type="fadeInFromRight"
                duration="2500ms"
                delay="0s"
                direction="normal"
                timing="ease-in"
                iteration="1"
                fillMode="none"
            >
                <ul className={styles.navItems}>
                    <li className={styles.navItem}>
                        <Link href={"/about"}>
                            <a className={styles.navLink}>About</a>
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href={"mailto:khairulakmal.work@gmail.com?subject=Hello"}>
                            <a className={styles.navLink}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </MovingText>
        </nav>
    )
}

export default Nav
