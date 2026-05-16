import { LuStar } from "react-icons/lu";
import styles from "./article.module.css";
import Link from "next/link";

export default function Article({ title, link }) {
	return (
		<li className={styles.article}>
			<LuStar className={styles.icon} />
			<h3>
				<Link href={link}>{title}</Link>
			</h3>
		</li>
	);
}
