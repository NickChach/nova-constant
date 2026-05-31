import Link from "next/link";
import styles from "./enter-menu.module.css";

export default function EnterMenu() {
	return (
		<nav className={styles.nav}>
			<p>Επιλέξτε το μονοπάτι που ταιριάζει στις ανάγκες σας:</p>
			<ul>
				<li>
					<Link href="/web-dev" id={styles.li1}>
						<span>Α</span>
						<span>ν</span>
						<span>ά</span>
						<span>π</span>
						<span>τ</span>
						<span>υ</span>
						<span>ξ</span>
						<span>η</span>
						<span> </span>
						<span>Ι</span>
						<span>σ</span>
						<span>τ</span>
						<span>ο</span>
						<span>σ</span>
						<span>ε</span>
						<span>λ</span>
						<span>ί</span>
						<span>δ</span>
						<span>ω</span>
						<span>ν</span>
					</Link>
				</li>
				<li>
					<Link href="/software-dev" id={styles.li2}>
						<span>Α</span>
						<span>ν</span>
						<span>ά</span>
						<span>π</span>
						<span>τ</span>
						<span>υ</span>
						<span>ξ</span>
						<span>η</span>
						<span> </span>
						<span>Λ</span>
						<span>ο</span>
						<span>γ</span>
						<span>ι</span>
						<span>σ</span>
						<span>μ</span>
						<span>ι</span>
						<span>κ</span>
						<span>ο</span>
						<span>ύ</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
