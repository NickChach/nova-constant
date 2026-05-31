import Image from "next/image";
import styles from "./contact-hero.module.css";
import Tag from "../tag/Tag";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contact-form/ContactForm";
import type { ContactObject } from "@/types";

export default function ContactHero({
	tag,
	title,
	subtitle,
	contacts,
}: {
	tag: string;
	title: string;
	subtitle: string;
	contacts: ContactObject[];
}) {
	return (
		<article className={styles.hero}>
			<section>
				<Tag>{tag}</Tag>
				<hgroup className={styles.hgroup}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
					<br />
					<p>Ας ξεκινήσουμε.</p>
				</hgroup>
				<Contacts contacts={contacts} />
			</section>
			<ContactForm />
		</article>
	);
}
