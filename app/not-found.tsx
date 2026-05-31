import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFoundPage() {
	return (
		<main className={styles.hero}>
			<hgroup>
				<h1 className={styles.h1}>Error 404</h1>
				<p className={styles.p}>Page not found.</p>
				<Link href="/">Go back.</Link>
			</hgroup>
		</main>
	);
}
