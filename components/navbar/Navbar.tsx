"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
	const currentPage: string = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	function toggleHamburger() {
		setIsOpen(!isOpen);
	}

	return (
		<nav className={styles.nav}>
			<ul id={isOpen ? styles.openMenu : ""}>
				{/* Hamburger button */}
				<li>
					<button onClick={toggleHamburger}>[ ... ]</button>
				</li>
				{/* Standard menu */}
				<li className={styles.standardMenu}>{"["}</li>
				<li className={`${styles.standardMenu} ${isOpen ? styles.openMenu : ""}`}>
					<Link href="/web-dev" id={currentPage === "/web-dev" ? styles.highlighted : ""}>
						Ανάπτυξη ιστοσελίδων,
					</Link>
				</li>
				<li className={`${styles.standardMenu} ${isOpen ? styles.openMenu : ""}`}>
					<Link href="/software-dev" id={currentPage === "/software-dev" ? styles.highlighted : ""}>
						Ανάπτυξη λογισμικού,
					</Link>
				</li>
				<li className={`${styles.standardMenu} ${isOpen ? styles.openMenu : ""}`}>
					<Link href="/blog" id={currentPage.startsWith("/blog") ? styles.highlighted : ""}>
						Blog,
					</Link>
				</li>
				<li className={`${styles.standardMenu} ${isOpen ? styles.openMenu : ""}`}>
					<Link href="/about" id={currentPage === "/about" ? styles.highlighted : ""}>
						About,
					</Link>
				</li>
				<li className={`${styles.standardMenu} ${isOpen ? styles.openMenu : ""}`}>
					<Link href="/contact" id={currentPage === "/contact" ? styles.highlighted : ""}>
						Επικοινωνία
					</Link>
				</li>
				<li className={styles.standardMenu}>{"]"}</li>
			</ul>
		</nav>
	);
}
