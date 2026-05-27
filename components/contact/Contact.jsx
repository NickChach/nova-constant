import styles from "./contact.module.css";

export default function Contact({ text, href, icon }) {
	return (
		<li className={styles.contact}>
			{icon}
			<a href={href} target="_blank">
				{text}
			</a>
		</li>
	);
}
