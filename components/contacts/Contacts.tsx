import type { ContactObject } from "@/types";
import Contact from "../contact/Contact";
import styles from "./contacts.module.css";

export default function Contacts({ contacts }: { contacts: ContactObject[] }) {
	return (
		<ul className={styles.contacts}>
			{contacts.map((contact) => {
				return <Contact key={contact.href} text={contact.text} href={contact.href} icon={contact.icon} />;
			})}
		</ul>
	);
}
