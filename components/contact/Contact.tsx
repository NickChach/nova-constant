import type { ReactNode } from "react";
import styles from "./contact.module.css";

export default function Contact({ text, href, icon }: { text: string; href: string; icon: ReactNode }) {
	return (
		<li className={styles.contact}>
			{icon}
			<a href={href} target="_blank">
				{text}
			</a>
		</li>
	);
}
